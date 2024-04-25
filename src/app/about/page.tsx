"use client"
import React from 'react';
import Header from "../components/Header";

const About = () => {
  return (
    <main className="bg-cover bg-no-repeat bg-center bg-[url('/9.jpeg')] font-wilden flex min-h-screen flex-col justify-between items-center md:p-10 p-3 pt-5 gap-3">
      <Header />
      <section className="md:mb-20 mt-5 md:mt-0 flex flex-col md:flex-row w-full justify-between items-center h-full gap-5">
      <div className="shadow-lg shadow-gray-400 p-4 rounded-xl flex flex-col justify-center md:w-[48%] w-full items-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
          <h1 className="overflow-scroll text-lg md:text-xl max-w-[90%] min-h-[0]">Welcome! My name is Hollis, and I live in Denver, Colorado. My coding journey began with the desire to create beautiful, user-friendly web experiences. I specialize in HTML/CSS, JavaScript, React, and other frontend frameworks. User experience is at the core of my work, and I'm dedicated to staying updated with the latest development trends. As a lifelong learner, I continuously expand my skill set to deliver responsive and pixel-perfect web solutions. Working closely with designers and back-end developers, I transform concepts into lasting digital experiences. With a background in sustainability, I aspire to write code for a better future. Outside of coding, I enjoy hiking, crocheting, and solving puzzles.</h1>
        </div>
        <div className="shadow-lg shadow-gray-400 p-4 rounded-xl flex flex-col justify-center h-fit md:w-[48%] w-full items-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
          <h1 className="text-2xl md:text-4xl m-1">Skills</h1>
          <section className="overflow-scroll w-[90%] flex items-center justify-between">
          <div className="text-center text-lg md:text-2xl flex flex-col justify-between gap-2 md:gap-5">
              <p>• Javascript</p>
              <p>• Typescript</p>
              <p>• Next.js</p>
              <p>• MongoDB</p>
              <p>• React.js</p>
              <p>• HTML5/CSS6</p>
            </div>
            <div className="text-center text-lg md:text-2xl flex flex-col justify-between gap-2 md:gap-5">
              <p>• E2E Testing</p>
              <p>• Unit Testing</p>
              <p>• Git Workflow</p>
              <p>• Agile Methodologies</p>
              <p>• TailwindCSS</p>
              <p>• Express.js</p>
            </div>
          </section>
          <p className="text-xl underline">And More!</p>
        </div>
      </section>
    </main>
  )
}

export default About;
