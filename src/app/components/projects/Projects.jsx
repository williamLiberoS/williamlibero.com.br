import React from "react";
import { useState } from "react";
import { Roboto } from "next/font/google";
import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import ShowMoreButton from "../ShowMoreButton";
import ShowLessButton from "../ShowLessButton";
import "./projects.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function Projects() {
  const list = [
    {
      id: 1,
      title: "Open AI Api Playground",
      subtitle: "Open AI Api integration in a Vue.js 3 app.",
      img: "/images/projects/openaiapiplayground.PNG",
      link: "https://open-ai-apis-playground.vercel.app/",
    },
  ];
  const [frontList, setFrontList] = useState([list[0], list[1], list[2]]);

  const pushItemToListFront = () => {
    var index = 0;
    list.forEach((item) => {
      if (
        index < 1 &&
        !frontList.find((frontListItem) => frontListItem.id == item.id)
      ) {
        setFrontList((frontList) => [...frontList, item]);
        index++;
      }
    });
  };

  const removeItemsFromList = () => {
    var list = frontList;
    list.pop();
    setFrontList([...list]);
  };

  return (
    <div className="generic-container mt-3 flex flex-col items-end">
      <div className="projects-container grid text-center gap-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full">
        {frontList.map((item, index) => (
          <div key={item != undefined ? item.id : ""}>
            {item != undefined && (
              <Card
                shadow="sm"
                key={index}
                isPressable
                onPress={() => window.open(item.link, "blank")}
                className="project-card w-full mb-3"
              >
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
                  <p className={roboto.className + " project-title"}>
                    {item.title}
                  </p>
                  <p className={roboto.className + " text-left"}>
                    {item.subtitle.length < 73
                      ? item.subtitle
                      : item.subtitle.substring(0, 65) + "..."}
                  </p>
                </CardFooter>
              </Card>
            )}
          </div>
        ))}
      </div>
      <div>
        {list.length > 3 && (
          <ShowMoreButton pushItemToListFront={pushItemToListFront} />
        )}
        {frontList.length > 3 && (
          <ShowLessButton removeItemsFromList={removeItemsFromList} />
        )}
      </div>
    </div>
  );
}
