import React from "react";
import { useForm, useWatch } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useLoaderData, useNavigate } from "react-router";

const Rider = () => {
  const {
    handleSubmit,
    register,
    control,
    // formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const serviceCenters = useLoaderData();
  const navigate = useNavigate();
  const regionsDuplicate = serviceCenters.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];

  const senderRegion = useWatch({ control, name: "senderRegion" });

  const districtByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  const handleRiderApplication = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-11/12 mx-auto">
      <h2 className="text-5xl font-semibold text-center text-primary mt-10 mb-3">
        Be a Rider
      </h2>
      <p className="text-[18px] text-gray-500 mb-10 max-w-[700px] text-center mx-auto">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>
      <form
        className="mt-12 p-4 space-y-8"
        onSubmit={handleSubmit(handleRiderApplication)}
      >
        <div>
          <fieldset>
            <h2 className="text-2xl font-bold text-secondary mb-4">
              Tell us about yourself
            </h2>
            {/* sender name  */}
            <label className="label font-bold text-[16px]">Your Name</label>
            <input
              type="text"
              {...register("yourName", { required: true })}
              defaultValue={user?.displayName}
              className="input w-full"
              placeholder="Sender Name"
            />
            {/* sender email  */}
            <label className="label font-bold text-[16px] mt-4">
              Your Email
            </label>
            <input
              type="email"
              {...register("senderEmail", { required: true })}
              defaultValue={user?.email}
              className="input w-full"
              placeholder="Sender Email"
            />

            {/* sender region */}

            <fieldset className="fieldset mt-4">
              <legend className="label  font-bold text-[16px]">
                Your Region
              </legend>
              <select
                {...register("senderRegion")}
                defaultValue="Pick a region"
                className="select w-full"
              >
                <option disabled={true}>Pick a region</option>
                {regions.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* sender district */}
            <fieldset className="fieldset mt-4">
              <legend className="label  font-bold text-[16px]">
                Your District
              </legend>
              <select
                {...register("senderDistrict")}
                defaultValue="Pick a region"
                className="select w-full"
              >
                <option disabled={true}>Pick a District</option>
                {districtByRegion(senderRegion).map((d, i) => (
                  <option key={i} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* sender address  */}
            <label className="label font-bold text-[16px] mt-4">
              Sender Address
            </label>
            <input
              type="text"
              {...register("senderAddress", { required: true })}
              className="input w-full"
              placeholder="Sender Address"
            />

            {/* sender phone no.  */}
            <label className="label font-bold text-[16px] mt-4">
              Phone Number
            </label>
            <input
              type="number"
              {...register("senderPhoneNo", { required: true })}
              className="input w-full"
              placeholder="Sender Phone No."
            />

            {/* pickup instructions  */}
            <label className="label font-bold text-[16px] mt-4">
              Tell us about yourself
            </label>
            <textarea
              {...register("pickupInstructions", { required: true })}
              className="textarea w-full"
              placeholder="Pickup Instructions"
            ></textarea>
          </fieldset>
        </div>
      </form>
    </div>
  );
};

export default Rider;
