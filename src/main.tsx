import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CssBaseline } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';
import { queryClient } from './Utils/queryClient';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </CssBaseline>
  </React.StrictMode>,
  document.getElementById('root')
);
