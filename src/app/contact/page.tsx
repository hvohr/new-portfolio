"use client"

import React from 'react';
import Header from "../components/Header";

const Contact = () => {
  return (
    <main className="bg-cover bg-no-repeat bg-center bg-[url('/7.jpeg')] font-wilden flex flex-col justify-between items-center p-10 pt-5 min-h-screen relative">
      <Header />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-gray-400 p-8 rounded-xl flex flex-col md:flex-row justify-between md:w-[48%] items-center md:gap-0 gap-10" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
        <a href="https://www.linkedin.com/in/hollisvohr/"><img src="/linkedin.png" alt="linkedin" width={80} height={80}/></a>
        <a href="https://github.com/hvohr"><img src="/github.png" alt="github" width={80} height={80}/></a>
        <a href="https://www.instagram.com/hollisvohr/"><img src="/instagram.png" alt="instagram" width={80} height={80}/></a>
        <a href= "mailto: hollis.vohr@gmail.com"><img src="/email.png" alt="email" width={80} height={80}/></a>
      </div>
    </main>
  )
}

export default Contact;
