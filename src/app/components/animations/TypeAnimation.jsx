import React from "react";
import { Roboto } from 'next/font/google'
import { TypeAnimation } from 'react-type-animation';
import { useState } from "react";
import './TypeAnimation.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ["100", "300", "400", "500", "700", "900"],
})

export default function TypeAnimations() {
  const [currentType, setCurrentType] = useState('ola');
  const [backgroundTextColor, setBackgroundTextColor] = useState('#ffb703');
  const [displaysIconAnimation, setDisplaysIconAnimation] = useState('');
  const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';

  return (
    <>
    <div className="w-full typedAnimationContainer">
      <div 
        style={{
          width: 'fit-content',
          float: 'left',
        }}
      >
        {currentType.includes('ola') && 
          <TypeAnimation
            cursor={false}
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'Olá, me chamo ',
              (el) => {setCurrentType(currentType+'name'), el.classList.remove(CURSOR_CLASS_NAME)},
              1000,
            ]}
            wrapper="span"
            className={CURSOR_CLASS_NAME+" text-3xl font-semibold"}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={0}
          />
        }
        {currentType.includes('name') && 
          <TypeAnimation
            cursor={false}
            sequence={[
              '',
              (el) => el.classList.add(CURSOR_CLASS_NAME),
              10,
              ' William ',
              (el) => {setCurrentType(currentType+'job'), el.classList.remove(CURSOR_CLASS_NAME)},
              1000,
            ]}
            speed={1}
            wrapper="span"
            className={CURSOR_CLASS_NAME+" text-3xl font-bold firstName-highlight "+roboto.className}
            style={{ color: '#4c8df5' }}
            repeat={0}
          />
        }
        {currentType.includes('job') && 
          <TypeAnimation
            cursor={false}
            sequence={[
              '',
              (el) => el.classList.add(CURSOR_CLASS_NAME),
              10,
              '  e sou desenvolvedor ',
              (el) => {setCurrentType(currentType+' devtypes'), el.classList.remove(CURSOR_CLASS_NAME)},
              1000,
            ]}
            wrapper="span"
            className={CURSOR_CLASS_NAME+" text-3xl font-semibold"}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={0}
          />
        }
      </div>
      {currentType.includes('devtypes') && 
        <div style={{
          backgroundColor: backgroundTextColor,
          transition: 'background-color 1000ms linear',
          width: 'fit-content',
          float: 'left',  
          marginLeft: '8px'
        }}
        >
          <TypeAnimation
            cursor={false}
            sequence={[
              '',
              (el) => el.classList.add(CURSOR_CLASS_NAME),
              10,
                ' front-end.',
              (el) => {setBackgroundTextColor('#ffb703'), el.classList.remove(CURSOR_CLASS_NAME), setDisplaysIconAnimation('missed')},
              1000,
              (el) => {el.classList.add(CURSOR_CLASS_NAME)},
              ' back-end.',
              (el) => {setBackgroundTextColor('#ffb703'), el.classList.remove(CURSOR_CLASS_NAME), setDisplaysIconAnimation('missed missed1')},
              1000,
              '',
              () => {setBackgroundTextColor('#80b918')},
              10,
              (el) => {el.classList.add(CURSOR_CLASS_NAME)},
              ' full-stack.',
              (el) => {setCurrentType(currentType+' description'), el.classList.remove(CURSOR_CLASS_NAME), setDisplaysIconAnimation('missed missed1 correct')},
              1000,
              ' full-stack.',
              () => {setBackgroundTextColor('transparent')},
              10,
            ]}
            wrapper="span"
            className={CURSOR_CLASS_NAME+" text-3xl font-semibold"}
            style={{ fontSize: '2em', display: 'inline-block'}}
            repeat={0}
          />
        </div>
      }
      <div 
        style={{
          width: 'fit-content',
        }}
      >
        {currentType.includes('description') && 
          <TypeAnimation
            cursor={false}
            sequence={[
              '',
              (el) => el.classList.add(CURSOR_CLASS_NAME),
              10,
              'Gosto de criar sites e aplicações web que envolvem integrações com APIs e bancos de dados.',
              (el) => {el.classList.remove(CURSOR_CLASS_NAME)},
              1000,
            ]}
            wrapper="span"
            className={CURSOR_CLASS_NAME+" text-3xl font-normal"}
            style={{ fontSize: '2em', display: 'inline-block'}}
            repeat={0}
          />
        }
      </div>
    </div>
    
    {displaysIconAnimation.includes('missed') && 
      <div className="animated-icon-missed disappear">
        <img width={'50px'} src="/images/warning-icon.png" alt="" />
      </div>
    }
    
    {displaysIconAnimation.includes('missed1') && 
      <div className="animated-icon-missed1 disappear">
        <img width={'50px'} src="/images/warning-icon.png" alt="" />
      </div>
    }
    {displaysIconAnimation.includes('correct') && 
      <div className="animated-icon-correct disappear">
        <img width={'50px'} src="/images/check-icon.png" alt="" />
      </div>
    }
    </>
  )
}