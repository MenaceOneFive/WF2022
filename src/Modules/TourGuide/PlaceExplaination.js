import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./css/place.css";
import "./css/map.css"

export default function SimpleAccordion({detail}) {
  return (
    <div>
      <Accordion className="accordian_">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="keypoint">핵심 포인트!</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="keypoint_explain">
            {detail.explain}
          </Typography>
        </AccordionDetails>
     </Accordion>
    </div>
  );
}
