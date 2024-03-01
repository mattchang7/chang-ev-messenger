"use client";

import { useMutation } from "convex/react";
import { useState } from "react";
import { api } from "../../convex/_generated/api";

type MessageTerminalProps = {
  user: string;
};

export default function MessageTerminal({ user }: MessageTerminalProps) {
  const [messageInput, setMessageInput] = useState("");
  const sendMessage = useMutation(api.messages.createMessage);
  return (
    <div className="border h-5/6 w-5/6 flex flex-col">
      <div className="border">Message Board</div>
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
                text: messageInput,
                user,
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
