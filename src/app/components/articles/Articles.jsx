import React, { useEffect, useState } from "react";
import { Roboto } from "next/font/google";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import ShowMoreButton from "../ShowMoreButton";
import ShowLessButton from "../ShowLessButton";
import "./articles.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function Articles() {
  const list = [
    {
      id: 1,
      title: "How to remove items from an array in JavaScript",
      subtitle:
        "A good (hopefully) summary on how to handle data exclusion in Javascript arrays.",
      img: "/images/articles/js-screen.webp",
      link: "https://medium.com/@williamliberos/how-to-add-items-to-an-array-in-javascript-58c4539139d0",
    },
    {
      id: 2,
      title: "How to add items in an array in JavaScript",
      subtitle: "A quick summary to understand how to add items in arrays.",
      img: "/images/articles/js_array_methods.webp",
      link: "https://medium.com/@williamliberos/how-to-add-items-to-an-array-in-javascript-58c4539139d0",
    },
    {
      id: 3,
      title: "Basic OOP Concepts Explained in JavaScript — Part 1",
      subtitle: "",
      img: "/images/articles/oop.webp",
      link: "https://blog.devgenius.io/basic-oop-concepts-explained-in-javascript-c18864c2b9ad",
    },
    {
      id: 4,
      title: "Basic OOP Concepts Explained in JavaScript — Part 2",
      subtitle: "",
      img: "/images/articles/oop.webp",
      link: "https://blog.devgenius.io/basic-oop-concepts-explained-in-javascript-part-2-b7a56805a54c",
    },
    {
      id: 5,
      title: "Basic OOP Concepts Explained in JavaScript — Part 3",
      subtitle: "",
      img: "/images/articles/oop.webp",
      link: "https://blog.devgenius.io/basic-oop-concepts-explained-in-javascript-part-3-15be0a520a93",
    },
    {
      id: 6,
      title: "9 learning principles that the book “Ultralearning” taught me",
      subtitle: "",
      img: "/images/articles/ultralearning.webp",
      link: "https://medium.com/@williamliberos/9-learning-principles-that-the-book-ultralearning-taught-me-5d85f62ee0a7",
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
      <div className="articles-container grid mt-3 text-center gap-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full">
        {frontList.map((item, index) => (
          <div key={item.id}>
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
                    : item.subtitle.substring(0, 72) + "..."}
                </p>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
      <div>
        {frontList.length < list.length && (
          <ShowMoreButton pushItemToListFront={pushItemToListFront} />
        )}
        {frontList.length > 3 && (
          <ShowLessButton removeItemsFromList={removeItemsFromList} />
        )}
      </div>
    </div>
  );
}
