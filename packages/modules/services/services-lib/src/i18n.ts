import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./resources/locales/en/translation.json";
import translationFR from "./resources/locales/fr/translation.json";
import translationAR from "./resources/locales/ar/translation.json";

const resources = {  
	en: {    
		translation: translationEN  
	},  
	fr: {    
		translation: translationFR 
	},
	ar: {    
		translation: translationAR 
	}
};


i18n
// load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
	.use(Backend)
// detect user language
	.use(LanguageDetector)
// pass the i18n instance to react-i18next.
	.use(initReactI18next)
// init i18next
// for all options read: https://www.i18next.com/overview/configuration-options
	.init({
		resources,
		lng: 'ar',
		fallbackLng: "en", // use en if detected lng is not available
		debug: false
	});

export default i18n;