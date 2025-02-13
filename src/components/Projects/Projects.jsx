import React, {lazy, Suspense, useEffect, useRef} from "react";
import {
    Container,
    SimpleGrid,
    Box,
    Heading,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCards";
import {FormattedMessage, useIntl} from 'react-intl';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import captcha_eval from "../../Assets/Projects/captcha-eval-min_1.webp";
import anticheat from "../../Assets/Projects/anticheat-test-min_1.webp";
import warehouse_project from "../../Assets/Projects/logo-warehouse-min_1.webp";
import bloomshare from "../../Assets/Projects/bloomshare.png";
import treedots from "../../Assets/Projects/tree-dots-min_1.webp";

const Particle = lazy(() => import("../Particle"));
const MotionHeading = motion(Heading);
const MotionSimpleGrid = motion(SimpleGrid);

const projects = [
    {
        imgPath: bloomshare,
        titleId: "projects.bloomShare.title",
        descriptionId: "projects.bloomShare.description",
        demoLink: "https://flowers.box-xo.com",
        showContactButton: true,
        status: "live",
    },
    {
        imgPath: warehouse_project,
        titleId: "projects.warehouse.title",
        descriptionId: "projects.warehouse.description",
        demoLink: "https://t.me/WarehouseDealsItalia",
        status: "live",
    },
    {
        imgPath: captcha_eval,
        titleId: "projects.captcha.title",
        descriptionId: "projects.captcha.description",
        showContactButton: true,
        status: "inDevelopment",
    },
    {
        imgPath: anticheat,
        titleId: "projects.anticheat.title",
        descriptionId: "projects.anticheat.description",
        ghLink: "https://github.com/boxxello/Fivem",
        status: "discontinued",
    },
    {
        imgPath: treedots,
        titleId: "projects.more.title",
        descriptionId: "projects.more.description",
        isComingSoon: true,
        status: "comingSoon",
    },
];

function Projects() {
    const intl = useIntl();
    const bgColor = useColorModeValue("background.light", "background.dark");
    const headingColor = useColorModeValue("primary.light", "primary.dark");
    const projectsRef = useRef(null);
    const gridRef = useRef(null);

    const containerAnimation = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.2
            }
        }
    };

    const itemAnimation = {
        hidden: { opacity: 0, y: 20, scale: 0.9 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    useEffect(() => {
        // Animate project cards on component mount
        const projectCards = gridRef.current.children;
        Array.from(projectCards).forEach((card, index) => {
            gsap.fromTo(card,
                {
                    opacity: 0,
                    y: 30,
                    scale: 0.95,
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.5,
                    ease: "power2.out",
                    delay: 0.3 + (index * 0.15),
                }
            );
        });
    }, []);

    return (
        <Box 
            position="relative" 
            bg={bgColor} 
            py={20} 
            overflow="hidden"
            ref={projectsRef}
            minH="100vh"
            display="flex"
            flexDirection="column"
        >
            <Suspense fallback={<div>Loading...</div>}>
                <Particle />
            </Suspense>

            <Container maxW="container.xl" flex="1" display="flex" flexDirection="column">
                <MotionHeading
                    className="projects-heading"
                    as="h1"
                    size="lg"
                    mb={16}
                    textAlign="center"
                    color={headingColor}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        ease: "easeOut"
                    }}
                >
                    <FormattedMessage id="projects.title" defaultMessage="My Recent Works" />
                </MotionHeading>

                <Text
                    textAlign="center"
                    mb={12}
                    fontSize={{ base: "sm", md: "md" }}
                    maxW="container.md"
                    mx="auto"
                >
                    <FormattedMessage id="projects.subtitle" defaultMessage="Here are a few projects I've worked on recently" />
                </Text>

                <MotionSimpleGrid
                    ref={gridRef}
                    columns={{ base: 1, md: 2, lg: 3 }}
                    spacing={{ base: 6, md: 10 }}
                    initial="hidden"
                    animate="show"
                    variants={containerAnimation}
                    flex="1"
                    alignContent="flex-start"
                >
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            imgPath={project.imgPath}
                            title={<FormattedMessage id={project.titleId} />}
                            description={<FormattedMessage id={project.descriptionId} />}
                            ghLink={project.ghLink}
                            demoLink={project.demoLink}
                            showContactButton={!project.isComingSoon && project.showContactButton}
                            isComingSoon={project.isComingSoon}
                            status={project.status}
                        />
                    ))}
                </MotionSimpleGrid>
            </Container>
        </Box>
    );
}

export default Projects;
