import React from "react";
import logoTickitz from "/src/assets/images/tickitzfooter.png";
import ebv from "/src/assets/images/ebv.png";
import cineone from "/src/assets/images/cineone.png";
import hiflix from "/src/assets/images/hiflix.png";
import fb from "/src/assets/images/flogo.png";
import ig from "/src/assets/images/instalogo.png";
import tweet from "/src/assets/images/twitterlogo.png";
import youtube from "/src/assets/images/ytlogo.png";
import bannerp5 from "/src/assets/images/g2.svg";
import g2 from "/src/assets/images/g2.png";
import hiflixp6 from "/src/assets/images/hiflixp6.svg";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import defpp from "/src/assets/images/defpp.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { SlMagnifier } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../redux/reducers/auth";

function DetailMovie() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const [isNav, setNav] = React.useState(false);
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
            <img
              src={defpp}
              alt=""
              className="w-14 h-14 rounded-full flex object-cover"
            />
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
      <div>
        <div className="flex relative h-[475px] w-full md:h-[415px]">
          <div class="banner">
            <img
              src={bannerp5}
              class="my_banner"
              alt=""
              className="object-cover w-screen h-[415px] object-right-top"
            />
          </div>
        </div>
        <div className="w-[327px] h-[502px] md:w-[264px] md:h-[405px] absolute top-[402px] left-[170px] md:top-[356px] md:left-[130px]">
          <img src={g2} alt="" />
        </div>
        <div className="flex justify-center flex-col pt-52 text-center md:text-start md:pl-[413px] md:pt-6">
          <div className="text-3xl">Spider-Man: Homecoming</div>
          <div className="flex flex-row gap-2 pt-6 justify-center md:justify-start">
            <div className="rounded-2xl border border-grey text-dark text-opacity-50 bg-grey px-3 flex justify-center items-center">
              Action
            </div>
            <div className="rounded-2xl border border-grey text-dark text-opacity-50 bg-grey px-3 flex justify-center items-center">
              Adventure
            </div>
          </div>
          <div className="flex flex-row py-4 justify-around md:justify-start">
            <div>
              <div className="text-sm text-dark text-opacity-50 md:pr-28 text-start">
                Release Date
              </div>
              <div className="text-start">June 28, 2017</div>
            </div>
            <div>
              <div className="text-sm text-dark text-opacity-50">
                Directed by
              </div>
              <div>Jon Watss</div>
            </div>
          </div>
          <div className="flex flex-row pb-12 justify-evenly md:justify-start">
            <div className="md:pr-16">
              <div className="text-sm text-dark text-opacity-50 text-start">
                Duration
              </div>
              <div className="">2 hours 13 minutes </div>
            </div>
            <div>
              <div className="text-sm text-dark text-opacity-50 text-start">
                Casts
              </div>
              <div className="flex flex-wrap max-w-[153px] text-star0 md:max-w-96">
                Tom Holland, Michael Keaton, Robert Downey Jr
              </div>
            </div>
          </div>
        </div>
        <div className="px-32">
          <div>
            <div className="text-xl pb-1">Synopsis</div>
            <div className="max-w-[821px] text-gray text-opacity-50">
              Thrilled by his experience with the Avengers, Peter returns home,
              where he lives with his Aunt May, under the watchful eye of his
              new mentor Tony Stark, Peter tries to fall back into his normal
              daily routine - distracted by thoughts of proving himself to be
              more than just your friendly neighborhood Spider-Man - but when
              the Vulture emerges as a new villain, everything that Peter holds
              most important will be threatened.
            </div>
          </div>
          <div className="hidden md:block pt-14 text-3xl">Book Tickets</div>
          <div className="block text-center md:hidden pt-14 text-3xl">
            Showtimes and Tickets
          </div>
          <div className="flex flex-col md:flex-row gap-8 pt-10 justify-center items-center md:items-start md:justify-between">
            <div>
              <div className="hidden md:block text-xl pb-3">Choose Date</div>
              <select
                id="time"
                class="w-[327px] md:w-72 h-14 bg-gray bg-opacity-10 px-6"
              >
                <option selected>21/07/20</option>
                <option value="CA">22/07/20</option>
              </select>
            </div>
            <div className="hidden md:block">
              <div className="htext-xl pb-3">Choose Time</div>
              <select id="time" class="w-72 h-14 bg-gray bg-opacity-10 px-6">
                <option selected>08 : 30 AM</option>
                <option value="CA">09 : 00 AM</option>
              </select>
            </div>
            <div>
              <div className="hidden md:block text-xl pb-3">
                Choose Location
              </div>
              <select
                id="time"
                class="w-[327px] md:w-72 h-14 bg-gray bg-opacity-10 px-6"
              >
                <option selected>Purwokerto</option>
                <option value="CA">California</option>
              </select>
            </div>
            <div className="flex items-end">
              <div className="w-[327px] md:w-48 h-14 bg-dark text-white flex justify-center items-center">
                Filter
              </div>
            </div>
          </div>
          <div className="flex justify-center md:justify-start flex-row gap-9 pt-3 md:pt-10 pb-9">
            <div className="hidden md:block text-xl">Choose Cinema</div>
            <div className="text-lg text-dark text-opacity-60 justify-end">
              39 Result
            </div>
          </div>
          <div className="hidden md:flex flex-row gap-4 justify-center pl-14">
            <div className="w-64 h-40 border border-dark border-opacity-20 rounded-lg">
              <div className="w-64 h-40 border rounded-lg flex justify-center items-center">
                <div>
                  <img src={ebv} alt="" className="w-52 h-20" />
                </div>
              </div>
            </div>
            <div className="w-64 h-40 border border-dark border-opacity-20 rounded-lg bg-dark">
              <div className="w-64 h-40 border rounded-lg flex justify-center items-center">
                <div>
                  <img src={hiflixp6} alt="" className="w-52 h-10" />
                </div>
              </div>
            </div>
            <div className="w-64 h-40 rounded-lg">
              <div className="w-64 h-40 border rounded-lg flex justify-center items-center">
                <div>
                  <img src={cineone} alt="" className="w-56 h-8" />
                </div>
              </div>
            </div>
            <div className="w-64 h-40 border border-dark border-opacity-20 rounded-lg">
              <div className="w-64 h-40 border rounded-lg flex justify-center items-center">
                <div>
                  <img src={ebv} alt="" className="w-52 h-20" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:hidden flex-col justify-center items-center gap-12">
            <div className="w-[327px] border border-dark border-opacity-30 rounded-xl">
              <div className="flex flex-row justify-between pb-5 pt-8 px-8">
                <div className="">
                  <div className="w-[112px] h-[45px]">
                    <img src={ebv} alt="" />
                  </div>
                  <div className="text-2xl">EBV.id</div>
                  <div className="text-xs text-dark text-opacity-50 w-[207px]">
                    Whatever street No.12, South Purwokerto
                  </div>
                </div>
                <button
                  className="flex items-center"
                  onClick={() => setShow(!isShow)}
                >
                  {isShow && <FaChevronUp className="w-4 h-4" />}
                  {!isShow && <FaChevronDown className="w-4 h-4" />}
                </button>
              </div>
              {isShow && (
                <>
                  <div className="px-8">
                    <hr />
                  </div>
                  <div className="px-8">
                    <div className="text-xl pt-5">REGULAR</div>
                    <div className="grid grid-cols-2 gap-2 pt-7 ">
                      <div className="bg-background bg-opacity-20 rounded-2xl w-[88px] h-[31px] text-center pt-1">
                        10.30 AM
                      </div>
                      <div className="bg-background bg-opacity-20 rounded-2xl w-[88px] h-[31px] text-center pt-1">
                        10.30 AM
                      </div>
                      <div className="bg-background bg-opacity-20 rounded-2xl w-[88px] h-[31px] text-center pt-1">
                        10.30 AM
                      </div>
                      <div className="bg-background bg-opacity-20 rounded-2xl w-[88px] h-[31px] text-center pt-1">
                        10.30 AM
                      </div>
                      <div className="bg-background bg-opacity-20 rounded-2xl w-[88px] h-[31px] text-center pt-1">
                        10.30 AM
                      </div>
                      <div className="bg-background bg-opacity-20 rounded-2xl w-[88px] h-[31px] text-center pt-1">
                        10.30 AM
                      </div>
                      <div className="bg-background bg-opacity-20 rounded-2xl w-[88px] h-[31px] text-center pt-1">
                        10.30 AM
                      </div>
                    </div>
                  </div>
                  <div className="px-8">
                    <div className="text-xl pt-5">GOLD</div>
                    <div className="grid grid-cols-2 gap-2 pt-7 ">
                      <div className="bg-background bg-opacity-20 rounded-2xl w-[88px] h-[31px] text-center pt-1">
                        10.30 AM
                      </div>
                      <div className="bg-background bg-opacity-20 rounded-2xl w-[88px] h-[31px] text-center pt-1">
                        10.30 AM
                      </div>
                      <div className="bg-background bg-opacity-20 rounded-2xl w-[88px] h-[31px] text-center pt-1">
                        10.30 AM
                      </div>
                      <div className="bg-background bg-opacity-20 rounded-2xl w-[88px] h-[31px] text-center pt-1">
                        10.30 AM
                      </div>
                      <div className="bg-background bg-opacity-20 rounded-2xl w-[88px] h-[31px] text-center pt-1">
                        10.30 AM
                      </div>
                      <div className="bg-background bg-opacity-20 rounded-2xl w-[88px] h-[31px] text-center pt-1">
                        10.30 AM
                      </div>
                      <div className="bg-background bg-opacity-20 rounded-2xl w-[88px] h-[31px] text-center pt-1">
                        10.30 AM
                      </div>
                    </div>
                  </div>
                  <div className="px-8">
                    <div className="text-xl pt-5">PLATINUM S</div>
                    <div className="grid grid-cols-2 gap-2 pt-7 pb-10">
                      <div className="bg-background bg-opacity-20 rounded-2xl w-[88px] h-[31px] text-center pt-1">
                        10.30 AM
                      </div>
                      <div className="bg-background bg-opacity-20 rounded-2xl w-[88px] h-[31px] text-center pt-1">
                        10.30 AM
                      </div>
                      <div className="bg-background bg-opacity-20 rounded-2xl w-[88px] h-[31px] text-center pt-1">
                        10.30 AM
                      </div>
                      <div className="bg-background bg-opacity-20 rounded-2xl w-[88px] h-[31px] text-center pt-1">
                        10.30 AM
                      </div>
                      <div className="bg-background bg-opacity-20 rounded-2xl w-[88px] h-[31px] text-center pt-1">
                        10.30 AM
                      </div>
                      <div className="bg-background bg-opacity-20 rounded-2xl w-[88px] h-[31px] text-center pt-1">
                        10.30 AM
                      </div>
                      <div className="bg-background bg-opacity-20 rounded-2xl w-[88px] h-[31px] text-center pt-1">
                        10.30 AM
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div></div>
            <div className="w-[327px] h-[187px] border border-dark border-opacity-30 rounded-xl">
              <div className="flex flex-row justify-between pt-8 px-8">
                <div className="flex flex-col">
                  <div className="w-[112px] h-[22px]">
                    <img src={hiflix} alt="" />
                  </div>
                  <div className="text-2xl pt-4">Hiflix Cinema</div>
                  <div className="text-xs text-dark text-opacity-50 w-[207px]">
                    Whatever street No.12, South Purwokerto
                  </div>
                </div>
                <div className="flex items-center">
                  <FaChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>
            <div className="w-[327px] h-[187px] border border-dark border-opacity-30 rounded-xl">
              <div className="flex flex-row justify-between pt-8 px-8">
                <div className="">
                  <div className="w-[112px] h-[14px]">
                    <img src={cineone} alt="" />
                  </div>
                  <div className="text-2xl pt-4">Cineone 21</div>
                  <div className="text-xs text-dark text-opacity-50 w-[207px]">
                    Whatever street No.12, South Purwokerto
                  </div>
                </div>
                <div className="flex items-center">
                  <FaChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-x-5 pb-7 justify-center items-center pt-9">
            <div className="h-14 w-14 bg-dark rounded-lg">
              <div className="flex justify-center content-center pt-4 text-white text-lg">
                1
              </div>
            </div>
            <div className="h-14 w-14 border border-dark border-opacity-20 rounded-lg">
              <div className="flex justify-center content-center pt-4 text-lg">
                2
              </div>
            </div>
            <div className="h-14 w-14 border border-dark border-opacity-20 rounded-lg">
              <div className="flex justify-center content-center pt-4 text-lg">
                3
              </div>
            </div>
            <div className="h-14 w-14 border border-dark border-opacity-20 rounded-lg">
              <div className="flex justify-center content-center pt-4 text-lg">
                4
              </div>
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center pt-14 pb-6">
            <Link to="/seat-list">
              <button className=" w-48 h-14 bg-dark text-white rounded text-sm">
                Book Now
              </button>
            </Link>
          </div>
        </div>
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

export default DetailMovie;
