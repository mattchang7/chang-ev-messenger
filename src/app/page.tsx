import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Link
        className="text-xl font-bold hover:text-zinc-300 p-5"
        href={"/alice"}
      >
        Alice
      </Link>
      <Link className="text-xl font-bold hover:text-zinc-300 p-5" href={"/bob"}>
        Bob
      </Link>
    </main>
  );
}
