import React from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import star from "/src/assets/images/star.svg";
import { Link, useNavigate } from "react-router-dom";
import defpp from "/src/assets/images/defpp.png";
import { editUser } from "../redux/reducers/user";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import * as profileAction from "../redux/reducers/profile";
import Navbar from "../components/Navbar";

function Profile() {
  const token = useSelector((state) => state.auth.token);
  const profileData = useSelector((state) => state.profile.data);
  const passwordData = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profileFormSchema = yup.object({
    firstName: yup
      .string()
      .required("first name is required")
      .min(1, "first name cant be empty"),
    lastName: yup
      .string()
      .required("last name is required")
      .min(1, "last name cant be empty"),
    email: yup
      .string()
      .email("email is invalid")
      .min(8, "your email is must be 8 or more characters")
      .required("email is required"),
    phoneNumber: yup
      .number()
      .required("last name is required")
      .min(8, "not a valid phone number"),
    password: yup
      .string()
      .required("Please enter your password")
      .min(8, "password must contain at least 8 characters")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least one uppercase, one number and one special case character"
      ),
    confirmPassword: yup
      .string()
      .required("Please confirm your password")
      .oneOf([yup.ref("password"), null], "Password doesn't match."),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(profileFormSchema),
  });

  const onSubmit = (value) => {
    const formData = new FormData();

    const payload = {
      first_name: value.firstName,
      last_name: value.lastName,
      email: value.email,
      phone_number: value.phoneNumber,
      password: value.password,
    };

    Object.keys(payload).forEach((key) => {
      formData.append(key, payload[key]);
    });

    const headers = {};

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    fetch("http://localhost:8888/profiles", {
      method: "PATCH",
      body: formData,
      headers,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Profile updated:", data);
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });

    dispatch(editUser(payload));
    dispatch(profileAction.editProfile(payload));
    getProfile(token);

    const serializedState = JSON.stringify(payload);
    localStorage.setItem("user", serializedState);
  };

  async function getProfile(token) {
    const data = await (
      await fetch("http://localhost:8888/profiles", {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${token}`,
        },
      })
    ).json();
    console.log(data.results);
    dispatch(profileAction.setProfile(data.results));
  }

  React.useEffect(() => {
    if (token == "") {
      navigate("/login");
    } else {
      getProfile(token);
    }
  }, [token]);

  const allowed_ext = ["image/jpeg", "image/jpg", "image/png"];
  const [file, setFile] = React.useState(null);
  const formImage = useForm();

  const selectFile = (e) => {
    const selected = e.target.files[0];

    console.log(selected);
    if (selected.size > 2 * 1024 * 1024) {
      window.alert("file size too large");
      e.target.value = "";
      return;
    }

    if (!allowed_ext.includes(selected.type)) {
      window.alert("file extension is not supported");
      e.target.value = "";
    }

    setFile(selected);
  };

  const uploadImage = (e) => {
    const formData = new FormData();

    const payloadImage = {
      first_name: profileData.firstName,
      last_name: profileData.lastName,
      email: profileData.email,
      phone_number: profileData.phoneNumber,
      password: passwordData.password,
      image: e.image,
    };
    Object.keys(payloadImage).forEach((key) => {
      formData.append(key, payloadImage[key]);
    });

    if (file.name) {
      formData.append("image", file);
    }

    const headers = {};

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    fetch("http://localhost:8888/profiles", {
      method: "PATCH",
      body: formData,
      headers,
    })
      .then((response) => response.json())
      .then(() => {
        // console.log(data.results.image);
        // dispatch(profileAction.setProfile(data.results.image));
        getProfile(token);
      });
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div className="flex flex-row justify-center pt-6 pl-12 gap-14 md:hidden">
          <div>
            <div className="pb-6 text-lg">Details Account</div>
            <hr className="text-dark " />
          </div>
          <Link to="/history">
            <div className="text-dark text-opacity-40 text-lg">
              Order History
            </div>
          </Link>
        </div>
      </div>
      <div className="w-screen bg-background bg-opacity-20">
        <div className="flex flex-row gap-8 justify-center">
          <div className="flex pt-14">
            <div className="w-[328px] h-[783px] bg-white rounded-3xl">
              <div>
                <div className="flex flex-row justify-between px-10 pt-10">
                  <div>INFO</div>
                  <div>
                    <HiOutlineDotsHorizontal />
                  </div>
                </div>
                <div className="flex justify-center pt-8">
                  <form onSubmit={formImage.handleSubmit(uploadImage)}>
                    <div className="flex flex-col justify-center items-center gap-3">
                      <label className="w-32 h-32 bg-red rounded-full">
                        <img
                          src={
                            profileData.image
                              ? `http://localhost:8888/profiles/images/${profileData.image}`
                              : defpp
                          }
                          alt=""
                          className="w-32 h-32 bg-red rounded-full object-cover"
                        />
                        <input
                          id="image"
                          type="file"
                          onChange={selectFile}
                          className="hidden"
                        />
                      </label>
                      <button className="w-44 h-8 bg-dark flex justify-center items-center rounded-2xl text-white font-bold">
                        Update Photo
                      </button>
                    </div>
                  </form>
                </div>
                <div className="flex justify-center">
                  <div className="text-xl font-semibold pt-8">
                    {profileData.firstName ? profileData.firstName : ""}{" "}
                    {profileData.lastName ? profileData.lastName : ""}
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="text-sm text-gray pt-1">Moviegoers</div>
                </div>
                <div className="pt-10 text-dark text-opacity-20">
                  <hr />
                </div>
                <div className="flex pt-10 pl-10">
                  <div className="font-semibold">Loyalty Points</div>
                </div>
                <div className="flex justify-center pt-6">
                  <div className="bg-dark w-60 h-32 rounded-2xl flex">
                    <div className="flex flex-col justify-around pl-4 text-white">
                      <div className="flex flex-row w-56 justify-between items-center">
                        <div className="font-bold text-lg">Moviegoers</div>
                        <div>
                          <img src={star} alt="" />
                        </div>
                      </div>
                      <div className="flex flex-row gap-1 items-center">
                        <div className="text-2xl font-semibold">320</div>
                        <div className="text-xs">points</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center pt-8">
                  <div>180 points become a master</div>
                </div>
                <div className="flex justify-center pt-2">
                  <div className="bg-grey w-60 h-4 rounded-lg">
                    <div className="bg-dark w-32 h-4 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex gap-12 flex-col pt-14">
            <div className="bg-white w-[866px] h-20 rounded-2xl">
              <div className="flex flex-row pt-6 pl-12 gap-14">
                <div>
                  <div className="pb-6 text-lg">Account Settings</div>
                  <hr className="text-dark " />
                </div>
                <Link to="/history">
                  <div className="text-dark text-opacity-40 text-lg">
                    Order History
                  </div>
                </Link>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="bg-white w-[866px] h-[418px] rounded-3xl">
                <div className="px-8">
                  <div className="pt-10 pb-2">Detail Information</div>
                  <hr className="text-dark text-opacity-20" />
                  <div className="flex flex-col">
                    <div className="flex flex-row pt-12 gap-8">
                      <div className="flex flex-col">
                        <label className="flex pb-3">First Name</label>
                        <input
                          type="text"
                          className={
                            errors.firstName?.message
                              ? " w-96 h-16 border border-red rounded-2xl pl-6"
                              : " w-96 h-16 border border-dark border-opacity-20 rounded-2xl pl-6"
                          }
                          {...register("firstName")}
                          defaultValue={
                            profileData.firstName ? profileData.firstName : ""
                          }
                        />
                        {errors.firstName?.message && (
                          <span className="text-red">
                            {errors.firstName?.message}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col">
                        <label className="flex pb-3">Last Name</label>
                        <input
                          type="text"
                          className={
                            errors.lastName?.message
                              ? " w-96 h-16 border border-red rounded-2xl pl-6"
                              : " w-96 h-16 border border-dark border-opacity-20 rounded-2xl pl-6"
                          }
                          {...register("lastName")}
                          defaultValue={
                            profileData.lastName ? profileData.lastName : ""
                          }
                        />
                        {errors.lastName?.message && (
                          <span className="text-red">
                            {errors.lastName?.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-row pt-12 gap-8">
                      <div className="flex flex-col">
                        <label className="flex pb-3">Email</label>
                        <input
                          type="email"
                          className={
                            errors.email?.message
                              ? " w-96 h-16 border border-red rounded-2xl pl-6"
                              : " w-96 h-16 border border-dark border-opacity-20 rounded-2xl pl-6"
                          }
                          {...register("email")}
                          defaultValue={
                            profileData.email ? profileData.email : ""
                          }
                        />
                        {errors.email?.message && (
                          <span className="text-red">
                            {errors.email?.message}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col">
                        <label className="flex pb-3">Phone Number</label>
                        <div
                          className={
                            errors.phoneNumber?.message
                              ? " flex flex-row items-center border border-red rounded-2xl"
                              : " flex flex-row items-center border border-dark border-opacity-20 rounded-2xl"
                          }
                        >
                          <div className="border-r-[1px] pr-2 pl-6 text-dark text-opacity-50">
                            +62
                          </div>
                          <input
                            type="number"
                            className=" w-80 h-16 rounded-2xl pl-6"
                            {...register("phoneNumber")}
                            defaultValue={
                              profileData.phoneNumber
                                ? profileData.phoneNumber
                                : ""
                            }
                          />
                        </div>
                        {errors.phoneNumber?.message && (
                          <span className="text-red">
                            {errors.phoneNumber?.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex pt-5">
                <div className="bg-white w-[866px] h-72 rounded-3xl">
                  <div className="px-8">
                    <div className="pt-10 pb-2">Account and Privacy </div>
                    <hr className="text-dark text-opacity-20" />
                    <div className="flex flex-row pt-12 gap-8">
                      <div className="flex flex-col">
                        <label className="flex pb-3">New Password</label>
                        <input
                          type="password"
                          className={
                            errors.password?.message
                              ? " w-96 h-16 border border-red rounded-2xl pl-6"
                              : " w-96 h-16 border border-dark border-opacity-20 rounded-2xl pl-6"
                          }
                          {...register("password")}
                          placeholder="enter your password"
                          defaultValue={
                            passwordData.password ? passwordData.password : ""
                          }
                        />
                        {errors.password?.message && (
                          <span className="text-red">
                            {errors.password?.message}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col">
                        <label className="flex pb-3">Confirm Password</label>
                        <input
                          type="password"
                          className={
                            errors.confirmPassword?.message
                              ? " w-96 h-16 border border-red rounded-2xl pl-6"
                              : " w-96 h-16 border border-dark border-opacity-20 rounded-2xl pl-6"
                          }
                          {...register("confirmPassword")}
                          placeholder="Confirm your password"
                        />
                        {errors.confirmPassword?.message && (
                          <span className="text-red">
                            {errors.confirmPassword?.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-5">
                <button className="w-96 h-14 bg-dark flex justify-center items-center rounded-2xl text-white font-bold">
                  Update Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
