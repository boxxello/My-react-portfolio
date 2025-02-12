import React, {useState, useEffect} from "react";
import { IntlProvider } from 'react-intl';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { PreferencesProvider, usePreferences } from "./hooks/usePreferences";
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Components
import Preloader from "./components/Pre";
import Routes from "./components/Routes";
import CustomCursor from "./components/CustomCursor/CustomCursor";

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
        // Show loader for minimum time to prevent flash
        const minLoadTime = 1200;
        const startTime = Date.now();

        const handleLoad = () => {
            const elapsedTime = Date.now() - startTime;
            const remainingTime = Math.max(0, minLoadTime - elapsedTime);

            setTimeout(() => {
                setLoad(false);
            }, remainingTime);
        };

        // Start timer when component mounts
        const timer = setTimeout(handleLoad, minLoadTime);

        return () => clearTimeout(timer);
    }, []);

    return (
        <IntlProvider messages={messages[language]} locale={language} defaultLocale="en">
            <BrowserRouter>
                <AnimatePresence mode="wait">
                    {load && <Preloader load={load} />}
                </AnimatePresence>
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
            <CustomCursor />
            <PreferencesProvider>
                <AppContent />
            </PreferencesProvider>
        </ChakraProvider>
    );
}

export default App;
