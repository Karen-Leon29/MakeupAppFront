import { SxStyles } from "../../../types/styles";


export const useStyles: SxStyles<'container' | 'content'> = (() => {
    return {
        container: {
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
        },
        content: {           
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#4F4260',
        },
    }
}
)()