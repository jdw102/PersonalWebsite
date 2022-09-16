import { Accordion, AccordionDetails, IconButton, Paper, AccordionSummary, Grid, Table, TableContainer, TableHead, TableRow, TableCell, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DownloadIcon from '@mui/icons-material/Download';


const DocumentsTable = (props) =>{
    const docs = props.documents;
    return (
        <div>
        <TableContainer >
            <Table>
                {docs.map((doc) => {
                    return(
                        <TableRow>
                            <TableCell>{doc.title}</TableCell>
                            <TableCell>{doc.description}</TableCell>
                            <TableCell>
                                <IconButton><VisibilityIcon/></IconButton>
                                <IconButton><DownloadIcon /></IconButton>
                            </TableCell>
                        </TableRow>
                    )
                })}
            </Table>
        </TableContainer>
        </div>
    )
}

export default DocumentsTable;