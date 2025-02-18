import { useState, useEffect, createContext, useContext } from 'react';
import { useColorMode } from '@chakra-ui/react';
import { getDefaultLanguage } from '../translations';

const PreferencesContext = createContext();

const STORAGE_KEY = 'app_preferences';

const defaultPreferences = {
  language: getDefaultLanguage(),
  drawerOpen: false,
};

export const PreferencesProvider = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [preferences, setPreferences] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : defaultPreferences;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
    // Apply language to html lang attribute
    document.documentElement.setAttribute('lang', preferences.language);
  }, [preferences]);

  const setLanguage = (lang) => {
    setPreferences(prev => ({
      ...prev,
      language: lang
    }));
  };

  const toggleDrawer = () => {
    setPreferences(prev => ({
      ...prev,
      drawerOpen: !prev.drawerOpen
    }));
  };

  const value = {
    ...preferences,
    colorMode,
    toggleColorMode,
    setLanguage,
    toggleDrawer,
  };

  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  );
};

export const usePreferences = () => {
  const context = useContext(PreferencesContext);
  if (context === undefined) {
    throw new Error('usePreferences must be used within a PreferencesProvider');
  }
  return context;
};
