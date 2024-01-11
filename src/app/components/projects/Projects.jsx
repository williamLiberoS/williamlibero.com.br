import React from "react";
import { useEffect, useState } from "react";
import { Roboto } from 'next/font/google'
import {Card, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import ShowMoreButton from "../ShowMoreButton"
import './projects.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ["100", "300", "400", "500", "700", "900"],
})

export default function Projects() {  
  const list = [
    {
      id: 1,
      title: "How to remove items from an array in JavaScript",
      subtitle: "A good (hopefully) summary on how to handle data exclusion in Javascript arrays.",
      img: "/images/js-screen.webp",
      link: "https://medium.com/@williamliberos/how-to-add-items-to-an-array-in-javascript-58c4539139d0"
    },
    {
      id: 2,
      title: "How to add items in an array in JavaScript",
      subtitle: "A quick summary to understand how to add items in arrays.",
      img: "/images/js_array_methods.webp",
      link: "https://medium.com/@williamliberos/how-to-add-items-to-an-array-in-javascript-58c4539139d0"
    },
    {
      id: 3,
      title: "How to remove items from an array in JavaScript",
      subtitle: "A good (hopefully) summary on how to handle data exclusion in Javascript arrays.",
      img: "/images/js-screen.webp",
      link: "https://medium.com/@williamliberos/how-to-add-items-to-an-array-in-javascript-58c4539139d0"
    },
    {
      id: 4,
      title: "How to add items in an array in JavaScript",
      subtitle: "A quick summary to understand how to add items in arrays.",
      img: "/images/js_array_methods.webp",
      link: "https://medium.com/@williamliberos/how-to-add-items-to-an-array-in-javascript-58c4539139d0"
    }
  ];
  const [frontList, setFrontList] = useState([list[0], list[1], list[2]]);

  const pushItemToListFront = () => {
    var index = 0;
    list.forEach(item => {
      if(index < 2 && !frontList.find(frontListItem => frontListItem.id == item.id)){
        setFrontList(frontList => [...frontList, item]);
        index++;
      }
    });
  }

  return (
    <div className="generic-container flex flex-col items-end">
      <div className="projects-container grid mt-2 text-center gap-1 grid-cols-3 w-full">
        {frontList.map((item, index) => (
          <div key={item != undefined ? item.id : ''}>
            {item != undefined && (<Card shadow="sm" key={index} isPressable onPress={() => window.open(item.link, "blank")} className="project-card w-full mb-3">
              <CardBody className="overflow-visible p-0">
              <Image
                  isZoomed
                  shadow="sm"
                  radius="lg"
                  alt={item.title}
                  className="project-image object-cover"
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="flex-col items-center">
                <p className={roboto.className+ " project-title"}>{item.title}</p>
                <p className={roboto.className+" text-left"}>{item.subtitle.length < 73 ? item.subtitle : item.subtitle.substring(0, 65)+"..."}</p>
              </CardFooter>
            </Card>)}
          </div>
        ))}
      </div>
      <ShowMoreButton pushItemToListFront={pushItemToListFront} />
    </div>
  );
}