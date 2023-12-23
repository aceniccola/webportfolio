import * as React from 'react';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import  GitHubIcon  from '@mui/icons-material/GitHub';
import cajal from '../static/cajal.jpg';
import hyper from '../static/hyperjumps.png';
import website from '../static/website.png';
import robdoc from '../static/robot_doctor.jpeg';
import { Card, Link, Typography, CardContent, Button, IconButton} from '@mui/joy';
import { CardActionArea, Stack, Paper, CardMedia } from '@mui/material';


function Projects(){

  return (
    <div style={{marginTop:'200px', alignItems: 'center',  flexDirection: 'column', display: 'flex', }} justifyContent='center'> 
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
        Projects
        </Typography>
      </Paper>
      <Stack spacing={5} alignItems="center" style={{ marginTop: '55px',}}>
        <Stack direction='row'  spacing={5} alignItems="center" >
          <Card variant = "soft" color= 'primary' sx={{ maxWidth: 200, minWidth: 200, maxHeight:220, minHeight:220}} style = {{ backgroundColor: '#CCCCCC', boxShadow: '10px 10px 10px rgba(0,0,0, 0.99)', }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="100" // Adjust the height as needed
                image={cajal} // Use the imgUrl variable instead of the img element
                alt="artistic interpretation of biological neural network"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" >
                  <Link
                  overlay
                  underline = "none"
                  rel="noreferrer" // this is bad for anaylitics but good security
                  href = "https://github.com/andarklabs/cajal"
                  target="_blank"
                  >
                  Cajal
                  </Link>
                </Typography>
                <Typography variant="body2" color="neutral">
                  Neural Network Library for quick machine learning in C++.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card variant = "soft" color= 'primary' sx={{ maxWidth: 200, minWidth: 200, maxHeight:220, minHeight:220}} style = {{ backgroundColor: '#CCCCCC', boxShadow: '10px 10px 10px rgba(0,0,0, 0.99)', }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="100" // Adjust the height as needed
                image={robdoc} // Use the imgUrl variable instead of the img element
                alt="artistic interpretation of biological neural network"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" >
                  <Link
                  overlay
                  underline = "none"
                  rel="noreferrer" // this is bad for anaylitics but good security
                  href = "https://github.com/andarklabs/cajal"
                  target="_blank"
                  >
                  Medical LLM
                  </Link>
                </Typography>
                <Typography variant="body2" color="neutral">
                  LLM Trained on medical data.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Stack>
        <Stack direction='row'  spacing={5} alignItems="center" >
        <Card variant = "soft" color= 'primary' sx={{ maxWidth: 200, minWidth: 200, maxHeight:220, minHeight:220}} style = {{ backgroundColor: '#CCCCCC', boxShadow: '10px 10px 10px rgba(0,0,0, 0.99)', }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="100" // Adjust the height as needed
                image={website} // Use the imgUrl variable instead of the img element
                alt="cajal"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" >
                  <Link
                  overlay
                  underline = "none"
                  rel="noreferrer" // this is bad for anaylitics but good security
                  href = "https://github.com/andarklabs/cajal"
                  target="_blank"
                  >
                  This Website
                  </Link>
                </Typography>
                <Typography variant="body2" color="neutral">
                  Dynamic portfolio page. Also contains a web CTF. Try finding the "1st flag"... 
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card variant = "soft" color= 'primary' sx={{ maxWidth: 200, minWidth: 200, maxHeight:220, minHeight:220}} style = {{ backgroundColor: '#CCCCCC', boxShadow: '10px 10px 10px rgba(0,0,0, 0.99)', }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="100" // Adjust the height as needed
                image={hyper} // Use the imgUrl variable instead of the img element
                alt="cajal"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" >
                  <Link
                  overlay
                  underline = "none"
                  rel="noreferrer" // this is bad for anaylitics but good security
                  href = "https://github.com/aceniccola/hyperjumps"
                  target="_blank"
                  >
                  Hyperjumps
                  </Link>
                </Typography>
                <Typography variant="body2" color="neutral">
                  General solution to puzzle made by Quanta Magazine. 
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Stack>
      </Stack>
    </div>
  );

}

export default Projects;