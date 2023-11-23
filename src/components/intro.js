import * as React from "react";
import {Paper, Typography} from '@mui/material';

function Intro(){
    return (
        <div style={{ position: 'absolute', top: '40px', width: '50%', left: '50%', transform: 'translateX(-50%)' }}>
          {/* Add margin-top to create space */}
          <Paper elevation = '0' sx={{backgroundColor:'rgba(55, 55, 55, 0.25)'}}>
          <Typography align='center' sx={{ fontSize: 35,top: '10px', color: '#fff' , fontFamily: 'Futura'}}>
              Nice to meet you, i'm Andrew
          </Typography>
          </Paper>
          <div style={{ marginTop: '20px', marginLeft: '-48%', width: '90%' }}>

            <Paper sx={{ width: '100%', padding: '10px' }}>
              {/* Adjust padding as needed */}
              <Typography style={{ overflowWrap: 'break-word' }}>
                I ou34bgnpqoirewng[oIRWBNKeorbjnWOEIWFJKwoeifjOW[IEGJM[woeigmawoerijfaoirejgfepirauogjnietugjnreoti]]]
              </Typography>
            </Paper>
          </div>
        </div>
      );
    };

export default Intro;