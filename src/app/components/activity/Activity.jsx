import React from "react";
import { useEffect, useState } from "react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import { Roboto } from 'next/font/google'
import './activity.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ["100", "300", "400", "500", "700", "900"],
})

export default function Activity() {
  return (
    <div className="generic-container w-4/5 flex flex-col items-center justify-center">
      <span className="text-2xl font-bold relative">
        Áreas de atuação
      </span>
      <div className="grid lg:grid-cols-3 lg:gap-3 mt-5 w-full">
        <div className="w-full flex items-center border-2 rounded-md p-4 shadow-md lg:mt-0 mt-5" style={{flexFlow: 'column'}}>
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
          <span>
            Com experiência em Vue.js, React.js e Next.js, posso criar interfaces responsivas e intuitivas. 
            Busco proporcionar uma experiência de usuário eficiente. 
            Seja desenvolvendo um site corporativo, uma loja virtual ou uma aplicação web complexa.
          </span>
        </div>
        <div className="w-full flex items-center border-2 rounded-md p-4 shadow-md lg:mt-0 mt-5" style={{flexFlow: 'column'}}>
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
          <span>
            No back-end, tenho experiência em Php, Laravel e Nest.js. Através do desenvolvimento da lógica 
            e da integração com o bancos de dados, garanto que as aplicações funcionem de maneira eficaz nos bastidores. 
            E com as habilidades descritas consigo criar sistemas escaláveis, APIs RESTful e gerenciar conteúdo dinâmico.
          </span>
        </div>
        <div className="w-full flex items-center border-2 rounded-md p-4 shadow-md lg:mt-0 mt-5" style={{flexFlow: 'column'}}>
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
          <span>
            Tenho conhecimentos nas tecnologias Docker, Docker Compose, Kubernetes, AWS EC2, AWS S3 e AWS EKS.
          </span>
        </div>
      </div>
    </div>
  )
}