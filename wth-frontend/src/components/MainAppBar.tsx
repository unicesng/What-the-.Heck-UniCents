import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import PaidIcon from '@mui/icons-material/Paid';
import { Link } from 'react-router-dom';

const pages = [
                {name: 'Uni Compare', path: '/comparator', index: 0},
                {name: 'Donor List', path: '/donors', index: 0},
                {name: 'Discussion', path: '/discussion', index: 0},
                {name: 'About Us', path: '/about', index: 0},
              ];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const logo = 'https://s3.ap-southeast-1.amazonaws.com/ellipsis-whatthe.heckimages/UniCentslogoNew.png';

function MainAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  //const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <AppBar position="static">
      <Container maxWidth="false">
        <Toolbar disableGutters>
          {/* <PaidIcon sx={{ display: { xs: 'none', md: 'flex' , color:'orange'}, mr: 1 }} />
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'garamond',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'orange',
              textDecoration: 'none',
              alignItems:'center',}}>
            UniCents
          </Typography> */}
          <img src={logo} alt="logo" width="150px" height="55px" style={{marginRight: "10px"}}/>
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
              {pages.map(({name, path, index}) => (
                <MenuItem key={name.concat((index++).toString())} onClick={handleCloseNavMenu}>
                  <Link to={path} style={{ textDecoration: 'none' }}>
                    <Typography textAlign="center">{name}</Typography>
                  </Link>
                  
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <PaidIcon sx={{ display: { xs: 'flex', md: 'none' , color:'orange'}, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'garamond',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'orange',
              textDecoration: 'none',
            }}
          >
            UniCents
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(({name, path, index}) => (
              <Link to={path} style={{ textDecoration: 'none' }}>
                <Button
                  key={name.concat((index++).toString())}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {name}
                </Button>
              </Link>
            ))}
            
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
              <Link to="/login"  style={{ textDecoration: 'none' }}>
                <Button
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Login
                </Button>
             </Link>
          </Box> 
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MainAppBar;