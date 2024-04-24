"use client"

import React from 'react';
import Header from "../components/Header";

const Contact = () => {
  return (
    <main className="bg-cover bg-no-repeat bg-center bg-[url('/7.jpeg')] font-wilden flex flex-col justify-between items-center p-10 pt-5 min-h-screen relative">
      <Header />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-gray-400 p-4 rounded-xl flex flex-col justify-center md:w-[48%] w-full items-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
        <h1>Contact me lmao</h1>
      </div>
    </main>
  )
}

export default Contact;
