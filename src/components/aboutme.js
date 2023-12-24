import * as React from "react";
import {Paper, Typography, Stack} from '@mui/material';
import Typed from "typed.js";
import climb from "../static/AndrewHalf.jpg";
import '@fontsource-variable/source-code-pro';

function AboutMe() {
    // Create reference to store the DOM element containing the animation
    const b2el = React.useRef(null);

    React.useEffect(() => {
        var typed = new Typed(b2el.current, {
            strings: [
            "Climbing, like computer science, is a pursuit that I can strive to continually improve in by challanging myself and learning from others.", 
            "I have a passion for the physical world. I hope my skills in computer science can help humans live more sustainably and enjoy this world we have a little more."],
            typeSpeed: 1,
            startDelay: 5000,
            backSpeed: 10,
            backDelay:7500,
            cursorChar:'|',
            loop: true,
            });

        return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
        };
    }, []);

    return (
        <div style={{marginTop:'250px', alignItems: 'center',  flexDirection: 'column', display: 'flex', }} justifyContent='center'> 
            <Paper
            elevation='100'
            sx={{
            backgroundColor: 'rgba(0,0,0, 0.5)',
            boxShadow: '10px 10px 10px rgba(0,0,0, 0.99)',
            width: '400px', 
            left: '50%', // this is the center here
            }}
            >
                <Typography
                align='center'
                sx={{ fontSize: 55, top: '10px', color: '#CCCCCC', fontFamily: 'source-code-pro' }}
                >
                About Me
                </Typography>
            </Paper>
            <Stack direction = 'row' spacing={5} style={{marginTop:'175px'}}>
                <Paper
                    elevation='100'
                    style={{ minWidth: '280px', maxWidth: '280px', padding: '10px' }}
                    sx={{ backgroundColor: '#000', boxShadow: '0 0 5px rgba(74, 246, 38, 0.99)', minHeight:'95px' }}
                >
                    {/* Adjust padding as needed */}
                    <Typography
                    style={{ overflowWrap: 'break-word' }}
                    color='#CCCCCC'
                    sx={{ fontFamily: 'source-code-pro', fontSize: 20 }}
                    >
                    <span ref={b2el} />
                    {/* Your content goes here */}
                    </Typography>
                </Paper>
                <div>
                    <img src={climb} alt="An image of me climbing" width="180" height="240" style={{ borderRadius: '10px', boxShadow: '7px 7px 7px rgba(0,0,0, 0.99)'}}/>
                </div>
            </Stack>
        </div>
    );
}

export default AboutMe;