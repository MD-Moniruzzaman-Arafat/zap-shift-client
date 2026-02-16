export default function MyPaymentRow({ d, index }) {
  return (
    <>
      <tr className="text-sm">
        <td>{index + 1}</td>
        <td>{d?.parcelId}</td>
        <td>{d?.transactionId}</td>
        <td>{d?.amount}</td>
        <td>{new Date(d?.paidAt).toLocaleString()}</td>
      </tr>
    </>
  );
}
