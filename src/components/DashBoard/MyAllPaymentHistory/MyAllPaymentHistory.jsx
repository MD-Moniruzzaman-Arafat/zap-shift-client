import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import useAxios from '../../../hooks/useAxios';
import Loading from '../../Loading/Loading';
import MyPaymentRow from './MyPaymentRow';

export default function MyAllPaymentHistory() {
  const { user } = useAuth();
  const api = useAxios();
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['payments', user.email],
    queryFn: async () => {
      const res = await api.get(`/payment?email=${user.email}`);
      return res.data.data;
    },
  });
  if (isPending) {
    return <Loading />;
  }
  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  console.log(data);
  return (
    <>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 mt-5">
        <table className="table table-xs text-sm">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Parcel ID</th>
              <th>Transaction ID</th>
              <th>Amount</th>
              <th>Paid At</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {/* row 1 */}
            {data.map((d, index) => (
              <MyPaymentRow key={d._id} d={d} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
