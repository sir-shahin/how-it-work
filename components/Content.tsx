import { Box, Container, Divider, Paper, Stack, Typography, useMediaQuery } from "@mui/material";
import Sections from "./Sections";
import { useTheme } from '@mui/material/styles';
import VideoJS from './VideoJs';
import Scanner from "src/assets/images/Scanner";
import Mobile from "src/assets/images/Mobile";
import Monitor from "src/assets/images/Monitor";

export default function Content () {
    const theme = useTheme();
    const cards = [
        {
            title: 'The box',
            icon: Scanner,
            descriptions: "Attendees will 'tap-in' using the registration box to log their presence."
        },
        {
            title: 'Dashboard',
            icon: Monitor,
            descriptions: "Our dashboard, with its user-friendly design, simplifies administrative tasks and promotes easy comprehension of collected data."
        },
        {
            title: 'App',
            icon: Mobile,
            descriptions: "Our new mobile app enables attendees to register their presence directly from their phone."
        },
    ]
    const videoJsOptions = {
        controls: true,
        responsive: true,
        fluid: true,
        poster: "/vposter.png",
        sources: [{
          src: '/res.mp4',
          type: 'video/mp4'
        }]
    };
    const roundedPaper = [
        {
            borderRadius: 3,
            padding: 3
        }, 
        useMediaQuery(theme.breakpoints.up('md')) && {minHeight: 256}
    ]

    return (
        <Container disableGutters>
            <Stack direction={useMediaQuery(theme.breakpoints.down('md')) ? 'column' : 'row'} mt={3} px={{xs:0 , md:1}}>
                <Box flex={useMediaQuery(theme.breakpoints.up('md')) && '0 0 288px'} pr={{ md:2 }} mb={4}>
                    <aside style={{ position: 'sticky', top:30}}>
                        <Sections />
                    </aside>
                </Box>
                <Box flex={1}>
                    <Typography 
                        variant={useMediaQuery(theme.breakpoints.down('md')) ? 'h4' : 'h3'} 
                        component="h1" 
                        color={'primary'}
                        px={2}
                    >
                        Onboarding video
                    </Typography>

                    <Box mt={1} mb={2} ml={{md:2}}>
                        <VideoJS options={videoJsOptions} />
                    </Box>

                    <Typography variant="h6" component="h3" color={'primary'} px={2} py={1}>
                        - Description
                    </Typography>
                    <Typography component="p" color="GrayText" px={2} mb={5}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum neque egestas congue quisque egestas diam in arcu. Nec ultrices dui sapien eget mi proin sed libero enim. Sed pulvinar proin gravida hendrerit. Porttitor leo a diam sollicitudin tempor id. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Dictum non consectetur a erat nam. Mollis nunc sed id semper risus in hendrerit gravida rutrum. Mi sit amet mauris commodo quis imperdiet. Turpis egestas sed tempus urna et pharetra pharetra massa massa. Et netus et malesuada fames ac turpis egestas. Non curabitur gravida arcu ac tortor dignissim convallis. Ipsum a arcu cursus vitae congue mauris rhoncus aenean vel. Et netus et malesuada fames ac turpis egestas integer. Diam phasellus vestibulum lorem sed risus ultricies tristique. Nunc id cursus metus aliquam eleifend mi in nulla. Eget nunc lobortis mattis aliquam. Et leo duis ut diam quam nulla porttitor massa.
                    </Typography>

                    <Divider sx={{mx:2}}/>

                    <Typography p={3} color="#0000004D">What you NEED</Typography>

                    <Stack direction={useMediaQuery(theme.breakpoints.down('md')) ? 'column' : 'row'} spacing={3} px={3}>
                        {
                            cards.map(item => (
                                <Box flex={1} mb={0} key={item.title}>
                                    <Paper elevation={8} sx={roundedPaper}>
                                        <Box display='flex' pb={2}>
                                            <item.icon />
                                            <Typography variant="h5" component="b" my="auto" pl={2}>{ item.title }</Typography>   
                                        </Box> 
                                        <Typography component={'p'} color="GrayText">{ item.descriptions }</Typography>
                                    </Paper>
                                </Box>
                            ))
                        } 
                    </Stack>
                </Box>
            </Stack>
        </Container>
    )
}