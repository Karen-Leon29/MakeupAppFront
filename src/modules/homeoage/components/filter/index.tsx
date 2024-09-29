import React from 'react';
import { Drawer, Box, Typography, List, ListItem, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { Calendar } from 'react-calendar';
import { useStyles } from './styles';
import 'react-calendar/dist/Calendar.css';

interface FilterCategoryProps {
  open: boolean;
  onClose: () => void;
}

export const FilterCategory: React.FC<FilterCategoryProps> = ({ open, onClose }) => {
  const classes = useStyles

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={classes.drawer} 
    >
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
          <ListItem sx={classes.listItem}>Electrónica</ListItem>
          <ListItem sx={classes.listItem}>Ropa</ListItem>
          <ListItem sx={classes.listItem}>Hogar</ListItem>
          <ListItem sx={classes.listItem}>Juguetes</ListItem>
          <ListItem sx={classes.listItem}>Libros</ListItem>
        </List>
      </Box>
      <Box sx={classes.calendar}>
        <Typography variant="subtitle1" sx={classes.title}>
          Calendario
        </Typography>
        <Calendar />
      </Box>
    </Drawer>
  );
};
