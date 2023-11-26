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
import aws from '../static/badges/aws.svg';
import {Paper, Typography, Stack} from '@mui/material';

function Skills(){
    return (
        <div style={{marginTop:'1200px',alignItems: 'center',}} justifyContent='center'>
        
        <Paper
        elevation='100'
        sx={{
        backgroundColor: 'rgba(0,0,0, 0.5)',
        boxShadow: '10px 10px 10px rgba(0,0,0, 0.99)',
        maxWidth: '333px', 
        left: '50%',
        transform: 'translateX(33.3%)', // this is the center here
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
    style={{ marginTop: '85px', width: '500px', padding: '10px' }}
    sx={{ transform: 'translateX(7.5%)', backgroundColor: '#000', boxShadow: '0 0 5px rgba(74, 246, 38, 0.99)', minWidth: '500px', minHeight:'95px' }}
  >
    {/* Adjust padding as needed */}
    <Typography
      style={{ overflowWrap: 'break-word' }}
      color='#CCCCCC'
      sx={{ fontFamily: 'source-code-pro', fontSize: 20 }}
    >
      desc
      {/* Your content goes here */}
    </Typography>
  </Paper>
        <Stack
        direction="row"
        spacing={7}
        alignItems="center" 
        style={{marginTop:'50px'}}
        sx={{
        maxWidth: '60%', 
        left: '50%',
        transform: 'translateX(5.66%)', // this is the center here... math lol
        }}>
                        <Paper         
            sx={{
            backgroundColor: 'rgba(0,0,0, 0.5)',
            boxShadow: '10px 10px 10px rgba(0,0,0, 0.99)',
            minWidth: '70%'
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
            minWidth: '70%'
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
        spacing={7}
        alignItems="center" 
        style={{marginTop:'50px'}}
        sx={{
        maxWidth: '60%', 
        left: '50%',
        transform: 'translateX(5.66%)', // this is the center here... math lol
        }}>
            {/* Skills that I can teach */}
            <Paper         
            sx={{
            backgroundColor: 'rgba(0,0,0, 0.5)',
            boxShadow: '10px 10px 10px rgba(0,0,0, 0.99)',
            minWidth: '70%'
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
            minWidth: '70%'
            }}>
                <Stack
                direction="row"
                justifyContent="space-evenly"
                alignItems="flex-start"
                spacing={0}
                style={{marginTop:'10px'}}
                ><img src={docker}/><img src={leetcode}/>
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