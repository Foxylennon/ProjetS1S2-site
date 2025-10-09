import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Colors } from '../../styles/theme';
import { AppbarHeader, NavBox } from '../../styles/appbar';
import NavList from '../../styles/appbar';

const pages = ['Home', 'Download', 'About us'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function AppbarDesktop({matches}){

const [anchorElNav] = React.useState(null);




  return (
    <AppBar id='my-appbar' position="static">
      <Container maxWidth="breakpoint">
        <Toolbar disableGutters>
          <AdbIcon sx={{mr: 2 }} />
          <AppbarHeader variant="h4" noWrap component="a">CRO</AppbarHeader>
          <Box sx={{mr: 3}}> </Box>
          <NavBox>
            <NavList pages={pages}/>
          </NavBox>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
