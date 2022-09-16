import { Card, CardContent, CardMedia, Grid, Typography,  Avatar, Link } from '@mui/material'
import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LinkedIn from '@mui/icons-material/LinkedIn';
import HandshakeLogo from './Resources/handshakelogo.png'

const Contact = () =>{
    return (
        <div>
            <Grid container sx = {{paddingTop: '40px'}} spacing = {10} justifyContent = 'center'>
                <Grid item xs = {12}>
                    <Typography variant='h1' color = "main" sx={{ fontWeight: 550, fontFamily: 'monospace' }}>
                        Contact me!
                    </Typography>
                    <Typography variant = 'subtitle1' color = "info" sx={{ fontFamily: 'monospace' }}>
                        Get in touch with me through your preferred method.
                    </Typography>
                </Grid>
                <Grid item xs = {6} sm = {4} md = {3}>
                    <Card raised style = {{justifyContent: 'center', display: 'flex', background: 'transparent', borderRadius:"10px"}}>
                        <CardContent>
                            <CardMedia style = {{display: 'flex', justifyContent: 'center'}}>
                                <Avatar sx={{ width: 140, height:140, backgroundColor: '#3072ff'}} align = 'center'>
                                    <EmailIcon  style = {{transform: 'scale(3)'}}size = 'large'/>
                                </Avatar>
                            </CardMedia>
                            <Typography color='#2e201f' variant='h6' sx={{ fontFamily: 'monospace' }}>
                                E-Mail
                            </Typography>
                            <Typography color='#2e201f' variant = 'body1' sx={{ fontFamily: 'monospace' }}>
                                <Link href = 'https://www.google.com/' color = "secondary">jerry.worthy@duke.edu</Link>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs = {6} sm = {4} md = {3}>
                    <Card raised style={{ justifyContent: 'center', display: 'flex', background: 'transparent', borderRadius:"10px" }}>
                        <CardContent >
                            <CardMedia style = {{display: 'flex', justifyContent: 'center'}}>
                                <Avatar src = {HandshakeLogo} sx={{ width: 140, height: 140, backgroundColor: '#0072b1' }} align='center' />
                            </CardMedia>
                            <Typography color='#2e201f' variant='h6' sx={{ fontFamily: 'monospace' }}>
                                Handshake
                            </Typography>
                            <Typography color='#2e201f' variant='body1' sx={{ fontFamily: 'monospace' }}>
                                <Link href = 'https://www.google.com/' color = "secondary">View Profile</Link>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs = {6} sm = {4} md = {3}>
                    <Card raised style = {{justifyContent: 'center', display: 'flex', background: 'transparent', borderRadius:"10px"}}>
                        <CardContent>
                            <CardMedia style = {{display: 'flex', justifyContent: 'center'}}>
                                <Avatar sx={{ width: 140, height:140, backgroundColor: '#0072b1'}} align = 'center'>
                                    <LinkedIn style = {{transform: 'scale(3)'}}size = 'large'/>
                                </Avatar>
                            </CardMedia>
                            <Typography color='#2e201f' variant='h6' sx={{ fontFamily: 'monospace' }}>
                                LinkedIn
                            </Typography>
                            <Typography color='#2e201f' variant = 'body1' sx={{ fontFamily: 'monospace' }}>
                                <Link href = 'https://www.google.com/' color = "secondary">Connect</Link>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default Contact