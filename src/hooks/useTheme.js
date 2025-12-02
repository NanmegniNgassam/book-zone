import { useState, useEffect } from 'react';

/**
 * Custom hook to manage user theme preference with localStorage persistence
 * @returns {Object} Object containing current theme and toggle function
 */
export default function useTheme() {
  const [theme, setTheme] = useState('light');
  const [isLoaded, setIsLoaded] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    }
    setIsLoaded(true);
  }, []);

  // Update localStorage whenever theme changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('theme', theme);
    }
  }, [theme, isLoaded]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return {
    theme,
    toggleTheme,
    isLoaded
  };
}