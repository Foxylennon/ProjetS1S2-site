import { createTheme } from "@mui/material";

export const Colors = {
    primary: "#16171aff",
    secondary: "#fffffff3",
    dark: "#000000ec",
    light: "#b8b8b8ff",


};

const theme = createTheme({
    palette: {
        primary: {
            main: Colors.primary
        },
        secondary: {
            main: Colors.secondary
        },
        light: {
            main: Colors.light
        },

    }
});

export default theme;