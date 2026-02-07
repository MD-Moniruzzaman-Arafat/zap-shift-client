import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

export default function Root() {
  return (
    <>
      <div className="container mx-auto py-5">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
