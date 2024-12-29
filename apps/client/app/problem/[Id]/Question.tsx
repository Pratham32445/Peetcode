import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import QuestionTab from "@/components/QuestionTab";
import QuestionEditor from "@/components/QuestionEditor";
import { getProblemCodeAndTest } from "@/lib/problem";
import QuestionTestcase from "@/components/QuestionTestcase";

const Question = async ({ questionId }: { questionId: string }) => {
  const {boilerPlates,InputsTestCase,OutputsTestCase} = await getProblemCodeAndTest(questionId);
  return (
    <div className="w-full h-full flex">
      <ResizablePanelGroup direction="horizontal" className="flex-grow h-full">
        <ResizablePanel defaultSize={40}>
          <div className="flex h-full items-center px-4 justify-center">
            <QuestionTab questionId={questionId} />
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={60}>
          <ResizablePanelGroup direction="vertical" className="h-full">
            <ResizablePanel defaultSize={75}>
              <div className="flex h-full">
                {boilerPlates && <QuestionEditor boilerPlates={boilerPlates} problemId={questionId} />}
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={25}>
              <div className="h-full p-3">
                <QuestionTestcase InputsTestCases={InputsTestCase} outputTestCases={OutputsTestCase}/>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Question;
