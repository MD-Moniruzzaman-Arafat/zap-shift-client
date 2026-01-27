export default function Faq() {
  return (
    <>
      <div className="lg:w-6xl mx-auto my-10">
        <div className="flex flex-col items-center gap-5 my-10">
          <h1 className="font-bold text-3xl text-center">
            Frequently Asked Question (FAQ)
          </h1>
          <p className="text-sm max-w-3xl text-center">
            Enhance posture, mobility, and well-being effortlessly with Posture
            Pro. Achieve proper alignment, reduce pain, and strengthen your body
            with ease!
          </p>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold">
            How does this posture corrector work?
          </div>
          <div className="collapse-content text-sm">
            <div className="border-b border-gray-300 mb-5 border-dashed"></div>A
            posture corrector works by providing support and gentle alignment to
            your shoulders, back, and spine, encouraging you to maintain proper
            posture throughout the day. Here’s how it typically functions: A
            posture corrector works by providing support and gentle alignment to
            your shoulders.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            Is it suitable for all ages and body types?
          </div>

          <div className="collapse-content text-sm">
            <div className="border-b border-gray-300 mb-5 border-dashed"></div>
            Click on "Forgot Password" on the login page and follow the
            instructions sent to your email.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            Does it really help with back pain and posture improvement?{' '}
          </div>

          <div className="collapse-content text-sm">
            <div className="border-b border-gray-300 mb-5 border-dashed"></div>
            Go to "My Account" settings and select "Edit Profile" to make
            changes.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            Does it have smart features like vibration alerts?
          </div>

          <div className="collapse-content text-sm">
            <div className="border-b border-gray-300 mb-5 border-dashed"></div>
            Go to "My Account" settings and select "Edit Profile" to make
            changes.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            How will I be notified when the product is back in stock?
          </div>

          <div className="collapse-content text-sm">
            <div className="border-b border-gray-300 mb-5 border-dashed"></div>
            Go to "My Account" settings and select "Edit Profile" to make
            changes.
          </div>
        </div>
      </div>
    </>
  );
}
