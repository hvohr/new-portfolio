"use client"
import React from 'react';
import Header from "../components/Header"

const Projects = () => {

  return (
    <main className="bg-cover bg-no-repeat bg-[url('/18.jpeg')] font-wilden flex min-h-screen flex-col justify-between items-center md:p-10 p-3 pt-5">
      <Header />
      <section className="mt-10 flex flex-col md:flex-row flex-wrap w-fit h-full justify-between items-center gap-5">
        <div className="shadow-lg shadow-gray-400 p-4 rounded-xl flex flex-col justify-center md:w-[48%] w-full items-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
          <img src="/anxietyAid.jpeg" alt="the knit nest dashboard" width={400} height={400} />
          <div className="w-full flex justify-around mt-2">
            <a className="border-2 border-black p-1 rounded-xl hover:bg-white" href="https://anxiety-aid.vercel.app/">Deploy Link</a>
            <a className="border-2 border-black p-1 rounded-xl hover:bg-white" href="https://github.com/hvohr/anxiety_aid">Repo Link</a>
          </div>
        </div>
        <div className="shadow-lg shadow-gray-400 p-4 rounded-xl flex flex-col justify-center md:w-[48%] w-full items-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
          <img src="/TheKnitNest.jpeg" alt="the knit nest dashboard" width={400} height={400} />
          <div className="w-full flex justify-around mt-2">
            <a className="border-2 border-black p-1 rounded-xl hover:bg-white" href="https://the-knit-nest.vercel.app/">Deploy Link</a>
            <a className="border-2 border-black p-1 rounded-xl hover:bg-white" href="https://github.com/hvohr/the-knit-nest">Repo Link</a>
          </div>
        </div>
      </section>
      <section className="md:mb-10 mt-4 md:mt-4 flex flex-col md:flex-row w-fit justify-between items-center h-full gap-5">
        <div className="shadow-lg shadow-gray-400 p-4 rounded-xl flex flex-col justify-center md:w-[48%] w-full items-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
          <img src="/oldPortfolio.jpeg" alt="old portfolio" width={400} height={400} />
          <div className="w-full flex justify-around mt-2">
            <a className="border-2 border-black p-1 rounded-xl hover:bg-white" href="https://portfolio-site-hvohr.vercel.app/">Deploy Link</a>
            <a className="border-2 border-black p-1 rounded-xl hover:bg-white" href="https://github.com/hvohr/portfolio-site">Repo Link</a>
          </div>
        </div>
        <div className="shadow-lg shadow-gray-400 p-4 rounded-xl flex flex-col justify-center md:w-[48%] w-full items-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
          <img src="/clearSkies.jpeg" alt="clear skies" width={400} height={400} />
          <div className="w-full flex justify-around mt-2">
            <a className="border-2 border-black p-1 rounded-xl hover:bg-white" href="https://clearskies.vercel.app/">Deploy Link</a>
            <a className="border-2 border-black p-1 rounded-xl hover:bg-white" href="https://github.com/hvohr/clearskies">Repo Link</a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Projects