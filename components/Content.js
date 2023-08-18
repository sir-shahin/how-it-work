import { Container, Divider, Grid, Typography, useMediaQuery } from "@mui/material";
import Sections from "./Sections";
import { useTheme } from '@mui/material/styles';

export default function Content () {
    const theme = useTheme()
    return (
        <Container disableGutters>
            <Grid container mt={3} px={{xs:0 , md:1}}>
                <Grid item xs={12} md={3} pr={{ md:2 }} mb={4}>
                    <aside>
                        <Sections />
                    </aside>
                </Grid>
                <Grid item xs={12} md={9}>
                    <Typography 
                        variant={useMediaQuery(theme.breakpoints.down('md')) ? 'h4' : 'h3'} 
                        component="h1" 
                        color={'primary'}
                        px={2}
                    >
                        Onboarding video
                    </Typography>
                    {/* Video */}
                    <Typography variant="h6" component="h3" color={'primary'} px={2}>
                        - Description
                    </Typography>
                    <Typography component="p" color="GrayText" px={2} mb={5}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum neque egestas congue quisque egestas diam in arcu. Nec ultrices dui sapien eget mi proin sed libero enim. Sed pulvinar proin gravida hendrerit. Porttitor leo a diam sollicitudin tempor id. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Dictum non consectetur a erat nam. Mollis nunc sed id semper risus in hendrerit gravida rutrum. Mi sit amet mauris commodo quis imperdiet. Turpis egestas sed tempus urna et pharetra pharetra massa massa. Et netus et malesuada fames ac turpis egestas. Non curabitur gravida arcu ac tortor dignissim convallis. Ipsum a arcu cursus vitae congue mauris rhoncus aenean vel. Et netus et malesuada fames ac turpis egestas integer. Diam phasellus vestibulum lorem sed risus ultricies tristique. Nunc id cursus metus aliquam eleifend mi in nulla. Eget nunc lobortis mattis aliquam. Et leo duis ut diam quam nulla porttitor massa.
                    </Typography>

                    <Divider sx={{mx:2}}/>

                    <Typography p={2} color="#0000004D">What you NEED</Typography>

                </Grid>
            </Grid>
        </Container>
    )
}