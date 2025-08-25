import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import ChatInput from "@/features/chat/ui/chat-input";
import ChatMessage from "@/features/chat/ui/chat-message";
import { ChatMessageProps } from "@/features/chat/ui/chat-message";

const chatData: [ChatMessageProps] = [
  {
    message: "message 1",
    sender: "me",
    time: new Date(),
  },
  {
    message: "message 2",
    sender: "me",
    time: new Date(),
  },
  {
    message: "message 3",
    sender: "me",
    time: new Date(),
  },
  {
    message: "message 4",
    sender: "me",
    time: new Date(),
  },
];

const ChatPage = () => {
  return (
    <main className="min-h-full bg-white w-1/2 mx-auto mt-120">
      <ul className="flex flex-col">
        {chatData.map((v, i) => (
          <ChatMessage key={i} {...v} />
        ))}
      </ul>
      <ChatInput />
    </main>
  );
};

export default ChatPage;
