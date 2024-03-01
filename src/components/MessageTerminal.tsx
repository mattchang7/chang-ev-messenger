"use client";

import { useMutation, useQuery } from "convex/react";
import { useState } from "react";
import { api } from "../../convex/_generated/api";
import { timeConverter } from "@/util/timeConverter";
import MessageBubble from "./MessageBubble";

type MessageTerminalProps = {
  user: string;
};

export default function MessageTerminal({ user }: MessageTerminalProps) {
  const [messageInput, setMessageInput] = useState("");
  const sendMessage = useMutation(api.messages.createMessage);
  const messages = useQuery(api.messages.getLastTenMessages);
  const handleSubmit = (body: string, author: string) => {
    sendMessage({
      body,
      author,
    });
    setMessageInput("");
  };
  console.log(messages);
  return (
    <div className="border  mt-5 h-5/6 w-1/2 flex flex-col">
      <div className="border h-full flex flex-col p-2 overflow-scroll">
        {messages?.map((m) => (
          <MessageBubble key={m._id} message={m} user={user} />
        ))}
      </div>
      <form className="border h-16 text-zinc-900 flex-row flex items-center px-2">
        <textarea
          className="text-zinc-900 color-zinc-900 resize-none w-5/6 h-10 ring-0 focus:outline-none rounded-full px-3 py-2"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
        />
        <button
          className="text-blue-500 hover:text-blue-300 w-1/6 h-10"
          type="submit"
          onClick={(e) => {
            if (messageInput !== "") {
              handleSubmit(messageInput, user);
            }
          }}
          onKeyDown={(e) => {
            if (e.keyCode === 13 && !e.shiftKey && messageInput !== "") {
              e.preventDefault();
              handleSubmit(messageInput, user);
            }
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}
