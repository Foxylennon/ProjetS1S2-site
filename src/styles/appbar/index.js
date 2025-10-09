import { Box, Button, styled, Typography } from "@mui/material";
import { Colors } from "../theme";
import "@fontsource/outfit";

export const AppbarHeader = styled(Typography)(() => ({

    mr: 2,
    fontFamily: 'outfit',
    fontWeight: 1000,
    letterSpacing: '.3rem',
    color: Colors.secondary,
    textDecoration: 'none',
}));

export const NavBox = styled(Box)(() => ({

    flexGrow: 1,
    display: 'flex',
    mr: 2    
}));

export default function NavList({pages}) {
    return (
        <>
      {pages.map((page) => (
        <Button
          key={page}
          sx={{ my: 3, color: 'white', display: 'block' }}
        >
          {page}
        </Button>
      ))}
    </>
    )
};
