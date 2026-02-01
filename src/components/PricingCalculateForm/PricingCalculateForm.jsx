export default function PricingCalculateForm() {
  return (
    <>
      <form className="fieldset">
        <label className="label">Parcel type</label>
        <select defaultValue="Select Parcel type" className="select">
          <option disabled={true}>Select Parcel type</option>
          <option>Crimson</option>
          <option>Amber</option>
          <option>Velvet</option>
        </select>
        {/* {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )} */}
        <label className="label">Delivery Destination</label>
        <select defaultValue="Select Delivery Destination" className="select">
          <option disabled={true}>Select Delivery Destination</option>
          <option>Crimson</option>
          <option>Amber</option>
          <option>Velvet</option>
        </select>
        {/* {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )} */}
        <label className="label">Weight (KG)</label>
        <input
          // {...register('name', { required: 'Name is required' })}
          type="text"
          className="input "
          placeholder="Weight in KG"
        />
        {/* {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )} */}
        <div className="flex items-center gap-7">
          <button className="btn  border-[#8FA748] text-[#8FA748] mt-2 btn-outline">
            Reset
          </button>
          <button className="btn  bg-[#CAEB66] mt-2 w-52">Submit</button>
        </div>
      </form>
    </>
  );
}
