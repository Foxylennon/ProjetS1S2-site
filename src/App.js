import { AppBar, Button, Container, ThemeProvider } from '@mui/material';
import { useEffect } from 'react';
import theme from './styles/theme';
import Appbar from './components/appbar';
import Banner from './components/Banner';

function App() {

  useEffect(()=>{
    document.title = "React Material UI - Home"
  },[]);


  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="false" disableGutters
      sx={{background: "#fff"}}>

        {/*AppBar*/}
        <Appbar />

        {/*Banner*/}
        <Banner />
      </Container>
    </ThemeProvider>

  );
}

export default App;
