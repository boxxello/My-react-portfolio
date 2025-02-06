import React, {useState, useEffect, lazy, Suspense, startTransition} from "react";
import { IntlProvider } from 'react-intl';
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import './components/styles/footer.css';
import './components/styles/navbar.css';
import './components/styles/preloader.css';
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import "./style.css";
import "./App.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'

import ScrollToTop from "./components/ScrollToTop";

import messages_en from './locales/en.json';
import messages_it from './locales/it.json';

const messages = {
    'en': messages_en,
    'it': messages_it,
};

const About = lazy(() => import("./components/About/About").then(({default: About}) => ({default: About})));
const Projects = lazy(() => import("./components/Projects/Projects").then(({default: Projects}) => ({default: Projects})));
const Resume = lazy(() => import("./components/Resume/Resume").then(({default: Projects}) => ({default: Projects})));

function App() {
    const [load, updateLoad] = useState(true);
    const [locale, setLocale] = useState('en');

    useEffect(() => {
        const timer = setTimeout(() => {
            updateLoad(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <IntlProvider locale={locale} messages={messages[locale]}>
            {/*{startTransition(() => (*/}
                <BrowserRouter>
                    <Preloader load={load}/>
                    <div className="App" id={load ? "no-scroll" : "scroll"}>
                        <Navbar/>
                        <ScrollToTop/>

                        <Routes>
                            <Route path="/" exact element={<Home/>}/>

                            <Route path="/project" element={
                                <Suspense fallback={<Preloader load={load}/>}>
                                    <Projects/>
                                </Suspense>}/>

                            <Route path="/about" element={
                                <Suspense fallback={<Preloader load={load}/>}>
                                    <About/>
                                </Suspense>}/>

                            <Route path="/resume" element={
                                <Suspense fallback={<Preloader load={load}/>}>
                                    <Resume/>
                                </Suspense>}/>

                            <Route path={"*"} exact element={
                                <Suspense fallback={<Preloader load={load}/>}>
                                    <Navigate to="/"/>
                                </Suspense>}/>

                        </Routes>
                        <Footer changeLanguage={setLocale} currentLocale={locale}/>
                    </div>
                </BrowserRouter>
            {/*))}*/}
        </IntlProvider>
    );
}

export default App;
