export default function AboutUsPage() {
  return (
    <>
      <div className="bg-white rounded-2xl my-5 p-10">
        <div>
          <h1 className="text-5xl font-bold">About Us</h1>
          <p className="text-sm max-w-2xl mt-2">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>

        {/* name of each tab group should be unique */}
        <div className="tabs tabs-lift mt-5 pt-5 border-t border-gray-300">
          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Story"
            defaultChecked
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            <p className="text-justify my-2">
              We started with a simple promise — to make parcel delivery fast,
              reliable, and stress-free. Over the years, our commitment to
              real-time tracking, efficient logistics, and customer-first
              service has made us a trusted partner for thousands. Whether it's
              a personal gift or a time-sensitive business delivery, we ensure
              it reaches its destination — on time, every time.
            </p>
            <p className="text-justify my-2">
              We started with a simple promise — to make parcel delivery fast,
              reliable, and stress-free. Over the years, our commitment to
              real-time tracking, efficient logistics, and customer-first
              service has made us a trusted partner for thousands. Whether it's
              a personal gift or a time-sensitive business delivery, we ensure
              it reaches its destination — on time, every time.
            </p>
            <p className="text-justify my-2">
              We started with a simple promise — to make parcel delivery fast,
              reliable, and stress-free. Over the years, our commitment to
              real-time tracking, efficient logistics, and customer-first
              service has made us a trusted partner for thousands. Whether it's
              a personal gift or a time-sensitive business delivery, we ensure
              it reaches its destination — on time, every time.
            </p>
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Mission"
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            Tab content 2
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Success"
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            Tab content 3
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Team & Others"
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            Tab content 4
          </div>
        </div>
      </div>
    </>
  );
}
