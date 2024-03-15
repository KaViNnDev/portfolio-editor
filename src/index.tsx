import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Editor.css';
import App from './App';
import '@fontsource/inter';

const rootElement = document.getElementById('root');

if (rootElement !== null) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.log('DOM with ID `root` is not defined');
}
