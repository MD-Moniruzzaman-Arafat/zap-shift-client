import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';

export default function BeaRiderForm() {
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
      name: user?.displayName || '',
      email: user?.email || '',
      yourRegion: '',
      yourDistrict: '',
    },
  });
  const onSubmit = async (data) => {
    console.log(data);
    const riderData = {
      ...data,
      status: 'pending',
      created_at: new Date().toISOString(),
    };
    try {
      const res = await api.post('/riders', riderData);
      console.log(res);
      if (res.status === 201) {
        Swal.fire({
          title: 'Submitted Successfully',
          icon: 'success',
          draggable: true,
        });
      }
      reset();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <form className="fieldset" onSubmit={handleSubmit(onSubmit)}>
        <label className="label">Your Name</label>
        <input
          disabled={true}
          {...register('name', { required: 'Name is required' })}
          type="text"
          className="input w-full"
          placeholder="your Name"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        <label className="label">Driving License Number</label>
        <input
          {...register('drivingLicenseNumber', {
            required: 'Driving License Number is required',
          })}
          type="text"
          className="input w-full"
          placeholder="Driving License Number"
        />
        {errors.drivingLicenseNumber && (
          <p className="text-red-500">{errors.drivingLicenseNumber.message}</p>
        )}
        <label className="label">Your Email</label>
        <input
          disabled={true}
          {...register('email', { required: 'Email is required' })}
          type="text"
          className="input w-full"
          placeholder="Your Email"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <label className="label">Your Region</label>
        <select
          defaultValue="Select your Region"
          className="select w-full"
          {...register('yourRegion', { required: 'Your Region is required' })}
        >
          <option disabled={true} value={''}>
            Select your Region
          </option>
          <option value={'crimson'}>Crimson</option>
          <option value={'amber'}>Amber</option>
          <option value={'velvet'}>Velvet</option>
        </select>
        {errors.yourRegion && (
          <p className="text-red-500">{errors.yourRegion.message}</p>
        )}
        <label className="label">Your District</label>
        <select
          defaultValue="Select your District"
          className="select w-full"
          {...register('yourDistrict', {
            required: 'Your District is required',
          })}
        >
          <option disabled={true} value={''}>
            Select your District
          </option>
          <option value={'crimson'}>Crimson</option>
          <option value={'amber'}>Amber</option>
          <option value={'velvet'}>Velvet</option>
        </select>
        {errors.yourDistrict && (
          <p className="text-red-500">{errors.yourDistrict.message}</p>
        )}

        <label className="label">NID No</label>
        <input
          {...register('nid', { required: 'NID is required' })}
          type="text"
          className="input w-full"
          placeholder="NID"
        />
        {errors.nid && <p className="text-red-500">{errors.nid.message}</p>}
        <label className="label">Phone Number</label>
        <input
          {...register('phone', { required: 'Phone Number is required' })}
          type="text"
          className="input w-full"
          placeholder="Phone Number"
        />
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
        <label className="label">Bike Brand Model and Year</label>
        <input
          {...register('bikeBrandModelAndYear', {
            required: 'Bike Brand Model and Year is required',
          })}
          type="text"
          className="input w-full"
          placeholder="Bike Brand Model and Year"
        />
        {errors.bikeBrandModelAndYear && (
          <p className="text-red-500">{errors.bikeBrandModelAndYear.message}</p>
        )}
        <label className="label">Bike Registration Number</label>
        <input
          {...register('bikeRegistrationNumber', {
            required: 'Bike Registration Number is required',
          })}
          type="text"
          className="input w-full"
          placeholder="Bike Registration Number"
        />
        {errors.bikeRegistrationNumber && (
          <p className="text-red-500">
            {errors.bikeRegistrationNumber.message}
          </p>
        )}

        <label className="label">Tell Us About Yourself</label>
        <input
          {...register('Yourself', {
            required: 'Tell Us About Yourself is required',
          })}
          type="text"
          className="input w-full"
          placeholder="Tell Us About Yourself"
        />
        {errors.Yourself && (
          <p className="text-red-500">{errors.Yourself.message}</p>
        )}

        <button className="btn  bg-[#CAEB66] mt-2">Submit</button>
      </form>
    </>
  );
}
