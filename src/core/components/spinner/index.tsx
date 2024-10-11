import React from 'react'
import { CircularProgress, Box } from '@mui/material'

const Spinner: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        minHeight: '50vh',
        width: '100%',
        bgcolor: '#FFF',
      }}
    >
      <CircularProgress color="primary" />
    </Box>
  )
}

export default Spinner
