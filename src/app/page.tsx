import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center gap-4 flex-col items-center w-full h-full absolute left-0 top-0">
      <h1 className="text-3xl text-primary font-bold flex justify-center relative">
        Hey, I'm Yavuz!
        <div className="w-full h-2 bg-second-primary -z-10 rounded-full absolute translate-y-[2px] bottom-0"></div>
      </h1>

      <p className="text-base text-black font-medium text-center container gap-2 flex flex-col">
        <div>I'm trying to get a scholarship with this website!</div>

        <div>Aaaand if you have the permission(the key) to get in please click to the link.</div>

        <div>If you don't, I'm sorry mate I got nothing for you...</div>
      </p>

      <Link href="/get-in" className="text-base font-medium underline text-primary">
        Click Me
      </Link>
    </main>
  )
}
