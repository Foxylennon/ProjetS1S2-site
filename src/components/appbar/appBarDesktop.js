import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import AdbIcon from '@mui/icons-material/Adb';

import { AppbarHeader, NavBox } from '../../styles/appbar';
import NavList from '../../styles/appbar';

const pages = ['Home', 'Download','How to play','encyclopedia', 'About us'];


export default function AppbarDesktop({matches}){

const [anchorElNav] = React.useState(null);




  return (
    <AppBar id='my-appbar' position="sticky">
      <Container maxWidth="breakpoint">
        <Toolbar disableGutters>
          <AdbIcon sx={{mr: 2 }} />
          <AppbarHeader variant="h4" noWrap component="a">CHRO</AppbarHeader>
          <Box sx={{mr: 3}}> </Box>
          <NavBox>
            <NavList pages={pages}/>
          </NavBox>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
