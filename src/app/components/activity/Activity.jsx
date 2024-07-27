import React from "react";
import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import { Roboto } from "next/font/google";
import "./activity.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function Activity(props) {
  return (
    <div className="generic-container w-4/5 flex flex-col items-center justify-center">
      <span className="text-2xl font-bold relative">Áreas de atuação</span>
      <div className="grid lg:grid-cols-3 lg:gap-3 mt-5 w-full">
        <div
          className="w-full flex items-center border-2 rounded-md p-4 shadow-md lg:mt-0 mt-5"
          style={{ flexFlow: "column" }}
        >
          <div className="flex items-center justify-center mb-4">
            <span className="float-left text-2xl font-bold relative">
              Front-end
            </span>
            <Image
              removeWrapper
              alt="Card example background"
              className="w-8 ml-3 float-left"
              radius="none"
              src="/images/ux.png"
            />
          </div>
          <span>{props.language.langText.activity.frontEnd}</span>
        </div>
        <div
          className="w-full flex items-center border-2 rounded-md p-4 shadow-md lg:mt-0 mt-5"
          style={{ flexFlow: "column" }}
        >
          <div className="flex items-center justify-center mb-4">
            <span className="float-left text-2xl font-bold relative">
              Back-end
            </span>
            <Image
              removeWrapper
              alt="Card example background"
              className="w-8 ml-3 float-left"
              radius="none"
              src="/images/programming.png"
            />
          </div>
          <span>{props.language.langText.activity.backEnd}</span>
        </div>
        <div
          className="w-full flex items-center border-2 rounded-md p-4 shadow-md lg:mt-0 mt-5"
          style={{ flexFlow: "column" }}
        >
          <div className="flex items-center justify-center mb-4">
            <span className="float-left text-2xl font-bold relative">
              DevOps
            </span>
            <Image
              removeWrapper
              alt="Card example background"
              className="w-8 ml-3 float-left"
              radius="none"
              src="/images/devops.png"
            />
          </div>
          <span>{props.language.langText.activity.devOps}</span>
        </div>
      </div>
    </div>
  );
}
