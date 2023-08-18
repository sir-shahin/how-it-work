import { Box, Button, Grid, Link, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';

export default function AppFooter(){
    const theme = useTheme();

    return(
        <footer>
            <Box bgcolor="#000405">
                <Grid container px={{lg:15 , xs:3}} py={5} color="white">

                    <Grid item xs={12} md={3.5}>
                        <Grid container mb={{xs:3, md:0}}>
                            <Grid item xs={2} md={12} sx={{ filter: 'brightness(100) grayscale(1)'}}>
                                <img src={useMediaQuery(theme.breakpoints.down('md')) ? '/logo-sign.svg' : '/logo.svg'} alt="logo"/>
                            </Grid>
                            <Grid item xs={10} md={12}>
                                <Typography color="GrayText">
                                    Our vision is to provide convenience and help increase your sales business.
                                </Typography>
                            </Grid>
                        </Grid>
                        
                    </Grid>

                    <Grid item xs={12} md={8.5}>
                        <Grid container pl={{ md:4}} spacing={2}>
                            <Grid item xs={12} md={6} >
                                <Typography color={'primary'}>Service</Typography>
                                <Box display={'flex'} sx={{textTransform: 'capitalize'}}>
                                    <Button size="small" color="light">How it works</Button>
                                    <Button size="small" color="light">FAQ</Button>
                                    <Button size="small" color="light">Industries</Button>
                                    <Button size="small" color="light">pricing</Button>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6} >
                                <Typography color={'primary'}>Company</Typography>
                                <Box display={'flex'} sx={{textTransform: 'capitalize'}}>
                                    <Button size="small" color="light">about us</Button>
                                    <Button size="small" color="light">contact us</Button>
                                    <Button size="small" color="light">Terms of Use</Button>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6} >
                                <Typography color={'primary'}>Download</Typography>
                                <Box display={'flex'} sx={{textTransform: 'capitalize'}}>
                                    <Button size="small" color="light">mobile app</Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
                
                <Box sx={{borderTop: '1px solid rgba(255, 255, 255, 0.18)'}} py={1.5}>
                    <Grid container px={{lg:15 , xs:3}} justifyContent="space-between" color='#FFFFFF2E'>
                        <Grid item my={'auto'}>©2023 0&1 . All rights reserved</Grid>
                        <Grid item>
                            <Link href="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10 4H22.0053C25.316 4 28 6.684 28 9.99467V22.0067C28 25.316 25.316 28 22.0053 28H9.99467C6.684 28 4 25.316 4 22.0053V10C4 6.68667 6.68667 4 10 4V4Z" stroke="white" strokeOpacity="0.18" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M10.8266 14.8V22" stroke="white" strokeOpacity="0.18" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M15.6252 21.9999V17.7999C15.6252 16.1426 16.9679 14.7999 18.6252 14.7999V14.7999C20.2826 14.7999 21.6252 16.1426 21.6252 17.7999V21.9999" stroke="white" strokeOpacity="0.18" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M10.824 10.4507C10.6587 10.4507 10.524 10.5853 10.5254 10.7507C10.5254 10.916 10.66 11.0507 10.8254 11.0507C10.9907 11.0507 11.1254 10.916 11.1254 10.7507C11.1254 10.584 10.9907 10.4507 10.824 10.4507" stroke="white" strokeOpacity="0.18" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </footer>
    )
}