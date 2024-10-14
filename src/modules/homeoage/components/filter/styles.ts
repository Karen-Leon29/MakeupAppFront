import { SxStyles } from 'core/types/styles'

export const useStyles: SxStyles<'drawer' | 'header' | 'title' | 'listItem' | 'calendar'> = (() => {
  return {
    drawer: {
      width: 320,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: 320,
        boxSizing: 'border-box',
        py: 2,
        px: 3,
        bgcolor: '#F4F4F9',
        transition: 'transform 0.3s ease',
        transform: 'translateX(0)',
      },
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      mb: 2,
    },
    title: {
      color: '#6C4D94',
      fontWeight: 'bold',
      my: 1,
    },
    listItem: {
      '&:hover': {
        bgcolor: '#D3C6F5',
        borderRadius: '8px',
        cursor: 'pointer'
      },
      color: '#6C4D94',
    },
    calendar: {
      '& .react-calendar': {
        border: 'none',
        borderRadius: '10px',
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        padding: '10px',
      },
      '& .react-calendar__tile': {
        borderRadius: '5px',
        color: '#000000',
        backgroundColor: 'transparent',
        transition: 'background-color 0.3s ease, color 0.3s ease',
      },
      '& .react-calendar__tile--active': {
        color: '#FFFFFF !important',
        border: '2px solid #B682FA',
        backgroundColor: '#B682FA !important',
      },
      '& .react-calendar__tile:hover': {
        backgroundColor: '#D3C6F5',
        color: '#6C4D94',
        fontWeight: 'bold',
      },
      '& .react-calendar__month-view__days__day--weekend': {
        color: '#B682FA',
        fontWeight: 'bold',
      },
      '& .react-calendar__navigation': {
        color: '#6C4D94',
      },
      '& .react-calendar__navigation__label': {
        color: '#6C4D94',
        fontWeight: 'bolder'
      },
      '& .react-calendar__tile--now': {
        border: '2px solid #D3C6F5',
        borderRadius: '5px',
      },
      '& .react-calendar__month-view__days__day--neighboringMonth': {
        color: '#C4C4C4',
        backgroundColor: 'transparent',
        pointerEvents: 'none'
      },
      '& .react-calendar__navigation__prev-button': {
        color: '#6C4D94',
        fontSize: '25px',
      },
      '& .react-calendar__navigation__next-button': {
        color: '#6C4D94',
        fontSize: '25px',
      },
      '& .react-calendar__navigation__prev2-button': {
        display: 'none',
      },
      '& .react-calendar__navigation__next2-button': {
        display: 'none',
      },
      '& .react-calendar__month-view__weekdays': {
        color: '#6C4D94',
        fontWeight: 'bold',
      },
    },
  };
})();
