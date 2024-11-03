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
import { Link } from "react-router-dom";

function DetailMovie() {
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
      <div>
        <div className="flex relative w-full h-[415px]">
          <div class="banner">
            <img
              src={bannerp5}
              class="my_banner"
              alt=""
              className="object-cover w-screen h-[415px] object-right-top"
            />
          </div>
        </div>
        <div className="w-[264px] h-[405px] absolute top-[356px] left-[130px]">
          <img src={g2} alt="" />
        </div>
        <div className="pl-[413px] pt-6">
          <div className="text-3xl">Spider-Man: Homecoming</div>
          <div className="flex flex-row gap-2 pt-6">
            <div className="rounded-2xl border border-grey text-dark text-opacity-50 bg-grey px-3 flex justify-center items-center">
              Action
            </div>
            <div className="rounded-2xl border border-grey text-dark text-opacity-50 bg-grey px-3 flex justify-center items-center">
              Adventure
            </div>
          </div>
          <div className="flex flex-row py-4">
            <div>
              <div className="text-sm text-dark text-opacity-50 pr-28">
                Release Date
              </div>
              <div>June 28, 2017</div>
            </div>
            <div>
              <div className="text-sm text-dark text-opacity-50">
                Directed by
              </div>
              <div>Jon Watss</div>
            </div>
          </div>
          <div className="flex flex-row pb-12">
            <div className="pr-16">
              <div className="text-sm text-dark text-opacity-50">Duration</div>
              <div>2 hours 13 minutes </div>
            </div>
            <div>
              <div className="text-sm text-dark text-opacity-50">Casts</div>
              <div>Tom Holland, Michael Keaton, Robert Downey Jr</div>
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
          <div className="pt-14 text-3xl">Book Tickets</div>
          <div className="flex flex-row gap-8 pt-10 justify-between">
            <div>
              <div className="text-xl pb-3">Choose Date</div>
              <select id="time" class="w-72 h-14 bg-gray bg-opacity-10 px-6">
                <option selected>21/07/20</option>
                <option value="CA">22/07/20</option>
              </select>
            </div>
            <div>
              <div className="text-xl pb-3">Choose Time</div>
              <select id="time" class="w-72 h-14 bg-gray bg-opacity-10 px-6">
                <option selected>08 : 30 AM</option>
                <option value="CA">09 : 00 AM</option>
              </select>
            </div>
            <div>
              <div className="text-xl pb-3">Choose Location</div>
              <select id="time" class="w-72 h-14 bg-gray bg-opacity-10 px-6">
                <option selected>Purwokerto</option>
                <option value="CA">California</option>
              </select>
            </div>
            <div className="flex items-end">
              <div className="w-48 h-14 bg-blue text-white flex justify-center items-center">
                Filter
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-9 pt-10 pb-9">
            <div className="text-xl">Choose Cinema</div>
            <div className="text-lg text-dark text-opacity-60 justify-end">
              39 Result
            </div>
          </div>
          <div className="flex flex-row gap-4 justify-center pl-14">
            <div className="w-64 h-40 border border-dark border-opacity-20 rounded-lg">
              <div className="w-64 h-40 border rounded-lg flex justify-center items-center">
                <div>
                  <img src={ebv} alt="" className="w-52 h-20" />
                </div>
              </div>
            </div>
            <div className="w-64 h-40 border border-dark border-opacity-20 rounded-lg bg-blue">
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
          <div className="flex flex-row gap-x-5 pb-7 justify-center items-center pt-9">
            <div className="h-14 w-14 bg-blue rounded-lg">
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
          <div className="flex justify-center items-center pt-14 pb-6">
            <Link to="/seat-list">
              <button className=" w-48 h-14 bg-blue text-white rounded text-sm">
                Book Now
              </button>
            </Link>
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

export default DetailMovie;
