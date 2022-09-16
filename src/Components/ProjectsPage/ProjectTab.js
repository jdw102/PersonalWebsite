import { Grid, Tab, Tabs, Typography, Box, Card } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import ImageSlider from './ImageSlider';



const ProjectTab = (props) =>{
  

    return (
        <Grid container justifyContent= 'space-evenly' alignItems = 'center' >
          <Grid item xs = {12} s = {12} md = {12} lg = {props.textsize} xl = {props.textsize} component ={Card} style = {{padding: 30, borderRadius:'10px', marginRight: '30px', marginBottom: '10px'}}>
          <Typography  variant='h3' color="primary" sx={{ fontFamily: 'monospace', fontWeight: 550, marginBottom: '10px' }}>
              {props.title}
            </Typography>
            <Typography variant='body1' color= "primary" sx={{  fontFamily: 'monospace', fontSize: '13pt', textAlign: "left" }}>
            &emsp;&emsp;&emsp;&emsp;&emsp;{props.description}
            </Typography>
          </Grid>
          {props.images.length > 0 && 
          <Grid item>
            <ImageSlider slides={props.images} />
          </Grid>
          }
        </Grid>
    )
}

export default ProjectTab;