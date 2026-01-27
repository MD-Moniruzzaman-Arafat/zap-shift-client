import bg from '../../assets/be-a-merchant-bg.png';
import location from '../../assets/location-merchant.png';

export default function DummySection() {
  return (
    <>
      <div
        className="lg:w-6xl mx-auto my-10 bg-[#03373D] rounded-2xl flex flex-col lg:flex-row items-center p-10 gap-10"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="text-white">
          <h1 className="text-[38px] font-semibold mb-5">
            Merchant and Customer Satisfaction is Our First Priority
          </h1>
          <p>
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>
          <div>
            <button>Become a Merchant</button>
            <button>Earn with ZapShift Courier</button>
          </div>
        </div>
        <div>
          <img src={location} alt="" className="w-3xl" />
        </div>
      </div>
    </>
  );
}
