import React from "react";
import { Link, useNavigate } from "react-router-dom";
import imageBg from "/src/assets/images/imagebg.png";
import logotickitz from "/src/assets/images/logotickitz.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/reducers/user";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Register() {
  const [isAlert, setAlert] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cekUser = useSelector((state) => state.user.user);
  const registerFormSchema = yup.object({
    email: yup
      .string()
      .email("email is invalid")
      .min(8, "your email is must be 8 or more characters")
      .required("email is required"),
    password: yup
      .string()
      .required("Please enter your password")
      .min(8, "password must contain at least 8 characters")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least one uppercase, one number and one special case character"
      ),
    "agree-tos": yup
      .string()
      .required()
      .is(["true"], "you have to agree to our ToS"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerFormSchema),
  });

  const onSubmit = (e) => {
    const email = e.email;
    const password = e.password;
    const queryString = new URLSearchParams(e);
    const qs = queryString.toString();
    console.log(qs);
    fetch("http://localhost:8888/auth/register", {
      method: "POST",
      body: qs,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    const found = cekUser?.find((e) => e.email === email);
    if (!found) {
      dispatch(addUser({ email, password }));
      navigate("/login");
      return;
    }
    setAlert(true);
  };

  return (
    <div>
      <div className="relative flex min-h-screen justify-center items-center bg-dark">
        <img
          src={imageBg}
          alt="imagebackground"
          className="w-full h-full object-cover relative"
        />
        <div className="absolute top-14 w-[85px] h-8 md:top-16 md:w-72 md:h-24">
          <img src={logotickitz} alt="" className="h-full w-full" />
        </div>
        <div className="absolute w-[326px] top-36 md:w-[546px] bg-white md:top-44 rounded-2xl">
          <form
            onSubmit={handleSubmit(onSubmit)}
            action=""
            className="flex flex-col justify-center content-center px-5 md:px-20"
          >
            <div>
              <div className="flex flex-col pt-9">
                <div className="hidden md:flex flex-row gap-6">
                  <div>
                    <div className="h-14 w-14 bg-dark rounded-full">
                      <div className="flex justify-center content-center pt-5 text-white">
                        1
                      </div>
                    </div>
                    <div className="flex text-center text-sm text-gray pt-2">
                      Fill Form
                    </div>
                  </div>
                  <hr className="w-20 gap-6 h-px my-4 bg-dark-500 border-dashed" />
                  <div>
                    <div className="h-14 w-14 bg-grey rounded-full">
                      <div className="flex justify-center content-center pt-5 text-dark">
                        2
                      </div>
                    </div>
                    <div className="flex justify-center text-sm text-gray pt-2">
                      Activate
                    </div>
                  </div>
                  <hr className="w-20 gap-6 h-px my-4 bg-dark-500 border-dashed" />
                  <div>
                    <div className="h-14 w-14 bg-grey rounded-full">
                      <div className="flex justify-center content-center pt-5 text-dark">
                        3
                      </div>
                    </div>
                    <div className="flex justify-center text-sm text-gray pt-2">
                      Done
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pt-5">
                  {isAlert && (
                    <div className="flex justify-center">
                      <div className="bg-red text-center text-white mt-10 w-40 rounded-md">
                        email sudah terdaftar
                      </div>
                    </div>
                  )}
                  <label htmlFor="email">
                    <b className="flex">Email</b>
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
              <div className="hidden pt-6 md:flex flex-col">
                <div className="flex flex-row gap-2">
                  <input
                    type="checkbox"
                    value="true"
                    {...register("agree-tos")}
                  />
                  <label>I agree Term of Services</label>
                </div>
                {errors["agree-tos"]?.message && (
                  <span className="text-red">
                    {errors["agree-tos"]?.message}
                  </span>
                )}
              </div>
              <div className="flex pt-6">
                <button className="w-[284px] h-[50px] md:w-96 md:h-16 bg-dark rounded-lg text-white">
                  Join For Free Now
                </button>
              </div>
              <br></br>
              <span className="flex justify-center md:justify-start">
                already have an account?{" "}
                <Link to="/login" className="underline text-blue">
                  Log in
                </Link>
              </span>
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

export default Register;
