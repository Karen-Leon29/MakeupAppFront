import { Box } from '@mui/material'
import { useStyles } from './styles'
import { useContext, useState } from 'react'
import { useLittera } from '@assembless/react-littera'
import { MakeupString } from 'core/strings'
import { LayoutLogin } from 'core/layouts/login'
import { TitleHeader } from 'core/components/title/header'
import { PrimaryInput } from 'core/components/input/primaryInput'
import { CheckboxComponent } from 'core/components/checkbox'
import { PrimaryButton } from 'core/components/button/primaryButton'
import { LineButton } from 'core/components/button/lineButton'
import { useNavigate } from 'react-router-dom'
import { getUserById } from 'core/services'
import { AppContext } from 'core/contexts'

export const LoginPage: React.FC = () => {
  const translations = useLittera(MakeupString)
  const classes = useStyles
  const navigate = useNavigate()
  const [transition, setTransition] = useState(false)
  const { setAlert } = useContext(AppContext)

  const handleLogin = async () => {
    const user = await getUserById('1')
    console.log(user)
    if (user.data) {
      navigate('/homepage')
    } else {
      setAlert({ message: 'El correo ingresado no se encuentra registrado', severity: 'error' })
    }
  }

  return (
    <LayoutLogin positionImg="left" transition={transition}>
      <Box sx={classes.form}>
        <TitleHeader title={translations.login} />
        <PrimaryInput label={translations.user} min={3} />
        <PrimaryInput type="password" label={translations.password} />
        <CheckboxComponent label={translations.rememberMe} />
        <Box sx={classes.forgotPassword}>
          <PrimaryButton onClick={handleLogin}>{translations.login}</PrimaryButton>
          <LineButton setTransition={setTransition} route={'/register'}>
            {translations.createAccount}
          </LineButton>
          <LineButton setTransition={setTransition} route={'/recovery-password'}>
            {translations.forgotPassword}
          </LineButton>
        </Box>
      </Box>
    </LayoutLogin>
  )
}
