import React from "react";
import { Link } from "react-router-dom";
import imageBg from "/src/assets/images/imagebg.png";
import logotickitz from "/src/assets/images/logotickitz.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { PiHandWavingLight } from "react-icons/pi";

function Login() {
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
        <div className="absolute w-[546px] h-[709px] bg-white top-44 rounded-2xl">
          <form
            action=""
            className="flex flex-col justify-center content-center px-20"
          >
            <div>
              <div className="flex flex-col pt-9">
                <div className="flex flex-row">
                  <div className="text-3xl">Welcome back </div>
                  <PiHandWavingLight className="text-3xl" />
                </div>
                <div className="text-gray flex pt-8 text-lg">
                  Sign in with your data that you entered during your
                  registration
                </div>
                <label for="email">
                  <b className="flex pt-12">Email</b>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="enter your Email"
                  className="w-96 h-16 border-grey border pl-3"
                ></input>
              </div>
              <div className="flex flex-col pt-6">
                <label for="password">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="enter your Password"
                  className="w-96 h-16 border-grey border pl-3"
                ></input>
              </div>
              <div className="pt-6 flex flex-row justify-end">
                <Link to="/login" className="underline text-blue">
                  Forgot your password?
                </Link>
              </div>
              <div className="flex pt-6">
                <button className="w-96 h-16 bg-blue rounded-lg text-white">
                  Join For Free Now
                </button>
              </div>
              <br></br>
              <div className="flex flex-row justify-between items-center gap-3 ">
                <hr class="w-40 h-px my-4 bg-dark border-0 md:my-10" />
                <div>or</div>
                <hr class="w-40 h-px my-4 bg-dark border-0 md:my-10" />
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
