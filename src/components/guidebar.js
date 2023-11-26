import * as React from "react";
import { Stack, IconButton, BottomNavigation, BottomNavigationAction } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import BookIcon from '@mui/icons-material/Book';
import FolderIcon from '@mui/icons-material/Folder';
import SchoolIcon from '@mui/icons-material/School';
import Intro from './intro';
import { Link }  from 'react-router-dom';

function GuideBar(){
    return (
        <BottomNavigation
        sx={{
          width: '300px', // Set the width as needed
          borderRadius: '30px', // Adjust the border-radius for rounded edges
          position: 'fixed',
          bottom: '2%',
          left: '50%',
          transform: 'translateX(-50%)', // Center horizontally
          zIndex: 1000,
          backgroundColor:'#CCCCCC'
        }}

      >
        <Stack
          direction="row"
          spacing={7}
          alignItems="center" // Vertically center the items
        >
            {/* about me */}
            <IconButton
            component={Link} 
            to="#intro">
                <PersonIcon color='primary'/>
            </IconButton>

            {/* skills */}
            <IconButton
            component={Link} 
            to="#skills">
                <BookIcon color='primary'/>
            </IconButton>

            {/* portfolio */}
            <IconButton
            component={Link} 
            to="#portfolio">
                <FolderIcon color='primary'/>
            </IconButton>
            </Stack>
        </BottomNavigation>
    );
};
export default GuideBar;