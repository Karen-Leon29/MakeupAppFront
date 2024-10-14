import { useContext } from 'react'
import { Box, Typography, Button, Paper, Grid } from '@mui/material'
import { AppContext } from 'core/contexts'
import theme from 'core/theme/theme'
import { ArrowBack } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

export const ShoppingCarComponent = () => {
  const { products, setProducts } = useContext(AppContext)
  const navigate = useNavigate()

  const onUpdateQuantity = (id: number, quantity: number) => {
    const newProducts = products.map((product) => {
      if (product.id === id) {
        return { ...product, amount: quantity }
      }
      return product
    })
    setProducts(newProducts)
  }

  const onRemove = (id: number) => {
    const newProducts = products.filter((product) => product.id !== id)
    setProducts(newProducts)
  }

  return (
    <Box
      sx={{
        px: 10,
        py: 5,
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: theme.palette.primary.dark,
          fontWeight: 700,
          marginBottom: '16px',
        }}
      >
        <ArrowBack
          sx={{
            cursor: 'pointer',
            marginRight: 2,
            color: theme.palette.primary.dark,
            fontSize: '30px',
          }}
          onClick={() => navigate('/homepage')}
        />
        Mi Carrito
      </Typography>
      {products.length === 0 ? (
        <Typography variant="body1" sx={{ color: '#777' }}>
          No hay productos en el carrito.
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item xs={12} md={6} key={product.id}>
              <Paper
                sx={{
                  padding: 2,
                  display: 'flex',
                  alignItems: 'center',
                  borderRadius: '8px',
                  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                }}
              >
                <img
                  src={product.photoProduct?.[0] ?? ''}
                  alt={product.nameProduct}
                  style={{
                    width: '80px',
                    height: '80px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    marginRight: '16px',
                  }}
                />
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: '600' }}>
                    {product.nameProduct}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#888' }}>
                    ${product.price?.toFixed(2)}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#555' }}>
                    Cantidad: {product.amount}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: '8px' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ borderRadius: '4px' }}
                    onClick={() =>
                      product.amount
                        ? onUpdateQuantity(product.id, product.amount + 1)
                        : onUpdateQuantity(product.id, 0)
                    }
                  >
                    +
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ borderRadius: '4px' }}
                    onClick={() =>
                      product.amount
                        ? onUpdateQuantity(product.id, product.amount - 1)
                        : onUpdateQuantity(product.id, 0)
                    }
                  >
                    -
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => onRemove(product.id)}
                    sx={{
                      borderRadius: '4px',
                      color: 'red',
                      borderColor: 'red',
                      '&:hover': { backgroundColor: 'rgba(255, 0, 0, 0.1)', borderColor: 'red' },
                    }}
                  >
                    Eliminar
                  </Button>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  )
}
