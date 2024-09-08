import React from 'react';
import { AppBar, Toolbar, Typography, Box, Menu, MenuItem, IconButton, InputBase, Badge } from '@mui/material';
import { Search as SearchIcon, Person as PersonIcon, ShoppingCart as ShoppingCartIcon, LocalShipping as LocalShippingIcon, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { useStyles } from './styles';

export const NavbarComponent: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const classes = useStyles 

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={classes.appBar}>
      <Toolbar sx={classes.toolbar}>
        <Typography sx={classes.logo}>Logo</Typography>
        <Box sx={classes.linksContainer}>
          <Typography sx={classes.link}>Inicio</Typography>
          <Typography
            sx={{ ...classes.link, display: 'flex', alignItems: 'center' }}
            onClick={handleOpenMenu}
          >
            Categorías <ExpandMoreIcon />
          </Typography>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
            MenuListProps={{
              'aria-labelledby': 'categories-button',
            }}
          >
            <MenuItem onClick={handleCloseMenu}>Belleza</MenuItem>
            <MenuItem onClick={handleCloseMenu}>Perfumería</MenuItem>
            <MenuItem onClick={handleCloseMenu}>Maquillaje</MenuItem>
            <MenuItem onClick={handleCloseMenu}>Cuidado de la Piel</MenuItem>
            <MenuItem onClick={handleCloseMenu}>Cuidado del Cabello</MenuItem>
            <MenuItem onClick={handleCloseMenu}>Manicura</MenuItem>
            <MenuItem onClick={handleCloseMenu}>Spa y Relajación</MenuItem>
          </Menu>
          <Typography sx={classes.link}>Sobre Nosotros</Typography>
          <Typography sx={classes.link}>Contáctanos</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={2}>
          <Box sx={classes.search}>
            <InputBase sx={classes.inputBase} placeholder="Buscar..." inputProps={{ 'aria-label': 'search' }} />
            <Box sx={classes.searchIconWrapper}>
              <SearchIcon />
            </Box>
          </Box>
          <IconButton sx={classes.iconButton}>
            <PersonIcon />
          </IconButton>
          <IconButton sx={classes.iconButton}>
            <Badge badgeContent={4} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <IconButton sx={classes.iconButton}>
            <LocalShippingIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
