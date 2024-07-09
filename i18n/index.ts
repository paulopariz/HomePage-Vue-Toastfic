import pt from "./pt.json";
import en from "./en.json";
import es from "./es.json";
import fr from "./fr.json";
import it from "./it.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: localStorage.getItem("language") || "en",
  messages: {
    pt,
    es,
    en,
    fr,
    it,
  },
}));
