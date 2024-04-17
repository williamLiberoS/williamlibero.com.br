"use client";
import React, { useState, useEffect, useRef } from "react";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Articles from "./components/articles/Articles";
import Activity from "./components/activity/Activity";
import Experience from "./components/experience/Experience";
import Freelances from "./components/freelances/Freelances";
import TypeAnimations from "./components/animations/TypeAnimation";
import "./custom.css";

export default function Home() {
  const matrixContainerRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <section
        id="generalContainer"
        className="flex flex-col items-center justify-between"
      >
        <section id="aboutMeSection" className="h-full mt-32">
          <TypeAnimations />
        </section>
        <section
          id="activitySection"
          className="w-full mt-20 xl:mt-32 flex items-center justify-center h-full"
        >
          <Activity />
        </section>
        <section id="projectsSection" className="w-1/2 h-full pt-28 xl:pt-28">
          <h1 className="border-b text-2xl font-bold relative">Projetos</h1>
          <Projects />
        </section>
        <section id="articlesSection" className="w-1/2 h-full pt-24 xl:pt-20">
          <h1 className="border-b text-2xl font-bold">Artigos</h1>
          <Articles />
        </section>
        <section id="freelancesSection" className="w-1/2 h-full pt-24 xl:pt-20">
          <h1 className="border-b text-2xl font-bold">Freelances</h1>
          <Freelances />
        </section>
        <section id="skillsSection" className="w-1/2 h-full pt-24 xl:pt-20">
          <h1 className="border-b text-2xl font-bold">Skills</h1>
          <Skills />
        </section>
        <section
          id="experienceSection"
          className="w-1/2 h-full mb-32 pt-24 xl:pt-20"
        >
          <h1 className="border-b text-2xl font-bold">Experiência</h1>
          <Experience />
        </section>
      </section>
    </>
  );
}
