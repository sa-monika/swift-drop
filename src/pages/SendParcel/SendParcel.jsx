import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router";

const SendParcel = () => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();
  const serviceCenters = useLoaderData();
  const regionsDuplicate = serviceCenters.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];
  console.log(regions);

  const senderRegion = watch("senderRegion");

  const districtByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  const handleSendParcel = (data) => {
    console.log(data);
  };
  return (
    <div className="max-w-11/12 mx-auto">
      <h2 className="text-5xl font-semibold text-center text-primary my-10">
        Send Parcel
      </h2>

      <form
        className="mt-12 p-4 space-y-8"
        onSubmit={handleSubmit(handleSendParcel)}
      >
        {/* parcel type  */}
        <div>
          <label className="label mr-4">
            <input
              type="radio"
              {...register("parcelType")}
              className="radio radio-primary"
              defaultChecked
              value="document"
            />
            Document
          </label>
          <label className="label">
            <input
              type="radio"
              {...register("parcelType")}
              className="radio radio-primary"
              defaultChecked
              value="non-document"
            />
            Non-document
          </label>
        </div>

        {/* parcel info : name ,weight  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          {/*parcel name  */}
          <fieldset>
            <label className="label font-bold text-[16px]">Parcel Name</label>
            <input
              type="text"
              {...register("parcelName", { required: true })}
              className="input w-full"
              placeholder="Parcel Name"
            />
          </fieldset>
          {/*parcel weight   */}
          <fieldset>
            <label className="label font-bold text-[16px]">Parcel Weight</label>
            <input
              type="number"
              {...register("parcelWeight", { required: true })}
              className="input w-full"
              placeholder="Parcel Weight"
            />
          </fieldset>
        </div>

        {/* two column  */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* sender info  */}
          <div>
            <fieldset>
              <h2 className="text-2xl font-bold text-secondary mb-4">
                Sender Details
              </h2>
              {/* sender name  */}
              <label className="label font-bold text-[16px]">Sender Name</label>
              <input
                type="text"
                {...register("senderName", { required: true })}
                className="input w-full"
                placeholder="Sender Name"
              />
              {/* sender email  */}
              <label className="label font-bold text-[16px] mt-4">
                Sender Email
              </label>
              <input
                type="email"
                {...register("senderEmail", { required: true })}
                className="input w-full"
                placeholder="Sender Email"
              />

              {/* sender region */}

              <fieldset className="fieldset mt-4">
                <legend className="label  font-bold text-[16px]">
                  Sender Region
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
              {/* sender district  */}

              <label className="label font-bold text-[16px] mt-4">
                Sender District
              </label>
              <input
                type="text"
                {...register("senderDistrict", { required: true })}
                className="input w-full"
                placeholder="Sender District"
              />

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
                Sender Phone No.
              </label>
              <input
                type="number"
                {...register("senderPhoneNo", { required: true })}
                className="input w-full"
                placeholder="Sender Phone No."
              />
              {/* Your district  */}
              <label className="label font-bold text-[16px] mt-4">
                Your District
              </label>

              <input
                type="text"
                {...register("yourDistrict", { required: true })}
                className="input w-full"
                placeholder="Your District"
              />
              {/* pickup instructions  */}
              <label className="label font-bold text-[16px] mt-4">
                Pickup Instructions
              </label>
              <textarea
                {...register("pickupInstructions", { required: true })}
                className="textarea w-full"
                placeholder="Pickup Instructions"
              ></textarea>
            </fieldset>
          </div>

          {/* receiver info  */}
          <div>
            <fieldset>
              <h2 className="text-2xl font-bold text-secondary mb-4">
                Receiver Details
              </h2>
              {/* Receiver name  */}
              <label className="label font-bold text-[16px]">
                Receiver Name
              </label>
              <input
                type="text"
                {...register("receiverName", { required: true })}
                className="input w-full"
                placeholder="Receiver Name"
              />
              {/* Receiver email */}
              <label className="label font-bold text-[16px] mt-4">
                Receiver Email
              </label>
              <input
                type="email"
                {...register("receiverEmail", { required: true })}
                className="input w-full"
                placeholder="Receiver Email"
              />

              {/* Receiver address  */}
              <label className="label font-bold text-[16px] mt-4">
                Receiver Address
              </label>
              <input
                type="text"
                {...register("receiverAddress", { required: true })}
                className="input w-full"
                placeholder="Receiver Address"
              />
              {/* Receiver district  */}
              <label className="label font-bold text-[16px] mt-4">
                Receiver District
              </label>
              <input
                type="text"
                {...register("receiverDistrict", { required: true })}
                className="input w-full"
                placeholder="Receiver District"
              />
              {/* Receiver phone no.  */}
              <label className="label font-bold text-[16px] mt-4">
                Receiver Phone No.
              </label>
              <input
                type="number"
                {...register("receiverPhoneNo", { required: true })}
                className="input w-full"
                placeholder="Receiver Phone No."
              />
              {/* Your district  */}
              <label className="label font-bold text-[16px] mt-4">
                Your District
              </label>

              <input
                type="text"
                {...register("yourDistrict", { required: true })}
                className="input w-full"
                placeholder="Your District"
              />
              {/* pickup instructions  */}
              <label className="label font-bold text-[16px] mt-4">
                Pickup Instructions
              </label>
              <textarea
                {...register("pickupInstructions", { required: true })}
                className="textarea w-full"
                placeholder="Pickup Instructions"
              ></textarea>
            </fieldset>
          </div>
        </div>
        <input
          type="submit"
          value="Send Parcel"
          className="btn btn-primary text-black"
        />
      </form>
    </div>
  );
};

export default SendParcel;
