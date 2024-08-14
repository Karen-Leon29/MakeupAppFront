import { SxStyles } from "core/types/styles"

export const useStyles: SxStyles<'container' | 'content' | 'card' | 'form' | 'forgotPassword'> = (() => {
    return {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
            background: 'linear-gradient(90deg, #6C4D94, #B682FA)',
        },
        content: {
            width: '80%',
            height: '90%',
            bgcolor: 'background.paper',
            borderRadius: '15px',
        },
        card: {
            width: '100%',
            height: '100%',
            borderRadius: '15px',
            p: 2,
            display: 'flex',
        },
        form: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            width: '60%',
            mx: 'auto',
            pb: 1,
            gap: '.5rem',
        },
        forgotPassword: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            width: '100%',
            mt: 2,
            gap: '.5rem',
            fontSize: '12px',
            color: '#4F4260',
        },
    }
})()
