import { useState } from "react";

export default function MessageTerminal() {
  const [messageInput, setMessageInput] = useState("");
  return (
    <div className="border h-5/6 w-5/6 flex flex-col">
      <div className="border">Message Board</div>
      <div className="border text-zinc-900">
        <textarea
          className="text-zinc-900 color-zinc-900 resize-none w-full h-10"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
        />
      </div>
    </div>
  );
}
