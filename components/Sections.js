import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from '@mui/material';


export default function Sections() {

  const activePanelStyle = {
    backgroundColor: '#0F424D',
    color: 'white',
    borderRadius: { xs:0, md:3 }
  }
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  
  return (
    <div>
      <Accordion 
        expanded={expanded === 'panel1'} 
        onChange={handleChange('panel1')} 
        disableGutters
        sx={{ mb:2 }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color={expanded === 'panel1' ? 'light' : 'primary'}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={expanded === 'panel1' ? activePanelStyle : {}}
        >
          <Typography>Wellcome</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='h6' component={'div'} mb={1}>
            - Onboarding video
          </Typography>
          <Typography component={'div'}>
            <Link underline='none' color="GrayText">The box</Link>
          </Typography>
          <Typography component={'div'}>
            <Link underline='none' color="GrayText">Sign in to Dashboard</Link>
          </Typography>
          <Typography component={'div'}>
            <Link underline='none' color="GrayText">Mobile application</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion 
        expanded={expanded === 'panel2'} 
        onChange={handleChange('panel2')} 
        disableGutters
        sx={{ mb: 2, ":before": {display: 'none'} }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color={expanded === 'panel2' ? 'light' : 'primary'}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={expanded === 'panel2' ? activePanelStyle : {}}
        >
          <Typography>Configuratin</Typography>
        </AccordionSummary>
        <AccordionDetails>
        </AccordionDetails>
      </Accordion>

      <Accordion 
        expanded={expanded === 'panel3'} 
        onChange={handleChange('panel3')} 
        disableGutters
        sx={{ ":before": {display: 'none'} }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color={expanded === 'panel3' ? 'light' : 'primary'}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={expanded === 'panel3' ? activePanelStyle : {}}
        >
          <Typography>Data</Typography>
        </AccordionSummary>
        <AccordionDetails>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}
