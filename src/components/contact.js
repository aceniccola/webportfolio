import * as React from 'react';
import { Card, Stack } from '@mui/joy';
import { Paper, Typography, TextField } from '@mui/material';

function Contact(){
    return (
        <div style={{marginTop:'210px', alignItems: 'center',  flexDirection: 'column', display: 'flex', }} justifyContent='center'>
            <Card variant = "outlined" color="primary" style = {{ backgroundColor: '#E5E5E5', boxShadow: '10px 10px 10px rgba(0,0,0, 0.99)', }} sx = {{Height:250, minWidth:450, maxWidth:450}}>
                    <Stack  spacing = {2} alignItems="center" >
                        <Typography> Lets Talk! </Typography>
                        <Stack direction='row' spacing={7.5} alignItems="center" justifyContent="space-between">
                            <TextField id="firstname" label="First Name" variant="outlined" type = 'name' maxRows={1}/>
                            <TextField id="lastname" label="Last Name" variant="outlined" type = 'name' maxRows={1}/>
                        </Stack>
                        <TextField id="email" label="Email Address" variant="outlined" type='email' fullWidth = {true} maxRows={1} />
                        <TextField id="message" label = "Cat memes, puzzles and beta spray..." variant='outlined' fullWidth = {true} multiline minRows={5}/>
                    </Stack>
            </Card>
        </div>
    );
};
export default Contact;