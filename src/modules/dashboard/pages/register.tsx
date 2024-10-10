import { useLittera } from '@assembless/react-littera'
import { Grid, Typography, Box } from '@mui/material'
import { PrimaryButton } from 'core/components/button/primaryButton'
import { PrimaryInput } from 'core/components/input/primaryInput'
import { TitleHeader } from 'core/components/title/header'
import { createUser } from 'core/services'
import { MakeupString } from 'core/strings'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DashboardLayout } from '../layouts'
import AddLocationRoundedIcon from '@mui/icons-material/AddLocationRounded'

export const RegisterUsers = () => {
  const translations = useLittera(MakeupString)
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [confirmEmail, setConfirmEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [error, setError] = useState<string | null>(null)

  const validateForm = (): boolean => {
    if (
      !name ||
      !lastName ||
      !phone ||
      !address ||
      !email ||
      !confirmEmail ||
      !password ||
      !confirmPassword
    ) {
      setError(translations.fieldsRequired)
      return false
    }

    const phoneRegex = /^[0-9]{10}$/
    if (!phoneRegex.test(phone)) {
      setError(translations.invalidPhone)
      return false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError(translations.invalidEmail)
      return false
    }

    if (email !== confirmEmail) {
      setError(translations.emailsDontMatch)
      return false
    }

    if (password !== confirmPassword) {
      setError(translations.passwordsDontMatch)
      return false
    }

    setError(null)
    return true
  }

  const handleRegister = async () => {
    if (!validateForm()) {
      return
    }

    const newUser = {
      name,
      lastName,
      phone,
      address,
      email,
      confirmEmail,
      password,
      confirmPassword,
    }

    const data = await createUser(newUser)
    if (data.data) {
      navigate('/users')
    }
  }

  return (
    <DashboardLayout>
      <Box
        component="form"
        onSubmit={(e) => {
          e.preventDefault()
          handleRegister()
        }}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: '100%',
          mx: 'auto',
          padding: 4,
          borderRadius: 2,
        }}
      >
        <TitleHeader
          title={translations.addUser}
          sx={{
            textTransform: 'uppercase',
            fontSize: '2.3rem',
            mb: 3,
            textAlign: 'center',
          }}
        />

        <Grid container spacing={2}>
          <Grid item xs={6} sm={4}>
            <PrimaryInput
              label={translations.user}
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ width: '100%' }}
            />
          </Grid>

          <Grid item xs={6} sm={4}>
            <PrimaryInput
              label={translations.lastName}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              sx={{ width: '100%' }}
            />
          </Grid>

          <Grid item xs={6} sm={4}>
            <PrimaryInput
              label={translations.phone}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              sx={{ width: '100%' }}
            />
          </Grid>

          <Grid item xs={6} sm={4}>
            <PrimaryInput
              label={translations.address}
              icon={<AddLocationRoundedIcon />}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              sx={{ width: '100%' }}
            />
          </Grid>

          <Grid item xs={6} sm={4}>
            <PrimaryInput
              label={translations.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <PrimaryInput
              label={translations.confirmEmail}
              value={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value)}
              sx={{ width: '100%' }}
            />
          </Grid>

          <Grid item xs={6} sm={4}>
            <PrimaryInput
              type="password"
              label={translations.password}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <PrimaryInput
              type="password"
              label={translations.confirmPassword}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              sx={{ width: '100%' }}
            />
          </Grid>

          </Grid>
          {error && (
            <Typography color="error" sx={{ textAlign: 'center', mt: 2 }}>
              {error}
            </Typography>
          )}
        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <PrimaryButton type="submit" sx={{ width: '33%' }}>
            {translations.addUser}
          </PrimaryButton>
        </Box>
      </Box>
    </DashboardLayout>
  )
}
