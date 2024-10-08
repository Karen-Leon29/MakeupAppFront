import { Box } from '@mui/material'
import { useStyles } from './styles'
import { useContext, useEffect, useState } from 'react'
import { useLittera } from '@assembless/react-littera'
import { MakeupString } from 'core/strings'
import { LayoutLogin } from 'core/layouts/login'
import { TitleHeader } from 'core/components/title/header'
import { PrimaryInput } from 'core/components/input/primaryInput'
import { CheckboxComponent } from 'core/components/checkbox'
import { PrimaryButton } from 'core/components/button/primaryButton'
import { LineButton } from 'core/components/button/lineButton'
import { useNavigate } from 'react-router-dom'
import { login } from 'core/services'
import { AppContext } from 'core/contexts'

export const LoginPage: React.FC = () => {
  const translations = useLittera(MakeupString)
  const classes = useStyles
  const navigate = useNavigate()
  const [transition, setTransition] = useState(false)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [rememberMe, setRememberMe] = useState<boolean>(false)
  const { setAlert } = useContext(AppContext)

  const handleLogin = async () => {
    const user = await login({
      email,
      password,
    })

    if (user.data) {
      if (rememberMe) {
        localStorage.setItem('credentials', JSON.stringify({ email, password }))
      }
      navigate('/homepage')
    } else {
      setAlert({ message: 'El correo ingresado no se encuentra registrado', severity: 'error' })
    }
  }

  const handleRememberMe = () => {
    const storedCredentials = localStorage.getItem('credentials')
    if (storedCredentials) {
      const { email, password } = JSON.parse(storedCredentials)
      setEmail(email)
      setPassword(password)
      setRememberMe(true)
    }
  }

  useEffect(() => {
    handleRememberMe()
  }, [])

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        handleLogin()
      }}
    >
      <LayoutLogin positionImg="left" transition={transition}>
        <Box sx={classes.form}>
          <TitleHeader title={translations.login} />

          <PrimaryInput
            label={translations.user}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            min={3}
          />

          <PrimaryInput
            type="password"
            label={translations.password}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <CheckboxComponent
            label={translations.rememberMe}
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />

          <Box sx={classes.forgotPassword}>
            <PrimaryButton type="submit" onClick={handleLogin}>
              {translations.login}
            </PrimaryButton>
            <LineButton setTransition={setTransition} route={'/register'}>
              {translations.createAccount}
            </LineButton>
            <LineButton setTransition={setTransition} route={'/recovery-password'}>
              {translations.forgotPassword}
            </LineButton>
          </Box>
        </Box>
      </LayoutLogin>
    </form>
  )
}
