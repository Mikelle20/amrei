/* eslint-disable react-hooks/exhaustive-deps */
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
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals, openCart, purchaseCart} from '../features/cartSlice';
import { setAccessed } from '../features/productModalSlice'

const pages = [['Home', '/'],['Products', '/products']];


const ResponsiveAppBar = (props) => {
  const { cartItems, amount, total } = useSelector(store => store.cart)
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])

  const handleCartClick = () => {
    dispatch(openCart())
    dispatch(purchaseCart(false))
    console.log(cartItems, amount, total)
  }

  const handleColors = () => {
    dispatch(setAccessed())
    props.changeColors()
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
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
                <div className='titleFullContainer' style={{ justifyContent: window.location.pathname === '/' ? 'center' : 'flex-end'}}>AMREI <img className='kirbyLogo' src={require('../assets/kirby-unscreen.gif')} alt='cupid kirby'></img></div>
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
                <div className='titleContainer'>AMREI <img className='kirbyLogo' src={require('../assets/kirby-unscreen.gif')} alt='cupid kirby'></img></div>
            </Typography>
            {window.location.pathname !== '/' && <MenuItem onClick={handleColors}>
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
                <Typography
                >
                    <IconButton id='cartIcon' onClick={handleCartClick} sx={{ p: 0 }}>
                        <div className='cartIcon'>
                            <div className='cartCount'>{amount}</div>
                            <img className='cartButton' src={require('../assets/shopping-cart-light.png')} alt='shopping cart'></img>
                        </div>
                    </IconButton>
                </Typography>
                </Tooltip>
            </Box>
            </Toolbar>
        </Container>
        </AppBar>
    </div>
  );
};
export default ResponsiveAppBar;