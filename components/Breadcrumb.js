import { Breadcrumbs, Container, Typography, useMediaQuery } from "@mui/material";
import Link from '@mui/material/Link';
import { ChevronRight } from "@mui/icons-material";
import { useTheme } from '@mui/material/styles';

export default function MuiBreadcrumb () {
    const theme = useTheme();

    return(
        <Container disableGutters maxWidth="lg" sx={{marginTop: {xs: 4, md: 1}, px:1}}>
            <Breadcrumbs
                underline="hover" 
                separator={<ChevronRight/>} 
                aria-label="breadcrumb"
                maxItems={useMediaQuery(theme.breakpoints.down('md')) ? 2 : 8}
            >
                <Link 
                    color={'inherit'}
                    underline="hover"
                    href="/"
                >
                    Home
                </Link>
                <Link
                    color={'inherit'}
                    underline="hover"
                    href="/404"
                >
                    How It Works
                </Link>
                <Typography color={'primary'}>Onboarding video</Typography>
            </Breadcrumbs>

        </Container>
    )
}