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
  return message.author === user ? (
    <div className="w-full flex flex-row justify-end p-1">
      <div className="max-w-2xl bg-blue-500 p-2 rounded-md break-words">
        {message.body}
      </div>
    </div>
  ) : (
    <div className="w-full flex flex-row justify-start p-1">
      <div className="max-w-2xl bg-zinc-500 p-2 rounded-md break-words">
        {message.body}
      </div>
    </div>
  );
}
