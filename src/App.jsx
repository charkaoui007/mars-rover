import React, { useState, useEffect } from 'react';
import NasaPictures from '../src/Components/NasaPictures';
import ThemeSwitch from './Components/ThemeSwitch';
import './index.css';

const App = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);
    
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <div className="app-container">
            <h1 className="title">NASA Mars Rover </h1>
            <ThemeSwitch toggleTheme={toggleTheme} theme={theme} />
            <h2> This is a gallery of pictures Taken by the mars rover Curiosity and  below you can choose the camera in order to see the pictures </h2>
            <NasaPictures />
        </div>
    );
};

export default App;
