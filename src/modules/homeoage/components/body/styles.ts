import { SxStyles } from "core/types/styles";

export const useStyles: SxStyles<
  'bodyContainer'
  | 'card'
  | 'imageContainer'
  | 'cardContent'
  | 'cardTitle'
  | 'cardDescription'
  | 'cardActions'
  | 'cardButton'
  | 'arrowButton'
  | 'decorativePaper'
  | 'filter'
  | 'filterButton'
  > = (() => {
    return {
      bodyContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        padding: '2rem',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f4f9',
      },
      card: {
        width: '300px',
        borderRadius: '15px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '450px',
        '&:hover': {
          transform: 'translateY(-10px)',
        },
      },
      imageContainer: {
        width: '100%',
        height: '200px',
        overflow: 'hidden',
        borderTopLeftRadius: '15px',
        borderTopRightRadius: '15px',
      },
      cardContent: {
        flexGrow: 1,
      },
      cardTitle: {
        fontWeight: 'bold',
        color: '#6C4D94',
        marginBottom: '0.5rem',
      },
      cardDescription: {
        color: '#6C4D94',
      },
      cardActions: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
      },
      cardButton: {
        color: 'white',
        backgroundColor: '#6C4D94',
        '&:hover': {
          backgroundColor: '#B682FA',
        },
      },
      arrowButton: {
        color: '#6C4D94',
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'rotate(90deg)',
        },
      },
      decorativePaper: {
        padding: '1.5rem',
        borderRadius: '15px',
        backgroundColor: '#B682FA',
        color: 'white',
        textAlign: 'center',
        marginTop: '2rem',
        animation: 'bounce 2s infinite',
        '@keyframes bounce': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
      },
      filter: {
        height: '100vh',
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        right: 20,
        width: '50px',
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: '300px',
          boxSizing: 'border-box',
          padding: '2px',
          bgcolor: '#F4F4F9',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
          transition: 'transform 0.8s ease-in-out',
          transform: 'translateX(100%)',
        },
      },
      filterButton: {
        zIndex: 1201,
        bgcolor: '#B682FA',
        color: '#FFFFFF',
        transition: 'transform 0.8s ease-in-out',
        '&:hover': {
          bgcolor: '#6C4D94',
        },
      }
    };
  })();
