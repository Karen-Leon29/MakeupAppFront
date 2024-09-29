import styled from '@emotion/styled';
import { Typography, Box } from '@mui/material';
import { animated } from 'react-spring';

export const Slogan = styled(Typography)(() => ({
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center' as const,
    margin: '3rem 0',
    color: '#6C4D94',
    textShadow: '3px 3px 6px rgba(0, 0, 0, 0.3)',
}));

export const Section = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: '3rem',
    flexDirection: 'row' as const,
}));

export const SectionImage = styled(animated.img)(() => ({
    width: 'auto',
    borderRadius: '15px',
    maxHeight: '400px',
    boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease, opacity 0.3s ease',
}));

export const SectionText = styled(Typography)(() => ({
    flex: 1,
    margin: '0 2rem',
    lineHeight: '1.8',
    fontSize: '1.2rem',
}));

export const Highlight = styled(Typography)(() => ({
    fontWeight: 'bold',
    color: '#B682FA',
}));

export const Curiosity = styled(Box)(() => ({
    backgroundColor: '#F4F4F9',
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '1.5rem',
    transition: 'transform 0.3s ease',
    '&:hover': {
        transform: 'scale(1.02)',
        boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)',
    },
}));

export const CuriosityText = styled(Typography)(() => ({
    fontSize: '1.1rem',
}));
