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

function DetailMovie() {
  const MovieCard = (props) => {
    return (
      <div className="flex flex-col gap-5">
        <div className="w-64 h-96 bg-red rounded-xl"></div>
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
          <div className="flex flex-row">
            <div>
              <div>Choose Date</div>
            </div>
            <div>Choose Time</div>
            <div>Choose Location</div>
            <div>Filter</div>
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
