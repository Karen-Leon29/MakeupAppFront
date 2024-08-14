import { LayoutLogin } from 'core/layouts/login'
import { TitleHeader } from 'core/components/title/header'
import { useLittera } from '@assembless/react-littera'
import { MakeupString } from 'core/strings'
import { Box, Grid } from '@mui/material'
import { PrimaryInput } from 'core/components/input/primaryInput'
import { LineButton } from 'core/components/button/lineButton'
import { useState } from 'react'
import { PrimaryButton } from 'core/components/button/primaryButton'
import AddLocationRoundedIcon from '@mui/icons-material/AddLocationRounded'

export const RegisterPage: React.FC = () => {
  const translations = useLittera(MakeupString)
  const [transition, setTransition] = useState(false)

  return (
    <LayoutLogin positionImg="right" transition={transition}>
      <Box>
        <TitleHeader
          title={translations.register}
          sx={{ textTransform: 'uppercase', mt: -3, mb: -2, fontSize: '2.3rem' }}
        />
        <Grid sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
          <PrimaryInput label={translations.user} />
          <PrimaryInput label={translations.lastname} />
        </Grid>
        <PrimaryInput label={translations.phone} />
        <PrimaryInput label={translations.address} icon={<AddLocationRoundedIcon />} />
        <PrimaryInput label={translations.email} />
        <PrimaryInput label={translations.confirmEmail} />
        <PrimaryInput type="password" label={translations.password} />
        <PrimaryInput type="password" label={translations.confirmPassword} />
        <Box sx={{ width: '50%', mx: 'auto', pt: 2, pb: 1 }}>
          <PrimaryButton>{translations.registerButton}</PrimaryButton>
        </Box>
        <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <LineButton setTransition={setTransition} route={'/recovery-password'}>
            {translations.forgotPassword}
          </LineButton>
          <LineButton setTransition={setTransition} route={'/'}>
            {translations.haveAcount}
          </LineButton>
        </Grid>
      </Box>
    </LayoutLogin>
  )
}
