"use client"
import React from 'react';
import Header from "../components/Header"

const Projects = () => {

  return (
    <main className="bg-cover bg-no-repeat bg-[url('/18.jpeg')] font-wilden flex min-h-screen flex-col justify-between items-center p-10 pt-5">
      <Header/>
      <div className="rounded-xl flex flex-col justify-center md:h-[50vh] md:w-[70%] bg-[rgba(255, 255, 255, 0.6)] items-center mt-12 flex-grow" style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)'}}>
        <h1>Projects lmao</h1>
      </div>
    </main>
  )
}

export default Projects