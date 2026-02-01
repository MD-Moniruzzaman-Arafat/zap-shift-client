export default function BeaRiderForm() {
  return (
    <>
      <form className="fieldset">
        <label className="label">Your Name</label>
        <input
          // {...register('name', { required: 'Name is required' })}
          type="text"
          className="input w-full"
          placeholder="your Name"
        />
        {/* {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )} */}
        <label className="label">Driving License Number</label>
        <input
          // {...register('name', { required: 'Name is required' })}
          type="text"
          className="input w-full"
          placeholder="Driving License Number"
        />
        {/* {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )} */}
        <label className="label">Your Email</label>
        <input
          // {...register('name', { required: 'Name is required' })}
          type="text"
          className="input w-full"
          placeholder="Your Email"
        />
        {/* {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )} */}
        <label className="label">Your Region</label>
        <select defaultValue="Select your Region" className="select w-full">
          <option disabled={true}>Select your Region</option>
          <option>Crimson</option>
          <option>Amber</option>
          <option>Velvet</option>
        </select>
        {/* {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )} */}
        <label className="label">Your District</label>
        <select defaultValue="Select your District" className="select w-full">
          <option disabled={true}>Select your District</option>
          <option>Crimson</option>
          <option>Amber</option>
          <option>Velvet</option>
        </select>
        {/* {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )} */}
        <label className="label">NID No</label>
        <input
          // {...register('name', { required: 'Name is required' })}
          type="text"
          className="input w-full"
          placeholder="NID"
        />
        {/* {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )} */}
        <label className="label">Phone Number</label>
        <input
          // {...register('name', { required: 'Name is required' })}
          type="text"
          className="input w-full"
          placeholder="Phone Number"
        />
        {/* {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )} */}
        <label className="label">Bike Brand Model and Year</label>
        <input
          // {...register('name', { required: 'Name is required' })}
          type="text"
          className="input w-full"
          placeholder="Bike Brand Model and Year"
        />
        {/* {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )} */}
        <label className="label">Bike Registration Number</label>
        <input
          // {...register('name', { required: 'Name is required' })}
          type="text"
          className="input w-full"
          placeholder="Bike Registration Number"
        />
        {/* {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )} */}

        <label className="label">Tell Us About Yourself</label>
        <input
          // {...register('email', {
          //   required: 'Email is required',
          //   pattern: {
          //     value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          //     message: 'Invalid email address',
          //   },
          // })}
          type="text"
          className="input w-full"
          placeholder="Tell Us About Yourself"
        />
        {/* {errors.email && (
                <p style={{ color: 'red' }}>{errors.email.message}</p>
              )} */}

        <button className="btn  bg-[#CAEB66] mt-2">Submit</button>
      </form>
    </>
  );
}
