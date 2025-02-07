import { useState, useEffect, createContext, useContext } from 'react';

const PreferencesContext = createContext();

const STORAGE_KEY = 'app_preferences';

const defaultPreferences = {
  theme: 'light',
  language: 'en',
  drawerOpen: false,
};

export const PreferencesProvider = ({ children }) => {
  const [preferences, setPreferences] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : defaultPreferences;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
    // Apply theme to body
    document.body.setAttribute('data-theme', preferences.theme);
  }, [preferences]);

  const toggleTheme = () => {
    setPreferences(prev => ({
      ...prev,
      theme: prev.theme === 'light' ? 'dark' : 'light'
    }));
  };

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
    toggleTheme,
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
