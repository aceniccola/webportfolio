import * as React from 'react';
import { useState } from 'react'; // Import useState
import { Card, Stack, Button } from '@mui/joy';
import { Typography, TextField, Paper } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';

function Contact() {
    // State variable to hold the Typography content
    const [typographyContent, setTypographyContent] = useState("Let's Talk!");

    const handleSubmit = () => {
        const data = {
            firstname: document.getElementById('firstname').value,
            lastname: document.getElementById('lastname').value,
            email: document.getElementById('email').value, // if you are guessing a ctf, don't put your email in your submission
            message: document.getElementById('message').value,
        };

        if (data.email !== '') {
            axios.post('http://localhost:3001/send', data)
                .then(response => {
                    console.log('Message sent', response);
                })
                .catch(error => {
                    console.error('Error sending message', error);
                });

        } else {
            axios.post('http://localhost:3001/guess', data)
                .then(response => {

                    // Conditional logic based on the message
                    if (data.message === 'q84hganIom94gbua$vN0q4gha5-iau&rbnga87598b') {
                        setTypographyContent(`Congratulations, ${data.firstname}! You have found the 1st flag!`);
                    } else { 
                        setTypographyContent(response.data.responseText); // You though the rest of the flags would be that easy????
                    }
                })
                .catch(error =>{
                    console.error('Error sending message', error);
                });
        }
        // Clear the fields after successful post
        document.getElementById('firstname').value = '';
        document.getElementById('lastname').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    };

    return (
        <div style={{marginTop:'200px', alignItems: 'center',  flexDirection: 'column', display: 'flex', }} justifyContent='center'> 
            <Paper
            elevation='100'
            sx={{
            backgroundColor: 'rgba(0,0,0, 0.0)',
            boxShadow: '10px 10px 10px rgba(0,0,0, 0.0)',
            width: '400px', 
            left: '50%', // this is the center here
            }}
            >
                <Typography
                align='center'
                sx={{ fontSize: 55, top: '10px', color: '#CCCCCC', fontFamily: 'source-code-pro' }}
                >
                Contact Me
                </Typography>
            </Paper>
            <Card variant="outlined" color="primary" style={{ backgroundColor: '#E5E5E5', boxShadow: '10px 10px 10px rgba(0,0,0, 0.99)', marginTop:'55px'}} sx={{ Height: 250, minWidth: 450, maxWidth: 450 }}>
                <Stack spacing={2} alignItems="center">
                    <Typography> {typographyContent} </Typography>
                    <Stack direction='row' spacing={7.5} alignItems="center" justifyContent="space-between">
                        <TextField id="firstname" label="First Name" variant="outlined" type='text' maxRows={1} />
                        <TextField id="lastname" label="Last Name" variant="outlined" type='text' maxRows={1} />
                    </Stack>
                    <TextField id="email" label="Email Address" variant="outlined" type='email' fullWidth={true} maxRows={1} />
                    <TextField id="message" label="Cat memes, puzzles and beta spray..." variant='outlined' type = 'text' fullWidth={true} multiline minRows={5} />
                    <Button variant="outlined" startIcon={<SendIcon />} onClick={handleSubmit}>
                        Send
                    </Button>
                </Stack>
            </Card>
        </div>
    );
}

export default Contact;