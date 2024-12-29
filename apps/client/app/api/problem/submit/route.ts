import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/options";
import { submissionInput } from "@/types/zod";
import client from "@repo/db/client";
import { getProblem } from "@/lib/problem";
import axios from "axios";

const JUDGE0_URI = "http://3.110.223.52:2358";

export const POST = async (req: NextRequest) => {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user)
      return NextResponse.json(
        { message: "You must be logged in to submit the problem" },
        { status: 401 }
      );
    const user = await client.user.findFirst({
      where: { email: session.user.email! },
    });
    if (!user)
      return NextResponse.json(
        { message: "You must be logged in to submit the problem" },
        { status: 401 }
      );
    const body = await req.json();
    const submissionInputres = submissionInput.safeParse(body);
    if (submissionInputres.error)
      return NextResponse.json(
        {
          message: "Please provide the valid fields",
          errors: submissionInputres.error,
        },
        { status: 401 }
      );
    const dbProblem = await client.question.findFirst({
      where: { Id: submissionInputres.data.problemId },
    });
    if (!dbProblem)
      return NextResponse.json(
        { message: "Problem not exsit" },
        { status: 401 }
      );
    const problem = await getProblem(dbProblem.title, "cpp");
    problem.fullBoilerPlate = problem.fullBoilerPlate.replace(
      "## CODE_HERE ##",
      body.code
    );
    const response = await axios.post(
      `${JUDGE0_URI}/submissions/batch?base64_encoded=false`,
      {
        submissions: problem.inputs.map((input, index) => ({
          language_id: submissionInputres.data.languageId,
          source_code: problem.fullBoilerPlate,
          stdin: input,
          expected_output: problem.outputs[index],
          callback_url:
            "https://4b3b-2405-201-3002-151-b85a-c52b-c2de-8712.ngrok-free.app/api/submission-callback",
        })),
      }
    );
    const submission = await client.submission.create({
      data: {
        userId: user.Id,
        code: submissionInputres.data.code,
        questionId: submissionInputres.data.problemId,
        status: "PENDING",
      },
    });
    console.log(response, submission);
    return NextResponse.json({ message: "submission send" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "some error ocurred" },
      { status: 500 }
    );
  }
};
