// themes.ts
import { createTheme } from '@mui/material';

const DarkMuiTheme = createTheme({
    // Customize your Mui theme here
    palette: {
        mode: 'dark',
        primary: {
            main: '#FFFFFF', // Change the primary color
        },
        secondary: {
            main: '#fec84b', // Change the secondary color
        },
        text: {
            primary: '#FFFFFF', // Set the text color for primary elements in dark mode
            secondary: '#FFFFFF', // Set the text color for secondary elements in dark mode
        },
        action: {
            active: '#fff',
            hover: 'rgba(255, 255, 255, 0.08)',
            selected: 'rgba(255, 255, 255, 0.16)',
            disabled: 'rgba(255, 255, 255, 0.3)',
            disabledBackground: 'rgba(255, 255, 255, 0.12)'
        },
        divider: 'rgba(255, 255, 255, 0.12)',
        background: {
            default: '#121212', // Set the default background color
            paper: '#121212',   // Set the background color for paper components (like cards)
        },
    },
    typography: {
        // sans-serif
        fontFamily: ['Cario', 'sans-serif'].join(','),
    },
    // break point
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },

});

export default DarkMuiTheme;