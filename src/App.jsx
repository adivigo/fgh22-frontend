import React from "react";
import g1 from "./assets/images/g1.png";
import g2 from "./assets/images/g2.png";
import g3 from "./assets/images/g3.png";
import g4 from "./assets/images/g4.png";

function App() {
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
            <div className="grid grid-rows-2">
              <img
                src={g1}
                alt="g1"
                className="object-cover h-44 w-56 rounded-t-3xl"
              />
              <img
                src={g2}
                alt="g2"
                className="object-cover w-56 h-64 rounded-b-3xl"
              />
            </div>
            <div className="grid grid-rows-2 gap-y-4">
              <img
                src={g3}
                alt="g3"
                className="object-cover w-56 h-64 rounded-t-3xl"
              />
              <img
                src={g4}
                alt="g4"
                className="object-cover h-44 w-56 rounded-b-3xl"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="text-lg text-blue pt-48">WHY CHOOSE US</div>
          <div className="text-3xl max-w-lg pt-3.5">
            Unleashing the Ultimate Movie Experience
          </div>
          <div className="flex flex-row justify-between pt-6">
            <div className="flex flex-col gap-5">
              <div className="h-14 w-14 bg-grey rounded-full">logo</div>
              <div className="text-lg font-bold">Guaranteed</div>
              <div className="text-secondary max-w-xs">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="h-14 w-14 bg-grey rounded-full">logo</div>
              <div className="text-lg font-bold">Affordable</div>
              <div className="text-secondary max-w-xs">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="h-14 w-14 bg-grey rounded-full">logo</div>
              <div className="text-lg font-bold">24/7 Customer Support</div>
              <div className="text-secondary max-w-xs">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </div>
            </div>
          </div>
          <div className="flex flex-col pt-10 justify-center">
            <div className="text-blue text-bold text-lg flex justify-center">
              MOVIES
            </div>
            <div className="text-bold text-3xl flex justify-center">
              Exciting Movies That Should Be Watched Today
            </div>
            <div>rick and morty image + name</div>
            <div className="flex flex-row justify-center text-blue text-lg">
              <div>View All</div>
              <div>panah kanan</div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <div className="text-lg text-blue">Upcoming Movies</div>
                <div className="text-3xl">Exciting Movie Coming Soon</div>
              </div>
              <div className="flex flex-row gap-x-2">
                <div className="h-14 w-14 bg-grey rounded-full">logo</div>
                <div className="h-14 w-14 bg-blue rounded-full">logo</div>
              </div>
            </div>
            <div>rick and morty image + name</div>
          </div>
        </div>
        <div className="w-full h-80 bg-blue rounded-lg flex flex-col justify-evenly">
          <div className="text-5xl flex text-center justify-center text-white">
            Subscribe to our newsletter
          </div>
          <div className="flex justify-center gap-x-3">
            <input
              type="text"
              placeholder="First Name"
              className="flex w-56 h-16 bg-blue .placeholder-white border-2 border-white rounded-lg"
            />
            <input
              type="email"
              placeholder="Email"
              className="flex w-56 h-16 bg-blue .placeholder-white border-2 border-white rounded-lg"
            />
            <button>Subscribe Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
