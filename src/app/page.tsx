import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center gap-4 flex-col items-center w-full h-full absolute left-0 top-0">
      <h1 className="text-3xl text-primary font-bold flex justify-start relative">
        Hey, I'm Yavuz!
        <div className="w-full h-2 changeWidth bg-second-primary -z-10 rounded-full absolute translate-y-[2px] bottom-0"></div>
      </h1>

      <div className="text-base text-black font-medium text-center container gap-2 flex flex-col">
        <p>I'm trying to get a scholarship with this website!</p>

        <p>Aaaand if you have the permission(the key) to get in please click to the link.</p>

        <p>If you don't, I'm sorry mate I got nothing for you...</p>
      </div>

      <Link href="/get-in" className="text-base font-medium relative group text-primary">
        Click Me
        <div className="group-hover:w-full w-0 duration-200 h-[2px] bg-primary rounded-full absolute -translate-y-[4px] bottom-0"></div>
      </Link>
    </main>
  )
}
