import {ThemeOptions} from "@mui/material"
import {orange} from "@mui/material/colors"

declare module '@mui/material/styles' {
    interface Theme {
        ticTacToe: {
            danger: string;
        };
    }

    // allow configuration using `createTheme`
    interface ThemeOptions {
        ticTacToe?: {
            danger?: string;
        };
    }
}
export const lightTheme: ThemeOptions = {
    ticTacToe: {
        danger: orange[500],
    },
    palette: {
        mode: 'light',
        primary: {
            main: '#178ca4',
        },
        secondary: {
            main: '#18b7be',
        },
        error: {
            main: '#c34f5a',
        },
        warning: {
            main: '#d69f3a',
        },
        background: {
            paper: '#f9f7f0',
        },
    },
}
export const darkTheme: ThemeOptions = {
    ticTacToe: {
        danger: orange[500],
    },
    palette: {
        mode: 'dark',
        primary: {
            main: '#178ca4',
        },
        secondary: {
            main: '#18b7be',
        },
        error: {
            main: '#c34f5a',
        },
        warning: {
            main: '#d69f3a',
        },
        background: {
            paper: '#051c2a',
        },
    },
}
