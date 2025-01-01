import React from "react";
import QuestionTab from "@/components/QuestionTab";
import { getProblemCodeAndTest } from "@/lib/problem";
import QuestionTestcase from "@/components/QuestionTestcase";
import EditorAndSubmit from "@/components/EditorAndSubmit";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const Question = async ({ questionId }: { questionId: string }) => {
  const { boilerPlates, InputsTestCase, OutputsTestCase } =
    await getProblemCodeAndTest(questionId);
  return (
    <div className="w-full h-full flex">
      <ResizablePanelGroup direction="horizontal" className="flex-grow h-full">
        <ResizablePanel defaultSize={40}>
          <div className="flex h-full items-center px-4 justify-center">
            <QuestionTab questionId={questionId} />
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel className="relative" defaultSize={60}>
          <ResizablePanelGroup direction="vertical" className="h-full">
            <ResizablePanel defaultSize={60}>
              <EditorAndSubmit boilerPlates={boilerPlates} questionId={questionId}/>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={40}>
              <div className="h-full p-3">
                <QuestionTestcase
                  InputsTestCases={InputsTestCase}
                  outputTestCases={OutputsTestCase}
                />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Question;
