import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: { main: '#1a237e' },
    secondary: { main: '#fbc02d' },
    background: { default: '#f4f7f9' },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
    h3: { fontWeight: 800 },
  },
  shape: { borderRadius: 12 },
  display: 'flex',
  justifyContent: 'center',
});


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
   </ThemeProvider>
  </StrictMode>,
)
