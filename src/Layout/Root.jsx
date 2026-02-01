import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

export default function Root() {
  return (
    <>
      <div className="container mx-auto ">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
