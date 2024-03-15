import './App.css';
import { ThemeProvider } from '@mui/material';
import { theme } from './Theme/theme';
import { NavBar } from './components/NavBar/NavBar';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
    </ThemeProvider>
  );
}

export default App;
