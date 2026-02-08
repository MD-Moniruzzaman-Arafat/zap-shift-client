import Swal from 'sweetalert2';
import useAxios from '../../../hooks/useAxios';

export default function ParcelRow({ d, refetch }) {
  const api = useAxios();
  const handleDeleteParcel = async () => {
    try {
      const id = d?._id;

      Swal.fire({
        title: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Delete it!',
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await await api.delete(`parcel/${id}`);
          console.log(res);
          if (res.status === 200) {
            refetch();
            Swal.fire({
              title: 'Delete Successful 🎉',
              icon: 'success',
            });
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
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
          <button
            onClick={handleDeleteParcel}
            className="btn btn-sm bg-[#FDEBEA] text-[#EB4A47]"
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}
