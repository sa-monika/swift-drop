import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/UseAuth";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { registerUser, updateUserProfile } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handleRegistration = (data) => {
    // console.log(data);

    const profileImg = data.photo[0];
    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);

        // store the image in formData

        const formData = new FormData();
        formData.append("image", profileImg);

        // send the photo to store and get the url

        const image_API_Url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host}`;

        axios.post(image_API_Url, formData).then((res) => {
          console.log("after image upload", res.data.data.url);

          // update user profile to firebase

          const userProfile = {
            displayName: data.name,
            photoURL: res.data.data.url,
          };

          // in firebase
          updateUserProfile(userProfile)
            .then(() => {
              console.log("user profile updated");
              navigate(location.state || "/");
            })
            .catch((error) => {
              console.log(error);
            });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="max-w-11/12 mx-auto p-8">
      <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
        <div className="card-body">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold">Create an Account</h1>
            <p className="text-[16px] text-gray-500">Register to SwiftDrop</p>
          </div>
          <form onSubmit={handleSubmit(handleRegistration)}>
            <fieldset className="fieldset">
              {/* photo  */}
              <label className="label font-bold text-[16px]">Photo</label>
              <input
                type="file"
                {...register("photo", { required: true })}
                className="file-input w-full"
                placeholder="Your Photo"
              />
              {errors.photo?.type === "required" && (
                <p className="text-red-500 text-sm ">Photo is required.</p>
              )}
              {/* name  */}
              <label className="label font-bold text-[16px]">Name</label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="input w-full"
                placeholder="Your Name"
              />
              {errors.name?.type === "required" && (
                <p className="text-red-500 text-sm ">Name is required.</p>
              )}
              {/* email  */}
              <label className="label font-bold text-[16px]">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="input w-full"
                placeholder="Email"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500 text-sm ">Email is required.</p>
              )}
              {/* password  */}
              <label className="label font-bold text-[16px]">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                })}
                className="input w-full"
                placeholder="Password"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500 text-sm ">Password is required.</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500 text-sm ">
                  Password must be 6 character or longer.
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-500 text-sm ">
                  Password must have at least one uppercase, one lowercase and
                  one number.
                </p>
              )}
              <div>
                <a className="link link-hover text-[16px] text-gray-500">
                  Forgot password?
                </a>
              </div>
              <button className="btn btn-primary text-white mt-4">
                Register
              </button>
            </fieldset>
            <p className="text-gray-400  my-3">
              Already have an account?{" "}
              <Link
                className="text-primary link-hover"
                to="/login"
                state={location.state}
              >
                Login
              </Link>
            </p>
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Register;
