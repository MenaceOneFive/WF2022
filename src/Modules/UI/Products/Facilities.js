import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion({facility}) {
  return (
    facility.map((object, idx) => {
        return(
            <Accordion key={idx}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>{object.head}</Typography>
          </AccordionSummary>
          <AccordionDetails>
          {object.items.map((item, i) => {
                return(
                    <Typography key={i}>
                        {item}
                 </Typography>
                )
             })}
             </AccordionDetails>
            </Accordion>
        )
    })
  );
}