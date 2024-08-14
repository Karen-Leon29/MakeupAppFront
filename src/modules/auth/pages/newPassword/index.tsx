import { LayoutLogin } from 'core/layouts/login'
import { TitleHeader } from 'core/components/title/header'
import { useLittera } from '@assembless/react-littera'
import { MakeupString } from 'core/strings'
import { Box, Typography } from '@mui/material'
import { useState } from 'react'
import { PrimaryInput } from 'core/components/input/primaryInput'
import { PrimaryButton } from 'core/components/button/primaryButton'
import { useNavigate } from 'react-router-dom'

export const NewPassword: React.FC = () => {
  const translations = useLittera(MakeupString)
  const navigate = useNavigate()
  const [transition, setTransition] = useState(false)

  const handleNavigate = (path: string) => {
    if (!setTransition) return
    setTransition(true)
    setTimeout(() => navigate(path), 500)
  }

  return (
    <LayoutLogin positionImg="right" transition={transition}>
      <Box>
        <TitleHeader
          title={translations.recoveryPassword}
          sx={{ textTransform: 'uppercase', fontSize: '2.3rem' }}
        />

        <Box sx={{ mt: 3 }}>
          <Typography sx={{ my: 3 }}>{translations.messageRecoveyPassword}</Typography>
          <PrimaryInput label={translations.password} type="password" />
          <PrimaryInput label={translations.confirmPassword} type="password" />
          <Box
            sx={{
              mt: 6,
            }}
          >
            <PrimaryButton onClick={() => handleNavigate('/')}>{translations.send}</PrimaryButton>
          </Box>
        </Box>
      </Box>
    </LayoutLogin>
  )
}
