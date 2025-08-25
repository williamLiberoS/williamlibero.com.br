import React from "react";
import { Roboto } from "next/font/google";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import "./freelances.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function Freelances() {
  const list = [
    {
      id: 1,
      title: "Alarcon Advogados",
      img: "/images/freelances/alarcon.webp",
      link: "https://alarconadvogados.com/",
    }
  ];

  return (
    <div className="generic-container mt-3 flex flex-col items-end">
      <div className="freelance-container grid mt-2 text-center gap-1 max-[500px]:grid-cols-1 max-[780px]:grid-cols-2 grid-cols-3 w-full">
        {list.map((item, index) => (
          <Card
            isPressable
            shadow="sm"
            key={index}
            onPress={() => window.open(item.link, "blank")}
            className="freelance-card w-full mb-3"
          >
            <CardBody className="overflow-visible p-0 flex-none">
              <Image
                isZoomed
                shadow="sm"
                radius="lg"
                className="freelance-image object-fill"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="flex-col items-center">
              <span className="mt-1 font-medium text-xl">{item.title}</span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
