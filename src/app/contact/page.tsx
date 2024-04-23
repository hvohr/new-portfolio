"use client"

import React from 'react';
import Header from "../components/Header"

const Contact = () => {
  return (
    <main className="bg-cover bg-no-repeat bg-center bg-[url('/7.jpeg')] font-wilden flex h-screen flex-col justify-between items-center p-10 pt-5">
      <Header/>
      <div className="rounded-xl flex flex-col justify-center md:h-[50vh] md:w-[70%] bg-[rgba(255, 255, 255, 0.6)] items-center mt-12 flex-grow" style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)'}}>
        <h1>Contact me lmao</h1>
      </div>
    </main>
  )
}

export default Contact;