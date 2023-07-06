import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthLayout from './components/layout/AuthLayout';
import LoginForm from './features/auth/components/LoginForm';
import RegisterForm from './features/auth/components/RegisterForm';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { red } from '@mui/material/colors';
import MailRegisterForm from './features/auth/components/MailRegisterForm';


function App() {

  const theme = createTheme({
    palette: {
      primary: red
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<LoginForm />} />
            <Route path="register" element={<RegisterForm />} />
            <Route path="mail" element={<MailRegisterForm />} />
          </Route>
        </Routes>
      </BrowserRouter >
    </ThemeProvider>
  );
}

export default App;
