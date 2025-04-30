import { Helmet, HelmetProvider } from '@dr.pogodin/react-helmet';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './routes/Landing';
import Signin from './routes/Signin';
import DashboardHome from './routes/dashboard/DashboardHome';

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
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<DashboardHome />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
