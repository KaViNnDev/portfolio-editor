import './App.css';
import { Box, ThemeProvider } from '@mui/material';
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
        <Box
          sx={{
            padding: {
              xs: '50px 27px 50px 25px',
              md: '50px 100px',
            },
          }}
        >
          <GridSections />
        </Box>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
