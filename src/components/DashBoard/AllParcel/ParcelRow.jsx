export default function ParcelRow({ d }) {
  return (
    <>
      <tr className="text-sm">
        <th className="text-sm">{d?.trackingId}</th>
        <td>Cy Ganderton</td>
        <td>{d?.receiverAddress}</td>
        <td>{d?.deliveryStatus}</td>
        <td>{d?.cost}</td>
        <td>{d?.paymentStatus}</td>
        <td className="flex gap-1">
          <button className="btn btn-sm bg-[#CAEB66]">Pay</button>
          <button className="btn btn-sm bg-[#E7F2F4]">View</button>
          <button className="btn btn-sm bg-[#FDEBEA] text-[#EB4A47]">
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}
