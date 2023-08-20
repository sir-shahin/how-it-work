import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';


export default function Faq() {
    const theme = useTheme();
    
    return (
        <Grid container color="white" bgcolor="#BF2659" px={{lg:13 , xs:3}} py={7.5} mt={11}>
            <Grid item xs={12} md={7}>
                <Typography 
                    component={'div'}
                    variant={useMediaQuery(theme.breakpoints.down('md')) ? 'h4' : 'h2'}
                    textAlign={useMediaQuery(theme.breakpoints.down('md')) ? 'center' : 'left'}
                >
                    Have a Question?
                </Typography>
            </Grid>
            <Grid item xs={12} md={5} display={'flex'} my={'auto'} pt={{xs:2, md:0}}
                justifyContent={useMediaQuery(theme.breakpoints.down('md')) ? 'center' : 'end'}>
                <Button variant="contained" sx={{borderRadius: 50, width: 130}}>faq</Button>
            </Grid>
        </Grid>
    )
}