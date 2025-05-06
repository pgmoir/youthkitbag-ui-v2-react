import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function DashboardLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <h3>DASHBOARD</h3>
        <Outlet /> {/* This renders the current page */}
      </main>
      <Footer />
    </div>
  );
}
