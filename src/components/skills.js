import * as React from "react";
import clang from '../static/badges/c.svg';
import cplus from '../static/badges/c++.svg';
import docker from '../static/badges/docker.svg';
import javascript from '../static/badges/javascript.svg';
import latex from '../static/badges/latex.svg';
import leetcode from '../static/badges/leetcode.svg';
import node from '../static/badges/node.svg';
import numpy from '../static/badges/numpy.svg';
import pandas from '../static/badges/pandas.svg';
import python from '../static/badges/python.svg';
import pytorch from '../static/badges/pytorch.svg';
import qiskit from '../static/badges/qiskit.svg';
import react from '../static/badges/react.svg';
import tf from '../static/badges/tensorflow.svg';
import sql from '../static/badges/sqlite.svg';
import django from '../static/badges/django.svg';
import hf from '../static/badges/huggingface.svg';
import aws from '../static/badges/aws.svg';
import {Paper, Typography, Stack} from '@mui/material';

function Skills(){
    return (
        <div style={{marginTop:'1200px', alignItems: 'center',  flexDirection: 'column', display: 'flex', }} justifyContent='center'> 
        
        <Paper
        elevation='100'
        sx={{
        backgroundColor: 'rgba(0,0,0, 0.5)',
        boxShadow: '10px 10px 10px rgba(0,0,0, 0.99)',
        width: '400px', 
        left: '50%', // this is the center here
        }}
        id = 'skills'
        >
        <Typography
        align='center'
        sx={{ fontSize: 55, top: '10px', color: '#CCCCCC', fontFamily: 'source-code-pro' }}
        >
        My Skillset:
        </Typography>
        </Paper>
        <Paper
    elevation='100'
    style={{ marginTop: '55px', maxWidth: '252px', padding: '10px' }}
    sx={{         
        backgroundColor: 'rgba(0,0,0, 0.5)',
        boxShadow: '10px 10px 10px rgba(0,0,0, 0.99)', 
        minWidth: '500px', 
        minHeight:'95px' 
    }}>
    {/* Adjust padding as needed */}
    <Typography
      style={{ overflowWrap: 'break-word' }}
      color='#CCCCCC'
      sx={{ fontFamily: 'source-code-pro', fontSize: 20, }}
    >
        {/* TODO: make this better */}
        I graduated from the University of Virginia in 2023 with majors in Computer Science and Cognitive Science and minors in Pure Mathmatics and Physics.
        I'm currently working for NAVSEA building infastructure around AI/ML for the Navy.  

      {/* Your content goes here */}
    </Typography>
  </Paper>
        <Stack
        direction="row"
        spacing={5}
        alignItems="center" 
        style={{marginTop:'50px'}}
        >
            <Paper         
                sx={{
                backgroundColor: 'rgba(0,0,0, 0.5)',
                boxShadow: '10px 10px 10px rgba(0,0,0, 0.99)',
                width: '252px',
            }}>
                <Typography
                align='center'
                sx={{ fontSize: 25, top: '10px', color: '#CCCCCC', fontFamily: 'source-code-pro' }}
                >
                    Using Regularly 
                </Typography>
            </Paper>
            <Paper         
            sx={{
            backgroundColor: 'rgba(0,0,0, 0.5)',
            boxShadow: '10px 10px 10px rgba(0,0,0, 0.99)',
            width: '252px',
            }}>
                <Typography
                align='center'
                sx={{ fontSize: 25, top: '10px', color: '#CCCCCC', fontFamily: 'source-code-pro' }}
                >
                Learning to Integrate
                </Typography>
            </Paper>
        </Stack>


        <Stack
        direction="row"
        spacing={5}
        alignItems="center" 
        style={{marginTop:'50px'}}
        sx={{
        maxWidth: '90%', 
        }}>
            {/* Skills that I can teach */}
            <Paper         
            sx={{
            backgroundColor: 'rgba(0,0,0, 0.5)',
            boxShadow: '10px 10px 10px rgba(0,0,0, 0.99)',
            width: '252px',
            }}>
                <Stack
                direction="row"
                justifyContent="space-evenly"
                alignItems="flex-start"
                spacing={0}
                style={{marginTop:'10px'}}
                ><img src={python}/><img src={cplus}/>
                </Stack>
                <Stack
                direction="row"
                justifyContent="space-evenly"
                alignItems="flex-start"
                spacing={0}
                style={{marginTop:'20px'}}
                ><img src={pytorch}/><img src={numpy}/>
                </Stack>
                <Stack
                direction="row"
                justifyContent="space-evenly"
                alignItems="flex-start"
                spacing={0}
                style={{marginTop:'20px'}}
                ><img src={pandas}/><img src={clang}/>
                </Stack>
                <Stack
                direction="row"
                justifyContent="space-evenly"
                alignItems="flex-start"
                spacing={0}
                style={{marginTop:'20px', marginBottom:'10px'}}
                ><img src={latex}/><img src={tf}/>
                </Stack>
            </Paper>

            {/* Skills that I am learning */}
            <Paper       
            sx={{
            backgroundColor: 'rgba(0,0,0, 0.5)',
            boxShadow: '10px 10px 10px rgba(0,0,0, 0.99)',
            width: '252px',
            }}>
                <Stack
                direction="row"
                justifyContent="space-evenly"
                alignItems="flex-start"
                spacing={0}
                style={{marginTop:'10px'}}
                ><img src={docker}/><img src={hf}/>
                </Stack>
                <Stack
                direction="row"
                justifyContent="space-evenly"
                alignItems="flex-start"
                spacing={0}
                style={{marginTop:'20px'}}
                ><img src={javascript}/><img src={react}/>
                </Stack>
                <Stack
                direction="row"
                justifyContent="space-evenly"
                alignItems="flex-start"
                spacing={0}
                style={{marginTop:'20px'}}
                ><img src={qiskit}/><img src={node}/>
                </Stack>
                <Stack
                direction="row"
                justifyContent="space-evenly"
                alignItems="flex-start"
                spacing={0}
                style={{marginTop:'20px', marginBottom:'10px'}}
                ><img src={aws}/><img src={sql}/>
                </Stack>
            </Paper>
        </Stack>
        </div>
    )

}
export default Skills;