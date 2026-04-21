import React from "react";
import { useForm } from "react-hook-form";

const SendParcel = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleSendParcel = (data) => {
    console.log(data);
  };
  return (
    <div className="max-w-11/12 mx-auto">
      <h2 className="text-5xl font-semibold text-center text-primary my-10">
        Send Parcel
      </h2>

      <form className="mt-12 p-4" onSubmit={handleSubmit(handleSendParcel)}>
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
        <div></div>
        {/* two column  */}
        <div className="flex justify-between items-center">
          {/* sender info  */}
          <div>
            <h2>Sender Details</h2>
          </div>

          {/* receiver info  */}
          <div>
            <h2>Receiver Details</h2>
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
