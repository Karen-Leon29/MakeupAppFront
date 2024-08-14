import { SxStyles } from "../../../types/styles"


export const useStyles: SxStyles<'input' | 'container'> = (() => {
    return {
        input: {
            width: '100%',
            '& .MuiInputBase-input': {
                height: '10px',
                color: '#4F4260',
                borderRadius: '8px',
                pl: 2,
            },
            '& .MuiInputBase-root': {
                borderRadius: '8px',
            },
            '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#4F4260',
                borderRadius: '8px',
            },
            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#4F4260',
                borderRadius: '8px',
            },
            '& .MuiInputLabel-root': {
                fontSize: '14px',
                mt: -.5,
                color: '#4F4260',
            },
            '& .MuiInputLabel-root.Mui-focused': {
                color: '#4F4260',
            },
        },
        container: {
            width: '100%',
            mt: 2,
        },
    }
})()