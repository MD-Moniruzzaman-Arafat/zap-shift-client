import OurServiceCard from './OurServiceCard';

export default function OurService() {
  return (
    <>
      <div className="bg-[#03373D] rounded-2xl p-10 my-10">
        <div className="text-white text-center max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold">Our Services</h1>
          <p className="mt-5">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          <OurServiceCard
            title="Express & Standard Delivery"
            description="We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off."
          />
          <OurServiceCard
            bg={'#CAEB66'}
            title="Nationwide Delivery"
            description="We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours."
          />
          <OurServiceCard
            title="Fulfillment Solution"
            description="We also offer customized service with inventory management support, online order processing, packaging, and after sales support."
          />
          <OurServiceCard
            title="Cash on Home Delivery"
            description="100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product."
          />
          <OurServiceCard
            title="Corporate Service / Contract In Logistics"
            description="Customized corporate services which includes warehouse and inventory management support."
          />
          <OurServiceCard
            title="Parcel Return"
            description="Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants."
          />
        </div>
      </div>
    </>
  );
}
