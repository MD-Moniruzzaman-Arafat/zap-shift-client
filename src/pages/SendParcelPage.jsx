import SendParcelForm from '../components/SendParcelForm/SendParcelForm';

export default function SendParcelPage() {
  return (
    <>
      <div className="bg-white rounded-2xl my-5 p-10">
        <div>
          <h1 className="text-4xl font-bold">Send A Parcel</h1>
          <h4 className="font-bold mt-2">Enter your parcel details</h4>
        </div>
        <div className="border-b border-gray-300 my-5"></div>
        <SendParcelForm />
      </div>
    </>
  );
}
