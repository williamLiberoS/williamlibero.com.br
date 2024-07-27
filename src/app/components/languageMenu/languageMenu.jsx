"use client";
import React, { useState } from "react";
import { Roboto } from "next/font/google";
import { Switch } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { changeLanguage } from "../../store/languageSlice";
import { useSelector } from "react-redux";
import "./languageMenu.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function LanguageMenu() {
  const language = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const [isSelected, setIsSelected] = useState(false);

  const changeLanguageInStore = (language) => {
    if (language === "ptBr") {
      dispatch(changeLanguage("en"));
    } else {
      dispatch(changeLanguage("ptBr"));
    }
  };

  return (
    <div className="flex justify-center items-center switch-container">
      <span className="language-switch-title">PT-BR</span>
      <Switch
        isSelected={isSelected}
        onValueChange={setIsSelected}
        onClick={() => changeLanguageInStore(language)}
        defaultSelected
        size="lg"
        color="default"
        className="language-switch"
      ></Switch>
      <span className="language-switch-title">EN</span>
    </div>
  );
}
