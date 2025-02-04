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
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { setResponse } from "../redux/reducers/order";

function Payment() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const data = useSelector((state) => state.order?.data);
  const [movie, setMovie] = useState({});
  const movieId = useSelector((state) => state.order.data.movieId);
  const [cinema, setCinema] = useState({});
  const cinemaId = useSelector((state) => state.order.data.cinemaId);
  const [profile, setProfile] = useState({});
  const [payment, setPayment] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const fullname = (profile.firstName || "") + " " + (profile.lastName || "");
  const { handleSubmit } = useForm();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const headers = {};

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
    headers["Content-Type"] = "application/json";
  }

  const onSubmit = () => {
    fetch("http://localhost:8888/orders", {
      method: "POST",
      body: JSON.stringify({
        cinemaId: cinemaId,
        movieId: parseInt(movieId),
        seats: data.selectedSeat,
        paymentId: selectedId,
      }),
      headers,
    })
      .then((response) => response.json())
      .then((result) => dispatch(setResponse(result.results)))
      .catch((error) => console.error("Error placing order:", error));
    navigate("/payment-confirm");
  };

  const handleSelect = (id) => {
    setSelectedId(id);
  };
  console.log(selectedId); // console.log(fullname);

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const formatDate = new Date(data.date);
  const day = daysOfWeek[formatDate.getDay()];
  const dayOfMonth = formatDate.getDate().toString().padStart(2, "0");
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthsOfYear[formatDate.getMonth()];
  const year = formatDate.getFullYear();

  useEffect(() => {
    fetch(`http://localhost:8888/movies/${movieId}`, {
      method: "GET",
      headers,
    })
      .then((response) => response.json())
      .then((data) => setMovie(data.results))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:8888/cinemas/${cinemaId}`, {
      method: "GET",
      headers,
    })
      .then((response) => response.json())
      .then((data) => setCinema(data.results))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8888/profiles", {
      method: "GET",
      headers,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.results) {
          setProfile(data.results);
        }
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:8888/orders/payment`, {
      method: "GET",
      headers,
    })
      .then((response) => response.json())
      .then((data) => setPayment(data.results))
      .catch((err) => console.log(err));
  }, []);

  React.useEffect(() => {
    if (token == "") {
      navigate("/login");
    }
  }, [token]);
  return (
    <div>
      <Navbar />
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
          <div className="bg-white rounded-2xl min-w-[327px] max-h-[1488]px md:w-[732px] md:h-[1375px]">
            <div className="px-9 pt-12">
              <div className="text-2xl font-bold">Payment Info</div>
              <div className="pb-2 pt-6 flex gap-3 flex-col">
                <div className="flex flex-col gap-2">
                  <div className="text-sm text-dark text-opacity-50 ">
                    DATE & TIME
                  </div>
                  <div className="pb-2">
                    {day}, {dayOfMonth} {month} {year} at {data.time}
                  </div>
                  <hr className="text-dark text-opacity-20 min-w-[275px]" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm text-dark text-opacity-50">
                    MOVIE TITLE
                  </div>
                  <div className="pb-2">{movie.title}</div>
                  <hr className="text-dark text-opacity-20" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm text-dark text-opacity-50">
                    CINEMA NAME
                  </div>
                  <div className="pb-2">{cinema.name} Cinema</div>
                  <hr className="text-dark text-opacity-20" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm text-dark text-opacity-50">
                    NUMBER OF TICKETS
                  </div>
                  <div className="pb-2">
                    {data.selectedSeat.length ? data.selectedSeat.length : ""}{" "}
                    pieces
                  </div>
                  <hr className="text-dark text-opacity-20" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm text-dark text-opacity-50">
                    TOTAL PAYMENT
                  </div>
                  <div className="pb-2 text-dark font-bold">
                    ${data.totalPayment},00
                  </div>
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
                    defaultValue={fullname.trim()} // Ensures no extra spaces
                    className="min-w-[275px] md:w-[665px] h-16 pl-11 border border-dark border-opacity-20"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <div>Email</div>
                  <input
                    type="email"
                    defaultValue={profile.email}
                    className="min-w-[275px] md:w-[665px] h-16 pl-11 border border-dark border-opacity-20"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <div>Phone Number</div>
                  <input
                    type="text"
                    defaultValue={profile.phoneNumber}
                    className="min-w-[275px] md:w-[665px] h-16 pl-11 border border-dark border-opacity-20"
                  />
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold pt-12">Payment Method</div>
                <div className="grid grid-cols-2 md:grid-cols-4 pt-8 gap-8">
                  {payment &&
                    payment.map((el) => (
                      <div
                        key={el.id}
                        className={`w-[146px] h-14 border border-dark border-opacity-20 rounded-lg flex justify-center items-center ${
                          selectedId === el.id
                            ? "border-8 border-dark border-opacity-40 63"
                            : ""
                        }`}
                        onClick={() => handleSelect(el.id)}
                      >
                        <div>
                          <img
                            src={`http://localhost:8888/profiles/images/${el.image}`}
                            alt=""
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className="flex pt-12 pb-16">
                <div className="flex justify-center items-center w-[665px] h-14 bg-dark rounded">
                  <button
                    className="text-white min-w-[275px]"
                    type="submit"
                    onClick={handleSubmit(onSubmit)}
                  >
                    Pay your order
                  </button>
                </div>
              </div>
            </div>
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
              <div className="flex sm:flex-row sm:justify-start lg:flex-col">
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

export default Payment;
