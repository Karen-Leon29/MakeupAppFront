import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  Snackbar,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material'
import {
  getCategories,
  postCategory,
  putCategory,
  deleteCategory,
  CategoriesResponse,
  CategoryRequest,
} from 'core/services'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import { DashboardLayout } from '../layouts'
import { DeleteOutline, EditOutlined } from '@mui/icons-material'
import Spinner from 'core/components/spinner'
import theme from 'core/theme/theme'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export const CategoryManagement = () => {
  const [categories, setCategories] = useState<CategoriesResponse[]>([])
  const [categoryInput, setCategoryInput] = useState<CategoryRequest>({
    nameCategory: '',
    descriptionCategory: '',
  })
  const [editingCategoryId, setEditingCategoryId] = useState<number | null>(null)
  const [openDialog, setOpenDialog] = useState(false)
  const [categoryToDelete, setCategoryToDelete] = useState<number | null>(null)
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState<string>('')
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error' | 'info'>('success')
  const [loading, setLoading] = useState(true)

  const fetchCategories = async () => {
    try {
      setLoading(true)
      const data = await getCategories()
      if (data.data) setCategories(data.data)
    } catch (error) {
      setSnackbarMessage('Error al cargar las categorías')
      setSnackbarSeverity('error')
      setSnackbarOpen(true)
    } finally {
      setLoading(false)
    }
  }
  

  useEffect(() => {
    fetchCategories()
  }, [])

  const handleCategoryInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCategoryInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }))
  }

  const handleAddCategory = async () => {
    if (!categoryInput) return
    if (!categoryInput.nameCategory || !categoryInput.descriptionCategory) {
      setSnackbarMessage('Por favor, completa todos los campos')
      setSnackbarSeverity('error')
      setSnackbarOpen(true)
      return
    }
    const response = await postCategory(categoryInput)
    if (response) {
      setSnackbarMessage('Categoría agregada exitosamente')
      setSnackbarSeverity('success')
      fetchCategories()
      setCategoryInput({
        nameCategory: '',
        descriptionCategory: '',
      })
      setSnackbarOpen(true)
    } else {
      setSnackbarMessage('Hubo un error al agregar la categoría')
      setSnackbarSeverity('error')
      setSnackbarOpen(true)
    }
  }

  const handleEditCategory = (category: CategoriesResponse) => {
    setCategoryInput({
      nameCategory: category.nameCategory,
      descriptionCategory: category.descriptionCategory,
    })
    setEditingCategoryId(category.id)
  }

  const handleUpdateCategory = async () => {
    if (!editingCategoryId || !categoryInput) return
    const response = await putCategory(editingCategoryId, categoryInput)
    if (response) {
      setSnackbarMessage('Categoría actualizada exitosamente')
      setSnackbarSeverity('success')
      fetchCategories()
      setCategoryInput({
        nameCategory: '',
        descriptionCategory: '',
      })
      setEditingCategoryId(null)
      setSnackbarOpen(true)
    }
  }

  const handleOpenDeleteDialog = (id: number) => {
    setCategoryToDelete(id)
    setOpenDialog(true)
  }

  const handleDeleteCategory = async () => {
    if (categoryToDelete !== null) {
      await deleteCategory(categoryToDelete)
      setSnackbarMessage('Categoría eliminada exitosamente')
      setSnackbarSeverity('info')
      fetchCategories()
      setCategoryToDelete(null)
      setSnackbarOpen(true)
    }
    setOpenDialog(false)
  }

  const handleSnackbarClose = () => {
    setSnackbarOpen(false)
  }

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'nameCategory', headerName: 'Categoría', flex: 1 },
    { field: 'descriptionCategory', headerName: 'Descripción', flex: 1 },
    {
      field: 'actions',
      headerName: 'Acciones',
      width: 150,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', height: '100%' }}>
          <Tooltip title="Editar" placement="top" arrow>
            <EditOutlined color="info" onClick={() => handleEditCategory(params.row)} />
          </Tooltip>
          <Tooltip title="Eliminar" placement="top" arrow>
            <DeleteOutline color="error" onClick={() => handleOpenDeleteDialog(params.row.id)} />
          </Tooltip>
        </Box>
      ),
    },
  ]

  return (
    <DashboardLayout>
      {loading ? (
        <Spinner />
      ) : (
        <Box sx={{ padding: 4 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              color: 'primary.dark',
              fontWeight: 700,
              marginBottom: 4,
            }}
          >
            Gestión de Categorías
          </Typography>

          <Box component="form" sx={{ display: 'flex', gap: 2, marginBottom: 4 }}>
            <Box sx={{ flexGrow: 1 }}>
              <DataGrid
                rows={categories}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { pageSize: 5 },
                  },
                }}
                pageSizeOptions={[5]}
                sx={{
                  minWidth: '600px',
                  '& .MuiDataGrid-row': { cursor: 'pointer' },
                  '& .MuiDataGrid-row:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' },
                  '& .MuiDataGrid-columnsContainer': { backgroundColor: 'primary.light' },
                  '& .MuiDataGrid-columnHeader': {
                    color: 'white',
                    backgroundColor: 'primary.light',
                  },
                  '& .MuiDataGrid-cell:focus': {
                    outline: 'none',
                  },
                  '& .MuiDataGrid-row:nth-of-type(odd)': { backgroundColor: 'action.hover' },
                }}
              />
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                width: '400px',
                padding: 2,
                backgroundColor: '#f9f9f9',
                border: '1px solid #e0e0e0',
                borderRadius: 2,
              }}
            >
              <TextField
                label="Nombre de la categoría"
                variant="outlined"
                name="nameCategory"
                value={categoryInput.nameCategory}
                onChange={handleCategoryInputChange}
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                  },
                }}
              />
              <TextField
                label="Descripción de la categoría"
                variant="outlined"
                name="descriptionCategory"
                value={categoryInput.descriptionCategory}
                onChange={handleCategoryInputChange}
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                  },
                }}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{ width: '200px', alignSelf: 'end', mt: 1, py: 1, px: 2 }}
                onClick={editingCategoryId ? handleUpdateCategory : handleAddCategory}
              >
                {editingCategoryId ? 'Actualizar' : 'Agregar'}
              </Button>
            </Box>
          </Box>

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
              <Typography>¿Estás seguro de que deseas eliminar esta categoría?</Typography>
            </DialogContent>
            <DialogActions sx={{ my: 1 }}>
              <Button onClick={() => setOpenDialog(false)} color="inherit">
                Cancelar
              </Button>
              <Button
                onClick={handleDeleteCategory}
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

          <Snackbar
            open={snackbarOpen}
            autoHideDuration={4000}
            onClose={handleSnackbarClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            TransitionComponent={(props) => <Slide {...props} direction="down" />}
          >
            <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
              {snackbarMessage}
            </Alert>
          </Snackbar>
        </Box>
      )}
    </DashboardLayout>
  )
}
