import { SxStyles } from "../../types/styles"

export const useStyles: SxStyles<'container' | 'checkbox' | 'formControlLabel'> = (() => {
    return {
        container: {
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
        },
        checkbox: {
            width: '100%',
            ml: 2,
            py: 1,
            '& .MuiCheckbox-root': {
                color: '#4F4260',
                borderRadius: '15px',
                '&:hover': {
                    color: '#4F4260',
                },
                '&.Mui-checked': {
                    color: '#4F4260',
                    '&:hover': {
                        color: '#4F4260',
                    },
                },
                '&.Mui-disabled': {
                    color: '#4F4260',
                    '&:hover': {
                        color: '#4F4260',
                    },
                },
            },
        },
        formControlLabel: {
            fontSize: '12px',
            order: -1,
            color: '#4F4260',
        },
    }
})()
