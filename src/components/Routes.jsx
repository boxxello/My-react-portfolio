import React, { lazy, Suspense } from 'react';
import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom';
import Preloader from './Pre';
import Home from './Home/Home';
import MainLayout from './Layout/MainLayout';

// Lazy-loaded components
const Projects = lazy(() => import('./Projects/Projects'));
const About = lazy(() => import('./About/About'));
const Resume = lazy(() => import('./Resume/Resume'));
// const MiniGame = lazy(() => import('./MiniGame/MiniGame'));

function Routes() {
    return (
        <MainLayout>
            <Suspense fallback={<Preloader />}>
                <RouterRoutes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/resume" element={<Resume />} />
                    {/*<Route path="/minigame" element={<MiniGame />} />*/}
                    <Route path="*" element={<Navigate to="/"/>} />
                </RouterRoutes>
            </Suspense>
        </MainLayout>
    );
}

export default Routes;
