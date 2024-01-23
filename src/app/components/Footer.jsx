"use client";
import React from "react";
import { Roboto } from "next/font/google";
import { useState, useEffect } from "react";
import { Link, Image } from "@nextui-org/react";
import { FaGithubSquare } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { useTheme } from "next-themes";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function Footer() {
  const { theme, setTheme } = useTheme("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const footerAnchorItems = [
    {
      id: 1,
      title: "Sobre mim",
      link: "#generalContainer",
    },
    {
      id: 2,
      title: "Projetos",
      link: "#projectsSection",
    },
    {
      id: 3,
      title: "Artigos",
      link: "#articlesSection",
    },
    {
      id: 4,
      title: "Freelances",
      link: "#freelancesSection",
    },
    {
      id: 5,
      title: "Skills",
      link: "#skillsSection",
    },
    {
      id: 6,
      title: "Experiência",
      link: "#experienceSection",
    },
    {
      id: 7,
      title: "Currículo",
      link: "",
    },
  ];

  const footerSocialItems = [
    {
      id: 1,
      title: "Github",
      link: "https://github.com/William-Libero",
    },
    {
      id: 2,
      title: "Linkedin",
      link: "https://www.linkedin.com/in/williamlibero/",
    },
  ];

  return (
    <div className="footer-container w-1/2 mt-5 mb-10 flex items-start justify-between">
      <div className="nameAndJobTitleContainer flex">
        <Image
          isBlurred
          width={25}
          src="/images/code.png"
          alt="NextUI Album Cover"
        />
        <span className="ml-1">William Libero - Full Stack Developer</span>
      </div>
      <div
        className="anchorsContainer border-l-2 flex w-fit pl-3"
        style={{ flexFlow: "column" }}
      >
        {footerAnchorItems.map((item, index) => (
          <Link
            key={item.id}
            className="w-full no-underline"
            href={item.link}
            size="lg"
            style={{ color: theme == "light" ? "black" : "white" }}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div
        className="socialContainer border-l-2 flex w-fit pl-3"
        style={{ flexFlow: "column" }}
      >
        <span>Onde estou:</span>
        <div className="flex">
          {footerSocialItems.map((item, index) => (
            <Link
              key={item.id}
              className="w-fit no-underline"
              href={item.link}
              target="blank"
              size="lg"
              style={{ color: theme == "light" ? "black" : "white" }}
            >
              {item.title == "Github" && (
                <FaGithubSquare
                  className="social-icon"
                  style={{ fontSize: "2em" }}
                />
              )}
              {item.title == "Linkedin" && (
                <GrLinkedin
                  className="social-icon"
                  style={{ fontSize: "2em", padding: "2px", marginLeft: "3px" }}
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
