import { Box, Typography, Button, Grid, Paper, Snackbar, Alert } from '@mui/material'
import { useContext, useState } from 'react'
import { useLittera } from '@assembless/react-littera'
import { MakeupString } from 'core/strings'
import { AddShoppingCart, ArrowBack as ArrowBackIcon } from '@mui/icons-material'
import { useStyles } from './styles'
import theme from 'core/theme/theme'
import { useNavigate } from 'react-router-dom'
import { BodyComponent } from 'modules/homeoage/components/body'
import { AppContext } from 'core/contexts'

export const ProductDetailPage = () => {
  const classes = useStyles
  const translations = useLittera(MakeupString)
  const [selectedImage, setSelectedImage] = useState<string>('')
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const navigate = useNavigate()
  const { setProducts, products } = useContext(AppContext)

  const product = {
    id: 4,
    nameProduct: 'Paleta Edición Limitada',
    description: 'Paleta de sombras exclusiva con tonos impresionantes.',
    price: 29.99,
    brand: 'MakeupCo',
    amount: 10,
    presentation: '12 tonos',
    img: [
      'https://www.anyeluz.com/cdn/shop/files/Paleta_Pink_cuadrado_1.png?v=1718163311&width=1080',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDxHzzOxsu4yrfjNoQ3sJ_t2mJtakviiAIMw&s',
      'https://ecotiendaforesta.com/cdn/shop/products/PhotoRoom-20220101_201347.png?v=1641086347',
    ],
  }

  const handleImageClick = (image: string) => {
    setSelectedImage(image)
  }

  const handleAddToCart = () => {
    setOpenSnackbar(true)
    const newProducts = products
    newProducts.push(product)
    setProducts(newProducts)
  }

  return (
    <Box sx={classes.root}>
      <Typography
        sx={{
          ...classes.productTitle,
          display: 'flex',
          alignItems: 'center',
          fontSize: '1.5rem',
          mb: 4,
        }}
      >
        <ArrowBackIcon
          onClick={() => navigate('/homepage')}
          sx={{
            color: theme.palette.primary.main,
            fontSize: '2rem',
            cursor: 'pointer',
            marginRight: '10px',
          }}
        />
        {product.nameProduct}
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box sx={classes.imageContainer}>
            <Box sx={classes.thumbnailContainer}>
              {product.img.map((img, index) => (
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
                    transition: 'border 0.3s ease, transform 0.3s',
                    borderRadius: '8px',
                    border: selectedImage === img ? `2px solid ${theme.palette.primary.main}` : '',
                    transform: selectedImage === img ? 'scale(1.05)' : 'scale(1)',
                  }}
                />
              ))}
            </Box>
            <Box sx={classes.mainImageContainer}>
              <img
                src={selectedImage || product.img[0]}
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

        <Grid item xs={12} md={5}>
          <Paper sx={classes.descriptionContainer}>
            <Typography variant="h4" sx={classes.productTitle}>
              {product.nameProduct}
            </Typography>
            <Typography variant="h5" sx={classes.productPrice}>
              ${product.price}
            </Typography>
            <Typography variant="body1" sx={classes.productInfo}>
              <strong>Marca:</strong> {product.brand}
            </Typography>
            <Typography variant="body1" sx={classes.productInfo}>
              <strong>Cantidad disponible:</strong> {product.amount}
            </Typography>
            <Typography variant="body1" sx={classes.productInfo}>
              <strong>Presentación:</strong> {product.presentation}
            </Typography>
            <Typography variant="body2" sx={classes.productDescription}>
              {product.description}
            </Typography>


            <Box sx={classes.buttonsContainer}>
              <Button
                variant="contained"
                color="primary"
                sx={classes.buyButton}
                onClick={handleAddToCart}
              >
                {translations.addToCart}
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                sx={classes.cartButton}
                onClick={handleAddToCart}
              >
                {translations.addToCart}
              </Button>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                  color: theme.palette.primary.dark,
                  bgcolor: theme.palette.primary.light,
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  transition: 'background-color 0.3s ease',
                  '&:hover': {
                    bgcolor: theme.palette.primary.main,
                    color: 'white',
                  },
                }}
              >
                <AddShoppingCart
                  onClick={() => {
                    navigate('/shopping-car')
                  }}
                />
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <BodyComponent />
        </Grid>
      </Grid>

      <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={() => setOpenSnackbar(false)}>
        <Alert variant="filled" severity="success">
          Producto agregado al carrito
        </Alert>
      </Snackbar>
    </Box>
  )
}
