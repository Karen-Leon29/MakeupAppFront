import { Box } from '@mui/material'
import { useStyles } from './styles'
import { useState } from 'react'
import { useLittera } from '@assembless/react-littera'
import { MakeupString } from 'core/strings'
import { LayoutLogin } from 'core/layouts/login'
import { TitleHeader } from 'core/components/title/header'
import { PrimaryInput } from 'core/components/input/primaryInput'
import { CheckboxComponent } from 'core/components/checkbox'
import { PrimaryButton } from 'core/components/button/primaryButton'
import { LineButton } from 'core/components/button/lineButton'
import { useNavigate } from 'react-router-dom'

export const LoginPage: React.FC = () => {
  const translations = useLittera(MakeupString)
  const classes = useStyles
  const navigate = useNavigate()
  const [transition, setTransition] = useState(false)

  return (
    <LayoutLogin positionImg="left" transition={transition}>
      <Box sx={classes.form}>
        <TitleHeader title={translations.login} />
        <PrimaryInput label={translations.user} min={3} />
        <PrimaryInput type="password" label={translations.password} />
        <CheckboxComponent label={translations.rememberMe} />
        <Box sx={classes.forgotPassword}>
          <PrimaryButton onClick={() => navigate('/homepage')}>{translations.login}</PrimaryButton>
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
