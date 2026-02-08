import { useQuery } from '@tanstack/react-query';
import img from '../../assets/Frame 2087325832.png';
import AllParcel from '../../components/DashBoard/AllParcel/AllParcel';
import Loading from '../../components/Loading/Loading';
import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';

export default function AllParcelPage() {
  const { user } = useAuth();
  const api = useAxios();
  const { isPending, isError, data, error, refetch } = useQuery({
    queryKey: ['parcels'],
    queryFn: async () => {
      const res = await api.get(`/parcel?email=${user.email}`);
      return res.data;
    },
  });
  if (isPending) {
    return <Loading />;
  }
  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <>
      <div className="bg-white m-5 p-5 rounded-md">
        <h1 className="font-bold text-3xl">All Parcel </h1>
        <div className="mt-5 flex flex-col lg:flex-row gap-2 items-center">
          <div className="bg-[#EAECED] flex w-3xs p-3 gap-4 rounded-md items-center">
            <div>
              <img src={img} alt="" className="w-8" />
            </div>
            <div>
              <p>
                <small>Total</small>
              </p>
              <h1 className="font-bold text-2xl">129</h1>
            </div>
          </div>
          <div className="bg-[#EAECED] flex w-3xs p-3 gap-4 rounded-md items-center">
            <div>
              <img src={img} alt="" className="w-8" />
            </div>
            <div>
              <p>
                <small>Return</small>
              </p>
              <h1 className="font-bold text-2xl">1,390</h1>
            </div>
          </div>
          <div className="bg-[#EAECED] flex w-3xs p-3 gap-4 rounded-md items-center">
            <div>
              <img src={img} alt="" className="w-8" />
            </div>
            <div>
              <p>
                <small>paid Return </small>
              </p>
              <h1 className="font-bold text-2xl">50</h1>
            </div>
          </div>
        </div>
        <AllParcel data={data?.data} refetch={refetch} />
      </div>
    </>
  );
}
