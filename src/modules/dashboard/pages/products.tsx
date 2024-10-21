import { useState, useEffect } from 'react'
import {
  Grid,
  Box,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Modal,
  Pagination,
  Toolbar,
} from '@mui/material'
import { Delete, PhotoLibrary, EditOutlined } from '@mui/icons-material'
import { getProducts, deleteProduct } from 'core/services'
import { ProductsResponse } from 'core/services'
import { DashboardLayout } from '../layouts'
import Spinner from 'core/components/spinner'
import theme from 'core/theme/theme'
import { useNavigate } from 'react-router-dom'

export const ProductsManagement = () => {
  const [products, setProducts] = useState<ProductsResponse[]>([])
  const [selectedProduct, setSelectedProduct] = useState<ProductsResponse | null>(null)
  const [openModal, setOpenModal] = useState(false)
  const [openDialog, setOpenDialog] = useState(false)
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 6
  const navigate = useNavigate()

  const fetchProducts = async () => {
    const response = await getProducts()
    if (response.data && response.data.length > 0) {
      setProducts(response.data)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchProducts()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handleDeleteProduct = async (id: number) => {
    await deleteProduct(id)
    fetchProducts()
    setOpenDialog(false)
  }

  const handleOpenModal = (product: ProductsResponse) => {
    setSelectedProduct(product)
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
    setSelectedProduct(null)
  }

  const confirmDelete = () => {
    if (selectedProduct) {
      handleDeleteProduct(selectedProduct.id)
    }
  }

  const handleChangePage = (_event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value)
  }

  const handleEditProduct = (product: ProductsResponse) => {
    navigate(`/dashboard/products/edit/${product.id}`)
  }

  const displayedProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  )

  return (
    <DashboardLayout>
      {loading ? (
        <Spinner />
      ) : (
        <Box sx={{ p: 4 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              color: 'primary.dark',
              fontWeight: 700,
              marginBottom: 4,
            }}
          >
            Gestión de Productos
          </Typography>
          <Toolbar sx={{ display: 'flex', mb: 2, mt: -2, justifyContent: 'space-between' }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                navigate('/dashboard/products/register')
              }}
            >
              Añadir Producto
            </Button>
          </Toolbar>
          <Grid container spacing={2}>
            {displayedProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Box
                  sx={{
                    overflow: 'hidden',
                    position: 'relative',
                    boxShadow: 3,
                    py: 10,
                    borderRadius: 2,
                    textAlign: 'center',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundImage: `url(${product.photoProduct || ''})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      opacity: 0.3,
                      zIndex: -1,
                    }}
                  />

                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                    {product.nameProduct}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {product.description}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      gap: 2,
                      mt: 2,
                    }}
                  >
                    <IconButton
                      sx={{
                        color: theme.palette.primary.dark,
                        bgcolor: theme.palette.primary.light,
                        '&:hover': {
                          bgcolor: theme.palette.primary.main,
                          color: theme.palette.primary.contrastText,
                        },
                      }}
                      onClick={() => handleOpenModal(product)}
                    >
                      <PhotoLibrary />
                    </IconButton>
                    <IconButton
                      sx={{
                        color: theme.palette.info.dark,
                        bgcolor: theme.palette.info.light,
                        '&:hover': {
                          bgcolor: theme.palette.info.main,
                          color: theme.palette.primary.contrastText,
                        },
                      }}
                      onClick={() => handleEditProduct(product)}
                    >
                      <EditOutlined />
                    </IconButton>
                    <IconButton
                      sx={{
                        color: theme.palette.error.dark,
                        bgcolor: theme.palette.error.light,
                        '&:hover': {
                          bgcolor: theme.palette.error.main,
                          color: theme.palette.error.contrastText,
                        },
                      }}
                      onClick={() => {
                        setSelectedProduct(product)
                        setOpenDialog(true)
                      }}
                    >
                      <Delete />
                    </IconButton>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Pagination
            count={Math.ceil(products.length / productsPerPage)}
            page={currentPage}
            onChange={handleChangePage}
            sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}
          />

          <Modal open={openModal} onClose={handleCloseModal}>
            <Box
              sx={{
                width: '50%',
                height: '80%',
                bgcolor: 'background.paper',
                borderRadius: 3,
                boxShadow: 24,
                p: 4,
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  mb: 3,
                  textAlign: 'center',
                  fontWeight: 700,
                  color: theme.palette.primary.dark,
                }}
              >
                {selectedProduct?.nameProduct}
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, maxHeight: '90%', height: '90%' }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                    overflow: 'auto',
                    scrollbarWidth: 'none',
                  }}
                >
                  {Array.isArray(selectedProduct?.images) &&
                    selectedProduct?.images?.map((photo, index) => (
                      <Box
                        key={index}
                        component="img"
                        src={photo.imageUrl}
                        alt={`Foto ${index + 1}`}
                        sx={{
                          width: '100px',
                          height: '80px',
                          cursor: 'pointer',
                          objectFit: 'cover',
                          borderRadius: 2,
                          border: index === 0 ? '2px solid ' + theme.palette.primary.main : 'none',
                        }}
                        onClick={() => {
                          if (selectedProduct) {
                            const updatedPhotos = [...(selectedProduct.images ?? [])]
                            ;[updatedPhotos[0], updatedPhotos[index]] = [
                              updatedPhotos[index],
                              updatedPhotos[0],
                            ]
                            setSelectedProduct({ ...selectedProduct, images: updatedPhotos })
                          }
                        }}
                      />
                    ))}
                </Box>
                <Box
                  component="img"
                  src={selectedProduct?.photoProduct || ''}
                  alt={selectedProduct?.nameProduct}
                  sx={{
                    borderRadius: 2,
                    objectFit: 'contain',
                    width: 'calc(100% - 100px)',
                    height: '100%',
                  }}
                />
              </Box>
            </Box>
          </Modal>

          <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
            <DialogTitle
              sx={{
                backgroundColor: theme.palette.error.main,
                color: 'white',
                fontWeight: 700,
                mb: 5,
              }}
            >
              CONFIRMAR ELIMINACIÓN
            </DialogTitle>
            <DialogContent>
              <Typography>
                ¿Estás seguro de que deseas eliminar el producto{' '}
                <b>{selectedProduct?.nameProduct}</b>?
              </Typography>
            </DialogContent>
            <DialogActions sx={{ my: 1 }}>
              <Button onClick={() => setOpenDialog(false)} color="inherit">
                Cancelar
              </Button>
              <Button
                onClick={confirmDelete}
                sx={{
                  backgroundColor: 'error.main',
                  color: 'white',
                  px: 2,
                  '&:hover': {
                    backgroundColor: 'error.dark',
                  },
                }}
              >
                Eliminar
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      )}
    </DashboardLayout>
  )
}
