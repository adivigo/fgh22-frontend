import React from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import star from "/src/assets/images/star.svg";
import cineone from "/src/assets/images/cineone.png";
import { FaChevronDown } from "react-icons/fa";
import ebv from "/src/assets/images/ebv.png";
import { FaChevronUp } from "react-icons/fa";
import qr from "/src/assets/images/qr.svg";
import { Link, useNavigate } from "react-router-dom";
import defpp from "/src/assets/images/defpp.png";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../redux/reducers/auth";
import Navbar from "../components/Navbar";
import { useForm } from "react-hook-form";

function OrderHistory() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.profile.data);
  const token = useSelector((state) => state.auth.token);
  const [isShow, setShow] = React.useState(false);
  const [isShow2, setShow2] = React.useState(false);
  const [isShow3, setShow3] = React.useState(false);
  const formImage = useForm();

  const doLogout = (e) => {
    e.preventDefault();
    dispatch(loginAction(""));
  };
  React.useEffect(() => {
    if (token == "") {
      navigate("/login");
    }
  }, [token]);
  return (
    <div>
      <div>
        <Navbar />
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
                    </label>
                    <div className="flex justify-center">
                      <div className="text-xl font-semibold pt-8">
                        {profileData.firstName ? profileData.firstName : ""}{" "}
                        {profileData.lastName ? profileData.lastName : ""}
                      </div>
                    </div>
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
          <div className="flex gap-12 flex-col pt-14">
            <div className="bg-white w-[866px] h-20 rounded-2xl">
              <div className="flex flex-row pt-6 pl-12 gap-14">
                <div>
                  <Link to="/profile">
                    <div className="text-dark text-opacity-40 text-lg">
                      Account Settings
                    </div>
                  </Link>
                </div>
                <div>
                  <div className="pb-6 text-lg">Order History</div>
                  <hr className="text-dark " />
                </div>
              </div>
            </div>
            <div className="w-[866px] bg-white rounded-3xl">
              <div>
                <div className="flex flex-row justify-between items-center px-12 py-10">
                  <div>
                    <div className="text-sm text-dark text-opacity-30">
                      Tuesday, 07 July 2020 - 04:30pm
                    </div>
                    <div className="text-2xl font-semibold">
                      Spider-Man: Homecoming
                    </div>
                  </div>
                  <div className="w-40 h-16 flex justify-center items-center">
                    <div className="flex items-center justify-center">
                      <img
                        src={cineone}
                        alt=""
                        className="w-[122px] h-[22px]"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <hr className="text-dark text-opacity-20" />
                </div>
                <div className="flex flex-row justify-between px-12 py-8">
                  <div className="flex flex-row gap-4">
                    <div className="w-[198px] h-10 text-green bg-green bg-opacity-10 text-sm rounded-lg">
                      <div className="flex justify-center pt-2">
                        Ticket in Active
                      </div>
                    </div>
                    <div className="w-[198px] h-10 text-red bg-red bg-opacity-10 text-sm rounded-lg">
                      <div className="flex justify-center pt-2">Not Paid</div>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-row items-center gap-4 text-dark text-opacity-40">
                      <div>Show Detail</div>
                      <button
                        className="flex items-center"
                        onClick={() => setShow(!isShow)}
                      >
                        {isShow && <FaChevronDown />}
                        {!isShow && <FaChevronUp />}
                      </button>
                    </div>
                  </div>
                </div>
                {isShow && (
                  <>
                    <div className="flex flex-col px-12">
                      <div className="text-lg">Ticket Information</div>
                      <div className="flex flex-row justify-between pt-8">
                        <div className="flex flex-row justify-center items-center">
                          <div className="text-sm text-dark text-opacity-40 pr-10 justify-end">
                            No. Rekening Virtual
                          </div>
                          <div>:</div>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-5">
                          <div className="text-lg font-bold">
                            12321328913829724
                          </div>
                          <div>
                            <button className=" w-20 h-12 text-dark border border-dark rounded">
                              Copy
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-between pt-3">
                        <div className="flex flex-row justify-center items-center">
                          <div className="text-sm text-dark text-opacity-40 pr-20 justify-end">
                            Total Payment
                          </div>
                          <div>:</div>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-5">
                          <div className="text-lg text-dark font-bold">$30</div>
                        </div>
                      </div>
                      <div className="pt-3 font-normal text-dark text-opacity-40">
                        Pay this payment bill before it is due,
                        <span className="text-red"> on June 23, 2023</span>. If
                        the bill has not been paid by the specified time, it
                        will be forfeited
                      </div>
                      <div className="pt-3 pb-9">
                        <button className="w-[191px] h-12 text-white bg-dark rounded font-bold">
                          Check Pembayaran
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="w-[866px] bg-white rounded-3xl">
              <div>
                <div className="flex flex-row justify-between items-center px-12 py-10">
                  <div>
                    <div className="text-sm text-dark text-opacity-30">
                      Monday, 14 June 2020 - 02:00pm
                    </div>
                    <div className="text-2xl font-semibold">
                      Avengers: End Game
                    </div>
                  </div>
                  <div className="w-40 h-16 flex justify-center items-center">
                    <div className="flex items-center justify-center">
                      <img src={ebv} alt="" className="w-[122px] h-[46px]" />
                    </div>
                  </div>
                </div>
                <div>
                  <hr className="text-dark text-opacity-20" />
                </div>
                <div className="flex flex-row justify-between px-12 py-8">
                  <div className="flex flex-row gap-4">
                    <div className="w-[198px] h-10 text-gray bg-gray bg-opacity-10 text-sm rounded-lg">
                      <div className="flex justify-center pt-2">
                        Ticket Used
                      </div>
                    </div>
                    <div className="w-[198px] h-10 text-dark bg-dark bg-opacity-10 text-sm rounded-lg">
                      <div className="flex justify-center pt-2">Paid</div>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-row items-center gap-4 text-dark text-opacity-40">
                      <div>Show Detail</div>
                      <div>
                        <button
                          className="flex items-center"
                          onClick={() => setShow2(!isShow2)}
                        >
                          {isShow2 && <FaChevronDown />}
                          {!isShow2 && <FaChevronUp />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {isShow2 && (
                  <div>
                    <div className=" px-12 text-lg">Ticket Information</div>
                    <div className="flex flex-row">
                      <div className="flex px-12 pt-8">
                        <img src={qr} alt="" />
                      </div>
                      <div className="flex flex-col pt-20 gap-5">
                        <div className="flex gap-6 flex-row">
                          <div>
                            <div className="text-xs text-dark text-opacity-40">
                              Category
                            </div>
                            <div className="text-sm ">PG-13</div>
                          </div>
                          <div>
                            <div className="text-xs text-dark text-opacity-40">
                              Time
                            </div>
                            <div className="text-sm ">2:00pm</div>
                          </div>
                          <div>
                            <div className="text-xs text-dark text-opacity-40">
                              Seats
                            </div>
                            <div className="text-sm ">C4, C5, C6</div>
                          </div>
                        </div>
                        <div className="flex gap-6 flex-row">
                          <div>
                            <div className="text-xs text-dark text-opacity-40">
                              Movie
                            </div>
                            <div className="text-sm ">Spider-Man: ..</div>
                          </div>
                          <div>
                            <div className="text-xs text-dark text-opacity-40">
                              Date
                            </div>
                            <div className="text-sm ">07 Jul</div>
                          </div>
                          <div>
                            <div className="text-xs text-dark text-opacity-40">
                              Count
                            </div>
                            <div className="text-sm ">3 pcs</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center items-center pt-10">
                        <div className="w-[247px] h-12 flex flex-col justify-around items-center">
                          <div>Total</div>
                          <div className="text-2xl">$30.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* batas */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderHistory;
