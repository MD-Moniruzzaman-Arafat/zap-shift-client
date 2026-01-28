import serviceLogo from '../../assets/service.png';

export default function OurServiceCard({ title, description, bg }) {
  return (
    <>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className={`  text-center p-10 rounded-2xl flex flex-col items-center gap-3 ${bg ? `bg-[${bg}]` : 'bg-white'}`}
      >
        <img
          src={serviceLogo}
          alt=""
          className="w-15 p-2 bg-[#F0EFFC] rounded-full"
        />
        <h1 className="font-bold text-2xl">{title}</h1>
        <p className="text-sm">{description}</p>
      </div>
    </>
  );
}
