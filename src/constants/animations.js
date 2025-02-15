import { keyframes } from "@emotion/react";

export const ANIMATIONS = {
    scanline: keyframes`
        from { transform: translateY(0); }
        to { transform: translateY(100vh); }
    `,
    
    glowPulse: keyframes`
        0% { box-shadow: 0 0 10px rgba(79, 209, 197, 0.5); }
        50% { box-shadow: 0 0 20px rgba(79, 209, 197, 0.8); }
        100% { box-shadow: 0 0 10px rgba(79, 209, 197, 0.5); }
    `,
    
    float: keyframes`
        0% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0); }
    `,
    
    glowBorder: keyframes`
        0% { border-color: rgba(79, 209, 197, 0.3); }
        50% { border-color: rgba(79, 209, 197, 0.8); }
        100% { border-color: rgba(79, 209, 197, 0.3); }
    `
};

export const MOTION_VARIANTS = {
    container: {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }
        }
    },
    
    item: {
        hidden: { y: 20, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4
            }
        }
    },
    
    button: {
        initial: { scale: 1 },
        hover: { 
            scale: 1.05,
            transition: { duration: 0.2 }
        },
        tap: { scale: 0.95 }
    },
    
    icon: {
        rest: { scale: 1 },
        hover: { 
            scale: 1.2,
            transition: {
                duration: 0.2,
                type: "spring",
                stiffness: 400,
            }
        }
    },
    
    text: {
        rest: { y: 0 },
        hover: { 
            y: -2,
            transition: {
                duration: 0.2,
                ease: "easeInOut",
            }
        }
    }
}; 