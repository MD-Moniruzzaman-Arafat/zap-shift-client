import image from '../assets/agent-pending.png';
import BeaRiderForm from '../components/BeaRiderForm/BeaRiderForm';

export default function BeaRiderPage() {
  return (
    <>
      <div className="bg-white rounded-2xl my-5 p-10">
        <div>
          <h1 className="text-5xl font-bold">Be a Rider</h1>
          <p className="text-sm max-w-2xl mt-2">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>
        <h1 className="border-t border-gray-300 mt-5 font-bold pt-2 text-2xl">
          Tell us about yourself
        </h1>
        <div className="flex justify-between gap-10  flex-col lg:flex-row">
          <div className="flex-1" data-aos="zoom-in">
            <BeaRiderForm />
          </div>
          <div className="flex-1" data-aos="zoom-in">
            <img src={image} alt="Agent Pending" className="w-full" />
          </div>
        </div>
      </div>
    </>
  );
}
