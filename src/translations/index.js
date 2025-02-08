import en from '../locales/en.json';
import it from '../locales/it.json';

export const messages = {
    en,
    it
};

export const SUPPORTED_LANGUAGES = ['en', 'it'];

export const getDefaultLanguage = () => {
    const browserLang = navigator.language.split('-')[0];
    return SUPPORTED_LANGUAGES.includes(browserLang) ? browserLang : 'en';
};
