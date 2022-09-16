import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import ProjectTab from './ProjectTab';
import alu from '../Resources/ProjectImages/CPU/alu.png'
import cpu from '../Resources/ProjectImages/CPU/cpu.png'
import rfile from '../Resources/ProjectImages/CPU/rfile.png'
import programtest from '../Resources/ProjectImages/FloodDetector/programtest.jpg'
import prototypetest from '../Resources/ProjectImages/FloodDetector/prototypetest.jpg'
import prototypecase from '../Resources/ProjectImages/FloodDetector/prototypecase.jpg'
import robotlabel from '../Resources/ProjectImages/Robot/robotlabel.png'
import botwiring from '../Resources/ProjectImages/Robot/botwiring.jpg'

const projects = [
  {
    id: 0,
    title: "Simulated CPU",
    description: "As a part of a course on computer architecture I was tasked with building a simulated 16-bit processor using Logisim, \
    a program for designing and simulating digital logic circuits. The entire CPU is comprised of numerous components I designed including\
    an ALU, controller, registers, register file, and bit shifters. It can load and read instructions, read and store values in memory, take in keyboard\
    inputs, and perform basic arithmetic. Pictured here is the entire CPU, ALU, and register file.",
    textsize: 10,
    images: [{
      url: cpu,
      name: 'cpu',
      type: "image",
      width: '1000px',
      height: '600px'
    },
    {
      url: alu,
      name: 'alu',
      type: "image",
      width: '1000px',
      height: '600px'
    },
    {
      url: rfile,
      name: 'rfile',
      type: "image",
      width: '1000px',
      height: '600px'
    }],
    links: []
  },
  {
    id: 1,
    title: "Breakout Game",
    description: "Using JavaFX I created my own version of the game breakout, complete with the basic gameplay loop, different levels constructed\
    from text files, power-ups, varying ball deflections, and a high score record. This project was a great way to practice utilizing\
    the advantages of object-oriented programming, by letting me play around with abstract classes, inheritance, and the overall structure\
    of my code. It proved to me that design and form of code in a program is often just as important as functionality. The video shown here shows some \
    gameplay footage of the first 2 levels of the game.",
    textsize: 6,
    images: [
      {
        url: "FklL9ZHYz08",
        name: "breakout gameplay",
        type : "video",
        width: "450px",
        height: "450px"
      }
    ],
    links: [],
  },
  {
    id: 2,
    title: "Flood Detector Protoype",
    description: "My first project as a college freshman involved taking a client's issue and producing a protoype solution. \
    My team and I were tasked with creating a flood-detection system that could alert users of imminent flooding. Our prototype\
    used a raspberry pi camera module, encased in a 3D printed water-resistant casing and powered by a solar-powered battery pack\
    , to determine the height of the water source by calculating the length of a board protruding from the water through image analysis. \
    If the calculated height reached above a certain threshold, the user was alerted by notification through their phone. While working on this project, I met with\
    both my team and the client regularly to discuss design ideas, specifications, and deliverables. Which taught me a lot about the engineering design process and the relationship between\
    client and design agency.",
    textsize: 7,
    images: [{
      url: prototypetest,
      name: 'prototype test',
      type: "image",
      width: '450px',
      height: '450px'
    },
    {
      url: programtest,
      name: 'program test',
      type: "image",
      width: '450px',
      height: '450px'
    },
    {
      url: prototypecase,
      name: 'prototype case',
      type: "image",
      width: '450px',
      height: '450px'
    }],
    links: [],
  },
  {
    id: 3,
    title: "Light Sensing Robot",
    description: "In this project I was tasked with creating robot that could follow a set path marked by a black line,\
    distinguish between three different objects at the center of a circular path, and transmit and receive RF data from other robots. It accomplished these tasks\
    by using a variety of sensors, including QTI IR sensors to follow the path, an RGB white-light sensor to determine the color of the placed object,\
    and an XBee wireless communication module to communicate with other robots. The robot was controlled using an arduino, and was programmed, assembled, and wired\
    by both myself and my partner. Pictured here is the overall final robot, the wiring, and a video showing it complete its tasks.",
    textsize: 5, 
    images: [{
      url: robotlabel,
      name: 'robot label',
      type: "image",
      width: '600px',
      height: '500px'
    },
    {
      url: botwiring,
      name: 'bot wiring',
      type: "image",
      width: '600px',
      height: '500px'
    },
    {
      url: "24snjWIa01U",
      name: "moving bot",
      type: "video",
      width: '596px',
      height: '490px'
    }],
    links: [],
  },
  {
    id: 4,
    title: "Internal Sites & Applications",
    description: "As a software engineer, I helped develop web-based internal applications for use at my company. This includes\
    a customizable webpage for a specific department that allows administrators to edit contact information, rosters, attached documents, and\
    external links. As well as a form submission application that allows users to create, save, submit, and edit forms as well as approve, reject,\
    or delegate any work forms they are assigned to as approvers. This has allowed me to gain experience in both front end and back end development, using React\
    and a .NET framework respectively. I've participated in daily meetings with a team to discuss design plans and have observed meetings with clients to demo the product and receive feedback. All\
    of which has given me a range of full-stack development skills that I can utilize on a daily basis in my work, as well as in personal projects like this site.",
    textsize: 10,
    images: [],
    links: [],
  }
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function allyProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  return (
    <div>
      <Grid container justifyContent='center' style={{ padding: '30px' }} spacing={3}>
        <Grid item xs={12}>
          <Box display= "flex" justifyContent = "center" width = "100%" sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs centered textColor = "secondary" variant='scrollable' scrollButtons = 'auto' indicatorColor = "secondary" style = {{fontFamily: "monospace"}} value={value} onChange={(e, n) => { setValue(n) }}>
              {projects.map((p => {
                return (
                  <Tab label = {p.title} {...allyProps(p.id)} />
                )
              }))}
            </Tabs>
          </Box>
        </Grid>
        <Grid item xs={12}>
          {projects.map((p) => {
            return (
              <TabPanel value = {value} index = {p.id}>
                <ProjectTab title = {p.title} description = {p.description} images = {p.images} textsize = {p.textsize} />
              </TabPanel>
            )
          })}
        </Grid>
      </Grid>
    </div>
  );
}