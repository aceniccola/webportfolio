import * as React from "react";
import Typed from "typed.js";
import {Paper, Typography, Stack} from '@mui/material';
// Supports weights 200-900
import '@fontsource-variable/source-code-pro';
// // Supports weights 200-900
import '@fontsource/monofett';
// // Supports weights 200-900
import '@fontsource/preahvihear';

function Intro(){
    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);

    React.useEffect(() => {
        var typed = new Typed(el.current, {
            strings: ["Welcome", "I'm Andrew"],
            typeSpeed: 10,
            startDelay: 750,
            backSpeed: 20,
            backDelay:3000,
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
            strings: ["I'm a Machine Learning Software Engineer.",
            "I live for challanging puzzles and that moment when an idea comes together for the first time."],
            typeSpeed: 1,
            startDelay: 750,
            backSpeed: 10,
            backDelay:6000,
            cursorChar:'|',
            loop: true,

            });

        return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
        };
    }, []);
    return (
        <div style={{ position: 'absolute', top: '75px'}} id='intro' >
          {/* Add margin-top to create space */}
          <Paper elevation = '100' sx={{backgroundColor:'rgba(55, 55, 55, 0.05)', width:'50%', transform: 'translateX(50%)'}}>
          <Typography align='center' sx={{ fontSize: 40,top: '10px', color:'#CCCCCC', fontFamily: 'source-code-pro'}} >
              <span ref={el}/>
          </Typography>
          </Paper>
          <Stack direction = 'row' alignItems="baseline" justifyContent='space-between ' spacing={3} style={{ marginTop: '50px', width: '90%', }} sx={{transform: 'translateX(5.60%)'}}>

            <Paper elevation='100' sx={{ width: '100%', padding: '10px', backgroundColor:'#000', boxShadow: '0 0 5px rgba(74, 246, 38, 0.99)'}}>
              {/* Adjust padding as needed */}
              <Typography style={{ overflowWrap: 'break-word' }} color='#CCCCCC' sx={{fontFamily:'source-code-pro', fontSize:20}}>
                <span ref={b1el}/>
                {/* My current fixation revolves around deep reinforcement learning.
                Something I have  */}
              </Typography>
            </Paper>
            <Paper elevation='100' sx = {{padding: '10px', width:'100%', backgroundColor:'#CCCCCC'}} >
            <Typography style={{ overflowWrap: 'break-word' }} color='secondary' sx={{fontFamily:'source-code-pro', fontSize:20}}>
                Picture Goes Here: I ooUBRJEAIORUBGOAErgoEIRGJ
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