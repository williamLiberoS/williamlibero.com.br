import React from "react";
import { Roboto } from "next/font/google";
import { TypeAnimation } from "react-type-animation";
import { useState, useRef, useEffect } from "react";
import { FaGithubSquare } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import "./TypeAnimation.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function TypeAnimations() {
  const jobTitleContainerRef = useRef(null);
  const socialIconsRef = useRef(null);
  const [currentType, setCurrentType] = useState("ola");
  const [backgroundTextColor, setBackgroundTextColor] = useState("#ffb703");
  const [displaysIconAnimation, setDisplaysIconAnimation] = useState("");
  const CURSOR_CLASS_NAME = "custom-type-animation-cursor";

  const jobTitleContainerIcon = (jobTitle) => {
    if (jobTitle == "front-end") {
      const childDiv = createElements({
        className: "animated-icon-missed disappear",
        iconSrc: "/images/warning-icon.png",
      });
      jobTitleContainerRef.current.appendChild(childDiv);
    } else if (jobTitle == "back-end") {
      const childDiv = createElements({
        className: "animated-icon-missed1 disappear",
        iconSrc: "/images/warning-icon.png",
      });
      jobTitleContainerRef.current.appendChild(childDiv);
    } else if (jobTitle == "full-stack") {
      const childDiv = createElements({
        className: "animated-icon-correct disappear",
        iconSrc: "/images/check-icon.png",
      });
      jobTitleContainerRef.current.appendChild(childDiv);
    }
  };

  const createElements = (props) => {
    const childDiv = document.createElement("div");
    childDiv.className = props.className;

    const grandChildDiv = document.createElement("img");
    grandChildDiv.src = props.iconSrc;
    childDiv.appendChild(grandChildDiv);

    return childDiv;
  };

  const animateSocialIcons = (props) => {
    setDisplaysIconAnimation("typeAnimationCompleted");
  };

  return (
    <>
      <div className="w-full typedAnimationContainer">
        <div>
          <div
            style={{
              width: "fit-content",
              float: "left",
            }}
          >
            {currentType.includes("ola") && (
              <TypeAnimation
                cursor={false}
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Olá, me chamo ",
                  (el) => {
                    setCurrentType(currentType + "name"),
                      el.classList.remove(CURSOR_CLASS_NAME);
                  },
                  1000,
                ]}
                wrapper="span"
                className={
                  CURSOR_CLASS_NAME +
                  " typeAnimationText text-3xl font-semibold"
                }
                style={{ display: "inline-block" }}
                repeat={0}
              />
            )}
            {currentType.includes("name") && (
              <TypeAnimation
                cursor={false}
                sequence={[
                  "",
                  (el) => el.classList.add(CURSOR_CLASS_NAME),
                  10,
                  " William ",
                  (el) => {
                    setCurrentType(currentType + "job"),
                      el.classList.remove(CURSOR_CLASS_NAME);
                  },
                  1000,
                ]}
                speed={1}
                wrapper="span"
                className={
                  CURSOR_CLASS_NAME +
                  " typeAnimationText text-3xl font-bold firstName-highlight " +
                  roboto.className
                }
                style={{ color: "#4c8df5" }}
                repeat={0}
              />
            )}
            {currentType.includes("job") && (
              <TypeAnimation
                cursor={false}
                sequence={[
                  "",
                  (el) => el.classList.add(CURSOR_CLASS_NAME),
                  10,
                  "  e sou desenvolvedor ",
                  (el) => {
                    setCurrentType(currentType + " devtypes"),
                      el.classList.remove(CURSOR_CLASS_NAME);
                  },
                  1000,
                ]}
                wrapper="span"
                className={
                  CURSOR_CLASS_NAME +
                  " typeAnimationText text-3xl font-semibold"
                }
                style={{ display: "inline-block" }}
                repeat={0}
              />
            )}
          </div>
          {currentType.includes("devtypes") && (
            <>
              <div
                id="job-title-container"
                style={{
                  backgroundColor: backgroundTextColor,
                  transition: "background-color 1000ms linear",
                  width: "fit-content",
                  float: "left",
                  marginLeft: "8px",
                }}
              >
                <TypeAnimation
                  cursor={false}
                  sequence={[
                    "",
                    (el) => el.classList.add(CURSOR_CLASS_NAME),
                    10,
                    " front-end.",
                    (el) => {
                      setBackgroundTextColor("#ffb703"),
                        el.classList.remove(CURSOR_CLASS_NAME),
                        setDisplaysIconAnimation("missed"),
                        jobTitleContainerIcon("front-end");
                    },
                    1000,
                    (el) => {
                      el.classList.add(CURSOR_CLASS_NAME);
                    },
                    " back-end.",
                    (el) => {
                      setBackgroundTextColor("#ffb703"),
                        el.classList.remove(CURSOR_CLASS_NAME),
                        setDisplaysIconAnimation("missed missed1"),
                        jobTitleContainerIcon("back-end");
                    },
                    1000,
                    "",
                    () => {
                      setBackgroundTextColor("#80b918");
                    },
                    10,
                    (el) => {
                      el.classList.add(CURSOR_CLASS_NAME);
                    },
                    " full stack.",
                    (el) => {
                      setCurrentType(currentType + " description"),
                        el.classList.remove(CURSOR_CLASS_NAME),
                        setDisplaysIconAnimation("missed missed1 correct"),
                        jobTitleContainerIcon("full-stack");
                    },
                    1000,
                    " full stack.",
                    () => {
                      setBackgroundTextColor("transparent");
                    },
                    10,
                  ]}
                  wrapper="span"
                  className={
                    CURSOR_CLASS_NAME +
                    " typeAnimationText text-3xl font-semibold"
                  }
                  style={{ display: "inline-block" }}
                  repeat={0}
                />
              </div>
              <div id="job-title-icon" ref={jobTitleContainerRef}></div>
            </>
          )}
          <div
            style={{
              width: "fit-content",
            }}
          >
            {currentType.includes("description") && (
              <TypeAnimation
                cursor={false}
                sequence={[
                  "",
                  (el) => el.classList.add(CURSOR_CLASS_NAME),
                  10,
                  "Gosto de criar sites e aplicações web que envolvam integrações com APIs e bancos de dados.",
                  (el) => {
                    el.classList.remove(CURSOR_CLASS_NAME),
                      animateSocialIcons("typeAnimationCompleted");
                  },
                  1000,
                ]}
                wrapper="span"
                className={
                  CURSOR_CLASS_NAME + " typeAnimationText text-3xl font-normal"
                }
                style={{ display: "inline-block" }}
                repeat={0}
              />
            )}
          </div>
        </div>
      </div>

      {displaysIconAnimation == "typeAnimationCompleted" && (
        <section id="socialIconsSection" ref={socialIconsRef}>
          <a
            href="https://github.com/William-Libero"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare className="social-icon github-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/williamlibero/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrLinkedin className="social-icon linkedin-icon" />
          </a>
        </section>
      )}
    </>
  );
}
