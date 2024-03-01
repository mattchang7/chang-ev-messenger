import MessageTerminal from "@/components/MessageTerminal";
import Link from "next/link";

export default function User({ params }: { params: { name: string } }) {
  const { name } = params;
  return (
    <div>
      <Link href="/">Back</Link>
      {name.charAt(0).toUpperCase() + name.slice(1)}
      <MessageTerminal user={name} />
    </div>
  );
}
