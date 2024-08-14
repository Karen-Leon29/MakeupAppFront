import React from 'react'
import { Button, ButtonProps, SxProps } from '@mui/material'
import { useStyles } from './styles'

type PrimaryButtonProps = {
  children: React.ReactNode
} & ButtonProps

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, ...props }) => {
  const classes = useStyles
  return (
    <Button {...props} variant="contained" sx={{ ...classes.button, ...props.sx } as SxProps}>
      {children}
    </Button>
  )
}
