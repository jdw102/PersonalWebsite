import { Accordion, AccordionDetails, AccordionSummary, Card, Divider, Grid, IconButton, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Paper, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DocumentsTable from './DocumentTable';
import { Document } from 'react-pdf';
import Resume from '../Resources/worthy_resume.pdf'
import Download from '@mui/icons-material/Download';
import VisibilityIcon from '@mui/icons-material/Visibility';



const resumedocs = [
    {
        title: "Resume",
        description: "My resume detailing my previous work experience and academic standing."
    }
]

const Documents = () =>{
    const ResumeDoc = React.useMemo(() => Resume);
    return (
        <div>
        <Grid container justifyContent= "center"  sx = {{paddingTop: '30px'}}>
            <Grid item xs = {10} sm = {10} md = {10} lg = {8} xl = {8}  raised component = {Card} style = {{borderRadius: "10px", marginBottom: 30, boxShadow: "0 0 0 8px #d1700f"}}>
                <Accordion defaultExpanded>
                    <AccordionSummary component = {ListItem} expandIcon = {<ExpandMoreIcon />}  style = {{display: "flex", justifyContent: "center"}}>
                            <Typography color='#2e201f' sx={{ fontFamily: 'monospace', marginBottom: 3, marginTop: 3, fontWeight: 550}} variant='h5'>
                                My Resume
                            </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <object data= {Resume} type="application/pdf"  width ="100%" height="500px" />
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </Grid>
        </div>
    )
}

export default Documents