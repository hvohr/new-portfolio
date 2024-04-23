import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-cover bg-no-repeat bg-center bg-[url('/12.jpeg')] font-wilden flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center">
        <h1 className="text-9xl">Hollis Vohr</h1>
        <h2 className="text-5xl">Software Developer</h2>
        <img src="/flower.svg" className="h-10 w-10 m-3 animate-spin-slow"/>
      </div>
    </main>
  );
}
