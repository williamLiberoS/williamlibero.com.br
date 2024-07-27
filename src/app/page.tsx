"use client";
import React, { useState, useEffect, useRef } from "react";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Articles from "./components/articles/Articles";
import Activity from "./components/activity/Activity";
import Experience from "./components/experience/Experience";
import Freelances from "./components/freelances/Freelances";
import TypeAnimations from "./components/animations/TypeAnimation";
import { useSelector } from "react-redux";
import "./custom.css";

export default function Home() {
  const language = useSelector((state: any) => state.language);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="generic-container mt-3 flex flex-col items-end">
      {language.value != undefined ? (
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
              <Activity language={language} />
            </section>
            <section
              id="projectsSection"
              className="w-1/2 h-full pt-28 xl:pt-28"
            >
              <h1 className="border-b text-2xl font-bold relative">
                {language.langText.sectionTitles.projects}
              </h1>
              <Projects />
            </section>
            <section
              id="articlesSection"
              className="w-1/2 h-full pt-24 xl:pt-20"
            >
              <h1 className="border-b text-2xl font-bold">
                {language.langText.sectionTitles.articles}
              </h1>
              <Articles />
            </section>
            <section
              id="freelancesSection"
              className="w-1/2 h-full pt-24 xl:pt-20"
            >
              <h1 className="border-b text-2xl font-bold">
                {language.langText.sectionTitles.freelances}
              </h1>
              <Freelances />
            </section>
            <section id="skillsSection" className="w-1/2 h-full pt-24 xl:pt-20">
              <h1 className="border-b text-2xl font-bold">
                {language.langText.sectionTitles.skills}
              </h1>
              <Skills language={language} />
            </section>
            <section
              id="experienceSection"
              className="w-1/2 h-full mb-32 pt-24 xl:pt-20"
            >
              <h1 className="border-b text-2xl font-bold">
                {language.langText.sectionTitles.experience}
              </h1>
              <Experience language={language} />
            </section>
          </section>
        </>
      ) : null}
    </div>
  );
}
