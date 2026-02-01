import PricingCalculateForm from '../components/PricingCalculateForm/PricingCalculateForm';

export default function PricingPage() {
  return (
    <>
      <div className="bg-white rounded-2xl my-5 p-10">
        <div>
          <h1 className="text-5xl font-bold">Pricing Calculator</h1>
          <p className="text-sm max-w-2xl mt-2">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>
        <h1 className="border-t border-gray-300 mt-5 font-bold pt-2 text-2xl text-center">
          Calculate Your Cost
        </h1>
        <div className="flex justify-center items-center gap-30  flex-col lg:flex-row my-10">
          <div data-aos="zoom-in">
            {/* Form component goes here */}
            <PricingCalculateForm />
          </div>
          <div data-aos="zoom-in">
            <h1 className="font-extrabold text-5xl">50TK</h1>
          </div>
        </div>
      </div>
    </>
  );
}
