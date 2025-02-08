import React, {useState, useEffect} from "react";
import { IntlProvider } from 'react-intl';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { PreferencesProvider, usePreferences } from "./hooks/usePreferences";
import { BrowserRouter } from "react-router-dom";

// Components
import Preloader from "./components/Pre";
import Routes from "./components/Routes";

// Styles
import "./style.css";
import "./App.css";

// Locales
import messages_en from './locales/en.json';
import messages_it from './locales/it.json';

const messages = {
    'en': messages_en,
    'it': messages_it
};

function AppContent() {
    const [load, setLoad] = useState(true);
    const { language } = usePreferences();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoad(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <IntlProvider messages={messages[language]} locale={language} defaultLocale="en">
            <BrowserRouter>
                <Preloader load={load}/>
                <div className="App" id={load ? "no-scroll" : "scroll"}>
                    <Routes />
                </div>
            </BrowserRouter>
        </IntlProvider>
    );
}

function App() {
    return (
        <ChakraProvider>
            <ColorModeScript initialColorMode="system" />
            <PreferencesProvider>
                <AppContent />
            </PreferencesProvider>
        </ChakraProvider>
    );
}

export default App;
