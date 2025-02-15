import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from 'react-icons/si';

export const SOCIAL_LINKS = {
    github: {
        name: "GitHub",
        icon: FaGithub,
        url: "https://github.com/boxxello",
        messageId: "home.social.github",
        ariaLabel: "Visit my GitHub profile"
    },
    linkedin: {
        name: "LinkedIn",
        icon: FaLinkedinIn,
        url: "https://www.linkedin.com/in/francesco-bosso-unisa/",
        messageId: "home.social.linkedin",
        ariaLabel: "Connect with me on LinkedIn"
    },
    twitter: {
        name: "Twitter",
        icon: FaTwitter,
        url: "https://twitter.com/francesco_bosso",
        messageId: "home.social.twitter",
        ariaLabel: "Follow me on Twitter"
    },
    instagram: {
        name: "Instagram",
        icon: FaInstagram,
        url: "https://www.instagram.com/boxxo__/",
        messageId: "home.social.instagram",
        ariaLabel: "Follow me on Instagram"
    },
    leetcode: {
        name: "LeetCode",
        icon: SiLeetcode,
        url: "https://leetcode.com/boxxello",
        messageId: "home.social.leetcode",
        ariaLabel: "Challenge me on LeetCode"
    }
}; 