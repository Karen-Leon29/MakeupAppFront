import React, { useEffect } from 'react'
import { Drawer, Box, Typography, List, ListItem, IconButton } from '@mui/material'
import { Close as CloseIcon } from '@mui/icons-material'
import { Calendar } from 'react-calendar'
import { useStyles } from './styles'
import 'react-calendar/dist/Calendar.css'
import { CategoriesResponse, getCategories } from 'core/services'

interface FilterCategoryProps {
  open: boolean
  onClose: () => void
}

export const FilterCategory: React.FC<FilterCategoryProps> = ({ open, onClose }) => {
  const classes = useStyles
  const [categories, setCategories] = React.useState<CategoriesResponse[]>([])

  const handleCategories = async () => {
    const response = await getCategories()
    if (response.data) setCategories(response.data)
  }

  useEffect(() => {
    handleCategories()
  }, []) // eslint-disable-line

  return (
    <Drawer anchor="right" open={open} onClose={onClose} sx={classes.drawer}>
      <Box sx={classes.header}>
        <Typography variant="h6" sx={classes.title}>
          Filtros
        </Typography>
        <IconButton onClick={onClose}>
          <CloseIcon sx={classes.title} />
        </IconButton>
      </Box>
      <Box mb={2}>
        <Typography variant="subtitle1" sx={classes.title}>
          Categorías
        </Typography>
        <List>
          {categories.map((category) => (
            <ListItem key={category.id} button>
              <Typography variant="body1">{category.nameCategory}</Typography>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={classes.calendar}>
        <Typography variant="subtitle1" sx={classes.title}>
          Calendario
        </Typography>
        <Calendar />
      </Box>
    </Drawer>
  )
}
