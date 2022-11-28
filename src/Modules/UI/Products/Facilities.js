import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// 숙소의 시설을 MUI의 Accorian에 담아주는 컴포넌트
export default function SimpleAccordion({facility}) {
  //시설의 head(제목)와 각각의 항목을 map을 사용하여 저장함.
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