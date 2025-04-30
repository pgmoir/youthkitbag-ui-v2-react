import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './routes/Landing';
import Signin from './routes/Signin';
import DashboardHome from './routes/dashboard/DashboardHome';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<DashboardHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
