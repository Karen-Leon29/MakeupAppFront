import { SxStyles } from "core/types/styles";

export const useStyles: SxStyles<
    'appBar'
    | 'toolbar'
    | 'leftText'
    | 'iconContainer'
    | 'icon'
    | 'secondSection'
    | 'logoContainer'
    | 'contactContainer'
    | 'contactTitle'
    | 'contactInfo'
    | 'contactIcon'
    | 'contactText'
    | 'integralPrivacity'
    | 'iconContact'
    | 'containerList'
> = (() => {
    return {

        appBar: {
            bgcolor: '#FFF',
            color: '#B682FA',
        },
        toolbar: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            border: '1px solid #B682FA',
        },
        leftText: {
            ml: '100px',
            color: '#B682FA',
            fontSize: '16px',
            textTransform: 'uppercase',
        },
        iconContainer: {
            display: 'flex',
            mr: '100px',
        },
        icon: {
            p: 0,
            ml: '20px',
        },
        iconContact: {
            p: 0,
            ml: '-5px'
        },
        secondSection: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
            m: '20px 100px',
        },
        logoContainer: {
            display: 'flex',
            alignItems: 'center',
            '& img': {
                minHeight: '100px',
                width: 'auto',
                maxHeight: '100px'
            }
        },
        contactContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 2,
        },
        contactTitle: {
            fontWeight: 'bold',
            color: '#B682FA',
            fontFamily: '#FFF',
            fontSize: '18px',
        },
        contactInfo: {
            display: 'flex',
            alignItems: 'center',
            gap: 2,
        },
        contactIcon: {
            color: '#B682FA',
        },
        contactText: {
            color: '#B682FA',
        },
        integralPrivacity: {
            color: '#B682FA',
        },
        containerList: {
            gap: 2,
            display: 'flex',
            flexDirection: 'column',
            
        }
    };
})();
