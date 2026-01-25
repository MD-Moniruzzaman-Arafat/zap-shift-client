import icon from '../../assets//bookingIcon.png';

export default function HowItWorks() {
  return (
    <>
      <div className="w-6xl mx-auto my-10">
        <h1 className="font-bold mb-5">How It Works</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5 ">
          <div className="bg-[#FFFFFF] p-5 rounded-2xl">
            <img src={icon} alt="" />
            <h5 className="font-bold my-2">Booking Pick & Drop</h5>
            <p className="text-sm">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
          <div className="bg-[#FFFFFF] p-5 rounded-2xl">
            <img src={icon} alt="" />
            <h5 className="font-bold my-2">Cash On Delivery</h5>
            <p className="text-sm">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
          <div className="bg-[#FFFFFF] p-5 rounded-2xl">
            <img src={icon} alt="" />
            <h5 className="font-bold my-2">Delivery Hub</h5>
            <p className="text-sm">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
          <div className="bg-[#FFFFFF] p-5 rounded-2xl">
            <img src={icon} alt="" />
            <h5 className="font-bold my-2">Booking SME & Corporate</h5>
            <p className="text-sm">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
