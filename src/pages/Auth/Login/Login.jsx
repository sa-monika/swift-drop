import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/UseAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signInUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (data) => {
    console.log(data);
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="max-w-11/12 mx-auto p-8">
      <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSubmit(handleLogin)}>
            <fieldset className="fieldset">
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
              {/* password */}
              <label className="label font-bold text-[16px]">Password</label>
              <input
                type="password"
                {...register("password", { required: true })}
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
              <button className="btn btn-primary text-white mt-4">Login</button>
            </fieldset>
            <p className="text-gray-400  my-3">
              Don't have any account?{" "}
              <Link
                className="text-primary link-hover"
                to="/register"
                state={location.state}
              >
                Register
              </Link>
            </p>
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
