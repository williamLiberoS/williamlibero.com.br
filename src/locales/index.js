import ptBr from "./ptBr.json";
import en from "./en.json";

export function getLanguageJSON(language) {
  switch (language) {
    case "ptBr":
      return ptBr;

    case "en":
      return en;
  }
}
