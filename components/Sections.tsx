import React, { SyntheticEvent } from 'react';
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
  const [expanded, setExpanded] = React.useState<string | false>('panel1');
  const handleChange = (panel:string) => (event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };
  
  return (
    <div>
      <Accordion 
        expanded={expanded === 'panel1'} 
        onChange={handleChange('panel1')} 
        disableGutters
        sx={{ mb:{md:2} }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color={expanded === 'panel1' ? 'light' : 'primary'}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={expanded === 'panel1' ? activePanelStyle : {}}
        >
          <Typography variant="h5">Wellcome</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='h6' component={'div'} mb={2}>
            - Onboarding video
          </Typography>
          <Typography component={'div'} mb={2}>
            <Link underline='none' color="#00000099">The box</Link>
          </Typography>
          <Typography component={'div'} mb={2}>
            <Link underline='none' color="#00000099">Sign in to Dashboard</Link>
          </Typography>
          <Typography component={'div'} mb={1}>
            <Link underline='none' color="#00000099">Mobile application</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion 
        expanded={expanded === 'panel2'} 
        onChange={handleChange('panel2')} 
        disableGutters
        sx={{ mb:{md: 2}, ":before": {display: 'none'} }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color={expanded === 'panel2' ? 'light' : 'primary'}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={expanded === 'panel2' ? activePanelStyle : {}}
        >
          <Typography variant="h5">Configuratin</Typography>
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
          <Typography variant="h5">Data</Typography>
        </AccordionSummary>
        <AccordionDetails>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}
