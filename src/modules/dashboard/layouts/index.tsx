import { CategoryOutlined, PeopleOutline, StorefrontOutlined } from '@mui/icons-material'
import {
  Box,
  CssBaseline,
  AppBar,
  Drawer,
  Toolbar,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from '@mui/material'
import { NavbarComponent } from 'modules/homeoage/components/navbar'
import { useLocation, useNavigate } from 'react-router-dom'

const drawerWidth = 240

interface DashboardLayoutProps {
  children: React.ReactNode
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

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
        <Box sx={{ overflow: 'auto', width: '100%', bgcolor: 'background.paper' }}>
          <List>
            <ListItemButton
              onClick={() => handleNavigation('/dashboard/users')}
              sx={{
                '&:hover': {
                  backgroundColor: (theme) => theme.palette.action.hover,
                },
                '&.Mui-selected': {
                  backgroundColor: (theme) => theme.palette.primary.light,
                  color: (theme) => theme.palette.primary.contrastText,
                },
                bgcolor: pathname === '/dashboard/users' ? 'secondary.light' : 'background.paper',
              }}
            >
              <ListItemIcon>
                <PeopleOutline
                  sx={{
                    color: pathname === '/dashboard/users' ? 'primary.dark' : 'primary.main',
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="Usuarios" />
            </ListItemButton>

            <ListItemButton
              onClick={() => handleNavigation('/dashboard/categories')}
              sx={{
                '&:hover': {
                  backgroundColor: (theme) => theme.palette.action.hover,
                },
                '&.Mui-selected': {
                  backgroundColor: (theme) => theme.palette.primary.light,
                  color: (theme) => theme.palette.primary.contrastText,
                },
                bgcolor:
                  pathname === '/dashboard/categories' ? 'secondary.light' : 'background.paper',
              }}
            >
              <ListItemIcon>
                <CategoryOutlined
                  sx={{
                    color: pathname === '/dashboard/categories' ? 'primary.dark' : 'primary.main',
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="Categorías" />
            </ListItemButton>

            <ListItemButton
              onClick={() => handleNavigation('/dashboard/products')}
              sx={{
                '&:hover': {
                  backgroundColor: (theme) => theme.palette.action.hover,
                },
                '&.Mui-selected': {
                  backgroundColor: (theme) => theme.palette.primary.light,
                  color: (theme) => theme.palette.primary.contrastText,
                },
                bgcolor:
                  pathname === '/dashboard/products' ? 'secondary.light' : 'background.paper',
              }}
            >
              <ListItemIcon>
                <StorefrontOutlined
                  sx={{
                    color: pathname === '/dashboard/products' ? 'primary.dark' : 'primary.main',
                  }}
                />
              </ListItemIcon>
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
