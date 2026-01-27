import icon from '../../assets/reviewQuote.png';

export default function CustomerReviewCard() {
  return (
    <>
      <div className="bg-white shadow p-10 rounded-2xl">
        <img src={icon} alt="" />
        <p className="text-justify">
          A posture corrector works by providing support and gentle alignment to
          your shoulders, back, and spine, encouraging you to maintain proper
          posture throughout the day.{' '}
        </p>
        <div className="border-b border-gray-300 my-5 border-dashed"></div>
        <div className="flex items-center gap-10">
          <div className="avatar avatar-online">
            <div className="w-16 rounded-full">
              <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
            </div>
          </div>
          <div>
            <h1 className="font-bold">Awlad Hossin</h1>
            <p>Senior Product Designer</p>
          </div>
        </div>
      </div>
    </>
  );
}
