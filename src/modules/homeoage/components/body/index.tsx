import {
  Box,
  Paper,
  Typography,
  Button,
  IconButton,
  Card,
  CardContent,
  CardActions,
} from '@mui/material'
import { ArrowForward as ArrowForwardIcon, ArrowBack as ArrowBackIcon } from '@mui/icons-material'
import { useStyles } from './styles'
import { FilterCategory } from '../filter'
import { useState } from 'react'
import { useLittera } from '@assembless/react-littera'
import { MakeupString } from 'core/strings'
import { useNavigate } from 'react-router-dom'

export const BodyComponent = () => {
  const translations = useLittera(MakeupString)
  const classes = useStyles
  const navigate = useNavigate()
  const [openFilter, setOpenFilter] = useState<boolean>(false)
  const products = [
    {
      id: 1,
      title: 'Colección de Labiales',
      description: 'Descubre nuestra nueva gama de labiales vibrantes y de larga duración.',
      img: 'https://www.businessempresarial.com.pe/wp-content/uploads/2021/04/Set-labiales-1.png',
    },
    {
      id: 2,
      title: 'Esenciales para el Cuidado de la Piel',
      description: 'Mima tu piel con nuestros productos de cuidado cuidadosamente elaborados.',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDxHzzOxsu4yrfjNoQ3sJ_t2mJtakviiAIMw&s',
    },
    {
      id: 3,
      title: 'Brochas de Maquillaje',
      description: 'Brochas de alta calidad para una aplicación de maquillaje impecable.',
      img: 'https://ecotiendaforesta.com/cdn/shop/products/PhotoRoom-20220101_201347.png?v=1641086347',
    },
    {
      id: 4,
      title: 'Paleta Edición Limitada',
      description: 'Paleta de sombras exclusiva con tonos impresionantes.',
      img: 'https://www.anyeluz.com/cdn/shop/files/Paleta_Pink_cuadrado_1.png?v=1718163311&width=1080',
    },
  ]

  const toggleFilter = () => {
    setOpenFilter((prev) => !prev)
  }

  return (
    <Box sx= {{minWidth: '100%'}}>
      <Box sx={classes.filter}>
        <FilterCategory open={openFilter} onClose={() => setOpenFilter(false)} />
        {!openFilter && (
          <IconButton sx={classes.filterButton} onClick={toggleFilter}>
            <ArrowBackIcon />
          </IconButton>
        )}
      </Box>
      <Box sx={classes.bodyContainer}>
        {products.map((product) => (
          <Card key={product.title} sx={classes.card}>
            <Box sx={classes.imageContainer}>
              <img
                src={product.img}
                alt={product.title}
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>
            <CardContent>
              <Typography variant="h5" sx={classes.cardTitle}>
                {product.title}
              </Typography>
              <Typography variant="body2" sx={classes.cardDescription}>
                {product.description}
              </Typography>
            </CardContent> 
            <CardActions sx={classes.cardActions}>
              <Button sx={classes.cardButton}>{translations.buyNow}</Button>
              <IconButton sx={classes.arrowButton} onClick={
                () => navigate('/product-detail/' + product.id)
              } >
                <ArrowForwardIcon />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </Box>
      <Box sx={classes.bodyContainer}>
        <Paper elevation={3} sx={classes.decorativePaper}>
          <Typography variant="h4">{translations.specialOffers}</Typography>
          <Typography variant="body2">{translations.checkProducts}</Typography>
        </Paper>
      </Box>
    </Box>
  )
}
