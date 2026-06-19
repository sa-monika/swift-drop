import React from "react";
import { useForm, useWatch } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useLoaderData, useNavigate } from "react-router";
import banner1 from "../../assets/banner1.png";
import Swal from "sweetalert2";
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

  const riderRegion = useWatch({ control, name: "region" });

  const districtByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  const handleRiderApplication = (data) => {
    console.log(data);
    axiosSecure.post("/riders", data).then((res) => {
      if (res.data.insertedId) {
        navigate("");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your Application has been submitted. We will reach out soon",
          showConfirmButton: false,
          timer: 2500,
        });
      }
    });
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
      <div className="flex justify-center items-center mx-auto shadow-xl border-1 border-gray-200  max-w-11/12 mb-20 rounded-md">
        {/* form  */}
        <div className="flex-1">
          <div>
            <form
              className="mt-12 p-4 space-y-8"
              onSubmit={handleSubmit(handleRiderApplication)}
            >
              <div className="p-5">
                <fieldset>
                  <h2 className="text-2xl font-bold text-secondary mb-4">
                    Tell us about yourself
                  </h2>
                  {/*  name  */}
                  <label className="label font-bold text-[16px]">
                    Your Name
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    defaultValue={user?.displayName}
                    className="input w-full"
                    placeholder="Your Name"
                  />
                  {/* email  */}
                  <label className="label font-bold text-[16px] mt-4">
                    Your Email
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    defaultValue={user?.email}
                    className="input w-full"
                    placeholder="Your Email"
                  />

                  {/* region */}

                  <fieldset className="fieldset mt-4">
                    <legend className="label  font-bold text-[16px]">
                      Your Region
                    </legend>
                    <select
                      {...register("region")}
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

                  {/* district */}
                  <fieldset className="fieldset mt-4">
                    <legend className="label  font-bold text-[16px]">
                      Your District
                    </legend>
                    <select
                      {...register("district")}
                      defaultValue="Pick a region"
                      className="select w-full"
                    >
                      <option disabled={true}>Pick a District</option>
                      {districtByRegion(riderRegion).map((d, i) => (
                        <option key={i} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </fieldset>

                  {/* address  */}
                  <label className="label font-bold text-[16px] mt-4">
                    Address
                  </label>
                  <input
                    type="text"
                    {...register("address", { required: true })}
                    className="input w-full"
                    placeholder="Your Address"
                  />

                  {/* license  */}
                  <label className="label font-bold text-[16px] mt-4">
                    Driving License Number
                  </label>
                  <input
                    type="number"
                    {...register("license", { required: true })}
                    className="input w-full"
                    placeholder="Driving License Number"
                  />
                  {/* NID */}
                  <label className="label font-bold text-[16px] mt-4">
                    NID No.
                  </label>
                  <input
                    type="number"
                    {...register("nid", { required: true })}
                    className="input w-full"
                    placeholder="NID"
                  />

                  {/* phone no.  */}
                  <label className="label font-bold text-[16px] mt-4">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    {...register("phoneNo", { required: true })}
                    className="input w-full"
                    placeholder="Your Phone Number"
                  />
                  {/* model and year */}
                  <label className="label font-bold text-[16px] mt-4">
                    Bike Brand Model and Year
                  </label>
                  <input
                    type="text"
                    {...register("modelYear", { required: true })}
                    className="input w-full"
                    placeholder="Bike Brand Model and Year"
                  />
                  {/*registration */}
                  <label className="label font-bold text-[16px] mt-4">
                    Bike Registration Number
                  </label>
                  <input
                    type="number"
                    {...register("regNum", { required: true })}
                    className="input w-full"
                    placeholder="Bike Registration Number"
                  />

                  {/* more  */}
                  <label className="label font-bold text-[16px] mt-4">
                    Tell us about yourself
                  </label>
                  <textarea
                    {...register("aboutYourself", { required: true })}
                    className="textarea w-full"
                    placeholder=""
                  ></textarea>
                </fieldset>
                <input
                  type="submit"
                  className="btn btn-primary text-black mt-5 w-full"
                  value="Apply as a Rider"
                />
              </div>
            </form>
          </div>
        </div>
        {/* image  */}
        <div>
          <img
            src={banner1}
            className="object-cover rounded-full w-100 h-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Rider;
