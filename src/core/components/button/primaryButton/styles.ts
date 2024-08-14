import { SxStyles } from "../../../types/styles"

export const useStyles: SxStyles<'container' | 'button'> = (() => {
    return {
        container: {
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
        },
        button: {
            color: '#FFFFFF',
            width: '100%',
            py: 1,
            fontWeight: 'bold',
            fontSize: '1rem',
            borderRadius: '10px',
            background: 'linear-gradient(270deg, #6C4D94, #B682FA)',
        },
    }
})()