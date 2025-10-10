import { Box, styled, Typography } from "@mui/material";
import { Colors } from "../theme";
import "../../assets/fonts/STREZY BREAK REGULAR.otf";



export const BannerContainer = styled(Box)(() => ({

    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: 'calc(100vh - 84px)', //84px = la hauteur réelle de AppBar
    backgroundColor: Colors.light,

}));

export const BannerContent = styled(Box)(() => ({ 

    position: 'absolute',
    display: 'flex',
    flexdirection: 'column',
    justifyContent: 'center',
    maxWidth: '75%',
    padding: '4rem 0rem 0rem 1rem',
}));

export const BannerTitle = styled(Typography)(() => ({  

    lineHeight: 1.5,
    fontSize: '5rem',
    marginBottom: '1rem',
    color: Colors.secondary,
    fontWeight: 800,
    fontFamily: 'Impact, sans-serif',
    WebkitTextStroke: '1px black' ,
    textAlign: 'center',

}));

export const BannerImage = styled('img')(() => ({

    width: '100%',
    height: '100%',
    objectFit: 'fill',
    overflow: 'hidden',
    opacity: 1,
}));

