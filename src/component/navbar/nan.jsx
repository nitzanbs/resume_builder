import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserProvider';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './NavbarCss.css'

export default function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const pages = ['home', 'createQuiz','play', 'logIn', 'signUp'];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar className='navColor'  position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/">
                <img className='logoImg' src="src\imgs\logo.png" alt="Logo" />
              </Link>
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {user ? (
                <>
                  <Button
                    component={Link}
                    to="/home"
                    color="inherit"
                    onClick={handleCloseNavMenu}
                  >
                    Home
                  </Button>
                  <Button
                    component={Link}
                    to="/Resume"
                    color="inherit"
                    onClick={handleCloseNavMenu}
                  >
                    Resume
                  </Button>
                  <Button
                    component={Link}
                    to="/MyResume"
                    color="inherit"
                    onClick={handleCloseNavMenu}
                  >
                    My Resume
                  </Button>
            
                  <Button color="inherit" onClick={() => setUser(null)}>
                    Log Out
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    component={Link}
                    to="/signUp"
                    color="inherit"
                    onClick={handleCloseNavMenu}
                  >
                    Sign Up
                  </Button>
                  <Button
                    component={Link}
                    to="/SignIn"
                    color="inherit"
                    onClick={handleCloseNavMenu}
                  >
                    Sign In
                  </Button>
                </>
              )}
            </Box>
            <Button
              component={Link}
              to="/profile"
              color="inherit"
              onClick={handleCloseNavMenu}
            >
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} color="inherit">
                  <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
                </IconButton>
                {/* <span>{user.fullName}</span> */}
              </Tooltip>
            </Button>
            
          </Toolbar>
        </Container>
      </AppBar>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
      >
        {pages.map((page, index) => (
          <MenuItem key={index} component={Link} to={`/${page}`} onClick={handleCloseNavMenu}>
            <Typography variant="body1">{page}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
