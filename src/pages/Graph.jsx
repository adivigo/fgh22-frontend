import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { SlMagnifier } from "react-icons/sl";
import pp from "/src/assets/images/pp.png";
import graph from "/src/assets/images/graph.svg";
import { Link, useNavigate } from "react-router-dom";
import defpp from "/src/assets/images/defpp.png";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../redux/reducers/auth";
import { GiHamburgerMenu } from "react-icons/gi";

function Graph() {
  const [isShow, setShow] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
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
            <Link to="/graph">Dashboard</Link>
            <Link to="/manage-movie">Movie</Link>
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
            <Link to="/profile">
              <img
                src={defpp}
                alt=""
                className="w-14 h-14 rounded-full flex object-cover"
              />
            </Link>
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
      <div className="bg-background bg-opacity-20 w-full">
        <div className="flex flex-col justify-center items-center pt-11">
          <div className="w-[1105px] h-[709px] bg-white rounded-2xl pt-10 pl-14">
            <div>
              <div className="text-2xl font-bold pb-5">Sales Chart</div>
            </div>
            <div className="flex flex-row gap-5">
              <div className="w-[227px] h-[50px] bg-gray bg-opacity-20 rounded-lg">
                <div className="flex flex-row h-[50px] px-5 justify-between items-center">
                  <div>Movie Name</div>
                  <div className="w-5 h-6">
                    <RiArrowDropDownLine className="w-[21px] h-[24px]" />
                  </div>
                </div>
              </div>
              <div className="w-[165px] h-[50px] bg-gray bg-opacity-20 rounded-lg">
                <div className="flex flex-row h-[50px] px-5 justify-between items-center">
                  <div>Weekly</div>
                  <div className="w-5 h-6">
                    <RiArrowDropDownLine className="w-[21px] h-[24px]" />
                  </div>
                </div>
              </div>
              <div>
                <button className="w-32 h-[50px] bg-dark rounded-lg text-white">
                  Filter
                </button>
              </div>
            </div>
            <div className="pt-9 font-semibold pb-12">Avengers: End Game</div>
            <div className="flex flex-row">
              <div className="flex gap-14 flex-col text-gray text-opacity-50 text-xs">
                <div>$800</div>
                <div>$600</div>
                <div>$400</div>
                <div>$200</div>
                <div>$0</div>
              </div>
              <div className="flex flex-col pt-11">
                <div>
                  <img src={graph} alt="" />
                </div>
                <div className="flex flex-row text-gray text-opacity-50 text-xs gap-36 pl-5">
                  <div>Jan</div>
                  <div>Feb</div>
                  <div>Mar</div>
                  <div>Apr</div>
                  <div>May</div>
                  <div>Jun</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center pt-12">
          <div className="flex flex-col justify-center items-center pt-11">
            <div className="w-[1105px] h-[709px] bg-white rounded-2xl pt-10 pl-14">
              <div>
                <div className="text-2xl font-bold pb-5">Ticket Sales</div>
              </div>
              <div className="flex flex-row gap-5">
                <div className="w-[227px] h-[50px] bg-gray bg-opacity-20 rounded-lg">
                  <div className="flex flex-row h-[50px] px-5 justify-between items-center">
                    <div>Category</div>
                    <div className="w-5 h-6">
                      <RiArrowDropDownLine className="w-[21px] h-[24px]" />
                    </div>
                  </div>
                </div>
                <div className="w-[165px] h-[50px] bg-gray bg-opacity-20 rounded-lg">
                  <div className="flex flex-row h-[50px] px-5 justify-between items-center">
                    <div>Location</div>
                    <div className="w-5 h-6">
                      <RiArrowDropDownLine className="w-[21px] h-[24px]" />
                    </div>
                  </div>
                </div>
                <div>
                  <button className="w-32 h-[50px] bg-dark rounded-lg text-white">
                    Filter
                  </button>
                </div>
              </div>
              <div className="pt-9 font-semibold pb-12">
                Adventure, Purwokerto
              </div>
              <div className="flex flex-row">
                <div className="flex gap-14 flex-col text-gray text-opacity-50 text-xs">
                  <div>$800</div>
                  <div>$600</div>
                  <div>$400</div>
                  <div>$200</div>
                  <div>$0</div>
                </div>
                <div className="flex flex-col pt-11">
                  <div>
                    <img src={graph} alt="" />
                  </div>
                  <div className="flex flex-row text-gray text-opacity-50 text-xs gap-36 pl-5">
                    <div>Jan</div>
                    <div>Feb</div>
                    <div>Mar</div>
                    <div>Apr</div>
                    <div>May</div>
                    <div>Jun</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Graph;
