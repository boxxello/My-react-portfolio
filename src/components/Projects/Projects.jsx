import React, {lazy, Suspense} from "react";
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
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <Box
            as="section"
            minH="100vh"
            bg={bgColor}
            py={20}
        >
            <Container maxW="container.xl">
                <Suspense fallback={
                    <Text fontFamily="'Press Start 2P', cursive" fontSize="sm">
                        <FormattedMessage id="home.loading" />
                    </Text>
                }>
                    <Particle/>
                </Suspense>

                <MotionHeading
                    as="h1"
                    fontSize={{ base: "2xl", md: "4xl" }}
                    textAlign="center"
                    mb={12}
                    color={headingColor}
                    fontFamily="'Press Start 2P', cursive"
                    initial="hidden"
                    animate="show"
                    variants={itemAnimation}
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
                    columns={{ base: 1, md: 2, lg: 3 }}
                    spacing={8}
                    justifyItems="center"
                    variants={containerAnimation}
                    initial="hidden"
                    animate="show"
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
