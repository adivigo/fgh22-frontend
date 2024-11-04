import React from "react";
import { Link } from "react-router-dom";
import imageBg from "/src/assets/images/imagebg.png";
import logotickitz from "/src/assets/images/logotickitz.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";

function Register() {
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
        <div className="absolute w-[546px] bg-white top-44 rounded-2xl">
          <form
            action=""
            className="flex flex-col justify-center content-center px-20"
          >
            <div>
              <div className="flex flex-col pt-9">
                <div className="flex flex-row gap-6">
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
                  <hr class="w-20 gap-6 h-px my-4 bg-dark-500 border-dashed md:my-10" />
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
                  <hr class="w-20 gap-6 h-px my-4 bg-dark-500 border-dashed md:my-10" />
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
                <div className="flex flex-col gap-3">
                  <label for="email">
                    <b className="flex pt-10">Email</b>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="enter your Email"
                    className="w-96 h-16 border-gray border-opacity-30 bg-background bg-opacity-20 rounded border pl-3"
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
                  className="w-96 h-16 border-gray border-opacity-30 bg-background bg-opacity-20 rounded border pl-3"
                ></input>
              </div>
              <div className="pt-6 flex flex-row">
                <input type="checkbox" id="agree" name="agree"></input>
                <label htmlFor="agree">
                  <div className="flex pl-4">
                    I agree to term and conditions
                  </div>
                </label>
              </div>
              <div className="flex pt-6">
                <button className="w-96 h-16 bg-dark rounded-lg text-white">
                  Join For Free Now
                </button>
              </div>
              <br></br>
              <span>
                already have an account?{" "}
                <Link to="/login" className="underline text-blue">
                  Log in
                </Link>
              </span>
              <div className="flex flex-row justify-between items-center gap-3 ">
                <hr class="w-40 h-px my-4 bg-dark border-0 md:my-10" />
                <div>or</div>
                <hr class="w-40 h-px my-4 bg-dark border-0 md:my-10" />
              </div>
              <div className="flex flex-row justify-between pb-7 ">
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

export default Register;
