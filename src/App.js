import { Container, ThemeProvider, } from '@mui/material';
import { useEffect } from 'react';
import theme from './styles/theme';
import Appbar from './components/appbar';
import Banner from './components/Banner';
import Content from './components/Content';


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

        {/*Content*/}
        <Content />
          
      </Container>
    </ThemeProvider>

  );
}

export default App;
