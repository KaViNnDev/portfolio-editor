import './App.css';
import { Container, ThemeProvider } from '@mui/material';
import { theme } from './Theme/theme';
import { NavBar } from './components/NavBar/NavBar';
import { GridSections } from './Sections/GridSections';
import { Provider } from 'react-redux';
import { store } from './Store/store';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <NavBar />
        <Container sx={{ padding: '47px 0px' }}>
          <GridSections />
        </Container>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
