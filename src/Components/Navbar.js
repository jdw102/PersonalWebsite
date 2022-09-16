import React from 'react'
import {AppBar, Box, Toolbar, Avatar, Typography, Grid, IconButton, Button} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LinkedIn from '@mui/icons-material/LinkedIn';
import { Link } from '@mui/material';
import {NavLink} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import HandshakeLogo from './Resources/handshakelogo.png'


// const useStyles = makeStyles({
//     root: {
//       backgroundColor: 'red',
//       color: (props) => props.color,
//     },
//     menuitem: {
//         color: '#300805'
//     }
//   });



const menuItems = [
    {
        type: 'pagelink',
        title: 'projects',
        url: '/projects'
    },
    {
        type: 'pagelink',
        title: 'documents',
        url: '/documents'
    },
    {
        type: 'pagelink',
        title: 'about',
        url: '/about'
    },
    {
        type: 'pagelink',
        title: 'contact',
        url: '/contact'
    }
]

  
const Navbar = (props) => {
    // const classes = useStyles(props);
    const currloc = useLocation().pathname;
    return (
        <Box sx = {{flexGrow: 1}}>
            <AppBar position = "static" style = {{background: 'transparent', boxShadow: 'none', paddingTop: '20px'}} >
                <Grid container component = {Toolbar}> 
                    <Grid xs ={1} sm ={1} md = {4} lg = {5} item justifyContent = 'left' align = 'left'>
                        <NavLink to = '/'>
                        <IconButton
                            size='large'
                            edge="start"
                        >
                            <HomeIcon style= {{color: '#2e201f'}}/>
                        </IconButton>
                        </NavLink>
                    </Grid>
                    <Grid item xs = {12} sm = {11} md = {8} lg = {7}>
                        <Grid container justifyContent = "space-evenly">
                            {menuItems.filter(x => x.type === 'pagelink').map((x) => (
                                <Grid xs={4} sm ={2} item  >
                                    <Link href={x.url} color="secondary" style={{ textDecoration: (currloc === x.url) ? "" : 'none' }}>
                                        <Button key={x.title} style={{ borderRadius: "10px" }}>
                                            <Typography textTransform='lowercase' variant='h6' color='#2e201f' sx={{ fontWeight: 550, fontFamily: 'monospace' }}>{x.title}</Typography>
                                        </Button>
                                    </Link>
                                </Grid>

                            ))}
                                <Grid xs={1} item>
                                    <IconButton style = {{color: '#0072b1'}} onClick = {() => {window.open('https://www.linkedin.com/in/jerry-worthy-943b22209/')}}>
                                    <Avatar sx={{ width: 30, height: 30, backgroundColor: '#0072b1' }} align='center'>
                                        <LinkedIn s/>
                                    </Avatar>
                                    </IconButton>
                                </Grid>
                                <Grid xs={1} item>
                                    <IconButton color="primary" onClick = {() => {window.open('https://app.joinhandshake.com/stu/users/31015366')}}>
                                        <Avatar src = {HandshakeLogo} sx={{ width: 30, height: 30}} align='center' />
                                    </IconButton>
                                </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </AppBar>
        </Box>
        
    )
}

export default Navbar