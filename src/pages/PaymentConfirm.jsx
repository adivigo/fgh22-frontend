import React from "react";
import logoTickitz from "/src/assets/images/tickitzfooter.png";
import ebv from "/src/assets/images/ebv.png";
import cineone from "/src/assets/images/cineone.png";
import hiflix from "/src/assets/images/hiflix.png";
import fb from "/src/assets/images/flogo.png";
import ig from "/src/assets/images/instalogo.png";
import tweet from "/src/assets/images/twitterlogo.png";
import youtube from "/src/assets/images/ytlogo.png";
import { IoMdCheckmark } from "react-icons/io";
import visa from "/src/assets/images/logos_visa.svg";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import defpp from "/src/assets/images/defpp.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { SlMagnifier } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../redux/reducers/auth";

function PaymentConfirm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const [isShow, setShow] = React.useState(false);
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
      <nav className="px-6 md:px-32 flex flex-row justify-between items-center h-24 shadow-lg">
        <div className="text-3xl">TixIT</div>
        <ul>
          <li className="hidden md:flex gap-14 text-sm">
            <Link to="/">Home</Link>
            <Link to="/list-movie">Movie</Link>
            <Link to="/detail-movie">Buy Ticket</Link>
          </li>
        </ul>
        <div className="hidden md:flex gap-3 justify-center items-center">
          <div>Location</div>
          <div className="w-4 h-4 flex justify-center items-end">
            <RiArrowDropDownLine className="" />
          </div>
          <div>
            <SlMagnifier />
          </div>
          <div className="w-14 h-14 rounded-full bg-red">
            <Link to="/profile">
              <img
                src={defpp}
                alt=""
                className="w-14 h-14 rounded-full flex object-cover"
              />
            </Link>
          </div>
          <button onClick={doLogout}>Logout</button>
        </div>
        <button className="md:hidden" onClick={() => setShow(!isShow)}>
          <GiHamburgerMenu />
        </button>
      </nav>
      {isShow && (
        <>
          <div className="w-screen flex flex-col justify-center items-center">
            <div className="h-12">Home</div>
            <div className="h-12">Movie</div>
            <div className="h-12">Buy Ticket</div>
            <div className="h-12">Sign In</div>
            <div className="h-12">SignUp</div>
          </div>
        </>
      )}
      <div className="bg-gray bg-opacity-10">
        <div className="hidden md:flex flex-row gap-6 justify-center pt-8">
          <div className="flex justify-center items-center flex-col">
            <div className="h-14 w-14 bg-green rounded-full">
              <div className="flex justify-center content-center pt-5 text-white">
                <IoMdCheckmark />
              </div>
            </div>
            <div className="flex text-center text-sm text-gray pt-2">
              Dates and Time
            </div>
          </div>
          <hr className="w-20 gap-6 h-px my-4 bg-dark-500 border-dashed md:my-10" />
          <div>
            <div className="h-14 w-14 bg-green rounded-full">
              <div className="flex justify-center content-center pt-5 text-white">
                <IoMdCheckmark />
              </div>
            </div>
            <div className="flex justify-center text-sm text-gray pt-2">
              Seat
            </div>
          </div>
          <hr className="w-20 gap-6 h-px my-4 bg-dark-500 border-dashed md:my-10" />
          <div>
            <div className="h-14 w-14 bg-dark rounded-full">
              <div className="flex justify-center content-center pt-5 text-white">
                3
              </div>
            </div>
            <div className="flex justify-center text-sm text-gray pt-2">
              payment
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-24 pt-8">
          <div className="bg-white rounded-2xl min-w-[327px] max-h-[1488]px md:w-[732px] md:h-[1375px]">
            <div className="px-9 pt-12">
              <div className="text-2xl font-bold">Payment Info</div>
              <div className="pb-2 pt-6 flex gap-3 flex-col">
                <div className="flex flex-col gap-2">
                  <div className="text-sm text-dark text-opacity-50 ">
                    DATE & TIME
                  </div>
                  <div className="pb-2">Tuesday, 07 July 2020 at 02:00pm</div>
                  <hr className="text-dark text-opacity-20 min-w-[275px]" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm text-dark text-opacity-50">
                    MOVIE TITLE
                  </div>
                  <div className="pb-2">Spider-Man: Homecoming</div>
                  <hr className="text-dark text-opacity-20" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm text-dark text-opacity-50">
                    CINEMA NAME
                  </div>
                  <div className="pb-2">CineOne21 Cinema</div>
                  <hr className="text-dark text-opacity-20" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm text-dark text-opacity-50">
                    NUMBER OF TICKETS
                  </div>
                  <div className="pb-2">3 pieces</div>
                  <hr className="text-dark text-opacity-20" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm text-dark text-opacity-50">
                    TOTAL PAYMENT
                  </div>
                  <div className="pb-2 text-dark font-bold">$30,00</div>
                  <hr className="text-dark text-opacity-20" />
                </div>
              </div>
              <div className="text-2xl font-bold pt-12">
                Personal Information
              </div>
              <div className="pt-5 flex flex-col gap-3">
                <div className="flex flex-col gap-3">
                  <div>Full Name</div>
                  <input
                    type="text"
                    placeholder="Jonas El Rodriguez"
                    className="min-w-[275px] md:w-[665px] h-16 pl-11 border border-dark border-opacity-20"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <div>Email</div>
                  <input
                    type="email"
                    placeholder="jonasrodri123@gmail.com"
                    className="min-w-[275px] md:w-[665px] h-16 pl-11 border border-dark border-opacity-20"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <div>Phone Number</div>
                  <input
                    type="text"
                    placeholder="+62 | 81445687121"
                    className="min-w-[275px] md:w-[665px] h-16 pl-11 border border-dark border-opacity-20"
                  />
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold pt-12">Payment Method</div>
                <div className="grid grid-cols-2 md:grid-cols-4 pt-8 gap-8">
                  <div className="w-[146px] h-14 rounded-lg flex justify-center items-center border border-dark border-opacity-20">
                    <div>
                      <img src={visa} alt="" />
                    </div>
                  </div>
                  <div className="w-[146px] h-14 rounded-lg flex justify-center items-center border border-dark border-opacity-20">
                    <div>
                      <img src={visa} alt="" />
                    </div>
                  </div>
                  <div className="w-[146px] h-14 rounded-lg flex justify-center items-center border border-dark border-opacity-20">
                    <div>
                      <img src={visa} alt="" />
                    </div>
                  </div>
                  <div className="w-[146px] h-14 rounded-lg flex justify-center items-center border border-dark border-opacity-20">
                    <div>
                      <img src={visa} alt="" />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 pt-8 gap-8">
                  <div className="w-[146px] h-14 rounded-lg flex justify-center items-center border border-dark border-opacity-20">
                    <div>
                      <img src={visa} alt="" />
                    </div>
                  </div>
                  <div className="w-[146px] h-14 rounded-lg flex justify-center items-center border border-dark border-opacity-20">
                    <div>
                      <img src={visa} alt="" />
                    </div>
                  </div>
                  <div className="w-[146px] h-14 rounded-lg flex justify-center items-center border border-dark border-opacity-20">
                    <div>
                      <img src={visa} alt="" />
                    </div>
                  </div>
                  <div className="w-[146px] h-14 rounded-lg flex justify-center items-center border border-dark border-opacity-20">
                    <div>
                      <img src={visa} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex pt-12 pb-16">
                <div className="flex justify-center items-center w-[665px] h-14 bg-dark rounded">
                  <Link to="/payment-confirm">
                    <button className="text-white min-w-[275px]">
                      Pay your order
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* dari sini */}
        <div className="w-screen bg-dark bg-opacity-40 absolute top-24 h-[1617px]">
          <div className="flex justify-center">
            <div className="w-[326px] h-[486px] md:w-[573px] md:h-[506px] bg-white rounded-lg flex flex-col absolute top-1/4 -translate-y-2/4">
              <div className="pt-6 flex flex-col px-3">
                <div className="flex justify-center">
                  <div className="text-2xl font-bold">Payment Info</div>
                </div>
                <div className="flex flex-col md:flex-row justify-between pt-8">
                  <div className="flex flex-row justify-start md:justify-center items-center">
                    <div className="text-sm text-dark text-opacity-40 pr-10 justify-end">
                      No. Rekening Virtual
                    </div>
                    <div>:</div>
                  </div>
                  <div className="flex flex-row justify-start md:justify-center items-center gap-5">
                    <div className="text-lg font-bold">12321328913829724</div>
                    <div>
                      <button className=" w-20 h-12 text-dark border border-dark rounded">
                        Copy
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between pt-2 md:pt-14">
                  <div className="flex flex-row justify-start md:justify-center items-center">
                    <div className="text-sm text-dark text-opacity-40 pr-20 justify-end">
                      Total Payment
                    </div>
                    <div>:</div>
                  </div>
                  <div className="flex flex-row justify-start md:justify-center items-center gap-5">
                    <div className="text-lg text-dark font-bold">$30</div>
                  </div>
                </div>
                <div className="pt-8 font-normal text-dark text-opacity-40">
                  Pay this payment bill before it is due,
                  <span className="text-red"> on June 23, 2023</span>. If the
                  bill has not been paid by the specified time, it will be
                  forfeited
                </div>
                <div className="items-center">
                  <div className=" pt-8 md:pt-14">
                    <Link to="/thankyou">
                      <button className="w-[302px] md:w-[545px] h-14 text-white bg-dark rounded font-bold">
                        Check Payment
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="pt-2">
                  <Link to="/payment">
                    <button className="w-[302px] md:w-[545px] h-14 text-dark bg-white rounded font-bold">
                      Pay Later
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* sampe sini */}
      </div>
      <footer className="px-6 md:px-32 pt-24">
        <div className="flex flex-col ">
          <div className="flex w-full py-3 px-11 flex-col md:flex-row md:justify-between gap-3 ">
            <div className="brand-footer gap-4">
              <img src={logoTickitz} alt="logo-tickitz" className="h-16 w-44" />
              <h6 className="max-w-72">
                Stop waiting in line. Buy tickets conveniently, watch movies
                quietly.
              </h6>
            </div>
            <div className="flex flex-col gap-3">
              <b className="pb-4">Explore</b>
              <div className="flex flex-row md:flex-col gap-10">
                <a className="cursor-pointer" href="">
                  Cinemas
                </a>
                <a className="cursor-pointer" href="">
                  Movie List
                </a>
                <a className="cursor-pointer" href="">
                  My ticket
                </a>
                <a className="cursor-pointer" href="">
                  Notification
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <b>Our Sponsor</b>
              <div className="flex flex-row md:flex-col gap-6">
                <img
                  className="w-[81px] h-[31px] md:w-1/3"
                  src={ebv}
                  alt="logo-sponsor"
                />
                <img
                  className="w-[81px] h-[31px] md:w-1/3"
                  src={cineone}
                  alt="logo-sponsor"
                />
                <img
                  className="w-[81px] h-[31px] md:w-1/3"
                  src={hiflix}
                  alt="logo-sponsor"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <b>Follow us</b>
              <div className="flex sm:flex-row sm:justify-start gap-5 lg:flex-col">
                <a className="flex items-center">
                  <img src={fb} alt="icon" />
                  <h6 className="hidden lg:flex">Tickitz Cinema</h6>
                </a>
                <a className="flex items-center">
                  <img src={ig} alt="icon" />
                  <h6 className="hidden lg:flex pl-1">tickitz.id</h6>
                </a>
                <a className="flex items-center">
                  <img src={tweet} alt="icon" />
                  <h6 className="hidden lg:flex pl-3">tickitz.id</h6>
                </a>
                <a className="flex items-center">
                  <img src={youtube} alt="icon" />
                  <h6 className="hidden lg:flex pl-1">Tickitz Cinema</h6>
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            © 2020 Tickitz. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PaymentConfirm;
