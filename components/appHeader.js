import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { useMediaQuery, useTheme } from '@mui/material';
import LogoSign from '@/assets/images/LogoSign';
import Logo from '@/assets/images/Logo';


const pages = [
  { text:'How it works'},
  { text:'Industries and Solutions', hasMenu : true},
  { text:'Pricing', hasMenu: true}, 
  { text:'FAQ'}, 
  { text:'Contact Us'}
];

function AppHeader(props) {
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  function ElevationScroll(props) {
    const { children, window } = props;
    
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      
      elevation: (useMediaQuery(theme.breakpoints.down('md')) && trigger) ? 4 : 0,
    });
  }

  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  };

  return (
    <ElevationScroll {...props}>
        <AppBar position={useMediaQuery(theme.breakpoints.down('md')) ? 'sticky' : 'static'} color="body">
          <Container maxWidth="lg" disableGutters>
            <Toolbar disableGutters sx={{padding: '0 24px'}}>

              <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: { xs:2 , lg: 9}}} >
                <Logo/>
              </Box>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                  <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                  >
                  <MenuIcon />
                  </IconButton>
                  <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                      display: { xs: 'block', md: 'none' },
                  }}
                  >
                  {pages.map((page) => (
                      <MenuItem key={page.text} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page.text}</Typography>
                      </MenuItem>
                  ))}
                  </Menu>
              </Box>
              
              <Box py={2} sx={{flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <LogoSign />
              </Box>
              {/* Destop menu */}
              <Box py={4} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                  {pages.map((page) => (
                  <Button
                      key={page.text}
                      color={'inherit'}
                      sx={{ my: 2, mr:2, color:'#6F7071', display: 'inline-flex', padding:{xs:0, lg:1} }}
                      endIcon={page.hasMenu && <KeyboardArrowDown />}
                  >
                      {page.text}
                  </Button>
                  ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                  <Button variant='contained' sx={{ borderRadius: 50}}>
                    LOGIN
                  </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
    </ElevationScroll>
  );
}
export default AppHeader;
