import React from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    VisuallyHidden,
    useColorModeValue,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { FormattedMessage, useIntl } from 'react-intl';
import { motion } from 'framer-motion';
import { usePreferences } from '../hooks/usePreferences';
import { SUPPORTED_LANGUAGES } from '../translations';

const MotionButton = motion(Button);

const LanguageSelector = () => {
    const { language, setLanguage } = usePreferences();
    const intl = useIntl();
    const textColor = useColorModeValue('black', 'white');

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

    const handleLanguageChange = (newLang) => {
        setLanguage(newLang);
    };

    const currentLanguageLabel = intl.formatMessage({ id: `nav.language.${language}` });
    const buttonLabel = intl.formatMessage({ id: 'nav.language.selector.label' }, { current: currentLanguageLabel });

    return (
        <Menu>
            <MenuButton
                as={MotionButton}
                rightIcon={<ChevronDownIcon aria-hidden="true" color={textColor} />}
                initial="rest"
                whileHover="hover"
                variants={buttonAnimation}
                size="sm"
                variant="ghost"
                aria-label={buttonLabel}
                color={textColor}
                style={{
                    fontFamily: "'Press Start 2P', cursive",
                    fontSize: "0.7em",
                }}
            >
                <VisuallyHidden>
                    {buttonLabel}
                </VisuallyHidden>
                <FormattedMessage id={`nav.language.${language}`} />
            </MenuButton>
            <MenuList
                role="menu"
                aria-label={intl.formatMessage({ id: 'nav.language.selector.menu' })}
            >
                {SUPPORTED_LANGUAGES.map((lang) => {
                    const isSelected = lang === language;
                    const langLabel = intl.formatMessage({ id: `nav.language.${lang}` });
                    return (
                        <MenuItem
                            key={lang}
                            onClick={() => handleLanguageChange(lang)}
                            role="menuitemradio"
                            aria-checked={isSelected}
                            color={textColor}
                            style={{
                                fontFamily: "'Press Start 2P', cursive",
                                fontSize: "0.7em",
                            }}
                            _hover={{
                                bg: 'rgba(255, 255, 255, 0.1)',
                            }}
                        >
                            <FormattedMessage 
                                id={`nav.language.${lang}`}
                                description={`Language option for ${lang}`}
                            />
                            {isSelected && (
                                <VisuallyHidden>
                                    <FormattedMessage id="nav.language.selector.current" />
                                </VisuallyHidden>
                            )}
                        </MenuItem>
                    );
                })}
            </MenuList>
        </Menu>
    );
};

export default LanguageSelector;
