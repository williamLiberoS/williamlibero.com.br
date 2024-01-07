"use client"
import React, { useRef } from "react";
import { Roboto } from 'next/font/google'
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Articles from "./components/articles/Articles";
import TypeAnimations from "./components/animations/TypeAnimation";
import Matrix from "./components/animations/Matrix";
import './custom.css'

export default function Home() {  
  const matrixContainerRef = useRef(null);

  return (
    <section className="flex flex-col items-center justify-between">
      <section id="aboutMeSection" className="h-full mt-32">
        <TypeAnimations/>
      </section>
      <section id="projectsSection" className="w-1/2 h-full mt-32">
        <h1 className="text-2xl font-bold">Projetos</h1>
        <Projects/>
      </section>
      <section id="skillsSection" className="w-1/2 h-full">
        <h1 className="text-2xl font-bold">Skills</h1>
        <Skills/>
      </section>
      <section id="articlesSection" className="w-1/2 h-full">
        <h1 className="text-2xl font-bold">Artigos</h1>
        <Articles/>
      </section>
      <div className="matrix-container" ref={matrixContainerRef}>
        <Matrix targetRef={matrixContainerRef}/>
      </div>
    </section>
  )
}
