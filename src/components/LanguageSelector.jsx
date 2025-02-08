import React from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { FormattedMessage } from 'react-intl';
import { motion } from 'framer-motion';
import { usePreferences } from '../hooks/usePreferences';
import { SUPPORTED_LANGUAGES } from '../translations';

const MotionButton = motion(Button);

const LanguageSelector = () => {
    const { language, setLanguage } = usePreferences();

    const buttonAnimation = {
        rest: { scale: 1 },
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.2,
                type: "spring",
                stiffness: 400,
            }
        },
    };

    return (
        <Menu>
            <MenuButton
                as={MotionButton}
                rightIcon={<ChevronDownIcon />}
                initial="rest"
                whileHover="hover"
                variants={buttonAnimation}
                size="sm"
                variant="ghost"
                style={{
                    fontFamily: "'Press Start 2P', cursive",
                    fontSize: "0.7em",
                }}
            >
                <FormattedMessage id={`nav.language.${language}`} />
            </MenuButton>
            <MenuList>
                {SUPPORTED_LANGUAGES.map((lang) => (
                    <MenuItem
                        key={lang}
                        onClick={() => setLanguage(lang)}
                        style={{
                            fontFamily: "'Press Start 2P', cursive",
                            fontSize: "0.7em",
                        }}
                    >
                        <FormattedMessage id={`nav.language.${lang}`} />
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default LanguageSelector;
