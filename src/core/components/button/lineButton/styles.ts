import { SxStyles } from "../../../types/styles"

export const useStyles: SxStyles<'button'> = (() => {
    return {
        button: {
            color: '#6C4D94',
            borderBottom: '1px solid #6C4D94',
            fontSize: '12px',
            cursor: 'pointer',
            my: 1,
        },
    }
})()