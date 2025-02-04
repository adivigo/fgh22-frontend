import React, { useState, useEffect } from "react";
import logoTickitz from "/src/assets/images/tickitzfooter.png";
import ebv from "/src/assets/images/ebv.png";
import cineone from "/src/assets/images/cineone.png";
import hiflix from "/src/assets/images/hiflix.png";
import fb from "/src/assets/images/flogo.png";
import ig from "/src/assets/images/instalogo.png";
import tweet from "/src/assets/images/twitterlogo.png";
import youtube from "/src/assets/images/ytlogo.png";
import { IoMdCheckmark } from "react-icons/io";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { setOrder } from "../redux/reducers/order";

function SeatList() {
  const data = useSelector((state) => state.order.data);
  const cinemaId = useSelector((state) => state.order.data.cinemaId);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const [movie, setMovie] = useState({});
  const [schedule, setSchedule] = useState({});
  const [seat, setSeat] = useState([]);
  const [seatColors, setSeatColors] = useState({});
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleClick = (e) => {
    const seatValue = e.currentTarget.getAttribute("data-value");

    // Get current color or default to grey
    const currentColor = seatColors[seatValue] || "grey";
    const newColor = currentColor === "grey" ? "blue" : "grey";

    // Update seatColors for the clicked seat
    setSeatColors((prevColors) => ({
      ...prevColors,
      [seatValue]: newColor,
    }));

    // Update selectedSeats based on the new color
    if (newColor === "blue") {
      // Add seat to selectedSeats
      setSelectedSeats((prevSelectedSeats) => [
        ...prevSelectedSeats,
        seatValue,
      ]);
    } else {
      // Remove seat from selectedSeats
      setSelectedSeats((prevSelectedSeats) =>
        prevSelectedSeats.filter((seat) => seat !== seatValue)
      );
    }
  };
  console.log(selectedSeats);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { handleSubmit } = useForm();

  const onSubmit = () => {
    const totalPayment = selectedSeats.length * 50000;

    const payload = {
      movieId: data.movieId,
      date: data.date,
      time: data.time,
      cinemaId: data.cinemaId,
      selectedSeat: selectedSeats,
      totalPayment: totalPayment,
    };

    // console.log(id);
    // console.log(payload);

    dispatch(setOrder(payload));
    navigate("/payment");
  };

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
    fetch(`http://localhost:8888/movies/${data.movieId}`, {
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
      .then((data) => setSchedule(data.results[cinemaId - 1]))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:8888/seats`, {
      method: "GET",
      headers,
    })
      .then((response) => response.json())
      .then((data) => setSeat(data.results))
      .catch((err) => console.log(err));
  }, []);

  // console.log(data);
  // console.log(schedule);
  // console.log(seat);
  return (
    <div>
      <Navbar />
      <div>
        <div className="w-screen h-[1072px] bg-gray bg-opacity-10">
          <div className="px-32">
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
                <div className="h-14 w-14 bg-dark rounded-full">
                  <div className="flex justify-center content-center pt-5 text-white">
                    2
                  </div>
                </div>
                <div className="flex justify-center text-sm text-gray pt-2">
                  Seat
                </div>
              </div>
              <hr class="w-20 gap-6 h-px my-4 bg-dark-500 border-dashed md:my-10" />
              <div>
                <div className="h-14 w-14 bg-gray bg-opacity-30 rounded-full">
                  <div className="flex justify-center content-center pt-5 text-white">
                    3
                  </div>
                </div>
                <div className="flex justify-center text-sm text-gray pt-2">
                  payment
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-row gap-4 pt-8 justify-center">
                <div className="w-[734px] h-[807px] bg-white flex flex-col rounded">
                  <div className="flex justify-center px-5 pt-10 ">
                    <div className="w-[687px] h-[17 3px] flex py-3 pl-6 rounded border border-dark border-opacity-20">
                      <div className="w-44 h-28 bg-red ">
                        <img
                          src={`http://localhost:8888/profiles/images/${movie.image}`}
                          alt=""
                          className="w-44 h-28 object-cover object-top"
                        />
                      </div>
                      <div className="pl-4 flex gap-3 flex-col">
                        <div className="text-2xl">{movie.title}</div>
                        <div className="flex flex-row gap-2">
                          <div className="text-gray bg-grey py-1 px-4 border rounded-3xl border-grey text-opacity-50">
                            <div>{movie.genreName}</div>
                          </div>
                        </div>
                        <div className="flex flex-row justify-between">
                          <div>Regular - {data.time}</div>
                        </div>
                      </div>
                      <Link
                        to="/list-movie"
                        className="flex items-end pl-32 pr-4"
                      >
                        <button className="w-28 h-8 bg-dark text-white rounded">
                          Change
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="px-5">
                    <div className="text-2xl font-bold pt-9">
                      Choose your seat
                    </div>
                    <div className="pt-9 flex justify-center text-sm text-dark text-opacity-70">
                      Screen
                    </div>
                    <div className="flex flex-row gap-16 justify-center pt-10">
                      <div className="flex flex-row gap-2">
                        <div className="grid grid-col-8 grid-rows-8 gap-2">
                          <div className="w-7 h-7 rounded flex justify-center items-center">
                            A
                          </div>
                          <div className="w-7 h-7 rounded flex justify-center items-center">
                            B
                          </div>
                          <div className="w-7 h-7 rounded flex justify-center items-center">
                            C
                          </div>
                          <div className="w-7 h-7 rounded flex justify-center items-center">
                            D
                          </div>
                          <div className="w-7 h-7 rounded flex justify-center items-center">
                            E
                          </div>
                          <div className="w-7 h-7 rounded flex justify-center items-center">
                            F
                          </div>
                          <div className="w-7 h-7 rounded flex justify-center items-center">
                            G
                          </div>
                          <div className="w-7 h-7 rounded"></div>
                        </div>
                        <div className="grid grid-col-8 grid-rows-8 gap-2">
                          {seat.slice(0, 7).map((s, index) => (
                            <div
                              key={index}
                              id={`${s.name}`}
                              className={`w-7 h-7 rounded`}
                              style={{
                                backgroundColor: seatColors[s.name] || "grey",
                              }}
                              onClick={handleClick}
                              data-value={s.name}
                            ></div>
                          ))}
                          <div className="w-7 h-7 rounded flex justify-center items-center">
                            1
                          </div>
                        </div>
                        <div className="grid grid-col-8 grid-rows-8 gap-2">
                          {seat.slice(7, 14).map((s, index) => (
                            <div
                              key={index}
                              id={`${s.name}`}
                              className={`w-7 h-7 rounded`}
                              style={{
                                backgroundColor: seatColors[s.name] || "grey",
                              }}
                              onClick={handleClick}
                              data-value={s.name}
                            ></div>
                          ))}
                          <div className="w-7 h-7 rounded flex justify-center items-center">
                            2
                          </div>
                        </div>
                        <div className="grid grid-col-8 grid-rows-8 gap-2">
                          {seat.slice(14, 21).map((s, index) => (
                            <div
                              key={index}
                              id={`${s.name}`}
                              className={`w-7 h-7 rounded`}
                              style={{
                                backgroundColor: seatColors[s.name] || "grey",
                              }}
                              onClick={handleClick}
                              data-value={s.name}
                            ></div>
                          ))}
                          <div className="w-7 h-7 rounded flex justify-center items-center">
                            3
                          </div>
                        </div>
                        <div className="grid grid-col-8 grid-rows-8 gap-2">
                          {seat.slice(21, 28).map((s, index) => (
                            <div
                              key={index}
                              id={`${s.name}`}
                              className={`w-7 h-7 rounded`}
                              style={{
                                backgroundColor: seatColors[s.name] || "grey",
                              }}
                              onClick={handleClick}
                              data-value={s.name}
                            ></div>
                          ))}
                          <div className="w-7 h-7 rounded flex justify-center items-center">
                            4
                          </div>
                        </div>
                        <div className="grid grid-col-8 grid-rows-8 gap-2">
                          {seat.slice(28, 35).map((s, index) => (
                            <div
                              key={index}
                              id={`${s.name}`}
                              className={`w-7 h-7 rounded`}
                              style={{
                                backgroundColor: seatColors[s.name] || "grey",
                              }}
                              onClick={handleClick}
                              data-value={s.name}
                            ></div>
                          ))}
                          <div className="w-7 h-7 rounded flex justify-center items-center">
                            5
                          </div>
                        </div>
                        <div className="grid grid-col-8 grid-rows-8 gap-2">
                          {seat.slice(35, 42).map((s, index) => (
                            <div
                              key={index}
                              id={`${s.name}`}
                              className={`w-7 h-7 rounded`}
                              style={{
                                backgroundColor: seatColors[s.name] || "grey",
                              }}
                              onClick={handleClick}
                              data-value={s.name}
                            ></div>
                          ))}
                          <div className="w-7 h-7 rounded flex justify-center items-center">
                            6
                          </div>
                        </div>
                        <div className="grid grid-col-8 grid-rows-8 gap-2">
                          {seat.slice(42, 49).map((s, index) => (
                            <div
                              key={index}
                              id={`${s.name}`}
                              className={`w-7 h-7 rounded`}
                              style={{
                                backgroundColor: seatColors[s.name] || "grey",
                              }}
                              onClick={handleClick}
                              data-value={s.name}
                            ></div>
                          ))}
                          <div className="w-7 h-7 rounded flex justify-center items-center">
                            7
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex flex-row gap-2">
                          <div className="grid grid-col-8 grid-rows-8 gap-2">
                            {seat.slice(49, 56).map((s, index) => (
                              <div
                                key={index}
                                id={`${s.name}`}
                                className={`w-7 h-7 rounded`}
                                style={{
                                  backgroundColor: seatColors[s.name] || "grey",
                                }}
                                onClick={handleClick}
                                data-value={s.name}
                              ></div>
                            ))}
                            <div className="w-7 h-7 rounded flex justify-center items-center">
                              8
                            </div>
                          </div>
                          <div className="grid grid-col-8 grid-rows-8 gap-2">
                            {seat.slice(56, 63).map((s, index) => (
                              <div
                                key={index}
                                id={`${s.name}`}
                                className={`w-7 h-7 rounded`}
                                style={{
                                  backgroundColor: seatColors[s.name] || "grey",
                                }}
                                onClick={handleClick}
                                data-value={s.name}
                              ></div>
                            ))}
                            <div className="w-7 h-7 rounded flex justify-center items-center">
                              9
                            </div>
                          </div>
                          <div className="grid grid-col-8 grid-rows-8 gap-2">
                            {seat.slice(63, 70).map((s, index) => (
                              <div
                                key={index}
                                id={`${s.name}`}
                                className={`w-7 h-7 rounded`}
                                style={{
                                  backgroundColor: seatColors[s.name] || "grey",
                                }}
                                onClick={handleClick}
                                data-value={s.name}
                              ></div>
                            ))}
                            <div className="w-7 h-7 rounded flex justify-center items-center">
                              10
                            </div>
                          </div>
                          <div className="grid grid-col-8 grid-rows-8 gap-2">
                            {seat.slice(70, 77).map((s, index) => (
                              <div
                                key={index}
                                id={`${s.name}`}
                                className={`w-7 h-7 rounded`}
                                style={{
                                  backgroundColor: seatColors[s.name] || "grey",
                                }}
                                onClick={handleClick}
                                data-value={s.name}
                              ></div>
                            ))}
                            <div className="w-7 h-7 rounded flex justify-center items-center">
                              11
                            </div>
                          </div>
                          <div className="grid grid-col-8 grid-rows-8 gap-2">
                            {seat.slice(77, 84).map((s, index) => (
                              <div
                                key={index}
                                id={`${s.name}`}
                                className={`w-7 h-7 rounded`}
                                style={{
                                  backgroundColor: seatColors[s.name] || "grey",
                                }}
                                onClick={handleClick}
                                data-value={s.name}
                              ></div>
                            ))}
                            <div className="w-7 h-7 rounded flex justify-center items-center">
                              12
                            </div>
                          </div>
                          <div className="grid grid-col-8 grid-rows-8 gap-2">
                            {seat.slice(84, 91).map((s, index) => (
                              <div
                                key={index}
                                id={`${s.name}`}
                                className={`w-7 h-7 rounded`}
                                style={{
                                  backgroundColor: seatColors[s.name] || "grey",
                                }}
                                onClick={handleClick}
                                data-value={s.name}
                              ></div>
                            ))}
                            <div className="w-7 h-7 rounded flex justify-center items-center">
                              13
                            </div>
                          </div>
                          <div className="grid grid-col-8 grid-rows-8 gap-2">
                            {seat.slice(91, 98).map((s, index) => (
                              <div
                                key={index}
                                id={`${s.name}`}
                                className={`w-7 h-7 rounded`}
                                style={{
                                  backgroundColor: seatColors[s.name] || "grey",
                                }}
                                onClick={handleClick}
                                data-value={s.name}
                              ></div>
                            ))}
                            <div className="w-7 h-7 rounded flex justify-center items-center">
                              14
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pt-8 text-lg font-semibold">
                      Seating key
                    </div>
                    <div className="flex flex-row gap-10 pt-5">
                      <div className="flex flex-row gap-4">
                        <div className="bg-grey w-7 h-7 rounded"></div>
                        <div>Available</div>
                      </div>
                      <div className="flex flex-row gap-4">
                        <div className="bg-blue w-7 h-7 rounded"></div>
                        <div>Selected</div>
                      </div>
                      <div className="flex flex-row gap-4">
                        <div className="bg-red bg-opacity-50 w-7 h-7 rounded"></div>
                        <div>Love nest</div>
                      </div>
                      <div className="flex flex-row gap-4">
                        <div className="bg-gray w-7 h-7 rounded"></div>
                        <div>Sold</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-10">
                  <div className="w-[358px] h-[413px] bg-white rounded">
                    <div className="flex justify-center flex-col">
                      <div className="flex justify-center pt-4">
                        <div className="w-40 h-16 flex items-center">
                          <img
                            src={`http://localhost:8888/profiles/images/${schedule.image}`}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="flex justify-center text-2xl pt-3">
                        {schedule.name}
                      </div>
                      <div className="flex gap-4 flex-col px-5  pt-8">
                        <div className="flex flex-row text-sm justify-between">
                          <div className="text-gray text-opacity-70">
                            Movie selected
                          </div>
                          <div>{movie.title}</div>
                        </div>
                        <div className="flex flex-row text-sm justify-between">
                          <div className="text-gray text-opacity-70">
                            Tuesday, 07 July 2020
                          </div>
                          <div>{data.time}</div>
                        </div>
                        <div className="flex flex-row text-sm justify-between">
                          <div className="text-gray text-opacity-70">
                            One ticket price
                          </div>
                          <div>$10</div>
                        </div>
                        <div className="flex flex-row text-sm justify-between">
                          <div className="text-gray text-opacity-70">
                            Seat choosed
                          </div>
                          <div>{selectedSeats.join(", ")}</div>
                        </div>
                      </div>
                      <div className="pt-10 text-dark text-opacity-20">
                        <hr />
                      </div>
                      <div className="flex flex-row justify-between px-5 pt-6">
                        <div className="text-lg">Total Payment</div>
                        <div className="text-2xl text-dark font-bold">
                          ${selectedSeats.length * 50000}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      className="w-[358px] h-14 bg-dark text-white rounded"
                      type="submit"
                    >
                      Checkout Now
                    </button>
                  </div>
                </div>
              </div>
            </form>
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

export default SeatList;
