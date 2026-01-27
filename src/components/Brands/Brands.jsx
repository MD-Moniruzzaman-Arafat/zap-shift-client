import Marquee from 'react-fast-marquee';
import amazon from '../../assets/brands/amazon.png';
import casio from '../../assets/brands/casio.png';
import moonstar from '../../assets/brands/moonstar.png';
import randstad from '../../assets/brands/randstad.png';
import star from '../../assets/brands/star.png';
import starPeople from '../../assets/brands/start_people.png';
import liveTracking from '../../assets/live-tracking.png';
import safeDelivery from '../../assets/safe-delivery.png';

export default function Brands() {
  return (
    <>
      <div className="lg:w-6xl mx-auto my-10 text-center">
        <h1 className="font-bold text-2xl mb-10">
          We've helped thousands of,sales teams
        </h1>
        <div>
          <Marquee>
            <div className="flex items-center gap-12">
              <img src={casio} alt="Casio" />
              <img src={amazon} alt="Amazon" />
              <img src={moonstar} alt="Moonstar" />
              <img src={star} alt="Star" />
              <img src={starPeople} alt="Star People" />
              <img src={randstad} alt="Randstad" />
            </div>
          </Marquee>
        </div>
        <div className="border-b border-gray-300 my-10 border-dashed"></div>
        <div>
          <div className="stats stats-vertical md:stats-horizontal shadow p-5 my-2">
            <div className="stat">
              <img src={liveTracking} alt="Live Tracking" />
            </div>

            <div className="flex flex-col justify-center text-left md:ml-10">
              <h1 className="font-bold mb-3">Live Parcel Tracking</h1>
              <p className="text-sm">
                Stay updated in real-time with our live parcel tracking feature.
                From pick-up to delivery, monitor your shipment's journey and
                get instant status updates for complete peace of mind.
              </p>
            </div>
          </div>
          <div className="stats stats-vertical md:stats-horizontal shadow p-5 my-2">
            <div className="stat">
              <img src={safeDelivery} alt="Live Tracking" />
            </div>

            <div className="flex flex-col justify-center text-left md:ml-10">
              <h1 className="font-bold mb-3">100% Safe Delivery</h1>
              <p className="text-sm">
                We ensure your parcels are handled with the utmost care and
                delivered securely to their destination. Our reliable process
                guarantees safe and damage-free delivery every time.
              </p>
            </div>
          </div>
          <div className="stats stats-vertical md:stats-horizontal shadow p-5 my-2">
            <div className="stat">
              <img src={safeDelivery} alt="Live Tracking" />
            </div>

            <div className="flex flex-col justify-center text-left md:ml-10">
              <h1 className="font-bold mb-3">24/7 Call Center Support</h1>
              <p className="text-sm">
                Our dedicated support team is available around the clock to
                assist you with any questions, updates, or delivery
                concerns—anytime you need us.
              </p>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-300 my-10 border-dashed"></div>
      </div>
    </>
  );
}
