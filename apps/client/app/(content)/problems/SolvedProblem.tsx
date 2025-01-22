import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { GetUserInfo } from "@/lib/user";
import { getServerSession } from "next-auth";
import React from "react";

const SolvedProblem = async () => {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || !session.user.email) return;
  const userInfo = await GetUserInfo(session.user?.email);
  console.log(userInfo);
  return <div></div>;
};

export default SolvedProblem;
