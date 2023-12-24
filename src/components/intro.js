import * as React from "react";
import Typed from "typed.js";
import face from "../static/FunnyFace.jpeg";
import {Paper, Typography} from '@mui/material';
import '@fontsource-variable/source-code-pro';

function Intro(){
    const el = React.useRef(null);

    React.useEffect(() => {
        var typed = new Typed(el.current, {
            strings: ["Welcome", "I'm Andrew"],
            typeSpeed: 10,
            startDelay: 100,
            backSpeed: 20,
            backDelay: 3000,
            cursorChar:'|',
            loop: true,

          });

        return () => {
          
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
        };
    }, []);

    // Create reference to store the DOM element containing the animation
    const b1el = React.useRef(null);

    React.useEffect(() => {
        var typed = new Typed(b1el.current, {
            strings: [
            "I live for challanging puzzles and that moment when an idea comes together for the first time.", 
            "My current fixation is deep reinforcement learning and the problems that can be solved using complex structures yet simple reward functions.",],
            typeSpeed: 1,
            startDelay: 5000,
            backSpeed: 10,
            backDelay:6500,
            cursorChar:'|',
            loop: true,
            });

        return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
        };
    }, []);

    return (
<div
  justifyContent='center'
  style={{
    position: 'absolute',
    top: '85px',
    left: '50%',  // Center horizontally
    transform: 'translateX(-50%)',
    display: 'flex',
    flexDirection: 'column',  // Stack children vertically
    alignItems: 'center',  // Center children horizontally
  }}
  id='intro'
>
  {/* Add margin-top to create space */}
  <Paper
    elevation='100'
    sx={{
      backgroundColor: 'rgba(0,0,0, 0.5)',
      boxShadow: '10px 10px 10px rgba(0,0,0, 0.99)',
      minWidth: '70%',
    }}
  >
    <Typography
      align='center'
      sx={{ fontSize: 55, top: '10px', color: '#CCCCCC', fontFamily: 'source-code-pro' }}
    >
      <span ref={el} />
    </Typography>
  </Paper>
  <Paper
    elevation='100'
    style={{ marginTop: '55px', padding: '10px' }}
    sx={{         
        backgroundColor: 'rgba(0,0,0, 0.5)',
        boxShadow: '10px 10px 10px rgba(0,0,0, 0.99)', 
        minWidth: '500px', 
        minHeight:'95px' 
    }}>
      {/* Adjust padding as needed */}
      <Typography
        align = 'center'
        style={{ overflowWrap: 'break-word' }}
        color='#CCCCCC'
        sx={{ fontFamily: 'source-code-pro', fontSize: 20}}
      >
          Can we create something, using things that we can understand, which can generate something we can't comprehend?
      </Typography>
  </Paper>
  <div>
    <img src={face} alt="An image of just me... eventually lol" width="300" height="200" style={{ marginTop: '75px', borderRadius: '10px', boxShadow: '7px 7px 7px rgba(0,0,0, 0.99)'}}/>
  </div>
  <Paper
    elevation='100'
    style={{ marginTop: '50px', width: '500px', padding: '10px' }}
    sx={{ backgroundColor: '#000', boxShadow: '0 0 5px rgba(74, 246, 38, 0.99)', minWidth: '500px', minHeight:'95px' }}
  >
    {/* Adjust padding as needed */}
    <Typography
      style={{ overflowWrap: 'break-word' }}
      color='#CCCCCC'
      sx={{ fontFamily: 'source-code-pro', fontSize: 20 }}
    >
      <span ref={b1el} />
      {/* Your content goes here */}
    </Typography>
  </Paper>
  </div>
    );
    };

export default Intro;