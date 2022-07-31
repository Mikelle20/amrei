import React from 'react'
import { NavLink } from 'react-router-dom'
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

const pages = [['Home', '/'],['Products', '/products']];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div id='navbar'>
        <AppBar style={{ backgroundColor: '#B28DC3' }} position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                letterSpacing: '.3rem',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
                className: 'navTitle',
                ":hover": { textDecoration: 'none', color: 'white' }
                }}
            >
                AMREI
            </Typography>

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
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <NavLink className='navLink' to={page[1]}><span>{page[0]}</span></NavLink>
                    </MenuItem>
                ))}
                </Menu>
            </Box>
            <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'white',
                textDecoration: 'none',
                ":hover": { textDecoration: 'none', color: 'white' }
                }}
            >
                AMREI
            </Typography>
            {window.location.pathname !== '/' && <MenuItem onClick={props.changeColors}>
                {props.accessColors ? "🌜":"🌞"}
            </MenuItem>}
            
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
              <NavLink
                to={page[1]}
                className='navLinkFull'
                key={page[0]}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <span>{page[0]}</span>
              </NavLink>
                ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open Cart">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <img className='cartButton' src={require('../assets/shopping-cart-light.png')} alt='shopping cart'></img>
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
                </Menu>
            </Box>
            </Toolbar>
        </Container>
        </AppBar>
    </div>
  );
};
export default ResponsiveAppBar;


// function Navbar(props) {
//     const sunMoon = props.accessColors ? "🌜":"🌞"
//     const colorsAccessed = props.accessColors ? " accessed" : ""
//   return (
//     <div>
//         <nav id='navbar' className={"navbar center navbar-expand-lg navbar-light bg-light" + colorsAccessed}>
//             <div className="container-fluid">
//                 <a className="navbar-brand" href="/"><p className='navTitle'>{"amrei " + sunMoon}</p></a>
//                 <button className="navbar-toggler" onClick={props.toggleNav} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarNavDropdown">
//                     <ul className="navbar-nav">
//                         <li className="nav-item">
//                         <Link className="nav-link" to="/Home"><p>Home</p></Link> 
//                         </li>
//                         <li className='nav-item'>
//                             <Link className="nav-link" to="/Products"><p>Products</p></Link>
//                         </li>
//                         <li>
                            // <div 
                            //     className="toggler" 
                            // >
                            //     <h5 className="toggler--label">🌞</h5>
                            //     <div 
                            //         className="toggler--slider"
                            //         onClick={props.changeColors}
                            //     >
                            //         <div className="toggler--slider--circle"></div>
                            //     </div>
                            //     <h5 className="toggler--label">🌜</h5>
                            // </div>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     </div>
//   )
// }

// export default Navbar