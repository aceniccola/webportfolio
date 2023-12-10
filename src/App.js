import React from 'react';
import './App.css';
import {Stack} from '@mui/material';
import Intro from './components/intro';
import Skills from './components/skills';
import Projects from './components/projects';
import GuideBar from'./components/guidebar';
import Buttons from './components/buttons';
import Contact from './components/contact';
import background from './static/background.svg';

function App() {
  const backgroundImageStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: '5%', // Cover the entire viewport
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat',
    backgroundAttachment: 'fixed', 
    height: '800vh',
    overflowY: 'auto', 
  };

  return (
    <div style={backgroundImageStyle}>
      {/* fixed content goes here */}
      <Stack >
        <Buttons/>
        <Intro/>
        <Skills/>
        <GuideBar/>
        <Projects/>
        <Contact/>
      </Stack>
    </div>
  );
}
export default App;