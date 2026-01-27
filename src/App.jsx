import { Outlet } from 'react-router';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

function App() {
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

export default App;
