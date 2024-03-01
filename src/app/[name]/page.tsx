import MessageTerminal from "@/components/MessageTerminal";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function User({ params }: { params: { name: string } }) {
  const { name } = params;
  return (
    <div>
      <Link href="/">Back</Link>
      {name}
      <MessageTerminal user={name} />
    </div>
  );
}
