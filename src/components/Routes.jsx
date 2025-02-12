import React, { lazy, Suspense } from 'react';
import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom';
import Preloader from './Pre';
import Home from './Home/Home';
import MainLayout from './Layout/MainLayout';

// Lazy-loaded components with loading chunks
const Projects = lazy(() => import('./Projects/Projects' /* webpackChunkName: "projects" */));
const About = lazy(() => import('./About/About' /* webpackChunkName: "about" */));
const Resume = lazy(() => import('./Resume/Resume' /* webpackChunkName: "resume" */));
const MiniGame = lazy(() => import('./MiniGame/MiniGame' /* webpackChunkName: "minigame" */));

function Routes() {
    return (
        <MainLayout>
            <Suspense 
                fallback={
                    <Preloader load={true} />
                }
            >
                <RouterRoutes>
                    <Route path="/" element={<Home />} />
                    <Route 
                        path="/projects" 
                        element={
                            <Suspense fallback={<Preloader load={true} />}>
                                <Projects />
                            </Suspense>
                        } 
                    />
                    <Route 
                        path="/about" 
                        element={
                            <Suspense fallback={<Preloader load={true} />}>
                                <About />
                            </Suspense>
                        } 
                    />
                    <Route 
                        path="/resume" 
                        element={
                            <Suspense fallback={<Preloader load={true} />}>
                                <Resume />
                            </Suspense>
                        } 
                    />
                    <Route 
                        path="/minigame" 
                        element={
                            <Suspense fallback={<Preloader load={true} />}>
                                <MiniGame />
                            </Suspense>
                        } 
                    />
                    <Route path="*" element={<Navigate to="/"/>} />
                </RouterRoutes>
            </Suspense>
        </MainLayout>
    );
}

export default Routes;
