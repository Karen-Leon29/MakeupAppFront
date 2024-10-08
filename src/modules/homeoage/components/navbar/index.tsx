import React, { useEffect, useState } from 'react'
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
  Chip,
  Grid,
} from '@mui/material'
import {
  Search as SearchIcon,
  Person as PersonIcon,
  ShoppingCart as ShoppingCartIcon,
  LocalShipping as LocalShippingIcon,
  ExpandMore as ExpandMoreIcon,
} from '@mui/icons-material'
import { useStyles } from './styles'
import { useLocation, useNavigate } from 'react-router-dom'
import { CategoriesResponse, getCategories } from 'core/services'
import logo from 'assets/pics/logo.png'

export const NavbarComponent: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [openDialog, setOpenDialog] = useState(false)
  const [categories, setCategories] = useState<CategoriesResponse[]>([])
  const [selectedCategories, setSelectedCategories] = useState<CategoriesResponse[]>([]) // Nuevo estado
  const classes = useStyles
  const navigate = useNavigate()
  const { pathname } = useLocation()

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

  const handleCategories = async () => {
    const { data: resp } = await getCategories()
    if (resp) setCategories(resp)
  }

  const handleSelectCategory = (category: CategoriesResponse) => {
    if(pathname !== '/homepage') navigate('/homepage')
    if (!selectedCategories.find((c) => c.id === category.id)) {
      setSelectedCategories((prev) => [...prev, category])
    }
    handleCloseMenu()
  }

  const handleDeleteCategory = (categoryId: number) => {
    setSelectedCategories((prev) => prev.filter((category) => category.id !== categoryId))
  }

  useEffect(() => {
    handleCategories()
  }, [])

  return (
    <>
      <AppBar position="static" sx={classes.appBar}>
        <Toolbar sx={classes.toolbar}>
          <Typography sx={classes.logo}>
            <img src={logo} alt="Logo" style={{ height: '60px', marginTop: '10px' }} />
          </Typography>
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
              {categories?.map((category) => (
                <MenuItem key={category.id} onClick={() => handleSelectCategory(category)}>
                  {category.nameCategory}
                </MenuItem>
              ))}
            </Menu>
            <Box onClick={() => navigate('/about-us')}>
              <Typography sx={classes.link}>Sobre Nosotros</Typography>
            </Box>
            <Box onClick={() => navigate('/contact-us')}>
              <Typography sx={classes.link}>Contáctanos</Typography>
            </Box>
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

      {selectedCategories.length > 0 && (
        <Box sx={{ p: '15px 50px' }}>
          <Typography sx={classes.categotySelect}>Categorías seleccionadas:</Typography>
          <Grid container spacing={1}>
            {selectedCategories.map((category) => (
              <Grid item key={category.id}>
                <Chip
                  label={category.nameCategory}
                  onDelete={() => handleDeleteCategory(category.id)}
                  color="primary"
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

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
