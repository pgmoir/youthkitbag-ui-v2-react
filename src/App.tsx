import { Helmet, HelmetProvider } from '@dr.pogodin/react-helmet';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PublicLayout from './layouts/PublicLayout';
import ForgotPassword from './routes/auth/ForgotPassword';
import DashboardHome from './routes/dashboard/Home';
import Landing from './routes/public/Landing';

import AuthLayout from './layouts/AuthLayout';
import DashboardLayout from './layouts/DashboardLayout';
import LogIn from './routes/auth/LogIn';
import SignUp from './routes/auth/SignUp';
import Content from './routes/public/Content';
import Prices from './routes/public/Prices';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>
          YouthKitbag React - Inventory, Trade, Aquire, Reporting for all your
          youth kit
        </title>
        <meta
          name="description"
          content="Your ultimate toolkit for youth activities."
        />
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route index element={<Landing />} />
            <Route path="prices" element={<Prices />} />
            <Route path=":content" element={<Content />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="log-in" element={<LogIn />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="sign-up" element={<SignUp />} />
          </Route>
          <Route element={<DashboardLayout />}>
            <Route path="dashboard" element={<DashboardHome />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
