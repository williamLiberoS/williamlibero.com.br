
import React, { useEffect } from "react";
import { useState } from "react";
import { Roboto } from "next/font/google";
import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import ShowMoreButton from "../ShowMoreButton";
import ShowLessButton from "../ShowLessButton";
import "./projects.css";
import {projects} from "./projectsData.js";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function Projects() {
  const [rawList, setRawList] = useState();
  const [frontList, setFrontList] = useState();
  const projectsJson = projects;

  useEffect(() => {
    if (projectsJson != undefined && rawList == undefined && frontList == undefined) {
      setRawList(projectsJson);
      setFrontList([
        projectsJson[0],
        projectsJson[1],
        projectsJson[2],
      ]);
    }
  }, [projectsJson, rawList, frontList]);

  const pushItemToListFront = () => {
    var index = 0;
    rawList.forEach((item) => {
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
      {frontList != undefined ? (
        <>
          <div className="projects-container grid text-center gap-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full">
            {frontList.map((item, index) => (
              <div key={item != undefined ? item.id : Math.random()}>
                {item != undefined && (
                  <Card
                    shadow="sm"
                    key={item.id}
                    isPressable
                    onPress={() => window.open(item.link, "blank")}
                    className="project-card w-full mb-3"
                  >
                    <CardBody className="overflow-visible p-0 flex items-center">
                      {item.image != null ? (
                        <Image
                          isZoomed
                          shadow="sm"
                          radius="lg"
                          alt={item.title}
                          className="project-image object-cover"
                          src={item.image}
                        />
                      ) : (
                        <Image
                          isZoomed
                          shadow="sm"
                          radius="lg"
                          alt={item.title}
                          className="project-image-default object-cover"
                          src="/images/default_project.png"
                        />
                      )}
                    </CardBody>
                    <CardFooter className="flex-col items-center">
                      <p className={roboto.className + " project-title"}>
                        {item.title}
                      </p>
                      <p className={roboto.className + " text-left"}>
                        {item.description.length < 73
                          ? item.description
                          : item.description.substring(0, 65) + "..."}
                      </p>
                    </CardFooter>
                  </Card>
                )}
              </div>
            ))}
          </div>
          <div>
            <ShowMoreButton pushItemToListFront={pushItemToListFront} />
            {frontList.length > 3 && (
              <ShowLessButton removeItemsFromList={removeItemsFromList} />
            )}
          </div>
        </>
      ) : null}
    </div>
  );
}
