import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/options";
import { submissionInput } from "@/types";
import client from "@repo/db/client";
import { getProblem } from "@/lib/problem";
import axios from "axios";

const JUDGE0_URI = "http://13.201.83.116:2358";

export const POST = async (req: NextRequest) => {
  try {
    // const session = await getServerSession(authOptions);
    // if (!session?.user)
    //   return NextResponse.json(
    //     { message: "You must be logged in to submit the problem" },
    //     { status: 401 }
    //   );
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
            "https://46bf-2405-201-3002-151-e1b7-7966-602b-babc.ngrok-free.app/api/callback-url",
        })),
      }
    );
    console.log(response);
    return NextResponse.json({ message: "submission send" }, { status: 201 });
  } catch (error) {
    console.log(error);
  }
};
