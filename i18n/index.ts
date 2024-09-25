import pt from "./pt.json";
import en from "./en.json";
import es from "./es.json";
import fr from "./fr.json";
import it from "./it.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: process.client ? localStorage.getItem("language") || "en" : "en",
  messages: {
    pt,
    es,
    en,
    fr,
    it,
  },
}));
