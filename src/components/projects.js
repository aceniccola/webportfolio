import * as React from 'react';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import { Link }  from 'react-router-dom';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import  GitHubIcon  from '@mui/icons-material/GitHub';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions } from '@mui/material';


function Projects(){
    return (
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="100"
              image="../static/cajal.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Cajal
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Neural Network Library for quick machine learning in c++.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <IconButton 
              component={Link} 
              to="https://github.com/andarklabs/cajal"
              sx = {{
                  p:'8px',
                  backgroundColor:'#CCCCCC',
                  marignLeft: 'auto',
              }}><GitHubIcon color="secondary"/>

              </IconButton>
          </CardActions>
        </Card>
      );
}
export default Projects;