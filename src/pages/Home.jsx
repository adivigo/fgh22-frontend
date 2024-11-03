import React from "react";
import gc from "/src/assets/images/gc.png";
import dw from "/src/assets/images/dw.jpg";
import frieren from "/src/assets/images/frieren.png";
import penguin from "/src/assets/images/penguin.jpg";
import logoTickitz from "/src/assets/images/tickitzfooter.png";
import ebv from "/src/assets/images/ebv.png";
import cineone from "/src/assets/images/cineone.png";
import hiflix from "/src/assets/images/hiflix.png";
import fb from "/src/assets/images/flogo.png";
import ig from "/src/assets/images/instalogo.png";
import tweet from "/src/assets/images/twitterlogo.png";
import youtube from "/src/assets/images/ytlogo.png";
import shieldLogo from "/src/assets/images/shieldlogo.png";
import chatLogo from "/src/assets/images/chatLogo.png";
import checkLogo from "/src/assets/images/checkLogo.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
  const MovieCard = (props) => {
    return (
      <div className="flex flex-col gap-5">
        <div className="group w-[284px] h-[405px] bg-red rounded-xl overflow-hidden">
          <img
            src={props.data.image}
            alt=""
            className="group w-[284px] h-[405px] rounded-xl overflow-hidden absolute"
          />
          <div className="w-full h-full bg-dark bg-opacity-70 invisible group-hover:visible flex flex-col justify-center items-center gap-2 relative">
            <Link
              to="/detail-movie"
              className="text-white bg-dark bg-opacity-70 inline-block py-2 px-20 border-white border rounded"
            >
              Detail
            </Link>
            <Link
              to="/seat-list"
              className="text-white bg-blue inline-block py-2 px-16 border-blue border rounded"
            >
              Buy Ticket
            </Link>
          </div>
        </div>
        <div className="text-xl font-normal">{props.data.title}</div>
        <div className="flex flex-row gap-2">
          <div className="text-gray bg-grey p-1 border-1 border-grey rounded-lg">
            Action
          </div>
          <div className="text-gray bg-grey p-1 border-1 border-grey rounded-lg">
            Adventure
          </div>
        </div>
      </div>
    );
  };
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
      <div className="px-32 flex flex-col">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2 pt-28 flex-1">
            <div className="text-lg text-blue">
              MOVIE TICKET PURCHASES #1 IN INDONESIA
            </div>
            <div className="text-5xl max-w-2xl">
              Experience the Magic of Cinema: Book Your Tickets Today
            </div>
            <div className="text-secondary">
              Sign up and get the ticket with a lot of discount
            </div>
          </div>
          <div className="flex flex-1 pt-14 justify-center gap-x-3">
            <div className="grid grid-rows-2 gap-4 h-[300px] w-[250px]">
              <div className="flex h-[300px] w-[250px]">
                <img
                  src={dw}
                  alt="g1"
                  className="object-cover h-[300px] w-[250px] rounded-t-3xl"
                />
              </div>
              <div className="flex w-[250px] h-[400px] pt-40">
                <img
                  src={gc}
                  alt="g2"
                  className="object-cover w-[250px] h-[400px] rounded-b-3xl"
                />
              </div>
            </div>
            <div className="grid grid-rows-2 gap-y-4">
              <img
                src={frieren}
                alt="g3"
                className="object-cover w-[250px] h-[400px] rounded-t-3xl"
              />
              <img
                src={penguin}
                alt="g4"
                className="object-cover h-[300px] w-[250px] rounded-b-3xl object-bottom"
              />
            </div>
          </div>
        </div>
        <div className="pb-20">
          <div className="text-lg text-blue pt-28">WHY CHOOSE US</div>
          <div className="text-3xl max-w-lg pt-3.5">
            Unleashing the Ultimate Movie Experience
          </div>
          <div className="flex flex-row justify-between pt-6">
            <div className="flex flex-col gap-5">
              <div className="h-14 w-14 bg-grey rounded-full">
                <div className="flex justify-center  pt-4">
                  <img src={shieldLogo} alt="" className="h-6 w-6" />
                </div>
              </div>
              <div className="text-lg font-bold">Guaranteed</div>
              <div className="text-secondary max-w-xs">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="h-14 w-14 bg-grey rounded-full">
                <div className="flex justify-center  pt-4">
                  <img src={checkLogo} alt="" className="h-6 w-6" />
                </div>
              </div>
              <div className="text-lg font-bold">Affordable</div>
              <div className="text-secondary max-w-xs">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="h-14 w-14 bg-grey rounded-full">
                <div className="flex justify-center pt-4">
                  <img src={chatLogo} alt="" className="h-6 w-6" />
                </div>
              </div>
              <div className="text-lg font-bold">24/7 Customer Support</div>
              <div className="text-secondary max-w-xs">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </div>
            </div>
          </div>
          <div className="flex flex-col pt-10 justify-center">
            <div className="text-blue text-bold text-lg flex justify-center pb-3">
              MOVIES
            </div>
            <div className="flex justify-center">
              <div className="text-bold text-3xl flex max-w-md text-center pb-7">
                Exciting Movies That Should Be Watched Today
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <MovieCard data={{ title: "Deadpool x Wolverine", image: dw }} />
              <MovieCard data={{ title: "Gyeongseong Creature", image: gc }} />
              <MovieCard data={{ title: "Frieren", image: frieren }} />
              <MovieCard data={{ title: "Penguin", image: penguin }} />
            </div>
            <Link to="/list-movie">
              <div className="flex flex-row justify-center text-blue text-lg items-center gap-2">
                <div>View All</div>
                <FaArrowRightLong />
              </div>
            </Link>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <div className="text-lg text-blue pt-10">Upcoming Movies</div>
                <div className="text-3xl flex pt-4 pb-7">
                  Exciting Movie Coming Soon
                </div>
              </div>
              <div className="flex flex-row gap-x-2 items-end pb-7">
                <div className="h-14 w-14 bg-gray bg-opacity-50 rounded-full">
                  <div className="flex justify-center content-center pt-5 text-white">
                    <FaArrowLeft />
                  </div>
                </div>
                <div className="h-14 w-14 bg-blue rounded-full">
                  <div className="flex justify-center content-center pt-5 text-white">
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <MovieCard data={{ title: "Spiderman", image: dw }} />
              <MovieCard data={{ title: "Spiderman", image: gc }} />
              <MovieCard data={{ title: "Spiderman", image: frieren }} />
              <MovieCard data={{ title: "Spiderman", image: penguin }} />
            </div>
          </div>
        </div>
        <div className="w-full h-80 bg-blue rounded-s-2xl flex flex-col justify-evenly">
          <div className="text-5xl flex text-center justify-center text-white">
            Subscribe to our newsletter
          </div>
          <div className="flex justify-center gap-x-3">
            <input
              type="text"
              placeholder="First Name"
              className="flex w-56 h-16 bg-blue .placeholder-white border-2 border-white rounded-lg pl-4"
            />
            <input
              type="email"
              placeholder="Email"
              className="flex w-56 h-16 bg-blue .placeholder-white border-2 border-white rounded-lg pl-4"
            />
            <button className="flex w-56 h-16 bg-white text-blue .placeholder-white border-2 border-white rounded-lg items-center justify-center">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
      <footer className="px-32 pt-24">
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
          <div className="flex justify-center">
            © 2020 Tickitz. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
