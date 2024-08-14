import { Box, Typography } from '@mui/material'
import { useStyles } from './styles'
import { useNavigate } from 'react-router-dom'

type LineButtonProps = {
  route: string
  children: React.ReactNode
  setTransition?: (value: boolean) => void
}

export const LineButton: React.FC<LineButtonProps> = ({ children, route = '', setTransition }) => {
  const navigate = useNavigate()

  const handleNavigate = (path: string) => {
    if(!setTransition) return
    setTransition(true)
    setTimeout(() => navigate(path), 500)
  }

  const classes = useStyles
  return (
    <Box onClick={() => handleNavigate(route)}>
      <Typography sx={classes.button}>{children}</Typography>
    </Box>
  )
}
