import { LayoutLogin } from 'core/layouts/login'
import { TitleHeader } from 'core/components/title/header'
import { useLittera } from '@assembless/react-littera'
import { MakeupString } from 'core/strings'
import { Box, Typography } from '@mui/material'
import { useState } from 'react'
import { PrimaryInput } from 'core/components/input/primaryInput'
import { Email } from '@mui/icons-material'
import { PrimaryButton } from 'core/components/button/primaryButton'
import { useNavigate } from 'react-router-dom'

export const RecoveryPassword: React.FC = () => {
  const translations = useLittera(MakeupString)
  const navigate = useNavigate()
  const transition = false
  const codeRecovery: string[] = ['', '', '', '', '', '']
  const [isCodeRecovery, setIsCodeRecovery] = useState<boolean>(false)

  return (
    <LayoutLogin positionImg="right" transition={transition}>
      <Box>
        <TitleHeader
          title={translations.recoveryPassword}
          sx={{ textTransform: 'uppercase', fontSize: '2.3rem' }}
        />
        {isCodeRecovery ? (
          <Box>
            <Typography sx={{ my: 3 }}>{translations.insertCode}</Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                mt: 2,
              }}
            >
              {codeRecovery.map((_) => (
                <Box key={_}>
                  <input
                    type="text"
                    maxLength={1}
                    style={{
                      width: '3rem',
                      height: '3rem',
                      fontSize: '2rem',
                      textAlign: 'center',
                      border: '2px solid #4F4260',
                      borderRadius: '8px',
                    }}
                  />
                </Box>
              ))}
            </Box>
            <Box
              sx={{
                mt: 6,
              }}
            >
              <PrimaryButton onClick={() => navigate('/new-password')}>
                {translations.send}
              </PrimaryButton>
            </Box>
          </Box>
        ) : (
          <Box sx={{ mt: 3 }}>
            <Typography sx={{ my: 3 }}>{translations.messageRecoveyPassword}</Typography>
            <PrimaryInput sx={{ width: '100%' }} label={translations.email} icon={<Email />} />
            <Box
              sx={{
                mt: 6,
              }}
            >
              <PrimaryButton onClick={() => setIsCodeRecovery(true)}>
                {translations.send}
              </PrimaryButton>
            </Box>
          </Box>
        )}
      </Box>
    </LayoutLogin>
  )
}
