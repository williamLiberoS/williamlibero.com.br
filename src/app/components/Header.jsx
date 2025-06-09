"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { Roboto } from "next/font/google";
import {
  Switch,
  Navbar,
  NavbarContent,
  NavbarMenuItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
} from "@nextui-org/react";
import LanguageMenu from "./languageMenu/languageMenu";
import { MoonIcon } from "../icons/MoonIcon";
import { SunIcon } from "../icons/SunIcon";
import { useSelector } from "react-redux";
import { useTheme } from "next-themes";
import "../custom.css";
import "../globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function Header() {
  const language = useSelector((state) => state.language);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [userViewport, setUserViewport] = useState();
  const { theme, setTheme } = useTheme("");
  const [offsetX, setOffsetX] = useState("");
  const [offsetY, setOffsetY] = useState("");
  const [friction, setFriction] = useState(1 / 32);
  const headerRef = useRef(null);
  const identityRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [mobileHeaderAnchorItems, setMobileHeaderAnchorItems] = useState([]);

  let bgColor =
    theme == "light"
      ? { backgroundColor: "rgb(243, 244, 246, 0.8)", borderColor: "black" }
      : { backgroundColor: "rgb(15, 23, 42, 0.8)", borderColor: "white" };

  let mobileMenuColors =
    theme == "light"
      ? {
          backgroundColor: "rgb(243, 244, 246, 0.8)",
          borderColor: "black",
          color: "black",
          backdropFilter: "blur(5px)",
          position: "fixed",
          paddingTop: "15px",
          paddingBottom: "15px",
        }
      : {
          backgroundColor: "rgb(15, 23, 42, 0.8)",
          borderColor: "black",
          color: "white",
          backdropFilter: "blur(5px)",
          position: "fixed",
          paddingTop: "15px",
          paddingBottom: "15px",
        };

  let mobileMenuContentColors =
    theme == "light"
      ? {
          backgroundColor: "rgb(243, 244, 246, 0.8)",
          color: "black",
          marginTop: "30px",
          backdropFilter: "blur(5px)",
        }
      : {
          backgroundColor: "rgb(15, 23, 42, 0.8)",
          color: "white",
          marginTop: "30px",
          backdropFilter: "blur(5px)",
        };

  let offset = {
    transform: `translate(-0%, -0%) perspective(600px)
                rotateY(${offsetX}deg)
                rotateX(${offsetY}deg)`,
  };

  const definesMobileHeaderAnchorItems = () => {
    return [
      {
        id: 1,
        title: language.langText.headerItems.about,
        link: "#generalContainer",
      },
      {
        id: 2,
        title: language.langText.headerItems.projects,
        link: "#projectsSection",
      },
      {
        id: 3,
        title: language.langText.headerItems.articles,
        link: "#articlesSection",
      },
      {
        id: 4,
        title: language.langText.headerItems.freelances,
        link: "#freelancesSection",
      },
      {
        id: 5,
        title: language.langText.headerItems.skills,
        link: "#skillsSection",
      },
      {
        id: 6,
        title: language.langText.headerItems.experience,
        link: "#experienceSection",
      },
    ];
  };

  const _mouseMove = (e) => {
    let followX = window.innerWidth / 2 - e.clientX;
    let followY = window.innerHeight / 2 - e.clientY;

    let x = 0,
      y = 0;
    x += (-followX - x) * friction;
    y += (followY - y) * friction;
    setOffsetX(x);
    setOffsetY(y);
  };

  const _animateStickyNavbar = (e) => {
    if (
      headerRef.current != null &&
      window.pageYOffset >= headerRef.current.offsetHeight
    ) {
      headerRef.current.classList.add("sticky");
      identityRef.current.style.display = "none";
    } else if (headerRef.current != null && window.innerWidth < 900) {
    } else if (headerRef.current != null) {
      headerRef.current.classList.remove("sticky");
      identityRef.current.style.display = "flex";
    }
  };

  useEffect(() => {
    setMounted(true);
    if (theme == "dark") {
      setIsSelected(true);
    }
    _animateStickyNavbar();
    window.addEventListener("mousemove", _mouseMove);
    window.addEventListener("scroll", _animateStickyNavbar);
    window.addEventListener("resize", setUserViewport);
    setMobileHeaderAnchorItems(definesMobileHeaderAnchorItems());
    return () => {
      window.addEventListener("mousemove", _mouseMove);
      window.addEventListener("scroll", _animateStickyNavbar);
      window.addEventListener("resize", setUserViewport);
    };
  }, [mounted, headerRef, language]);

  if (!mounted) {
    return null;
  }

  const goToClickedSection = (clickedSection) => {
    const targetElement = document.getElementById(clickedSection);

    if (targetElement) {
      if (window.scrollY == 0 || window.pageYOffset == 0) {
        const rect = targetElement.getBoundingClientRect();
        const anchorPositionReducer =
          clickedSection == "projectsSection" ? 75 : 110;
        const targetElementAnchorPosition =
          rect.top + window.scrollY - anchorPositionReducer;

        window.scrollTo({
          top: targetElementAnchorPosition,
          behavior: "smooth",
        });
      } else {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section className="flex flex-col items-center justify-between">
      {userViewport > 900 ||
        (window.innerWidth > 900 && (
          <div
            id="header"
            className="header w-full flex justify-between items-center px-10 pt-5 pb-4"
            style={bgColor}
            ref={headerRef}
          >
            <div
              className="h-fit flex justify-center items-center profile-picture-container"
              ref={identityRef}
            >
              <img
                width={"70px"}
                className="profile-picture"
                src="/images/profile-picture.jpg"
                alt=""
              />
              <div style={offset}>
                <span
                  className={
                    roboto.className +
                    " font-bold text-2xl firstName-highlight firstNameSpacer"
                  }
                >
                  William
                </span>
                <span className={roboto.className + " font-bold text-2xl"}>
                  {" "}
                  Libero
                </span>
              </div>
            </div>
            <div className="h-fit grid page-sections justify-items-center">
              <ul className="list-none">
                <li onClick={() => goToClickedSection("generalContainer")}>
                  {language.langText.headerItems.about}
                </li>
                <li onClick={() => goToClickedSection("projectsSection")}>
                  {language.langText.headerItems.projects}
                </li>
                <li onClick={() => goToClickedSection("articlesSection")}>
                  {language.langText.headerItems.articles}
                </li>
                <li onClick={() => goToClickedSection("freelancesSection")}>
                  {language.langText.headerItems.freelances}
                </li>
                <li onClick={() => goToClickedSection("skillsSection")}>
                  {language.langText.headerItems.skills}
                </li>
                <li onClick={() => goToClickedSection("experienceSection")}>
                  {language.langText.headerItems.experience}
                </li>
              </ul>
            </div>
            <div className="h-fit flex justify-between items-center">
              <LanguageMenu />
              <Switch
                isSelected={isSelected}
                onValueChange={setIsSelected}
                onClick={() =>
                  !isSelected ? setTheme("dark") : setTheme("light")
                }
                defaultSelected
                size="lg"
                color="warning"
                className="ml-3 mr-1"
                startContent={<SunIcon />}
                endContent={<MoonIcon />}
              ></Switch>
            </div>
          </div>
        ))}

      {userViewport < 900 ||
        (window.innerWidth < 900 && (
          <Navbar
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            style={mobileMenuColors}
            className="navbarcontent"
          >
            <NavbarContent>
              <div className="flex justify-between w-full items-center">
                <NavbarMenuToggle
                  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                  style={{ zIndex: "123" }}
                />
                <div
                  className="w-full h-fit flex justify-between items-center profile-picture-container"
                  ref={identityRef}
                >
                  <div className="header-config-container flex items-center">
                    <img
                      width={"70px"}
                      className="profile-picture"
                      src="/images/profile-picture.jpeg"
                      alt=""
                    />
                    <span
                      className={
                        roboto.className +
                        " font-bold text-2xl firstName-highlight firstNameSpacer"
                      }
                    >
                      William
                    </span>
                    <span className={roboto.className + " font-bold text-2xl"}>
                      {" "}
                      Libero
                    </span>
                  </div>

                  <div className="h-fit flex justify-between items-center">
                    <LanguageMenu />
                    <Switch
                      isSelected={isSelected}
                      onValueChange={setIsSelected}
                      onClick={() =>
                        !isSelected ? setTheme("dark") : setTheme("light")
                      }
                      defaultSelected
                      size="lg"
                      color="warning"
                      className="ml-3 mr-1"
                      startContent={<SunIcon />}
                      endContent={<MoonIcon />}
                    ></Switch>
                  </div>
                </div>
              </div>
            </NavbarContent>

            <NavbarMenu style={mobileMenuContentColors}>
              {mobileHeaderAnchorItems.map((item) => (
                <NavbarMenuItem key={item.id}>
                  <Link
                    color={mobileMenuContentColors.color}
                    className="w-full no-underline light:text-slate-950"
                    href={item.link}
                    size="lg"
                    style={{ color: theme == "light" ? "black" : "white" }}
                    onPress={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                </NavbarMenuItem>
              ))}
            </NavbarMenu>
          </Navbar>
        ))}
    </section>
  );
}
