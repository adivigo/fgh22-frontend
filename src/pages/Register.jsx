import React from "react";
import imageBg from "/src/assets/images/imagebg.png";
import logotickitz from "/src/assets/images/logotickitz.png";

function Register() {
  return (
    <div>
      <div className=" relative flex min-h-screen justify-center items-center bg-dark">
        <img
          src={imageBg}
          alt="imagebackground"
          className="w-full h-full object-cover absolute"
        />
        <div className="absolute">
          <img src={logotickitz} alt="" />
        </div>
        <div className="absolute w-[546px] h-[756px] bg-white">
          <form action=""></form>
        </div>
      </div>
    </div>
  );
}

export default Register;
