import { Box, InputAdornment, SxProps, TextField, TextFieldProps } from '@mui/material'
import { useStyles } from './styles'
import React from 'react'
import { validateMinLength, withoutSpacingRepeat } from 'core/utils'

type PrimaryInputProps = {
  label: string
  icon?: React.ReactNode
  min?: number
} & TextFieldProps

export const PrimaryInput: React.FC<PrimaryInputProps> = ({ label = '', icon, min = 0, ...props }) => {
  const classes = useStyles

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let cleanedValue = e.target.value
    if (!validateMinLength(cleanedValue, min)) {
      cleanedValue = cleanedValue.replace(/\s/g, '')
    } else {
      cleanedValue = withoutSpacingRepeat(cleanedValue)
    }
    e.target.value = cleanedValue
    if (props.onChange) {
      props.onChange(e)
    }
  }

  return (
    <Box sx={classes.container}>
      <TextField
        label={label}
        sx={{ ...classes.input, ...props.sx } as SxProps}
        InputProps={{
          endAdornment: icon ? <InputAdornment position="end">{icon}</InputAdornment> : null,
          ...props.InputProps,
        }}
        onChange={handleChange}
        {...props}
      />
    </Box>
  )
}
