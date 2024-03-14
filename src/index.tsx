import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Editor.css';
import App from './App';
import { ThemeProvider } from '@mui/system';
import { theme } from './Theme/theme';
import { NavBar } from './components/NavBar/NavBar';
import '@fontsource/inter';

const rootElement = document.getElementById('root');

if (rootElement !== null) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <NavBar />
        <App />
      </ThemeProvider>
    </React.StrictMode>
  );
} else {
  console.log('DOM with ID `root` is not defined');
}
