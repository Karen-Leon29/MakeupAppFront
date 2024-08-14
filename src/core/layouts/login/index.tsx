import { Box, Grid } from '@mui/material'
import { useStyles } from './styles'
import React, { useEffect, useState } from 'react'
import model from 'assets/pics/model.png'

type LayoutLoginProps = {
  children: React.ReactNode
  positionImg?: 'left' | 'right'
  transition?: boolean
}

export const LayoutLogin: React.FC<LayoutLoginProps> = ({
  children,
  positionImg = 'left',
  transition = false,
}) => {
  const classes = useStyles
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    if (transition) {
      setAnimate(true)
    }
  }, [transition])

  return (
    <Box sx={classes.container}>
      <Box sx={classes.content}>
        <Grid container sx={classes.card}>
          <Grid
            item
            xs={6}
            sx={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              order: positionImg === 'left' ? 0 : 1,
              transform: animate
                ? positionImg === 'left'
                  ? 'translateX(100%)'
                  : 'translateX(-100%)'
                : 'translateX(0)',
              transition: 'transform 0.5s ease',
            }}
          >
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src={model}
                alt="Logo"
                style={{
                  backgroundColor: 'white',
                  borderRadius: '5px',
                  objectFit: 'cover',
                  height: '100%',
                  width: '100%',
                  maxWidth: '100%',
                  maxHeight: '100%',
                }}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              pt: 3,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              order: positionImg === 'left' ? 1 : 0,
              transform: animate
                ? positionImg === 'left'
                  ? 'translateX(100%)'
                  : 'translateX(-100%)'
                : 'translateX(0)',
              transition: 'transform 0.5s ease',
            }}
          >
            {children}
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
