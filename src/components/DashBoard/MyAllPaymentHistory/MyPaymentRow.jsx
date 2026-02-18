import { isNewItem } from '../../../utils/utils';

export default function MyPaymentRow({ d, index }) {
  return (
    <>
      <tr className="text-sm">
        <td>{index + 1}</td>
        <td>{d?.parcelId}</td>
        <td>{d?.transactionId}</td>
        <td>{d?.amount}</td>
        <td>
          {new Date(d?.paidAt).toLocaleString()}{' '}
          {isNewItem(d?.paidAt) && (
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
              NEW
            </span>
          )}
        </td>
      </tr>
    </>
  );
}
