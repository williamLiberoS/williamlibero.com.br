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
import "./skills.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function Projects(props) {
  const list = [
    {
      id: 1,
      title: "Vue.js",
      experience: `3 ${props.language.langText.wordYears} ${props.language.langText.experienceText}`,
      subtitle:
        "A good (hopefully) summary on how to handle data exclusion in Javascript arrays.",
      img: "/images/skills/vue-js.svg",
      link: "https://medium.com/@williamliberos/how-to-add-items-to-an-array-in-javascript-58c4539139d0",
    },
    {
      id: 2,
      title: "React.js",
      experience: `1 ${props.language.langText.wordYear} ${props.language.langText.experienceText}`,
      subtitle: "A quick summary to understand how to add items in arrays.",
      img: "/images/skills/react.svg",
      link: "https://medium.com/@williamliberos/how-to-add-items-to-an-array-in-javascript-58c4539139d0",
    },
    {
      id: 3,
      title: "Next.js",
      experience: `1 ${props.language.langText.wordYear} ${props.language.langText.experienceText}`,
      subtitle: "A quick summary to understand how to add items in arrays.",
      img: "/images/skills/nextjs.svg",
      link: "https://medium.com/@williamliberos/how-to-add-items-to-an-array-in-javascript-58c4539139d0",
    },
    {
      id: 4,
      title: "Nest.js",
      experience: `1 ${props.language.langText.wordYear} ${props.language.langText.experienceText}`,
      subtitle: "A quick summary to understand how to add items in arrays.",
      img: "/images/skills/nestjs.svg",
      link: "https://medium.com/@williamliberos/how-to-add-items-to-an-array-in-javascript-58c4539139d0",
    },
    {
      id: 5,
      title: "Laravel",
      experience: `3 ${props.language.langText.wordYears} ${props.language.langText.experienceText}`,
      subtitle: "A quick summary to understand how to add items in arrays.",
      img: "SiLaravel",
      link: "https://medium.com/@williamliberos/how-to-add-items-to-an-array-in-javascript-58c4539139d0",
    },
    {
      id: 6,
      title: "PHP",
      experience: `4 ${props.language.langText.wordYears} ${props.language.langText.experienceText}`,
      subtitle: "A quick summary to understand how to add items in arrays.",
      img: "SiPhp",
      link: "https://medium.com/@williamliberos/how-to-add-items-to-an-array-in-javascript-58c4539139d0",
    },
    {
      id: 7,
      title: "Node.js",
      experience: `1 ${props.language.langText.wordYear} ${props.language.langText.experienceText}`,
      subtitle: "A quick summary to understand how to add items in arrays.",
      img: "/images/skills/nodejs.svg",
      link: "https://medium.com/@williamliberos/how-to-add-items-to-an-array-in-javascript-58c4539139d0",
    },
    {
      id: 8,
      title: "MySQL",
      experience: `4 ${props.language.langText.wordYears} ${props.language.langText.experienceText}`,
      subtitle: "A quick summary to understand how to add items in arrays.",
      img: "/images/skills/mysql.svg",
      link: "https://medium.com/@williamliberos/how-to-add-items-to-an-array-in-javascript-58c4539139d0",
    },
    {
      id: 9,
      title: "Tailwind CSS",
      experience: `2 ${props.language.langText.wordYears} ${props.language.langText.experienceText}`,
      subtitle: "A quick summary to understand how to add items in arrays.",
      img: "/images/skills/tailwindcss.svg",
      link: "https://medium.com/@williamliberos/how-to-add-items-to-an-array-in-javascript-58c4539139d0",
    },
  ];

  return (
    <div className="skills-container grid mt-3 text-center gap-1 grid-cols-5 w-full">
      {list.map((item, index) => (
        <div
          key={item.id}
          className="flex items-center justify-center mb-6"
          style={{ flexFlow: "column" }}
        >
          <span>
            {item.img == "SiPhp" && (
              <SiPhp style={{ fontSize: "6em", color: "#757ab2" }} />
            )}
            {item.img == "SiLaravel" && (
              <SiLaravel style={{ fontSize: "6em", color: "#fa2f22" }} />
            )}
            {item.img.includes("/images/skills") && (
              <Image
                isBlurred
                width={100}
                src={item.img}
                alt="NextUI Album Cover"
                classNames="m-5"
              />
            )}
          </span>
          <span className="mt-3 font-medium text-xl">{item.title}</span>
          <span className="text-sm">{item.experience}</span>
        </div>
      ))}
    </div>
  );
}
