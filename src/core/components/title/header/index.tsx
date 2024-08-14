import { Box, SxProps, Typography, TypographyProps } from '@mui/material'
import { useStyles } from './styles'

type TitleHeaderProps = {
  title: string
} & TypographyProps

export const TitleHeader: React.FC<TitleHeaderProps> = ({ title, ...props }) => {
  const classes = useStyles
  return (
    <Box sx={classes.container}>
      <Typography sx={{ ...classes.content, ...props.sx } as SxProps }>{title}</Typography>
    </Box>
  )
}
