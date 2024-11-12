import React from "react";
import { Link, useNavigate } from "react-router-dom";
import imageBg from "/src/assets/images/imagebg.png";
import logotickitz from "/src/assets/images/logotickitz.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { PiHandWavingLight } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../redux/reducers/auth";
import { setProfile } from "../redux/reducers/profile";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Login() {
  const [isAlert, setAlert] = React.useState(false);
  const cekUser = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginFormSchema = yup.object({
    email: yup
      .string()
      .email("email is invalid")
      .min(8, "your email is must be 8 or more characters")
      .required("email is required"),
    password: yup
      .string()
      .required("Please enter your password")
      .min(8, "password must contain at least 8 characters")
      .required("password is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginFormSchema),
  });

  const onSubmit = (value) => {
    const email = value.email;
    const password = value.password;
    const found = cekUser?.find((e) => e.email === value.email);
    if (!found || found.password !== password) {
      setAlert(true);
      return;
    }
    dispatch(loginAction("abc"));
    dispatch(setProfile({ firstName, lastName, email, phoneNumber, password }));
  };
  React.useEffect(() => {
    if (token !== "") {
      navigate("/profile");
    }
  }, [token]);
  return (
    <div>
      <div className=" relative flex min-h-screen justify-center items-center bg-dark">
        <img
          src={imageBg}
          alt="imagebackground"
          className="w-full h-full object-cover relative"
        />
        <div className="absolute top-14 w-[85px] h-8 md:top-16 md:w-72 md:h-24">
          <img src={logotickitz} alt="" />
        </div>
        <div className="absolute w-[326px] top-36 md:w-[546px] bg-white md:top-44 rounded-2xl">
          <form
            action=""
            className="flex flex-col justify-center content-center px-5 md:px-20"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <div className="flex flex-col pt-9">
                <div className="flex flex-row">
                  <div className="text-3xl">Welcome back </div>
                  <PiHandWavingLight className="text-3xl" />
                </div>
                <div className="text-gray text-opacity-50 flex pt-6 text-lg">
                  Sign in with your data that you entered during your
                  registration
                </div>
                {isAlert && (
                  <div className="flex justify-center bg-red text-white rounded-md">
                    Wrong email or password
                  </div>
                )}
                <div className="flex flex-col gap-3">
                  <label htmlFor="email">
                    <b className="flex pt-6">Email</b>
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    placeholder="enter your Email"
                    className={
                      errors.email?.message
                        ? " w-[284px] h-[50px] md:w-96 md:h-16 border-red border-opacity-30 bg-background bg-opacity-20 rounded border pl-3"
                        : " w-[284px] h-[50px] md:w-96 md:h-16 border-gray border-opacity-30 bg-background bg-opacity-20 rounded border pl-3"
                    }
                  ></input>
                  {errors.email?.message && (
                    <span className="text-red">{errors.email?.message}</span>
                  )}
                </div>
              </div>
              <div className="flex flex-col pt-6 gap-3">
                <label htmlFor="password">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  id="password"
                  {...register("password")}
                  placeholder="enter your Password"
                  className={
                    errors.password?.message
                      ? " w-[284px] h-[50px] md:w-96 md:h-16 border-red border-opacity-30 bg-background bg-opacity-20 rounded border pl-3"
                      : " w-[284px] h-[50px] md:w-96 md:h-16 border-gray border-opacity-30 bg-background bg-opacity-20 rounded border pl-3"
                  }
                ></input>
                {errors.password?.message && (
                  <span className="text-red">{errors.password?.message}</span>
                )}
              </div>
              <div className="pt-6 flex flex-row justify-end">
                <Link to="" className="underline text-blue">
                  Forgot your password?
                </Link>
              </div>
              <div className="flex pt-6">
                <button className="w-[284px] h-[50px] md:w-96 md:h-16 border-gray border-opacity-30 bg-dark text-white rounded border">
                  Login
                </button>
              </div>
              <span className="flex justify-center md:justify-start pt-5">
                Dont have an account?{" "}
                <Link to="/register" className="underline text-blue">
                  Register
                </Link>
              </span>
              <br></br>
              <div className="flex flex-row justify-between items-center gap-3 ">
                <hr className="w-40 h-px my-4 bg-grey border-0 md:my-10" />
                <div>or</div>
                <hr className="w-40 h-px my-4 bg-grey border-0 md:my-10" />
              </div>
              <div className="flex flex-row justify-center gap-8 md:justify-between pb-7 ">
                <div className="flex flex-row items-center gap-6 shadow-xl w-16 md:w-44 h-16 justify-center">
                  <FcGoogle className="w-6 h-6" />
                  <button className="hidden md:block text-lg">Google</button>
                </div>
                <div className="flex flex-row items-center gap-6 shadow-xl w-16 md:w-44 h-16 justify-center">
                  <FaFacebook className="w-6 h-6" />
                  <button className="hidden md:block text-lg">Facebook</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
