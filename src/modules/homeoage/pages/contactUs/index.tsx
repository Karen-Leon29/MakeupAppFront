import React, { useState } from 'react'
import { Box, Container, TextField, Button, Typography, Grid, IconButton } from '@mui/material'
import { useSpring, animated } from 'react-spring'
import { NavbarComponent } from 'modules/homeoage/components/navbar'
import {
  FormContainer,
  FormGrid,
  ContactUsContainer,
  MapContainer,
  SocialContainer,
} from './styles'
import { Facebook, Telegram, WhatsApp, LinkedIn, YouTube, X } from '@mui/icons-material'

export const ContactUs: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({ name: '', email: '', message: '' })

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = { name: '', email: '', message: '' }

    if (!name) newErrors.name = 'El nombre es obligatorio'
    if (!email) newErrors.email = 'El correo es obligatorio'
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      newErrors.email = 'Correo inválido'
    }
    if (!message) newErrors.message = 'El mensaje es obligatorio'

    setErrors(newErrors)

    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      console.log({ name, email, message })
    }
  }

  return (
    <Box>
      <NavbarComponent />
      <ContactUsContainer>
        <Container maxWidth="lg">
          <animated.div style={fadeIn}>
            <Typography variant="h3" align="center" sx={{ mb: 4, color: '#6C4D94' }}>
              Contáctanos
            </Typography>

            <FormContainer component="form" onSubmit={handleSubmit}>
              <FormGrid container spacing={2} maxWidth="sm">
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Nombre"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    error={!!errors.name}
                    helperText={errors.name}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Correo Electrónico"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={!!errors.email}
                    helperText={errors.email}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Mensaje"
                    variant="outlined"
                    multiline
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    error={!!errors.message}
                    helperText={errors.message}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{
                      py: '10px',
                    }}
                  >
                    Enviar Mensaje
                  </Button>
                </Grid>
              </FormGrid>
            </FormContainer>

            <Typography variant="h5" align="center" sx={{ mt: 4, color: '#6C4D94' }}>
              Nuestra Ubicación
            </Typography>
            <MapContainer>
              <Typography variant="body1" color="textSecondary">
                Dirección: Av. Maquillaje, 1234, Cúcuta, Colombia
              </Typography>
            </MapContainer>

            <Box mt={4} textAlign="center">
              <Typography variant="h6" color="#6C4D94">
                También puedes encontrarnos en nuestras redes sociales
              </Typography>

              <SocialContainer>
                <IconButton href="https://www.facebook.com" target="_blank" color="primary">
                  <Facebook />
                </IconButton>

                <IconButton href="https://x.com" target="_blank" color="primary">
                  <X />
                </IconButton>

                <IconButton href="https://telegram.org" target="_blank" color="primary">
                  <Telegram />
                </IconButton>

                <IconButton href="https://wa.me" target="_blank" color="success">
                  <WhatsApp />
                </IconButton>

                <IconButton href="https://www.linkedin.com" target="_blank" color="primary">
                  <LinkedIn />
                </IconButton>

                <IconButton href="https://www.youtube.com" target="_blank" color="error">
                  <YouTube />
                </IconButton>
              </SocialContainer>
            </Box>
          </animated.div>
        </Container>
      </ContactUsContainer>
    </Box>
  )
}
