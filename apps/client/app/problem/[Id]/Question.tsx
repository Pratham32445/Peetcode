import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import QuestionTab from "@/components/QuestionTab";

const Question = ({ questionId }: { questionId: string }) => {
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
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Two</span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={25}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Three</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Question;
