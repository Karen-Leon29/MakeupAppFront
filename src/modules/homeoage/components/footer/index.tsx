import React from 'react'
import { AppBar, Toolbar, Typography, Box, IconButton, List } from '@mui/material'
import { useStyles } from './styles'
import { Email, Facebook, Instagram, LinkedIn, Phone } from '@mui/icons-material'
import Logo from 'assets/pics/Dori-01.png'

export const FooterComponent: React.FC = () => {
  const classes = useStyles

  return (
    <AppBar position="static" sx={classes.appBar}>
      <Toolbar sx={classes.toolbar}>
        <Typography sx={classes.leftText}>
          Aimar Bayona Barrientos - Todos los derechos reservados
        </Typography>
        <Box sx={classes.iconContainer}>
          <IconButton sx={classes.icon}>
            <Facebook />
          </IconButton>
          <IconButton sx={classes.icon}>
            <Instagram />
          </IconButton>
          <IconButton sx={classes.icon}>
            <LinkedIn />
          </IconButton>
        </Box>
      </Toolbar>

      <Toolbar sx={classes.secondSection}>
        <Box sx={classes.contactContainer}>
          <Typography sx={classes.contactTitle}>Makeup Doty</Typography>
          <Box sx={classes.contactInfo}>
            <List sx={classes.containerList}>
              <Typography sx={classes.contactText}>Sobre Nosotros</Typography>
              <Typography sx={classes.contactText}>Nuestro Equipo</Typography>
              <Typography sx={classes.contactText}>¿Dónde Comprar?</Typography>
              <Typography sx={classes.contactText}>Terminos y Condiciones</Typography>
              <Typography sx={classes.contactText}>Póliticad de Privacidad</Typography>
            </List>
          </Box>
        </Box>
        <Box sx={classes.logoContainer}>
          <img
            src={Logo}
            alt="Logo"
            style={{
              minHeight: '200px',
            }}
          />
        </Box>
        <Box sx={classes.contactContainer}>
          <Typography sx={classes.contactTitle}>Contáctanos !!!!</Typography>
          <Box sx={classes.contactInfo}>
            <IconButton sx={classes.iconContact}>
              <Phone />
            </IconButton>
            <Typography sx={classes.contactText}>55 5723 7999</Typography>
          </Box>
          <Box sx={classes.contactInfo}>
            <IconButton sx={classes.iconContact}>
              <Email />
            </IconButton>
            <Typography sx={classes.contactText}>correoDeMakeupDoty@mail.com</Typography>
          </Box>
          <Typography sx={classes.integralPrivacity}>Acá lo del Copy Rigth</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
