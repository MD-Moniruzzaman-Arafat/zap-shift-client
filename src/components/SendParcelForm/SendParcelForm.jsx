import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';
import { generateTrackingId } from '../../utils/utils';

export default function SendParcelForm() {
  const api = useAxios();
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      yourDistrict: '',
      receiverDistrict: '',
    },
  });

  const parcelType = watch('type');
  const sendDistrictMatch = watch('yourDistrict');
  const receiveDistrictMatch = watch('receiverDistrict');

  console.log(parcelType);

  const onSubmit = async (data) => {
    try {
      const date = new Date();
      data.createdDate = date.toISOString();
      data.trackingId = generateTrackingId();
      data.paymentStatus = 'Unpaid';
      data.deliveryStatus = 'Pending';
      data.createdBy = user.email;
      let pricing;
      let extraWeight;
      let extraPrice;
      if (sendDistrictMatch === receiveDistrictMatch) {
        pricing = data.type === 'document' ? 60 : 110;
      } else {
        pricing = data.type === 'document' ? 80 : 150;
      }
      const weight = parseFloat(data.parcelWeight);
      if (weight > 3 && parcelType === 'not-document') {
        extraWeight = weight - 3;
        const p = pricing * 3;
        extraPrice = extraWeight * (40 + pricing);

        data.cost = p + extraPrice;
        console.log(extraWeight);
      } else {
        data.cost = pricing;
      }
      console.log(data);

      Swal.fire({
        title: 'Are you sure?',
        icon: 'warning',
        html: `
    <div style="text-align:left">
      <p><b>📦 Parcel Type:</b> ${data.type}</p>
      <p><b>⚖️ Weight:</b> ${weight} KG</p>
      <p><b>📍 Same District:</b> ${sendDistrictMatch === receiveDistrictMatch ? 'Yes' : 'No'}</p>
      <hr />
      <p><b>💰 Base Price:</b> ${pricing} Tk</p>
      <p><b>➕ Extra Weight:</b> ${extraWeight} KG</p>
      <p><b>➕ Extra Cost:</b> ${extraPrice} Tk</p>
      <hr />
      <h3>🧾 Total Cost: ${data.cost} Tk</h3>
    </div>
  `,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Booking it!',
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await api.post('/parcels', data);
          console.log(res);
          if (res.status === 201) {
            reset();
            Swal.fire({
              title: 'Booking Successful 🎉',
              text: `Your Tracking ID will be generated shortly.`,
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
      <form
        className="fieldset"
        data-aos="zoom-in"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex items-center gap-1 fieldset">
            <input
              type="radio"
              name="radio-1"
              className="radio"
              {...register('type', { required: 'Type is required' })}
              value="document"
            />
            <label htmlFor="">Document</label>
          </div>
          <div className="flex items-center gap-1 fieldset">
            <input
              type="radio"
              name="radio-1"
              className="radio"
              {...register('type', { required: 'Type is required' })}
              value="not-document"
            />
            <label htmlFor="">Not-Document</label>
          </div>
        </div>
        {errors.type && <p className="text-red-500 ">{errors.type.message}</p>}
        <div className="fieldset">
          <div className="flex justify-between items-center gap-5">
            <div className="fieldset w-full">
              <label className="label">Parcel Name</label>
              <input
                {...register('parcelName', { required: 'Name is required' })}
                type="text"
                className="input w-full"
                placeholder="Parcel Name"
              />
              {errors.parcelName && (
                <p className="text-red-500">{errors.parcelName.message}</p>
              )}
            </div>
            <div className="fieldset w-full">
              <label className="label">Parcel Weight (KG)</label>
              <input
                {...register('parcelWeight', {
                  required: 'Weight is required',
                })}
                type="text"
                className="input w-full"
                placeholder="Parcel Weight (KG)"
              />
              {errors.parcelWeight && (
                <p className="text-red-500">{errors.parcelWeight.message}</p>
              )}
            </div>
          </div>
          <div className="border-b border-gray-300 my-5"></div>
          <div className="flex justify-between items-center gap-5 flex-col lg:flex-row">
            <div className="fieldset w-full">
              <h1 className="font-bold">Sender Details</h1>
              <label className="label">Sender Name</label>
              <input
                {...register('senderName', {
                  required: 'senderName is required',
                })}
                type="text"
                className="input w-full"
                placeholder="Sender Name"
              />
              {errors.senderName && (
                <p className="text-red-500">{errors.senderName.message}</p>
              )}
              <label className="label">Address</label>
              <input
                {...register('address', { required: 'Address is required' })}
                type="text"
                className="input w-full"
                placeholder="Address"
              />
              {errors.address && (
                <p className="text-red-500">{errors.address.message}</p>
              )}
              <label className="label">Sender Phone No</label>
              <input
                {...register('senderPhone', { required: 'Phone is required' })}
                type="text"
                className="input w-full"
                placeholder="Sender Phone No"
              />
              {errors.senderPhone && (
                <p className="text-red-500">{errors.senderPhone.message}</p>
              )}
              <label className="label">Your District</label>
              <select
                defaultValue="Select your District"
                className="select w-full"
                {...register('yourDistrict', {
                  required: 'District is required',
                })}
              >
                <option disabled={true} value={''}>
                  Select your District
                </option>
                <option value={'Crimson'}>Crimson</option>
                <option value={'Amber'}>Amber</option>
                <option value={'Velvet'}>Velvet</option>
              </select>
              {errors.yourDistrict && (
                <p className="text-red-500">{errors.yourDistrict.message}</p>
              )}
              <fieldset className="fieldset ">
                <legend className="label">Pickup Instruction</legend>
                <textarea
                  className="textarea h-24 w-full"
                  placeholder="Pickup Instruction"
                  {...register('pickupInstruction', {
                    required: 'Pickup Instruction is required',
                  })}
                ></textarea>
              </fieldset>
              {errors.pickupInstruction && (
                <p className="text-red-500">
                  {errors.pickupInstruction.message}
                </p>
              )}
            </div>
            <div className="fieldset w-full">
              <h1 className="font-bold">Receiver Details</h1>
              <label className="label">Receiver Name</label>
              <input
                {...register('receiverName', {
                  required: 'Receiver Name is required',
                })}
                type="text"
                className="input w-full"
                placeholder="Receiver Name"
              />
              {errors.receiverName && (
                <p className="text-red-500">{errors.receiverName.message}</p>
              )}
              <label className="label">Receiver Address</label>
              <input
                {...register('receiverAddress', {
                  required: 'Receiver Address is required',
                })}
                type="text"
                className="input w-full"
                placeholder="Receiver Address"
              />
              {errors.receiverAddress && (
                <p className="text-red-500">{errors.receiverAddress.message}</p>
              )}
              <label className="label">Receiver Contact No</label>
              <input
                {...register('receiverPhone', {
                  required: 'Receiver Phone is required',
                })}
                type="text"
                className="input w-full"
                placeholder="Receiver Contact No"
              />
              {errors.receiverPhone && (
                <p className="text-red-500">{errors.receiverPhone.message}</p>
              )}
              <label className="label">Receiver District</label>
              <select
                defaultValue="Select Receiver District"
                className="select w-full"
                {...register('receiverDistrict', {
                  required: 'Receiver District is required',
                })}
              >
                <option value="" disabled={true}>
                  Select Receiver District
                </option>
                <option value={'Crimson'}>Crimson</option>
                <option value={'Amber'}>Amber</option>
                <option value={'Velvet'}>Velvet</option>
              </select>
              {errors.receiverDistrict && (
                <p className="text-red-500">
                  {errors.receiverDistrict.message}
                </p>
              )}

              <fieldset className="fieldset">
                <legend className="label">Delivery Instruction</legend>
                <textarea
                  className="textarea h-24 w-full"
                  placeholder="Delivery Instruction"
                  {...register('deliveryInstruction', {
                    required: 'Delivery Instruction is required',
                  })}
                ></textarea>
              </fieldset>
              {errors.deliveryInstruction && (
                <p className="text-red-500">
                  {errors.deliveryInstruction.message}
                </p>
              )}
            </div>
          </div>

          <button className="btn  bg-[#CAEB66] mt-2">
            Proceed to Confirm Booking
          </button>
        </div>
      </form>
    </>
  );
}
