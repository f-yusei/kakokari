import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthLayout from './features/auth/components/AuthLayout';
import LoginForm from './features/auth/components/LoginForm';
import RegisterForm from './features/auth/components/RegisterForm';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { red, pink } from '@mui/material/colors';
import MailRegisterForm from './features/auth/components/MailRegisterForm';
import MailLoginForm from './features/auth/components/MailLoginForm';
import MainLayout from './components/layout/MainLayout';
import Home from './features/home/components/Home';
import CommonAppBar from './components/common/AppBar';
import Footer from './components/common/Footer';

function App() {

  const theme = createTheme({
    palette: {
      primary: pink
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <CommonAppBar />
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route path="login" element={<LoginForm />} />
            <Route path="register" element={<RegisterForm />} />
            <Route path="mail-register" element={<MailRegisterForm />} />
            <Route path="mail-login" element={<MailLoginForm />} />
          </Route>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter >
    </ThemeProvider>
  );
}

export default App;
