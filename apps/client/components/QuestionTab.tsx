import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import QuestionProblem from "./QuestionProblem";
import QuestionEditorial from "./QuestionEditorial";
import QuestionSubmissions from "./QuestionSubmissions";
import QuestionSolutions from "./QuestionSolutions";
import axios from "axios";
import { Loader } from "lucide-react";

const getQuestion = async (Id: string) => {
  try {
    const SERVER_URI = process.env.SERVER_URI;
    const { data } = await axios.get(`${SERVER_URI}/api/problem/${Id}`);
    return data.problem;
  } catch (error) {
    console.log(error);
  }
};

const QuestionTab = async ({ questionId }: { questionId: string }) => {
  const problem = await getQuestion(questionId);

  return problem ? (
    <div className="w-full h-[95%] bg-lightBg rounded mb-5">
      <Tabs defaultValue="problem">
        <TabsList className="w-full justify-evenly">
          <TabsTrigger className="flex-1" value="problem">
            Description
          </TabsTrigger>
          <TabsTrigger className="flex-1" value="editorial">
            Editorial
          </TabsTrigger>
          <TabsTrigger className="flex-1" value="solutions">
            Solutions
          </TabsTrigger>
          <TabsTrigger className="flex-1" value="submissions">
            Submission
          </TabsTrigger>
        </TabsList>
        <TabsContent value="problem">
          <QuestionProblem problem={problem} />
        </TabsContent>
        <TabsContent value="editorial">
          <QuestionEditorial />
        </TabsContent>
        <TabsContent value="solutions">
          <QuestionSolutions />
        </TabsContent>
        <TabsContent value="submissions">
          <QuestionSubmissions />
        </TabsContent>
      </Tabs>
    </div>
  ) : (
    <div>
      <Loader className="animate-spin w-[50px] h-[50px]" />
    </div>
  );
};

export default QuestionTab;
