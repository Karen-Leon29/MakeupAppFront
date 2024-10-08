import { LayoutLogin } from 'core/layouts/login'
import { TitleHeader } from 'core/components/title/header'
import { useLittera } from '@assembless/react-littera'
import { MakeupString } from 'core/strings'
import { Box, Grid, Typography } from '@mui/material'
import { PrimaryInput } from 'core/components/input/primaryInput'
import { LineButton } from 'core/components/button/lineButton'
import { useState } from 'react'
import { PrimaryButton } from 'core/components/button/primaryButton'
import AddLocationRoundedIcon from '@mui/icons-material/AddLocationRounded'
import { createUser } from 'core/services'
import { useNavigate } from 'react-router-dom'

export const RegisterPage: React.FC = () => {
  const translations = useLittera(MakeupString)
  const [transition, setTransition] = useState(false)
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
      setTransition(true)
      navigate('/login')
    }
  }

  return (
    <LayoutLogin positionImg="right" transition={transition}>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleRegister()
        }}
      >
        <TitleHeader
          title={translations.register}
          sx={{ textTransform: 'uppercase', mt: -3, mb: -2, fontSize: '2.3rem' }}
        />
        <Grid sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
          <PrimaryInput
            label={translations.user}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <PrimaryInput
            label={translations.lastname}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Grid>
        <PrimaryInput
          label={translations.phone}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <PrimaryInput
          label={translations.address}
          icon={<AddLocationRoundedIcon />}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <PrimaryInput
          label={translations.email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <PrimaryInput
          label={translations.confirmEmail}
          value={confirmEmail}
          onChange={(e) => setConfirmEmail(e.target.value)}
        />
        <PrimaryInput
          type="password"
          label={translations.password}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <PrimaryInput
          type="password"
          label={translations.confirmPassword}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {/* Mostrar mensaje de error si existe */}
        {error && (
          <Typography color="error" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}

        <Box sx={{ width: '50%', mx: 'auto', pt: 2, pb: 1 }}>
          <PrimaryButton type="submit" onClick={handleRegister}>
            {translations.registerButton}
          </PrimaryButton>
        </Box>
        <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <LineButton setTransition={setTransition} route={'/recovery-password'}>
            {translations.forgotPassword}
          </LineButton>
          <LineButton setTransition={setTransition} route={'/'}>
            {translations.haveAcount}
          </LineButton>
        </Grid>
      </form>
    </LayoutLogin>
  )
}
