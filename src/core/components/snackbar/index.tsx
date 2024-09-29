import { useContext, useState, useEffect } from 'react'
import { Alert, Snackbar } from '@mui/material'
import { AppContext } from 'core/contexts'
import { sleep } from 'core/utils'

export const SnackbarComponent: React.FC = () => {
  const { alert, setAlert } = useContext(AppContext)

  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
    sleep(100).then(() => setAlert({ title: '', message: '', severity: undefined }))
  }

  useEffect(() => {
    if (alert.severity && !open) setOpen(true)
  }, [alert, setOpen]) // eslint-disable-line

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      autoHideDuration={5000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={alert.severity} sx={{ width: '100%' }}>
        {alert?.message}
      </Alert>
    </Snackbar>
  )
}
