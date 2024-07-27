import { createSlice } from "@reduxjs/toolkit";
import { getLanguageJSON } from "../../locales/index.js";

export const languageSlice = createSlice({
  name: "language",
  initialState: {
    value: "ptBr",
    langText: getLanguageJSON("ptBr"),
  },
  reducers: {
    changeLanguage: (state) => {
      if (state.value === "ptBr") {
        state.value = "en";
        state.langText = getLanguageJSON("en");
      } else {
        state.value = "ptBr";
        state.langText = getLanguageJSON("ptBr");
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeLanguage } = languageSlice.actions;

export default languageSlice.reducer;
