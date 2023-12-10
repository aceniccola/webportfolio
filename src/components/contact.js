import * as React from 'react';
import { Card, Stack } from '@mui/joy';
import { Paper, Typography, TextField } from '@mui/material';

function Contact(){
    return (
        <Card>
            <Paper>
                <Stack direction='row'>
                    <Typography> Lets Talk! </Typography>
                    <TextField id="firstname" label="First Name" variant="outlined"/>
                    <TextField id="lastname" label="Last Name" variant="outlined"/>
                </Stack>
            </Paper>
        </Card>
    );
};
export default Contact;