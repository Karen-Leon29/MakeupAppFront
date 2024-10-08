import { SxStyles } from "core/types/styles";

export const useStyles: SxStyles<'appBar' | 'toolbar' | 'logo' | 'linksContainer' | 'link' | 'search' | 'searchIconWrapper' | 'inputBase' | 'iconButton' | 'categotySelect'> = (() => {
    return {
        appBar: {
            bgcolor: 'white',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        },
        toolbar: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '60px',
            width: '100%',
        },
        logo: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#B682FA',
            textDecoration: 'none',
        },
        linksContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
        },
        link: {
            color: '#B682FA',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            '&:hover': {
                color: '#6C4D94',
            },
        },
        search: {
            position: 'relative',
            borderRadius: '4px',
            width: '100%',
            maxWidth: '300px',
            display: 'flex',
            alignItems: 'center',
            mr: '50px',
        },
        searchIconWrapper: {
            p: '10px',
            height: '100%',
            pointerEvents: 'none',
            bgcolor: '#B682FA',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '0 10px 10px 0',
        },
        inputBase: {
            pl: '15px',
            py: '5px',
            border: '1px solid #B682FA',
            borderRadius: '10px 0 0 10px',
        },
        iconButton: {
            color: '#B682FA',
            bgcolor: '#B682FA33',
        },
        categotySelect: {
            display: 'flex',
            flexDirection: 'column',
            color: '#6C4D94',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            pb: '5px',
        },
    };  
})();
