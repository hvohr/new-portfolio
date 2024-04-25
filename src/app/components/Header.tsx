"use client"

import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="text-white w-full flex items-center justify-between md:justify-around">
      {pathname !== '/' && (
        <Link href="/">
        <div className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] transition-transform hover:scale-110 md:mx-1 font-extrabold text-xl md:text-2xl relative inline-block stroke-current">
            Home
            <svg className={`${pathname === '/' ? 'text-white' : 'text-black'} absolute -bottom-0.5 w-full max-h-1.5`} viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" stroke-width="2"></path>
            </svg>
          </div>
        </Link>
      )}
      <Link href="/about">
        <div className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] transition-transform hover:scale-110 md:mx-1 font-extrabold text-xl md:text-2xl relative inline-block stroke-current">
          About
          <svg className={`${pathname === '/about' ? 'text-white' : 'text-black'} absolute -bottom-0.5 w-full max-h-1.5`} viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" stroke-width="2"></path>
          </svg>
        </div>
      </Link>
      <Link href="/projects">
        <div className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] transition-transform hover:scale-110 md:mx-1 font-extrabold text-xl md:text-2xl relative inline-block stroke-current">
          Projects
          <svg className={`${pathname === '/projects' ? 'text-white' : 'text-black'} absolute -bottom-0.5 w-full max-h-1.5`} viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" stroke-width="2"></path>
          </svg>
        </div>
      </Link>
      <Link href="/contact">
        <div className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] transition-transform hover:scale-110 md:mx-1 font-extrabold text-xl md:text-2xl relative inline-block stroke-current">
          Contact
          <svg className={`${pathname === '/contact' ? 'text-white' : 'text-black'} absolute -bottom-0.5 w-full max-h-1.5`} viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" stroke-width="2"></path>
          </svg>
        </div>
      </Link>
    </div>
  )
}

export default Header