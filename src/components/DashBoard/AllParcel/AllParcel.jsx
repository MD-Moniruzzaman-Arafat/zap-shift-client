import ParcelRow from './ParcelRow';

export default function AllParcel({ data, refetch }) {
  return (
    <>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 mt-5">
        <table className="table table-xs text-sm">
          {/* head */}
          <thead>
            <tr>
              <th>Cons. ID</th>
              <th>Store</th>
              <th>Recipient Info</th>
              <th>Delivery Status</th>
              <th>Amount</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {/* row 1 */}
            {data.map((d) => (
              <ParcelRow key={d._id} d={d} refetch={refetch} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
