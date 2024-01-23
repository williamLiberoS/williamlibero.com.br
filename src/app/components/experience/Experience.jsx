import React from "react";
import { Roboto } from "next/font/google";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Image,
} from "@nextui-org/react";
import { SiPhp, SiLaravel } from "react-icons/si";
import "./experience.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function Experience() {
  return (
    <div className="experiences-container mt-3 text-center w-full">
      <div
        className="flex items-start justify-center mb-6"
        style={{ flexFlow: "column" }}
      >
        <div className="flex items-center justify-center">
          <Image
            width={50}
            src="images/kenny_idiomas.png"
            classNames="mr-5 job-img"
          />
          <div className="flex items-start" style={{ flexFlow: "column" }}>
            <span className="ml-2 mt-3 font-semibold text-sm md:text-xl">
              Kenny Idiomas - Full Stack Developer
            </span>
            <div className="flex" style={{ flexFlow: "wrap" }}>
              <span className="ml-2 mt-3 font-normal text-xs rounded-lg border-2 p-1 w-fit">
                Git
              </span>
              <span className="ml-2 mt-3 font-normal text-xs rounded-lg border-2 p-1 w-fit">
                Vue.js
              </span>
              <span className="ml-2 mt-3 font-normal text-xs rounded-lg border-2 p-1 w-fit">
                Tailwindcss
              </span>
              <span className="ml-2 mt-3 font-normal text-xs rounded-lg border-2 p-1 w-fit">
                Jest
              </span>
              <span className="ml-2 mt-3 font-normal text-xs rounded-lg border-2 p-1 w-fit">
                Laravel
              </span>
              <span className="ml-2 mt-3 font-normal text-xs rounded-lg border-2 p-1 w-fit">
                MySQL
              </span>
            </div>
          </div>
        </div>
        <span className="text-start text-base mt-3">
          Desenvolvedor Full Stack Pleno utilizando Laravel no back-end, MySQL
          como linguagem de banco de dados e Vue.js com TailwindCSS no
          front-end.
        </span>
      </div>
      <div
        className="flex items-start justify-center mb-6"
        style={{ flexFlow: "column" }}
      >
        <div className="flex items-center justify-center">
          <Image
            width={50}
            src="images/despnet.jpeg"
            classNames="mr-5 job-img"
          />
          <div className="flex items-start" style={{ flexFlow: "column" }}>
            <span className="ml-2 mt-3 font-semibold text-sm md:text-xl">
              Despnet - Desenvolvedor PHP Júnior
            </span>
            <div className="flex" style={{ flexFlow: "wrap" }}>
              <span className="ml-2 mt-3 font-normal text-xs rounded-lg border-2 p-1 w-fit">
                PHP
              </span>
              <span className="ml-2 mt-3 font-normal text-xs rounded-lg border-2 p-1 w-fit">
                MySQL
              </span>
              <span className="ml-2 mt-3 font-normal text-xs rounded-lg border-2 p-1 w-fit">
                Javascript
              </span>
              <span className="ml-2 mt-3 font-normal text-xs rounded-lg border-2 p-1 w-fit">
                HMTL5
              </span>
              <span className="ml-2 mt-3 font-normal text-xs rounded-lg border-2 p-1 w-fit">
                CSS3
              </span>
            </div>
          </div>
        </div>
        <span className="text-start text-base mt-3">
          Desenvolvedor PHP Júnior utilizando PHP como linguagem no back-end,
          MySQL como linguagem de banco de dados e HTML5, CSS3, JavaScript,
          JQuery e Bootstrap no front-end.
        </span>
      </div>
    </div>
  );
}
