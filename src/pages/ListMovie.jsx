import React, { useEffect } from "react";
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
import imagebg from "/src/assets/images/imagebg.png";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function ListMovie() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
              className="text-dark bg-white inline-block py-2 px-16 border-dark border rounded"
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
      <div className="flex flex-col px-32">
        <div className="flex relative w-full h-[462px]">
          <img
            src={imagebg}
            className="object-cover w-screen h-[462px]"
            alt=""
          />
          <div className="flex flex-col gap-2 absolute pt-24 pl-32">
            <div className="text-lg text-white">LIST MOVIE OF THE WEEK</div>
            <div className="text-5xl max-w-[580px] text-white">
              Experience the Magic of Cinema: Book Your Tickets Today
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-5 pt-16 pl-36">
          <div>
            <div>Cari Event</div>
            <div>
              <input
                type="text"
                placeholder="New Born Expert"
                className="w-80 h-16 bg-[rgba(222, 222, 222, 1)] pl-3 border border-gray rounded-md border-opacity-50"
              />
            </div>
          </div>
          <div className="flex gap-6 flex-col">
            <div>Filter</div>
            <div className="flex flex-row gap-x-8">
              <div className="bg-dark rounded-lg text-white w-24 h-10 flex justify-center items-center">
                thriller
              </div>
              <div className="w-24 h-10 flex justify-center items-center">
                Horror
              </div>
              <div className="w-24 h-10 flex justify-center items-center">
                Romantic
              </div>
              <div className="w-24 h-10 flex justify-center items-center">
                Adventure
              </div>
              <div className="w-24 h-10 flex justify-center items-center">
                Sci-fi
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-row justify-between pt-14">
            <MovieCard data={{ title: "Deadpool x Wolverine", image: dw }} />
            <MovieCard data={{ title: "Gyeongseong Creature", image: gc }} />
            <MovieCard data={{ title: "Frieren", image: frieren }} />
            <MovieCard data={{ title: "Penguin", image: penguin }} />
          </div>
          <div className="flex flex-row justify-between">
            <MovieCard data={{ title: "Deadpool x Wolverine", image: dw }} />
            <MovieCard data={{ title: "Gyeongseong Creature", image: gc }} />
            <MovieCard data={{ title: "Frieren", image: frieren }} />
            <MovieCard data={{ title: "Penguin", image: penguin }} />
          </div>
          <div className="flex flex-row justify-between">
            <MovieCard data={{ title: "Deadpool x Wolverine", image: dw }} />
            <MovieCard data={{ title: "Gyeongseong Creature", image: gc }} />
            <MovieCard data={{ title: "Frieren", image: frieren }} />
            <MovieCard data={{ title: "Penguin", image: penguin }} />
          </div>
        </div>
        <div className="flex flex-row gap-x-5 pb-7 justify-center items-center pt-16">
          <div className="h-14 w-14 bg-dark rounded-full">
            <div className="flex justify-center content-center pt-4 text-white">
              1
            </div>
          </div>
          <div className="h-14 w-14 bg-grey rounded-full">
            <div className="flex justify-center content-center pt-4 text-white">
              2
            </div>
          </div>
          <div className="h-14 w-14 bg-grey rounded-full">
            <div className="flex justify-center content-center pt-4 text-white">
              3
            </div>
          </div>
          <div className="h-14 w-14 bg-grey rounded-full">
            <div className="flex justify-center content-center pt-4 text-white">
              4
            </div>
          </div>
          <div className="h-14 w-14 bg-dark rounded-full">
            <div className="flex justify-center content-center pt-5 text-white">
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div className="w-full h-80 bg-dark rounded-2xl flex flex-col justify-evenly">
          <div className="text-5xl flex text-center justify-center text-white">
            Subscribe to our newsletter
          </div>
          <div className="flex justify-center gap-x-3">
            <input
              type="text"
              placeholder="First Name"
              className="flex w-56 h-16 bg-dark .placeholder-white border-2 border-white rounded-lg pl-4"
            />
            <input
              type="email"
              placeholder="Email"
              className="flex w-56 h-16 bg-dark .placeholder-white border-2 border-white rounded-lg pl-4"
            />
            <button className="flex w-56 h-16 bg-white text-dark .placeholder-white border-2 border-white rounded-lg items-center justify-center">
              Subscribe Now
            </button>
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

export default ListMovie;
