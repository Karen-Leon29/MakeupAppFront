import React from 'react'
import { Checkbox, FormControlLabel, Box, Typography } from '@mui/material'
import { useStyles } from './styles'

type CheckboxComponentProps = {
  label: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const CheckboxComponent: React.FC<CheckboxComponentProps> = ({ label }) => {
  const classes = useStyles
  return (
    <Box sx={classes.container}>
      <FormControlLabel
        label={
          <Typography variant="subtitle1" sx={classes.formControlLabel}>
            {label}
          </Typography>
        }
        sx={classes.checkbox}
        control={<Checkbox />}
      />
    </Box>
  )
}
