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
  console.log(messages);
  return (
    <div className="border h-5/6 w-5/6 flex flex-col">
      <div className="border h-2/3 w-full flex flex-col">
        {messages?.map((m) => (
          <MessageBubble key={m._id} message={m} user={user} />
        ))}
      </div>
      <div className="border text-zinc-900 flex-row">
        <textarea
          className="text-zinc-900 color-zinc-900 resize-none w-5/6 h-10"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
        />
        <button
          className="text-white w-1/6 h-10"
          type="submit"
          onClick={(e) => {
            if (messageInput !== "") {
              sendMessage({
                body: messageInput,
                author: user,
              });
              setMessageInput("");
            }
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
