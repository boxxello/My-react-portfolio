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
import {FormattedMessage} from 'react-intl';
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

function Projects() {
    const bgColor = useColorModeValue("gray.50", "gray.900");
    const headingColor = useColorModeValue("teal.600", "teal.200");
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

        // Heading animation
        const heading = document.querySelector('.projects-heading');
        gsap.fromTo(heading,
            {
                opacity: 0,
                y: -20,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out",
            }
        );

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
                    fontSize={{ base: "2xl", md: "4xl" }}
                    mb={16}
                    textAlign="center"
                    color={headingColor}
                    sx={{
                        fontFamily: "'Press Start 2P', cursive",
                        letterSpacing: "2px",
                    }}
                >
                    <FormattedMessage id="projects.title" defaultMessage="My Recent Works" />
                </MotionHeading>

                <Text
                    as={motion.p}
                    textAlign="center"
                    mb={16}
                    color={headingColor}
                    fontSize={{ base: "sm", md: "md" }}
                    variants={itemAnimation}
                    initial="hidden"
                    animate="show"
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
                    <ProjectCard
                        imgPath={bloomshare}
                        title={<FormattedMessage id="projects.bloomShare.title" defaultMessage="BloomShare" />}
                        description={<FormattedMessage id="projects.bloomShare.description" defaultMessage="A flower website that allows users to create virtual bouquets." />}
                        link="https://flowers.box-xo.com"
                        showBtn={true}
                        btn_text={<FormattedMessage id="projects.bloomShare.btn" defaultMessage="Let's bloom!" />}
                    />
                    <ProjectCard
                        imgPath={warehouse_project}
                        title={<FormattedMessage id="projects.amazon.title" defaultMessage="Amazon WareHouseDeals Italia (discontinued)" />}
                        description={<FormattedMessage id="projects.amazon.description" defaultMessage="A scraper which allows us to check for discounts or price errors on Amazon WareHouse IT in the shortest possible time to allow Telegram channel users to buy the posted products." />}
                        link="https://t.me/WarehouseDealsItalia"
                        showBtn={true}
                        btn_text={<FormattedMessage id="projects.amazon.btn" defaultMessage="Join the TG channel" />}
                    />
                    <ProjectCard
                        imgPath={captcha_eval}
                        title={<FormattedMessage id="projects.captchaSolver.title" defaultMessage="Captcha solver" />}
                        description={<FormattedMessage id="projects.captchaSolver.description" defaultMessage="Deep learning image classification tool trained with around 5 thousand images. The model was trained using Tensorflow 2 framework and has +95% accuracy " />}
                        link="#"
                        showBtn={false}
                    />
                    <ProjectCard
                        imgPath={anticheat}
                        title={<FormattedMessage id="projects.clientAntiCheat.title" defaultMessage="Client AntiCheat" />}
                        description={<FormattedMessage id="projects.clientAntiCheat.description" defaultMessage="A FiveM Anticheat client which performed a scan through regedit key files memory strings, prefetch file analysis, Fivem client process memory dumps but also allowed to have a quick look into pc specs, folders and so on." />}
                        link="https://github.com/boxxello/Fivem"
                        showBtn={true}
                        btn_text={<FormattedMessage id="projects.clientAntiCheat.btn" defaultMessage="View on Github" />}
                    />
                    <ProjectCard
                        imgPath={treedots}
                        title={<FormattedMessage id="projects.moreComing.title" defaultMessage="More are coming" />}
                        description={<FormattedMessage id="projects.moreComing.description" defaultMessage="Stay tuned!" />}
                        link="#"
                        showBtn={false}
                    />
                </MotionSimpleGrid>
            </Container>
        </Box>
    );
}

export default Projects;
