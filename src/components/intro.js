import * as React from "react";
import Typed from "typed.js";
import face from "../static/FunnyFace.jpeg";
import {Paper, Typography, Stack} from '@mui/material';
// Supports weights 200-900
import '@fontsource-variable/source-code-pro';
// // Supports weights 200-900
import '@fontsource/monofett';
// // Supports weights 200-900
import '@fontsource/preahvihear';

function Intro(){
    // const img = React.useRef(null);
    // function createImage() {
    //     let devImage = new Image(img.current);
    //     devImage.src = "../static/FunnyFace.jpeg";
    //     img.appendChild(devImage);
    //  }
    // Create reference to store the DOM element containing the animation
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
            "I call myself a Machine Learning Software Engineer.",
            "In reality, I live for challanging puzzles and that moment when an idea comes together for the first time.", 
            "My current fixation is deep reinforcement learning and the problems that can be solved using complex structures yet simple reward functions."],
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
    top: '125px',
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
    style={{ marginTop: '100px', width: '500px', padding: '10px' }}
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
  <div>
    <face/>
  </div>

          <Stack direction = 'row' alignItems="baseline" justifyContent='space-between ' spacing={3} style={{ marginTop: '5000px', width: '90%', }} sx={{transform: 'translateX(5.60%)'}}>

            <Paper elevation='100' sx={{ width: '250px', padding: '10px', backgroundColor:'#000', boxShadow: '0 0 5px rgba(74, 246, 38, 0.99)'}}>
                {/* Adjust padding as needed */}
                <Typography style={{ overflowWrap: 'break-word' }} color='#CCCCCC' sx={{fontFamily:'source-code-pro', fontSize:20}}>
                    I'm a Machine Learning Software Engineer. 
                    I live for challanging puzzles and that moment when an idea comes together for the first time. 
                    {/* My current fixation revolves around deep reinforcement learning.
                    Something I have  */}
                </Typography>
            </Paper>
            <Paper elevation='100' sx={{ width: '100%', padding: '10px', backgroundColor:'#000', boxShadow: '0 0 5px rgba(74, 246, 38, 0.99)'}}>
                {/* Adjust padding as needed */}
                <Typography style={{ overflowWrap: 'break-word' }} color='#CCCCCC' sx={{fontFamily:'source-code-pro', fontSize:20}}>
                    I'm a Machine Learning Software Engineer. 
                    I live for challanging puzzles and that moment when an idea comes together for the first time. 
                    {/* My current fixation revolves around deep reinforcement learning.
                    Something I have  */}
                </Typography>
            </Paper>
          </Stack>
          <Stack direction = 'row' alignItems="baseline" justifyContent='space-between ' spacing={3} style={{ marginTop: '50px', width: '90%', }} sx={{transform: 'translateX(5.60%)'}}>

            <Paper elevation='100' sx={{ width: '100%', padding: '10px', backgroundColor:'#000', boxShadow: '0 0 5px rgba(74, 246, 38, 0.99)'}}>
                {/* Adjust padding as needed */}
                <Typography style={{ overflowWrap: 'break-word' }} color='#CCCCCC' sx={{fontFamily:'source-code-pro', fontSize:20}}>
                    I'm a Machine Learning Software Engineer. 
                    I live for challanging puzzles and that moment when an idea comes together for the first time. 
                    {/* My current fixation revolves around deep reinforcement learning.
                    Something I have  */}
                </Typography>
            </Paper>
            <Paper elevation='100' sx={{ width: '100%', padding: '10px', backgroundColor:'#000', boxShadow: '0 0 5px rgba(74, 246, 38, 0.99)'}}>
                {/* Adjust padding as needed */}
                <Typography style={{ overflowWrap: 'break-word' }} color='#CCCCCC' sx={{fontFamily:'source-code-pro', fontSize:20}}>
                    I'm a Machine Learning Software Engineer. 
                    I live for challanging puzzles and that moment when an idea comes together for the first time. 
                    {/* My current fixation revolves around deep reinforcement learning.
                    Something I have  */}
                </Typography>
            </Paper>
          </Stack>

        </div>
      );
    };

export default Intro;