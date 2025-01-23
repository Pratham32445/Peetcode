import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import client from "@/db";
import { getServerSession } from "next-auth";
import React from "react";

const getSubmissions = async (email: string, problemId: string) => {
  const user = await client.user.findFirst({ where: { email } });
  const submission = await client.submission.findFirst({
    where: { userId: user?.Id, questionId: problemId },
  });
  return submission ? [submission] : [];
};

const QuestionSubmissions = async ({ Id }: { Id: string }) => {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || !session.user.email) return;
  const submissions = await getSubmissions(session?.user?.email, Id);
  console.log(submissions);
  return (
    <div>
      {submissions.length > 0 ? (
        submissions.map(({ Id, status }) => (
          <div key={Id}>
            <div>
              <p>{status}</p>
              <p></p>
            </div>
            <div></div>
          </div>
        ))
      ) : (
        <div>
          <p>No Submissions Yet</p>
        </div>
      )}
    </div>
  );
};

export default QuestionSubmissions;
