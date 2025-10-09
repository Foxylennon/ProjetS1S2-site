import { createTheme } from "@mui/material";

export const Colors = {
    primary: "#317ff9",
    secondary: "#fffffff3",
    dark: "#3239b1",


};

const theme = createTheme({
    palette: {
        primary: {
            main: Colors.primary
        },
        secondary: {
            main: Colors.secondary
        }
    }
});

export default theme;