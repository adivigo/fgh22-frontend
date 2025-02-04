import React, { useState, useEffect } from "react";
import logoTickitz from "/src/assets/images/tickitzfooter.png";
import ebv from "/src/assets/images/ebv.png";
import cineone from "/src/assets/images/cineone.png";
import hiflix from "/src/assets/images/hiflix.png";
import fb from "/src/assets/images/flogo.png";
import ig from "/src/assets/images/instalogo.png";
import tweet from "/src/assets/images/twitterlogo.png";
import youtube from "/src/assets/images/ytlogo.png";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Navbar from "../components/Navbar";
import { setOrder } from "../redux/reducers/order";

function DetailMovie() {
  let { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const [isShow, setShow] = React.useState(false);
  const [movie, setMovie] = useState({});
  const [schedule, setSchedule] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSelect = (id) => {
    setSelectedId(id);
  };
  // console.log(selectedId);

  React.useEffect(() => {
    if (token == "") {
      navigate("/login");
    }
  }, [token]);

  const headers = {};

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  useEffect(() => {
    fetch(`http://localhost:8888/movies/${id}`, {
      method: "GET",
      headers,
    })
      .then((response) => response.json())
      .then((data) => setMovie(data.results))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:8888/cinemas`, {
      method: "GET",
      headers,
    })
      .then((response) => response.json())
      .then((data) => setSchedule(data.results))
      .catch((err) => console.log(err));
  }, []);
  // console.log(schedule);

  const { register, handleSubmit } = useForm();

  const onSubmit = (value) => {
    const payload = {
      movieId: id,
      date: value.date,
      time: value.time,
      cinemaId: selectedId,
    };

    // console.log(id);
    // console.log(payload);

    dispatch(setOrder(payload));
    navigate("/seat-list");
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div>
          <div className="flex relative h-[475px] w-full md:h-[415px]">
            <div class="banner">
              <img
                src={`http://localhost:8888/profiles/images/${movie.banner}`}
                class="my_banner"
                alt=""
                className="object-cover w-screen h-[415px] object-right-top"
              />
            </div>
          </div>
          <div className="w-[327px] h-[502px] md:w-[264px] md:h-[405px] absolute top-[402px] left-[170px] md:top-[356px] md:left-[130px]">
            <img
              src={`http://localhost:8888/profiles/images/${movie.image}`}
              alt=""
            />
          </div>
          <div className="flex justify-center flex-col pt-52 text-center md:text-start md:pl-[413px] md:pt-6">
            <div className="text-3xl">{movie.title}</div>
            <div className="flex flex-row gap-2 pt-6 justify-center md:justify-start">
              <div className="rounded-2xl border border-grey text-dark text-opacity-50 bg-grey px-3 flex justify-center items-center">
                {movie.genreName}
              </div>
            </div>
            <div className="flex flex-row py-4 justify-around md:justify-start">
              <div>
                <div className="text-sm text-dark text-opacity-50 md:pr-28 text-start">
                  Release Date
                </div>
                <div className="text-start">
                  {movie.releaseDate ? movie.releaseDate.slice(0, 10) : "N/A"}
                </div>
              </div>
              <div>
                <div className="text-sm text-dark text-opacity-50">
                  Directed by
                </div>
                <div>{movie.directorName}</div>
              </div>
            </div>
            <div className="flex flex-row pb-12 justify-evenly md:justify-start">
              <div className="md:pr-32">
                <div className="text-sm text-dark text-opacity-50 text-start">
                  Duration
                </div>
                <div className="">
                  {movie.duration ? movie.duration.slice(0, 8) : "N/A"}
                </div>
              </div>
              <div>
                <div className="text-sm text-dark text-opacity-50 text-start">
                  Casts
                </div>
                <div className="flex flex-wrap max-w-[153px] text-star0 md:max-w-96">
                  {movie.castName}
                </div>
              </div>
            </div>
          </div>
          <div className="px-32">
            <div className="text-xl pb-1">Synopsis</div>
            <div className="max-w-[821px] text-gray text-opacity-50">
              {movie.synopsis}
            </div>
          </div>
        </div>
        {/* ))} */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="px-32">
            <div className="hidden md:block pt-14 text-3xl">Book Tickets</div>
            <div className="block text-center md:hidden pt-14 text-3xl">
              Showtimes and Tickets
            </div>
            <div className="flex flex-col md:flex-row gap-8 pt-10 justify-center items-center md:items-start md:justify-between">
              <div className="flex flex-col md:flex-row gap-4">
                <div>
                  <div className="hidden md:block text-xl pb-3">
                    Choose Date
                  </div>
                  <select
                    id="time"
                    className="w-[327px] md:w-72 h-14 bg-gray bg-opacity-10 px-6"
                    {...register("date")}
                  >
                    {schedule &&
                      schedule.map((el) => (
                        <option selected className="text-center">
                          {el.date.slice(0, 10)}
                        </option>
                      ))}
                  </select>
                </div>
                <div>
                  <div className="hidden md:block text-xl pb-3">
                    Choose Time
                  </div>
                  <select
                    id="time"
                    className="w-[327px] md:w-72 h-14 bg-gray bg-opacity-10 px-6"
                    {...register("time")}
                  >
                    {schedule &&
                      schedule.map((el) => (
                        <option selected className="text-center">
                          {el.time.slice(11, 16)}
                        </option>
                      ))}
                  </select>
                </div>
                <div>
                  <div className="hidden md:block text-xl pb-3">
                    Choose Location
                  </div>
                  <select
                    id="time"
                    className="w-[327px] md:w-72 h-14 bg-gray bg-opacity-10 px-6"
                  >
                    {schedule &&
                      schedule.map((el) => (
                        <option selected className="text-center">
                          {el.listCity}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="flex justify-end items-end">
                  <div>
                    <div className="w-[327px] md:w-48 h-14 bg-dark text-white flex justify-center items-center">
                      Filter
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-start flex-row gap-7 pt-3 md:pt-10 pb-9">
              <div className="hidden md:block text-xl">Choose Cinema</div>
              <div className="text-lg text-dark text-opacity-60 justify-end">
                {schedule.length} Result
              </div>
            </div>
            <div className="hidden md:grid grid-cols-4 md:grid-cols-5 gap-6 justify-center items-center pl-14">
              {schedule &&
                schedule.slice(0, 10).map((el) => (
                  <div
                    key={el.id}
                    className={`w-64 h-40 border border-dark border-opacity-20 rounded-lg flex justify-center items-center ${
                      selectedId === el.id
                        ? "border-8 border-dark border-opacity-40 63"
                        : ""
                    }`}
                    onClick={() => handleSelect(el.id)}
                  >
                    <div className="flex justify-center items-center">
                      <img
                        src={`http://localhost:8888/profiles/images/${el.image}`}
                        alt=""
                        className="md:max-w-52 md:max-h-20"
                      />
                    </div>
                  </div>
                ))}
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
            {/* <div className="flex flex-row gap-x-5 pb-7 justify-center items-center pt-9">
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
                </div> */}
            <div className="hidden md:flex justify-center items-center pt-14 pb-6">
              <button
                className=" w-48 h-14 bg-dark text-white rounded text-sm"
                type="submit"
              >
                Book Now
              </button>
            </div>
          </div>
        </form>
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
