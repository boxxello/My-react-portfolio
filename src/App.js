import React, {useState, useEffect, lazy, Suspense} from "react";
import Preloader from "../src/components/Pre";
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


const About = lazy(() => import("./components/About/About").then(({default: About}) => ({default: About})));
const Projects = lazy(() => import("./components/Projects/Projects").then(({default: Projects}) => ({default: Projects})));
const Resume = lazy(() => import("./components/Resume/Resume").then(({Resume: Projects}) => ({default: Resume})));

function App() {

    const [load, updateLoad] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            updateLoad(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    return (

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
                <Footer/>
            </div>

        </BrowserRouter>
    );
}

export default App;
