"use client";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import MessageTerminal from "@/components/MessageTerminal";
import Link from "next/link";

export default function Home() {
  const tasks = useQuery(api.tasks.get);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={"/alice"}>Alice</Link>
      <Link href={"/bob"}>Bob</Link>
      <MessageTerminal />
    </main>
  );
}
