import { IconButton, Stack } from '@mui/material';
import  GitHubIcon  from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link }  from 'react-router-dom';
import * as React from "react";
//
function Buttons(){
    return (
        <Stack 
        direction = 'row' 
        spacing = {2} 
        sx={{ 
        position: 'fixed',
        top: '8px', // Adjust the percentage as needed
        right: '3%', // Adjust the percentage as needed
        zIndex: 1000,
        }}>

            <IconButton 
            component={Link} 
            to="https://github.com/aceniccola"
            target="_blank"
            sx = {{
                p:'8px',
                backgroundColor:'#CCCCCC',
                marignLeft: 'auto',
            }}><GitHubIcon color="secondary"/>

            </IconButton>


            <IconButton 
            component={Link} 
            to="https://www.linkedin.com/in/andrew-ceniccola-752176295/"
            target="_blank"
            sx = {{
                p:'8px',
                backgroundColor:'#CCCCCC',
                marignLeft: 'auto',
            }}><LinkedInIcon color="secondary"/>

            </IconButton>
        </Stack>
    );
}

export default Buttons;