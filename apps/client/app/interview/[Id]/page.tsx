import React from "react";
import Editor from "../Editor";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Button } from "@/components/ui/button";

const IntrviewOneToOne = () => {

  return (
    <div className="w-full min-h-screen flex">
      <div className="w-full min-h-full flex">
        <div className="relative w-3/4  h-full flex">
          <ResizablePanelGroup direction="horizontal" className="w-full border">
            <ResizablePanel defaultSize={60}>
              <div className="w-full h-full">
                <Editor Id="223232" />
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={40}>
              <div className="bg-white text-black h-full p-6">
                <Button className="bg-bgSucess hover:bg-bgSucess text-white transform transition-transform duration-300 hover:scale-110">
                  Run code
                </Button>
                <p className="text-neutral-600 my-4">Output:</p>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
        <div className="w-1/4 h-full"></div>
      </div>
    </div>
  );
};

export default IntrviewOneToOne;
