import React from 'react'
import DukeSky from './Resources/HomepageImages/dukesky.webp'
import { Grid, Typography, Box, CardContent, Card, Avatar, CardMedia, CardActionArea, Paper, Button, Link } from '@mui/material'
import JerryAvatar from './Resources/HomepageImages/jerryavatar.png'




const Homepage = () =>{
    return (
        <div>
            <Grid container style = {{padding: 30}}>
                <Grid item xs = {12}>
                    <img
                        component="img"
                        priority
                        style={{

                            maxHeight: `${1530 / 3}px`,
                            maxWidth: `${3561/ 3}px`,
                            boxShadow: "-50px -50px 0 -40px #d1700f, 50px 50px 0 -40px #d1700f",
                            borderRadius: "10px"
                        }}
                        alt="Duke"
                        src={DukeSky}
                    />
                    <Link href = "/about">
                        <Button component = {Card}  raised sx = {{ position: "absolute", diplay: "flex", top: 200, left: 180, backgroundColor: '#d1700f', borderRadius: "10px", padding: 2}}>
                            <CardContent>
                                <CardMedia style ={{display: "flex", justifyContent: "center"}}>
                                    <Avatar src = {JerryAvatar}  sx = {{width: 200, height: 200, border: "5px solid #f5f3f2"}}/>
                                </CardMedia>
                                <Typography variant='h6' color= "#f5f3f2" sx={{ fontFamily: 'monospace', align: "center" }}>
                                    Jerry Worthy
                                </Typography>
                                <Typography component = {Paper} variant='subtitle1' color= "primary" sx={{ fontFamily: 'monospace', align: "center", backgroundColor: "#f5f3f2"  }}>
                                    SWE x ECE
                                </Typography>
                            </CardContent>
                        </Button>
                    </Link>
                </Grid>
                {/* <Grid item xs = {4} justifyContent = "center">
                    <Typography variant='h6' color='#2e201f' sx={{  fontFamily: 'monospace'}}>
                        Welcome, please take a look around!
                    </Typography>
                </Grid> */}
            </Grid>
        </div>
    )
}

export default Homepage