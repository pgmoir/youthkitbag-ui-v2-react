import { Outlet } from 'react-router-dom';
import AuthNavbar from '../components/AuthNavbar';
import Footer from '../components/Footer';

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <AuthNavbar />
      <main className="flex-grow h-fit">
        <Outlet /> {/* This renders the current page */}
      </main>
      <Footer />
    </div>
  );
}
