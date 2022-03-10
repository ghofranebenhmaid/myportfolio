import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'


const useTheme = () =>
{
    const router = useRouter()
    const Reload = () =>
    {
        router.reload();
    }
    const [darkTheme, setDarkTheme] = useState(undefined);

    const handleToggleTheme = (event) =>
    {
        setDarkTheme(event.target.checked);
    };

    useEffect(() =>
    {
        if (darkTheme !== undefined) {
            if (darkTheme) {
                // Set value of  darkmode to dark
                document.documentElement.setAttribute('data-theme', 'dark');
                window.localStorage.setItem('theme', 'dark');
            } else {
                // Set value of  darkmode to light
                document.documentElement.removeAttribute('data-theme');
                window.localStorage.setItem('theme', 'light');

            }
        }
    }, [darkTheme]);

    useEffect(() =>
    {
        const root = window.document.documentElement;
        const initialColorValue = root.style.getPropertyValue(
            '--initial-color-mode'
        );
        // Set initial darkmode to light
        setDarkTheme(initialColorValue === 'dark');
    }, []);
    return { darkTheme, handleToggleTheme, Reload }
}

export default useTheme