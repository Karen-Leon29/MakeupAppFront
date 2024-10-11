import React, { useEffect, useState } from 'react'
import { Toolbar, Button, Box } from '@mui/material'
import { UsersTable } from '../components/tableUser'
import * as XLSX from 'xlsx'
import { getUsers } from 'core/services'
import { UsersResponse } from 'core/types/requests'
import { DocumentScannerOutlined } from '@mui/icons-material'
import { DashboardLayout } from '../layouts'
import { useNavigate } from 'react-router-dom'
import Spinner from 'core/components/spinner'

export const DashboardPage: React.FC = () => {
  const [users, setUsers] = useState<UsersResponse>([] as unknown as UsersResponse)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const handleUsers = async () => {
      const { data: resp } = await getUsers()
      if (resp) setUsers(resp)
      setLoading(false)
    }
    handleUsers()
  }, [])

  const handleExportToExcel = () => {
    const wb = XLSX.utils.book_new()
    const ws = XLSX.utils.json_to_sheet(Object.values(users))

    XLSX.utils.book_append_sheet(wb, ws, 'Usuarios')
    XLSX.writeFile(wb, 'usuarios.xlsx')
  }

  return (
    <DashboardLayout>
      {loading ? (
        <Spinner />
      ) : (
        <Box>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                navigate('/dashboard/users/register')
              }}
            >
              Añadir Usuario
            </Button>
            <Button variant="outlined" onClick={handleExportToExcel} sx={{ gap: 1 }}>
              Exportar <DocumentScannerOutlined />
            </Button>
          </Toolbar>
          <UsersTable users={users} />
        </Box>
      )}
    </DashboardLayout>
  )
}
