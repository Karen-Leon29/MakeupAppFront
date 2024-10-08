import { Box, Grid } from '@mui/material'
import { styled } from '@mui/system'

export const ContactUsContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '32px',
    padding: '32px',
}))

export const FormContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '48px',
})

export const FormGrid = styled(Grid)({
    minWidth: '800px',
    maxWidth: '800px',
})

export const MapContainer = styled(Box)({
    height: '300px',
    backgroundColor: '#F4F4F9',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '16px',
})

export const SocialContainer = styled(Box)({
    marginTop: '16px',
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
})
