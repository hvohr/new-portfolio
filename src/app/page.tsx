"use client"

import React from 'react';
import Image from 'next/image';
import Header from "./components/Header"

export default function Home() {

  return (
    <main className="bg-cover bg-no-repeat bg-center bg-[url('/12.jpeg')] font-wilden flex min-h-screen flex-col justify-between items-center md:p-10 p-3 pt-5">
      <Header/>
      <div className="flex flex-col items-center mt-12 gap-4 flex-grow">
        <h1 className="text-center text-8xl md:text-9xl">Hollis Vohr</h1>
        <h2 className="text-center text-4xl md:text-5xl">Software Developer</h2>
        <Image src="/flower.svg" alt="Flower" width={30} height={30} className="animate-spin-slow" />
        <button className="text-3xl border-2 shadow-sm shadow-slate-200 border-black rounded-xl p-1 transition-transform hover:scale-110 bg-white md:bg-transparent md:hover:bg-white"><a href="/Resume.pdf" download="Hollis Vohr Resume">View Resume</a></button>
      </div>
    </main>
  );
}
