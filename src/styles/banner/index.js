import { Box, styled, Typography } from "@mui/material";
import { Colors } from "../theme";
import "../../assets/fonts/STREZY BREAK REGULAR.otf";



export const BannerContainer = styled(Box)(() => ({

    display: 'flex',
    justifyContent: 'left',
    width: '100%',
    height: 'calc(100vh - 84px)', //84px = la hauteur réelle de AppBar
    backgroundColor: Colors.dark,

}));

export const BannerContent = styled(Box)(() => ({ 

    position: 'absolute',
    display: 'flex',
    flexdirection: 'column',
    justifyContent: 'center',
    maxWidth: '75%',
    padding: '15rem 0rem 0rem 1rem',
}));

export const BannerTitle = styled(Typography)(() => ({  

    lineHeight: 1.5,
    fontSize: '5rem',
    marginBottom: '1rem',
    color: Colors.secondary,
    fontWeight: 800,
    fontFamily: 'Impact, sans-serif',
    WebkitTextStroke: '5px' + Colors.primary,
}));

export const BannerImage = styled('img')(() => ({

    width: '100%',
    height: '100%',
    objectFit: 'fill',
    overflow: 'hidden',
    opacity: 0.7,
}));

