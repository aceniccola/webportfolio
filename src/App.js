import React from 'react';
import './App.css';
import {Stack} from '@mui/material';
import Intro from './components/intro';
import Skills from './components/skills';
import Projects from './components/projects';
import Buttons from './components/buttons';
import Contact from './components/contact';
import AboutMe from './components/aboutme';
import Playground from './components/hidden/secretplayground';
import background from './static/background.svg';

function App() {
  const backgroundImageStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: '.75%', 
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat',
    backgroundAttachment: 'fixed', 
    height: '4300px',
    overflowY: 'auto', 
  };
  const elm = window.location.href
  console.log(elm)
  if (elm === 'http://localhost:3000/hidden/secretplayground'){
    return (
        <Playground/>
    )
  } else {
    return (
      <div style={backgroundImageStyle}>
        <Stack >
          <Buttons />
          <Intro />
          <Skills/>
          <Projects/>
          <AboutMe/>
          <Contact/>
        </Stack>
      </div>
    );}
}
export default App;