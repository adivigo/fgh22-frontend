import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { SlMagnifier } from "react-icons/sl";
import pp from "/src/assets/images/pp.png";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import star from "/src/assets/images/star.svg";

function Profile() {
  return (
    <div>
      <nav className="px-32 flex justify-between items-center h-24 shadow-lg">
        <div className="text-3xl">TixIT</div>
        <ul>
          <li className="flex gap-14 text-sm">
            <a href="#">Home</a>
            <a href="#">Movie</a>
            <a href="#">Buy Ticket</a>
          </li>
        </ul>
        <div className="flex gap-3 justify-center items-center">
          <div>Location</div>
          <div className="w-4 h-4 flex justify-center items-end">
            <RiArrowDropDownLine className="" />
          </div>
          <div>
            <SlMagnifier />
          </div>
          <div className="w-14 h-14 rounded-full bg-red">
            <img
              src={pp}
              alt=""
              className="w-14 h-14 rounded-full flex object-cover"
            />
          </div>
        </div>
      </nav>
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
                  <div className="w-32 h-32 bg-red rounded-full">
                    <img
                      src={pp}
                      alt=""
                      className="w-32 h-32 bg-red rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="text-xl font-semibold pt-8">
                    Jonas El Rodriguez
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
                  <div className="bg-blue w-60 h-32 rounded-2xl flex">
                    <div className="flex flex-col justify-between pl-4 text-white">
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
                    <div className="bg-blue w-32 h-4 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-12 flex-col pt-14">
            <div className="bg-white w-[866px] h-20 rounded-2xl">
              <div className="flex flex-row pt-6 pl-12 gap-14">
                <div>
                  <div className="pb-6 text-lg">Account Settings</div>
                  <hr className="text-blue " />
                </div>
                <div className="text-dark text-opacity-40 text-lg">
                  Order History
                </div>
              </div>
            </div>
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
                        className="w-96 h-16 border border-dark border-opacity-20 rounded-2xl pl-6"
                        placeholder="Jonaz"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="flex pb-3">Last Name</label>
                      <input
                        type="text"
                        className="w-96 h-16 border border-dark border-opacity-20 rounded-2xl pl-6"
                        placeholder="El Rodrigues"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row pt-12 gap-8">
                    <div className="flex flex-col">
                      <label className="flex pb-3">Email</label>
                      <input
                        type="email"
                        className="w-96 h-16 border border-dark border-opacity-20 rounded-2xl pl-6"
                        placeholder="jonasrodrigu123@gmail.com"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="flex pb-3">Phone Number</label>
                      <input
                        type="number"
                        className="w-96 h-16 border border-dark border-opacity-20 rounded-2xl pl-6"
                        placeholder="+62 | 81445687121"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white w-[866px] h-72 rounded-3xl">
              <div className="px-8">
                <div className="pt-10 pb-2">Account and Privacy </div>
                <hr className="text-dark text-opacity-20" />
                <div className="flex flex-row pt-12 gap-8">
                  <div className="flex flex-col">
                    <label className="flex pb-3">New Password</label>
                    <input
                      type="password"
                      className="w-96 h-16 border border-dark border-opacity-20 rounded-2xl pl-6"
                      placeholder="Write your password"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="flex pb-3">Confirm Password</label>
                    <input
                      type="password"
                      className="w-96 h-16 border border-dark border-opacity-20 rounded-2xl pl-6"
                      placeholder="Confirm your password"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="w-96 h-14 bg-blue flex justify-center items-center rounded-2xl text-white font-bold">
                Update Changes
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
