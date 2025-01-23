"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const ChatWithAI = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (arg: boolean) => void;
}) => {
  const [conversation, setConversation] = useState([]);

  const startConversation = () => {

  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Talk with AI</SheetTitle>
          <SheetDescription>
            we highly recommend you tou ask the hint with the AI , not the full
            solution this will help you to better your problem solving skills
          </SheetDescription>
          <div>
            {conversation.length > 0 ? (
              <div></div>
            ) : (
              <div className="flex justify-center flex-col items-center mt-28 gap-5">
                <Button className="bg-" onClick={startConversation}>Start Converstation</Button>
                <SheetDescription>
                  <p>
                    This feature is free for limited purposes if you want to use
                    it for lifetime then please upgrade your account or prvoide
                    your <Link className="underline" href={"/user/account"}>API Key</Link>  to us
                  </p>
                </SheetDescription>
              </div>
            )}
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default ChatWithAI;
