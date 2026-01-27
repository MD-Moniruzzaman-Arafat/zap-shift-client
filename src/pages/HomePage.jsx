import Banner from '../components/Banner/Banner';
import Brands from '../components/Brands/Brands';
import DummySection from '../components/DummySection/DummySection';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import OurService from '../components/OurService/OurService';

export default function HomePage() {
  return (
    <>
      <Banner />
      <HowItWorks />
      <OurService />
      <Brands />
      <DummySection />
    </>
  );
}
