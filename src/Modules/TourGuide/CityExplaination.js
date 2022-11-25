import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./css/city.css";

export default function SimpleAccordion({detail}) {
  return (
    <div >
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='city_detail_info_name'>{detail.city} 정보 더보기...</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='city_detail_info'>
            {detail.explaination}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
