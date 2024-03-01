import MessageTerminal from "@/components/MessageTerminal";
import Link from "next/link";

export default function User() {
  return (
    <div>
      <Link href="/">Back</Link>
      Bob
      <MessageTerminal user="bob" />
    </div>
  );
}
