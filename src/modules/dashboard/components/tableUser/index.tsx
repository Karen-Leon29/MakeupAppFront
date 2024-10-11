import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Box,
} from '@mui/material'
import { UsersResponse } from 'core/types/requests'

interface UsersTableProps {
  users: UsersResponse
}

export const UsersTable: React.FC<UsersTableProps> = ({ users }) => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const displayedUsers = users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

  return (
    <Box sx={{ margin: 2 }}>
      <TableContainer component={Paper} sx={{ boxShadow: 4, borderRadius: 2 }}>
        <Table>
          <TableHead sx={{ backgroundColor: 'primary.light' }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>ID</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Nombre</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Apellido</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Email</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Teléfono</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Dirección</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Rol</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedUsers.map((user) => (
              <TableRow
                key={user.id}
                sx={{
                  '&:nth-of-type(odd)': { backgroundColor: 'action.hover' },
                  '&:hover': { backgroundColor: 'action.selected', cursor: 'pointer' },
                }}
              >
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.lastName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.address}</TableCell>
                <TableCell>{user.rol}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Box>
  )
}
