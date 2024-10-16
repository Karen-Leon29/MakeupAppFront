import { useForm } from 'react-hook-form'
import {
  Box,
  Button,
  TextField,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Grid,
  Paper,
  IconButton,
} from '@mui/material'
import { ArrowBack, Close, PhotoCamera } from '@mui/icons-material'
import { DashboardLayout } from 'modules/dashboard/layouts'
import Spinner from 'core/components/spinner'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProduct, postProduct, putProduct } from 'core/services'

interface ProductsRequest {
  nameProduct: string
  description: string
  price: number
  amount: number
  codeProduct: string
  photoProduct: string[]
  category: Category
}

interface Category {
  id: number
}

export const RegisterProducts: React.FC = () => {
  const { register, handleSubmit, setValue, watch } = useForm<ProductsRequest>()
  const [loading, setLoading] = useState(true)
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const onSubmit = async (data: ProductsRequest) => {
    if (id) {
      await putProduct(Number(id), data)
    } else {
      await postProduct(data)
    }
    navigate('/dashboard/products')
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      const photoProduct = Array.from(files).map((file) => URL.createObjectURL(file))
      setValue('photoProduct', photoProduct)
    }
  }

  const handleLoadInfo = async () => {
    if (id) {
      const data = await getProduct(Number(id))
      if (data.data) {
        setValue('nameProduct', data.data.nameProduct)
        setValue('description', data.data.description)
        setValue('price', data.data.price)
        setValue('amount', data.data.amount)
        setValue('codeProduct', data.data.codeProduct)
        setValue('photoProduct', data.data.photoProduct)
        setValue('category.id', data.data.category.id)
      }
    } else {
      setValue('nameProduct', '')
      setValue('description', '')
      setValue('price', 0)
      setValue('amount', 0)
      setValue('codeProduct', '')
      setValue('photoProduct', [])
      setValue('category.id', 0)
    }
    setLoading(false)
  }

  useEffect(() => {
    handleLoadInfo()
  }, [id]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <DashboardLayout>
      {loading ? (
        <Spinner />
      ) : (
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mx: 'auto', p: 3, borderRadius: 2 }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              color: 'primary.dark',
              fontWeight: 700,
            }}
          >
            <ArrowBack
              sx={{ cursor: 'pointer', marginRight: 2, color: 'primary.dark', fontSize: '30px' }}
              onClick={() => navigate('/dashboard/products')}
            />
            {id ? 'Actualizar Producto' : 'Registrar Producto'}
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={3}>
              <TextField
                {...register('nameProduct', { required: true })}
                label="Nombre del Producto"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                {...register('price', { required: true, valueAsNumber: true })}
                label="Precio"
                variant="outlined"
                type="number"
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={9}>
              <TextField
                {...register('description', { required: true })}
                label="Descripción"
                variant="outlined"
                fullWidth
                margin="normal"
                multiline
                rows={4.5}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                {...register('amount', { required: true, valueAsNumber: true })}
                label="Cantidad"
                variant="outlined"
                type="number"
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                {...register('codeProduct', { required: true })}
                label="Código del Producto"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth margin="normal">
                <InputLabel id="category-label">Categoría</InputLabel>
                <Select
                  {...register('category.id', { required: true })}
                  labelId="category-label"
                  label="Categoría"
                >
                  <MenuItem value={1}>Categoría 1</MenuItem>
                  <MenuItem value={2}>Categoría 2</MenuItem>
                  <MenuItem value={3}>Categoría 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Box
            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}
          >
            <Button variant="contained" component="label" startIcon={<PhotoCamera />}>
              Subir Imágenes
              <input type="file" accept="image/*" multiple hidden onChange={handleFileChange} />
            </Button>

            <Button type="submit" variant="contained" color="primary">
              {id ? 'Actualizar Producto' : 'Registrar Producto'}
            </Button>
          </Box>

          <Grid container spacing={2} sx={{ mt: 2 }}>
            {Array.isArray(watch('photoProduct')) &&
              watch('photoProduct').map((photo, index) => (
                <Grid item key={index} xs={1}>
                  <Paper elevation={2} sx={{ position: 'relative', padding: 1, borderRadius: 1 }}>
                    <IconButton
                      onClick={() => {
                        const currentPhotos = watch('photoProduct')
                        const newPhotos = currentPhotos.filter((_, i) => i !== index)
                        setValue('photoProduct', newPhotos)
                      }}
                      sx={{
                        position: 'absolute',
                        top: 5,
                        right: 5,
                        color: 'error.main',
                      }}
                    >
                      <Close />
                    </IconButton>
                    <img
                      src={photo}
                      alt={`Imagen ${index + 1}`}
                      style={{
                        maxHeight: '80px',
                        height: '80px',
                        width: '100%',
                        maxWidth: '100%',
                        borderRadius: 4,
                        objectFit: 'contain',
                      }}
                    />
                  </Paper>
                </Grid>
              ))}
          </Grid>
        </Box>
      )}
    </DashboardLayout>
  )
}
