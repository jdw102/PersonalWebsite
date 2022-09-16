import { Typography, Card, Grid } from '@mui/material'
import React from 'react'
import BeachPic from './Resources/AboutImages/beachfam.jpg'
import BelowChapel from './Resources/AboutImages/belowchapel.jpg'

const About = () =>{
    const [aboutText, setAboutText] = React.useState("");

    return (
        <div>
            <Grid container spacing = {3} style = {{ padding: '30px'}} justifyContent = "center" alignItems = "center">
                <Grid item xs = {12} sm = {12} md ={8} lg ={5} component = {Card} raised justifyContent = 'center' style = {{padding: 30, borderRadius:"10px",  marginBottom: 20}}>
                    <Typography variant='h4' color='#2e201f' sx={{ fontFamily: 'monospace', marginBottom: 3, fontWeight: 550 }}>
                        A Little About Me
                    </Typography>
                    <Typography variant='body1' color='#2e201f' sx={{ fontFamily: 'monospace', fontSize: '14pt' }} align = "left">
                    &emsp;&emsp;&emsp;Hi, my name is Jerry Worthy. I'm a junior at Duke University, originally from Augusta, Georgia, majoring in Electrical 
                        & Compuer Engineering and Computer Science.
                    </Typography>
                    &nbsp;
                    <Typography variant='body1' color='#2e201f' sx={{ fontFamily: 'monospace', fontSize: '14pt' }} align = "left">
                    &emsp;&emsp;&emsp; I have a strong interest in software and computer engineering and have experience in a variety
                        of related courses as well as working as a software developer.
                    </Typography>
                    &nbsp;
                    <Typography variant='body1' color='#2e201f' sx={{ fontFamily: 'monospace', fontSize: '14pt' }} align = "left">
                    &emsp;&emsp;&emsp;Feel free to read about some of the projects I have worked on, take a look at my 
                        resume, or get in contact with me through the links above! 
                    </Typography>
                </Grid>
                <Grid item sx = {{marginLeft: 10, background: "transparent", borderRadius: '10px', }} xs ={6}>
                    <img src = {BeachPic} alt ="Beach pic" style = {{width: "100%", height: "100%", borderRadius: '10px', boxShadow: "-50px -50px 0 -40px #d1700f, 50px 50px 0 -40px #d1700f"}}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default About