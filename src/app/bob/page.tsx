import MessageTerminal from "@/components/MessageTerminal";
import Link from "next/link";

export default function Bob() {
  return (
    <div className="h-full">
      <nav className="flex flex-row justify-between p-4">
        <Link
          className="hover:text-zinc-500 flex flex-row items-center"
          href="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
          Back
        </Link>
        <div className="text-xl font-bold">Bob</div>
        <span className="w-10" />
      </nav>
      <div className="flex flex-row h-[90vh] w-full justify-center">
        <MessageTerminal user="bob" />
      </div>
    </div>
  );
}
