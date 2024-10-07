import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Menu,
  MenuItem,
  IconButton,
  InputBase,
  Badge,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from '@mui/material'
import {
  Search as SearchIcon,
  Person as PersonIcon,
  ShoppingCart as ShoppingCartIcon,
  LocalShipping as LocalShippingIcon,
  ExpandMore as ExpandMoreIcon,
} from '@mui/icons-material'
import { useStyles } from './styles'
import { useNavigate } from 'react-router-dom'

export const NavbarComponent: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [openDialog, setOpenDialog] = useState(false) 
  const classes = useStyles
  const navigate = useNavigate()

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  const handleOpenDialog = () => {
    setOpenDialog(true)
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
  }

  const handleLogout = () => {
    handleCloseDialog()
    navigate('/') 
  }

  return (
    <>
      <AppBar position="static" sx={classes.appBar}>
        <Toolbar sx={classes.toolbar}>
          <Typography sx={classes.logo}>Logo</Typography>
          <Box sx={classes.linksContainer}>
            <Box onClick={() => navigate('/homepage')}>
              <Typography sx={classes.link}>Inicio</Typography>
            </Box>
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
            <Box onClick={() => navigate('/about-us')}>
              <Typography sx={classes.link}>Sobre Nosotros</Typography>
            </Box>
            <Typography sx={classes.link}>Contáctanos</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={2}>
            <Box sx={classes.search}>
              <InputBase
                sx={classes.inputBase}
                placeholder="Buscar..."
                inputProps={{ 'aria-label': 'search' }}
              />
              <Box sx={classes.searchIconWrapper}>
                <SearchIcon />
              </Box>
            </Box>
            <IconButton sx={classes.iconButton} onClick={handleOpenDialog}>
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

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Cerrar Sesión</DialogTitle>
        <DialogContent>
          <DialogContentText>¿Estás seguro de que deseas cerrar sesión?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleLogout} color="primary" autoFocus>
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
