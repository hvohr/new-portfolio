import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();

  return (
    <main className="bg-cover bg-no-repeat bg-center bg-[url('/12.jpeg')] font-wilden flex min-h-screen flex-col justify-between items-center p-10 pt-5">
      <div className="w-full flex justify-around">
        {router.pathname !== '/' && (
          <Link href="/">
            <div className="text-black transition-transform hover:scale-110 mx-1 font-extrabold text-2xl relative inline-block stroke-current">
              Home
              <svg className="text-white absolute -bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none">
                <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" stroke-width="2"></path>
              </svg>
            </div>
          </Link>
        )}
        <Link href="/about">
          <div className="text-black transition-transform hover:scale-110 mx-1 font-extrabold text-2xl relative inline-block stroke-current">
            About
            <svg className="text-white absolute -bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none">
              <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" stroke-width="2"></path>
            </svg>
          </div>
        </Link>
        <Link href="/about">
          <div className="text-black transition-transform hover:scale-110 mx-1 font-extrabold text-2xl relative inline-block stroke-current">
            Projects
            <svg className="text-white absolute -bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none">
              <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" stroke-width="2"></path>
            </svg>
          </div>
        </Link>
        <Link href="/about">
          <div className="text-black transition-transform hover:scale-110 mx-1 font-extrabold text-2xl relative inline-block stroke-current">
            Contact
            <svg className="text-white absolute -bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none">
              <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" stroke-width="2"></path>
            </svg>
          </div>
        </Link>
      </div>
      <div className="flex flex-col items-center mt-12 gap-4 flex-grow">
        <h1 className="text-9xl">Hollis Vohr</h1>
        <h2 className="text-5xl">Software Developer</h2>
        <Image src="/flower.svg" alt="Flower" width={30} height={30} className="animate-spin-slow" />
        <button className="text-3xl border-2 shadow-md shadow-slate-200 border-black rounded-xl p-1 transition-transform hover:scale-110 hover:bg-white">My Resume</button>
      </div>
    </main>
  );
}
