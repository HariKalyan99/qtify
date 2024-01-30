import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './Faq.module.css'

export default function Faq() {
  return (
    <div className={styles.accordionContainer}>
      <h1 style={{textAlign: "center"}}>FAQ</h1>
      <Accordion className={styles.accordionSection} defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color: "var(--color-primary)", fontSize: "3rem"}}/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Is QTify free to use?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor: "var(--color-white)", color: "var(--color-black)"}}>
          <Typography >
          Yes! It is 100% free, and has 0% ads!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordionSection} defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color: "var(--color-primary)", fontSize: "3rem"}}/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Can I download and listen to songs offline?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor: "var(--color-white)", color: "var(--color-black)"}}>
          <Typography >
          Sorry, unfortunately we don't provide the service to download any songs.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
