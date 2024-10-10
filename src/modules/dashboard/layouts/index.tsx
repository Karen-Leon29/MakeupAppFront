import {
  Box,
  CssBaseline,
  AppBar,
  Drawer,
  Toolbar,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import { NavbarComponent } from 'modules/homeoage/components/navbar'
import { useNavigate } from 'react-router-dom'

const drawerWidth = 240

interface DashboardLayoutProps {
  children: React.ReactNode
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const navigate = useNavigate()

  const handleNavigation = (path: string) => {
    navigate(path)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <NavbarComponent />
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            borderColor: (theme) => theme.palette.primary.main,
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItemButton onClick={() => handleNavigation('/users')}>
              <ListItemText primary="Usuarios" />
            </ListItemButton>

            <ListItemButton onClick={() => handleNavigation('/categories')}>
              <ListItemText primary="Categorías" />
            </ListItemButton>

            <ListItemButton onClick={() => handleNavigation('/products')}>
              <ListItemText primary="Productos" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, mt: '64px' }}>
        <Box sx={{ flexGrow: 1, p: 3 }}>{children}</Box>
      </Box>
    </Box>
  )
}
