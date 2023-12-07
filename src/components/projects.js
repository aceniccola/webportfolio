import * as React from 'react';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import Link  from '@mui/joy/Link';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import  GitHubIcon  from '@mui/icons-material/GitHub';
import CardMedia from '@mui/material/CardMedia';
import cajal from '../static/cajal.jpg';
import { CardActionArea, CardActions } from '@mui/material';


function Projects(){

  return (
    <Card variant = "soft" sx={{ maxWidth: 225, maxHeight:250}} style = {{ backgroundColor: 'rgba(0,0,0, 0.5)' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140" // Adjust the height as needed
          image={cajal} // Use the imgUrl variable instead of the img element
          alt="cajal"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <Link
            overlay
            underline = "none"
            href = ""
            >
            Cajal
            </Link>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Neural Network Library for quick machine learning in C++.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );

}

export default Projects;