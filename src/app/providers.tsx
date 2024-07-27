"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Provider } from "react-redux";
import store from "../app/store/store";

export function ThemeProvider({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return (
    <NextUIProvider>
      <NextThemesProvider
        enableSystem={true}
        {...props}
        attribute="class"
        defaultTheme="light"
      >
        <Provider store={store}>{children}</Provider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
