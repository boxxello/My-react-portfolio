import React, {useState, useEffect, lazy, Suspense} from "react";
import { IntlProvider } from 'react-intl';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { PreferencesProvider, usePreferences } from "./hooks/usePreferences";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

// Components
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";

// Styles
import "./style.css";
import "./App.css";

// Locales
import messages_en from './locales/en.json';
import messages_it from './locales/it.json';

// Lazy-loaded components
const Projects = lazy(() => import("./components/Projects/Projects"));
const About = lazy(() => import("./components/About/About"));
const Resume = lazy(() => import("./components/Resume/Resume"));
const MiniGame = lazy(() => import("./components/MiniGame/MiniGame"));

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
                    <Navbar />
                    <Suspense fallback={<Preloader />}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/resume" element={<Resume />} />
                            <Route path="/minigame" element={<MiniGame />} />
                            <Route path="*" element={<Navigate to="/"/>} />
                        </Routes>
                    </Suspense>
                    <Footer />
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
