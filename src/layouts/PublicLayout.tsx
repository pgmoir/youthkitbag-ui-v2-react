import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function PublicLayout() {
  return (
    <div>
      <Navbar />
      <main className="flex-grow">
        <Outlet /> {/* This renders the current page */}
      </main>
      <Footer />
    </div>
  );
}
