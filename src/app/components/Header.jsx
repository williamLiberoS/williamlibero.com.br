"use client"
import React from "react";
import { useState, useEffect } from "react";
import { Roboto } from 'next/font/google'
import {Switch} from "@nextui-org/react";
import {MoonIcon} from "../icons/MoonIcon";
import {SunIcon} from "../icons/SunIcon";
import {useTheme} from "next-themes";
import '../custom.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ["100", "300", "400", "500", "700", "900"],
})

export default function Header() {
  const [isSelected, setIsSelected] = useState(false);
  const { theme, setTheme } = useTheme()
  const [offsetX, setOffsetX] = useState('');
  const [offsetY, setOffsetY] = useState('');
  const [friction, setFriction] = useState(1 / 32);

  let offset = {
    transform: `translate(-0%, -0%) perspective(600px)
                rotateY(${offsetX}deg)
                rotateX(${offsetY}deg)`
               }

  const _mouseMove = (e) => {
    let followX = (window.innerWidth / 2 - e.clientX);
    let followY = (window.innerHeight / 2 - e.clientY);

    let x = 0,
        y = 0;
    x +=( (-followX - x) * friction);
    y += (followY - y) * friction;
    setOffsetX(x);
    setOffsetY(y);
  }

  useEffect(() => {
    window.addEventListener('mousemove', _mouseMove);
    return () => {
      window.addEventListener('mousemove', _mouseMove);
    };
  }, []);

  return (
    <section className="flex flex-col items-center justify-between">
      <div className="header w-full flex justify-between items-center px-20 py-10">
        <div className='h-fit flex justify-center items-center' style={offset}>
            <img width={'70px'} className="profile-picture" src="/images/profile-picture.jpeg" alt="" />
            <span className={roboto.className+" font-bold text-2xl firstName-highlight firstNameSpacer"}>William</span>
            <span className={roboto.className+" font-bold text-2xl"}> Libero</span>
        </div>
        <div className="h-fit grid page-sections justify-items-center">
          <ul className='list-none'>
            <li>Sobre mim</li>
            <li>Projetos</li>
            <li>Skills</li>
            <li>Artigos</li>
            <li>Currículo</li>
          </ul>
        </div>
        <div className='h-fit flex justify-between items-center'>
          <SunIcon style={{ 'opacity': !isSelected ? '1' : '0.5' }}/>
          <Switch
            isSelected={isSelected}
            onValueChange={setIsSelected}
            onClick={() => !isSelected ? setTheme('dark') : setTheme('light')}
            defaultSelected
            size="lg"
            color="primary"
            className="ml-3 mr-1"
          >
          </Switch>
          <MoonIcon style={{ 'opacity': isSelected ? '1' : '0.5' }}/>
        </div>
      </div>
    </section>
  )
}
