import { FooterComponent } from 'modules/homeoage/components/footer'
import { NavbarComponent } from 'modules/homeoage/components/navbar'
import { useStyles } from './styles'
import { Box } from '@mui/material'
import { BodyComponent } from 'modules/homeoage/components/body'

export const HomePage = () => {
  const classes = useStyles
  return (
    <Box>
      <NavbarComponent />
      <Box sx={classes.container}>
        <BodyComponent />
      </Box>
        <FooterComponent />
    </Box>
  )
}
