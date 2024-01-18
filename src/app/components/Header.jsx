"use client"
import React from "react";
import { useState, useEffect, useRef } from "react";
import { Roboto } from 'next/font/google'
import {Switch, Avatar, Navbar, NavbarBrand, NavbarContent, NavbarMenuItem, Link, Button, NavbarMenuToggle, NavbarMenu} from "@nextui-org/react";
import {MoonIcon} from "../icons/MoonIcon";
import {SunIcon} from "../icons/SunIcon";
import {useTheme} from "next-themes";
import '../custom.css'
import '../globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ["100", "300", "400", "500", "700", "900"],
})

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [userViewport, setUserViewport] = useState();
  const { theme, setTheme } = useTheme('');
  const [offsetX, setOffsetX] = useState('');
  const [offsetY, setOffsetY] = useState('');
  const [friction, setFriction] = useState(1 / 32);
  const headerRef = useRef(null);
  const identityRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  
  const menuItems = [
    "Sobre mim",
    "Projetos",
    'Skills',
    "Artigos",
    "Currículo",
  ];

  let bgColor = 
    theme == 'light' 
      ? {backgroundColor: 'rgb(243, 244, 246, 0.8)', borderColor: 'black'}
      : {backgroundColor: 'rgb(15, 23, 42, 0.8)', borderColor: 'white'};

  let mobileMenuColors = 
    theme == 'light' 
      ? {
          backgroundColor: 'rgb(243, 244, 246, 0.8)', 
          borderColor: 'black', 
          color: 'black', 
          backdropFilter: 'blur(5px)', 
          position: 'fixed', 
          paddingTop: '15px', 
          paddingBottom: '15px'
        }
      : {
          backgroundColor: 'rgb(15, 23, 42, 0.8)', 
          borderColor: 'black', 
          color: 'white', 
          backdropFilter: 'blur(5px)',
          position: 'fixed',
          paddingTop: '15px', 
          paddingBottom: '15px'
        };

  let mobileMenuContentColors = 
    theme == 'light' 
      ? {
          backgroundColor: 'rgb(243, 244, 246, 0.8)',
          color: 'black',
          marginTop: '30px',
          backdropFilter: 'blur(5px)' 
        }
      : {
          backgroundColor: 'rgb(15, 23, 42, 0.8)',
          color: 'white',
          marginTop: '30px',
          backdropFilter: 'blur(5px)' 
        };

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

  const _animateStickyNavbar = (e) => {
    if (headerRef.current != null && window.pageYOffset >= headerRef.current.offsetHeight) {
      headerRef.current.classList.add("sticky");
      identityRef.current.style.display = 'none';
    } else if(headerRef.current != null && window.innerWidth < 900){
      
    } else if(headerRef.current != null) {
      headerRef.current.classList.remove("sticky");
      identityRef.current.style.display = 'flex';
    }
  }

  useEffect(() => {
    setMounted(true);
    if(theme == 'dark'){
      setIsSelected(true)
    }
    _animateStickyNavbar();
    window.addEventListener('mousemove', _mouseMove);
    window.addEventListener('scroll', _animateStickyNavbar);
    window.addEventListener('resize', setUserViewport);
    return () => {
      window.addEventListener('mousemove', _mouseMove);
      window.addEventListener('scroll', _animateStickyNavbar);
      window.addEventListener('resize', setUserViewport);
    };
  }, [mounted, headerRef]);

  if (!mounted) {
    return null;
  }

  return (
    <section className="flex flex-col items-center justify-between">
      {userViewport > 900 || window.innerWidth > 900 && (<div
        id="header"
        className="header w-full flex justify-between items-center px-20 pt-5 pb-4"
        style={bgColor}
        ref={headerRef}
      >
        <div className='h-fit flex justify-center items-center profile-picture-container' style={offset} ref={identityRef}>
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
      </div>)}

      {userViewport < 900 || window.innerWidth < 900 && (
        <Navbar onMenuOpenChange={setIsMenuOpen} style={mobileMenuColors}>
          <NavbarContent>
            <div className="flex justify-between w-full items-center">
              <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              />

              <div className='h-fit flex justify-center items-center profile-picture-container' style={offset} ref={identityRef}>
                <img width={'70px'} className="profile-picture" src="/images/profile-picture.jpeg" alt="" />
                <span className={roboto.className+" font-bold text-2xl firstName-highlight firstNameSpacer"}>William</span>
                <span className={roboto.className+" font-bold text-2xl"}> Libero</span>
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
          </NavbarContent>

          <NavbarMenu  style={mobileMenuContentColors}>
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  color={mobileMenuContentColors.color}
                  className="w-full no-underline light:text-slate-950"
                  href="#"
                  size="lg"
                  style={{color: theme == 'light' ? 'black' : 'white'}}
                >
                  {item}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
      )}
    </section>
  )
}
