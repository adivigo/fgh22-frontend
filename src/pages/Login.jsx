import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import imageBg from "/src/assets/images/imagebg.png";
import logotickitz from "/src/assets/images/logotickitz.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { PiHandWavingLight } from "react-icons/pi";

function Login() {
  const [isAlert, setAlert] = React.useState(false);
  const [login, setLogin] = React.useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const obj = {};

    for (let [key, val] of form.entries()) {
      obj[key] = (obj[key], val);
      continue;
    }
    setLogin(obj);
    if (obj.email !== "admin@mail.com" || obj.password !== "1234") {
      setAlert(true);
    } else {
      window.location.replace("http://localhost:5173/");
    }
    console.log(login);
  }
  return (
    <div>
      <div className=" relative flex min-h-screen justify-center items-center bg-dark">
        <img
          src={imageBg}
          alt="imagebackground"
          className="w-full h-full object-cover absolute"
        />
        <div className="absolute top-16 w-72 h-24">
          <img src={logotickitz} alt="" />
        </div>
        <div className="absolute w-[546px] h-[739px] bg-white top-44 rounded-2xl">
          <form
            action=""
            className="flex flex-col justify-center content-center px-20"
            onSubmit={handleSubmit}
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
                    name="email"
                    placeholder="enter your Email"
                    className="w-96 h-16 border-gray border-opacity-30 bg-background bg-opacity-30 border pl-3 rounded-md"
                  ></input>
                </div>
              </div>
              <div className="flex flex-col pt-6 gap-3">
                <label htmlFor="password">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="enter your Password"
                  className="w-96 h-16 border-gray border-opacity-30 bg-background bg-opacity-30 border pl-3 rounded-md"
                ></input>
              </div>
              <div className="pt-6 flex flex-row justify-end">
                <Link to="" className="underline text-dark">
                  Forgot your password?
                </Link>
              </div>
              <div className="flex pt-6">
                <button className="w-96 h-16 bg-dark rounded-lg text-white">
                  Join For Free Now
                </button>
              </div>
              <br></br>
              <div className="flex flex-row justify-between items-center gap-3 ">
                <hr className="w-40 h-px my-4 bg-dark border-0 md:my-10" />
                <div>or</div>
                <hr className="w-40 h-px my-4 bg-dark border-0 md:my-10" />
              </div>
              <div className="flex flex-row justify-between ">
                <div className="flex flex-row items-center gap-6 shadow-xl w-44 h-16 justify-center">
                  <FcGoogle className="w-6 h-6" />
                  <button className="text-lg">Google</button>
                </div>
                <div className="flex flex-row items-center gap-6 shadow-xl w-44 h-16 justify-center">
                  <FaFacebook className="w-6 h-6" />
                  <button className="text-lg">Facebook</button>
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
