import React, { useState } from 'react';
import { ThemeProvider } from '@material-tailwind/react';


const Toggle = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const theme = isDarkMode ? 'dark' : 'light';


    return (
        <ThemeProvider theme={theme}>
            <button onClick={toggleTheme}>
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </ThemeProvider>
    );
};

export default Toggle;