import { useTheme } from "next-themes";
import React from "react";
import { Button } from "@nextui-org/react";
import { FaMinus } from "react-icons/fa";

export default function ShowLessButton(props) {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      className="w-fit ml-3"
      onClick={props.removeItemsFromList}
      style={{
        backgroundColor: theme == "light" ? "white" : "rgb(15, 23, 42, 0.8)",
        color: theme == "light" ? "black" : "white",
        borderColor: theme == "light" ? "black" : "white",
      }}
      variant="bordered"
      size="md"
    >
      Mostrar menos <FaMinus />
    </Button>
  );
}
