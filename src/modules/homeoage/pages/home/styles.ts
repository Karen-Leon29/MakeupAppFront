import { SxStyles } from "core/types/styles"

export const useStyles: SxStyles<'container'> = (() => {
    return {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'linear-gradient(90deg, #6C4D94, #B682FA)'
        }
    }
})()