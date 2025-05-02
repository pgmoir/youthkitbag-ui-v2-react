import { Helmet, HelmetProvider } from '@dr.pogodin/react-helmet';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PublicLayout from './layouts/PublicLayout';
import Accessibility from './routes/Accessibility';
import Cookies from './routes/Cookies';
import DashboardHome from './routes/dashboard/DashboardHome';
import Help from './routes/Help';
import LoggedOutHome from './routes/LoggedOutHome/LoggedOutHome';
import Media from './routes/Media';
import Prices from './routes/Prices';
import PrivacyPolicy from './routes/PrivacyPolicy';
import Security from './routes/Security';
import Signin from './routes/Signin';
import TermsConditions from './routes/TermsConditions';

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
            <Route path="/" element={<LoggedOutHome />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/prices" element={<Prices />} />
            <Route path="/help" element={<Help />} />
            <Route path="/media" element={<Media />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/security" element={<Security />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/dashboard" element={<DashboardHome />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
