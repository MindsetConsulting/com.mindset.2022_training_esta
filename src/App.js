import { HashRouter } from 'react-router-dom';
import { ESTA } from './ESTA';
import { ThemeProvider } from '@ui5/webcomponents-react';
import React from 'react';
import './App.css';

function App() {
  return (
    <HashRouter>
      <ThemeProvider>
        <ESTA />
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
