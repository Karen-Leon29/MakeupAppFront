import { Box, Typography, Button, IconButton, Grid, Paper } from '@mui/material'
import { useState } from 'react'
import { useLittera } from '@assembless/react-littera'
import { MakeupString } from 'core/strings'
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material'
import { useStyles } from './styles'
import { BodyComponent } from 'modules/homeoage/components/body'

export const ProductDetailPage = () => {
  const classes = useStyles
  const translations = useLittera(MakeupString)
  const [selectedImage, setSelectedImage] = useState<string>('')

  const product = {
    title: 'Paleta Edición Limitada',
    description: 'Paleta de sombras exclusiva con tonos impresionantes.',
    price: 29.99,
    brand: 'MakeupCo',
    quantity: 10,
    presentation: '12 tonos',
    images: [
      'https://www.anyeluz.com/cdn/shop/files/Paleta_Pink_cuadrado_1.png?v=1718163311&width=1080',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDxHzzOxsu4yrfjNoQ3sJ_t2mJtakviiAIMw&s',
      'https://ecotiendaforesta.com/cdn/shop/products/PhotoRoom-20220101_201347.png?v=1641086347',
    ],
  }

  const handleImageClick = (image: string) => {
    setSelectedImage(image)
  }

  return (
    <Box sx={classes.root}>
      <IconButton sx={classes.backButton} onClick={() => window.history.back()}>
        <ArrowBackIcon />
      </IconButton>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box sx={classes.imageContainer}>
            <Box sx={classes.thumbnailContainer}>
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Producto miniatura ${index}`}
                  onClick={() => handleImageClick(img)}
                  style={{
                    width: '80px',
                    height: '80px',
                    objectFit: 'cover',
                    cursor: 'pointer',
                    transition: 'border 0.3s ease',
                    borderRadius: '8px',
                    border: selectedImage === img ? '2px solid #1976d2' : '',
                  }}
                />
              ))}
            </Box>
            <Box sx={classes.mainImageContainer}>
              <img
                src={selectedImage || product.images[0]}
                alt="Imagen Principal"
                style={{
                  width: 'auto',
                  height: '100%',
                  minHeight: '400px',
                  borderRadius: '10px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease',
                }}
              />
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={classes.descriptionContainer}>
            <Typography variant="h4" sx={classes.productTitle}>
              {product.title}
            </Typography>
            <Typography variant="h5" sx={classes.productPrice}>
              ${product.price}
            </Typography>
            <Typography variant="body1" sx={classes.productInfo}>
              <strong>Marca:</strong> {product.brand}
            </Typography>
            <Typography variant="body1" sx={classes.productInfo}>
              <strong>Cantidad disponible:</strong> {product.quantity}
            </Typography>
            <Typography variant="body1" sx={classes.productInfo}>
              <strong>Presentación:</strong> {product.presentation}
            </Typography>
            <Typography variant="body2" sx={classes.productDescription}>
              {product.description}
            </Typography>

            <Box sx={classes.buttonsContainer}>
              <Button variant="contained" color="primary" sx={classes.buyButton}>
                {translations.buyNow}
              </Button>
              <Button variant="outlined" color="secondary" sx={classes.cartButton}>
                {translations.addToCart}
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <BodyComponent />
    </Box>
  )
}
