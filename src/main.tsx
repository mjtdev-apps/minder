import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline } from '@mui/material';

const App = () => (
  <>
    <CssBaseline />
    <h1>Hello, minder!</h1>
  </>
);

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
