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
import { useContext, useEffect, useState } from 'react'
import { useLittera } from '@assembless/react-littera'
import { MakeupString } from 'core/strings'
import { useNavigate } from 'react-router-dom'
import { AppContext, Product } from 'core/contexts'
import { getProducts, ProductsResponse } from 'core/services'

export const BodyComponent = ({
  onlyFirstRow = false,
  id,
}: {
  onlyFirstRow?: boolean
  id?: number
}) => {
  const translations = useLittera(MakeupString)
  const classes = useStyles
  const navigate = useNavigate()
  const [openFilter, setOpenFilter] = useState<boolean>(false)
  const { products, setShoppingCar } = useContext(AppContext) as { products: Product[], setShoppingCar: React.Dispatch<React.SetStateAction<Product[]>> }
  const [productsList, setProductsList] = useState<ProductsResponse[]>([])

  useEffect(() => {
    const handleProducts = async () => {
      const resp = await getProducts()
      if (resp.data) {
        setProductsList(resp.data)
      }
    }
    handleProducts()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (products) {
      setProductsList(products)
    }
  }, [products])

  const toggleFilter = () => {
    setOpenFilter((prev) => !prev)
  }

  const existingProduct = productsList.find((p) => p.id === id)
  const filteredProducts = onlyFirstRow
    ? existingProduct
      ? productsList.filter((p) => p.id !== id).slice(0, 4)
      : productsList.slice(0, 5)
    : productsList

  return (
    <Box sx={{ minWidth: '100%' }}>
      <Box sx={classes.filter}>
        <FilterCategory open={openFilter} onClose={() => setOpenFilter(false)} />
        {!openFilter && (
          <IconButton sx={classes.filterButton} onClick={toggleFilter}>
            <ArrowBackIcon />
          </IconButton>
        )}
      </Box>
      <Box sx={classes.bodyContainer}>
        {filteredProducts.map((product) => (
          <Card key={product.id} sx={classes.card}>
            <Box sx={classes.imageContainer}>
              <img
                src={typeof product.photoProduct === 'string' ? product.photoProduct : ''}
                alt={product.nameProduct}
                style={{
                  width: '100%',
                  height: 200,
                  minHeight: 200,
                  objectFit: 'cover',
                  maxHeight: 200,
                }}
              />
            </Box>
            <CardContent>
              <Typography variant="h5" sx={classes.cardTitle}>
                {product.nameProduct}
              </Typography>
              <Typography variant="body2" sx={classes.cardDescription}>
                {product.description}
              </Typography>
            </CardContent>
            <CardActions sx={classes.cardActions}>
              <Button
                sx={classes.cardButton}
                onClick={() => {
                    setShoppingCar((prev: Product[]) => {
                        const existingProduct = prev.find((p) => p.id === product.id)
                        if (existingProduct) {
                            return prev.map((p) =>
                                p.id === product.id ? { ...p, amount: p.amount + 1 } : p
                            )
                        }
                        return [...prev, { ...product, amount: 1 }]
                    })
                }}
              >
                {translations.addToCart}
              </Button>

              <IconButton
                sx={classes.arrowButton}
                onClick={() => navigate('/product-detail/' + product.id)}
              >
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
