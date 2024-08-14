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
            transition: 'all 0.5s ease',
        },
        content: {
            width: '80%',
            height: '90%',
            bgcolor: 'background.paper',
            borderRadius: '15px',
            transition: 'all 0.5s ease',
        },
        card: {
            width: '100%',
            height: '100%',
            borderRadius: '15px',
            p: 2,
            display: 'flex',
            transition: 'all 0.5s ease',
        },
        form: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            width: '60%',
            mx: 'auto',
            pt: 10,
            gap: '1.5rem',
            transition: 'all 0.5s ease',
        },
        forgotPassword: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            width: '100%',
            mt: 4,
            fontSize: '12px',
            color: '#4F4260',
            transition: 'all 0.5s ease',
        },
    }
})()
