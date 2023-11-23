import React from 'react';
import './App.css';
import Intro from './components/intro';
import Skills from './components/skills';
import Projects from './components/projects';
import GuideBar from'./components/guidebar';
import Buttons from './components/buttons';
import { IconButton, Stack } from '@mui/material';
import  GitHubIcon  from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link }  from 'react-router-dom';
import background from './static/background.svg';

function App() {
  const backgroundImageStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: '5%',
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat',
    backgroundAttachment: 'fixed', 
    height: '100vh',
    overflowY: 'auto', 
  };

  return (
    <div style={backgroundImageStyle}>
      {/* fixed content goes here */}
      <div>
        <Buttons/>
        <Intro/>
        <GuideBar/>
      </div>
    </div>
  );
}
export default App;