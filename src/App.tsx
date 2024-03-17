import './App.css';
import { Container, ThemeProvider } from '@mui/material';
import { theme } from './Theme/theme';
import { NavBar } from './components/NavBar/NavBar';
import { GridSections } from './Sections/GridSections';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Container sx={{ padding: '47px 0px' }}>
        <GridSections />
      </Container>
    </ThemeProvider>
  );
}

export default App;
