"use client";
import { timeConverter } from "@/util/timeConverter";
import { useState } from "react";

type MessageBubbleProps = {
  user: string;
  message: {
    _id: string;
    _creationTime: number;
    body: string;
    author: string;
  };
};
export default function MessageBubble({ user, message }: MessageBubbleProps) {
  const [isOpen, setOpen] = useState(false);
  return message.author === user ? (
    <div className="w-full flex flex-row justify-end p-1">
      <div className="flex flex-col text-xs items-end">
        <div
          className="max-w-2xl w-fit bg-blue-500 p-2 rounded-md break-words text-zinc-100 text-base"
          onClick={() => setOpen(!isOpen)}
        >
          {message.body}
        </div>
        {isOpen && timeConverter(message._creationTime)}
      </div>
    </div>
  ) : (
    <div className="w-full flex flex-row justify-start p-1">
      <div className="flex flex-col text-xs">
        {message.author[0].toUpperCase() + message.author.slice(1)}
        <div
          className="max-w-2xl w-fit bg-zinc-400 p-2 rounded-md break-words text-zinc-100 text-base"
          onClick={() => setOpen(!isOpen)}
        >
          {message.body}
        </div>
        {isOpen && timeConverter(message._creationTime)}
      </div>
    </div>
  );
}
