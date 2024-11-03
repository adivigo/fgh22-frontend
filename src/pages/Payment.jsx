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
import { Link } from "react-router-dom";

function Payment() {
  const [isShow, setShow] = React.useState(false);
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
        <div className="flex gap-3 text-sm">
          <a
            href="#"
            className="px-4 py-3 bg-white rounded-lg text-black border border-gray"
          >
            SignIn
          </a>
          <a
            href="#"
            className="px-4 py-3 bg-gray rounded-lg text-white border border-gray"
          >
            Sign Up
          </a>
        </div>
      </nav>
      <div className="bg-gray bg-opacity-10">
        <div className="flex flex-row gap-6 justify-center pt-8">
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
          <hr class="w-20 gap-6 h-px my-4 bg-dark-500 border-dashed md:my-10" />
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
          <hr class="w-20 gap-6 h-px my-4 bg-dark-500 border-dashed md:my-10" />
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
          <div className="bg-white w-[732px] h-[1375px]">
            <div className="px-9 pt-12">
              <div className="text-2xl font-bold">Payment Info</div>
              <div className="pb-2 pt-6 flex gap-3 flex-col">
                <div className="flex flex-col gap-2">
                  <div className="text-sm text-dark text-opacity-50">
                    DATE & TIME
                  </div>
                  <div className="pb-2">Tuesday, 07 July 2020 at 02:00pm</div>
                  <hr className="text-dark text-opacity-20" />
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
              <div className="text-2xl font-bold pt-12">Payment Info</div>
              <div className="pt-5 flex flex-col gap-3">
                <div className="flex flex-col gap-3">
                  <div>Full Name</div>
                  <input
                    type="text"
                    placeholder="Jonas El Rodriguez"
                    className="w-[665px] h-16 pl-11 border border-dark border-opacity-20"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <div>Email</div>
                  <input
                    type="email"
                    placeholder="jonasrodri123@gmail.com"
                    className="w-[665px] h-16 pl-11 border border-dark border-opacity-20"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <div>Phone Number</div>
                  <input
                    type="text"
                    placeholder="+62 | 81445687121"
                    className="w-[665px] h-16 pl-11 border border-dark border-opacity-20"
                  />
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold pt-12">Payment Method</div>
                <div className="grid grid-cols-4 pt-8">
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
                <div className="grid grid-cols-4 pt-8">
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
              <div className="flex pt-12">
                <div className="flex justify-center items-center w-[665px] h-14 bg-dark rounded">
                  <Link to="/payment-confirm">
                    <button className="text-white">Pay your order</button>
                  </Link>
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

export default Payment;
