import { useMediaQuery, useTheme } from "@mui/material";
import AppbarDesktop from "./appBarDesktop";
import AppbarMobile from "./appBarMobile";

export default function Appbar() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));


    return (

        <>
            {matches ? <AppbarMobile/> : <AppbarDesktop/>}
        </>
        

    );
}