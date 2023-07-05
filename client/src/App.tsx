import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthLayout from './components/layout/AuthLayout';
import Login from './features/auth/routes/Login';
import Register from './features/auth/routes/Register';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { blue, red } from '@mui/material/colors';


function App() {

  const theme = createTheme({
    palette: {
      primary: blue
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter >
    </ThemeProvider>
  );
}

export default App;
