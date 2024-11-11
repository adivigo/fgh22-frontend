import React from "react";
import logoTickitz from "/src/assets/images/tickitzfooter.png";
import ebv from "/src/assets/images/ebv.png";
import cineone from "/src/assets/images/cineone.png";
import hiflix from "/src/assets/images/hiflix.png";
import fb from "/src/assets/images/flogo.png";
import ig from "/src/assets/images/instalogo.png";
import tweet from "/src/assets/images/twitterlogo.png";
import youtube from "/src/assets/images/ytlogo.png";
import tycover from "/src/assets/images/thankyoucover.svg";
import { FiDownload } from "react-icons/fi";
import logocover from "/src/assets/images/logotickitz.png";
import { FaArrowRightLong } from "react-icons/fa6";
import qr from "/src/assets/images/qr.svg";
import defpp from "/src/assets/images/defpp.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowDownLong } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { SlMagnifier } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../redux/reducers/auth";
import { Link, useNavigate } from "react-router-dom";

function Thankyou() {
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
            <a href="#">Home</a>
            <a href="#">Movie</a>
            <a href="#">Buy Ticket</a>
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
      <div className="flex flex-row bg-gray bg-opacity-20">
        <div className="w-screen flex flex-col md:flex-row justify-center">
          <div className="relative">
            <img src={tycover} alt="" />
            <div className="min-w-[767px] min-h-[882px] absolute md:min-w-[800px] md:min-h-[920px] bg-dark top-0 bg-opacity-85"></div>
            <div className="absolute top-60 left-24 md:top-72 md:left-36 text-white">
              <div className="flex justify-center items-center md:justify-start md:items-start text-center md:text-start gap-6 flex-col">
                <img
                  src={logocover}
                  alt=""
                  className="w-[127px] h-12 md:w-72 md:h-28"
                />
                <div className="text-5xl font-bold">
                  Thankyou For Purchasing
                </div>
                <div className="text-2xl w-[571px]">
                  Lorem ipsum dolor sit amet consectetur. Quam pretium pretium
                  tempor integer sed magna et.
                </div>
                <div className="flex flex-col md:flex-row gap-6 text-center items-center">
                  <div className="text-lg">Please Download Your Ticket</div>
                  <div className="hidden md:block">
                    <FaArrowRightLong />
                  </div>
                  <div className="block md:hidden">
                    <FaArrowDownLong />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-screen md:w-[669px] pt-24">
            <div className="flex flex-col items-center justify-center">
              <div className="w-[295px] h-[635px] bg-white">
                <div>
                  <div className="flex justify-center pt-8">
                    <img src={qr} alt="" />
                  </div>
                  <div className="flex flex-row items-center pt-10">
                    <div className="w-4 h-8 bg-gray bg-opacity-20 rounded-tr-full rounded-br-full"></div>
                    <hr className="w-[263px] border-dashed" />
                    <div className="w-4 h-8 bg-gray bg-opacity-20 rounded-tl-full rounded-bl-full"></div>
                  </div>
                  <div className="flex flex-row pt-12 justify-around">
                    <div className="flex gap-6 flex-col">
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
                    <div className="flex gap-6 flex-col">
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
                  </div>
                  <div className="flex justify-center pt-10">
                    <div className="w-[247px] h-12 flex flex-row justify-around items-center border border-dark border-opacity-40">
                      <div>Total</div>
                      <div>$30.00</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex pt-6">
                <div className="w-[357px] h-14 flex flex-row gap-6 text-dark justify-center items-center border border-dark rounded-md">
                  <div>
                    <FiDownload className="w-6 h-6" />
                  </div>
                  <div className="font-bold">Download</div>
                </div>
              </div>
              <div className="pb-14 md:pb-0 pt-2">
                <div className="w-[357px] h-14 flex flex-row gap-6 text-white bg-dark justify-center items-center border border-dark rounded-md font-bold">
                  Done
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="px-32 pt-24 h-439px">
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
            <div className="flex flex-col gap-6">
              <b>Our Sponsor</b>
              <img className="w-1/3" src={ebv} alt="logo-sponsor" />
              <img className="w-1/3" src={cineone} alt="logo-sponsor" />
              <img className="w-1/3" src={hiflix} alt="logo-sponsor" />
            </div>
            <div className="flex flex-col gap-3">
              <b>Follow us</b>
              <div className="flex sm:flex-row sm:justify-center gap-5 lg:flex-col">
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
          <div className="flex justify-center pt-12">
            © 2020 Tickitz. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Thankyou;
