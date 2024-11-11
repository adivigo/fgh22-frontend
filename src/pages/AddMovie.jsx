import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { SlMagnifier } from "react-icons/sl";
import { CiCalendar } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import defpp from "/src/assets/images/defpp.png";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../redux/reducers/auth";
import { GiHamburgerMenu } from "react-icons/gi";

function AddMovie() {
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
            <a href="#">Home</a>
            <a href="#">Movie</a>
            <a href="#">Buy Ticket</a>
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
            <img
              src={defpp}
              alt=""
              className="w-14 h-14 rounded-full flex object-cover"
            />
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
        <div className="flex justify-center items-center pt-14">
          <div className="w-[732px] h-[1473px] bg-white rounded-2xl">
            <div className="text-2xl font-bold pl-9 pt-12">Add New Movie</div>
            <div className="px-14 pt-7 flex gap-6 flex-col">
              <div>
                <div className="text-gray text-opacity-50 pb-3">
                  Upload Image
                </div>
                <div>
                  <button className="w-28 h-8 bg-dark text-white rounded-lg">
                    Upload
                  </button>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="flex pb-3 text-dark text-opacity-60">
                  Movie Name
                </label>
                <input
                  type="text"
                  className="w-[616px] h-16 border border-dark border-opacity-20 rounded-md bg-background bg-opacity-20 pl-9"
                  placeholder="Spider-Man: Homecoming"
                />
              </div>
              <div className="flex flex-col">
                <label className="flex pb-3 text-dark text-opacity-60">
                  Category
                </label>
                <input
                  type="text"
                  className="w-[616px] h-16 border border-dark border-opacity-20 rounded-md bg-background bg-opacity-20 pl-9"
                  placeholder="Action, Adventure, Sci-Fi"
                />
              </div>
              <div className="flex flex-row gap-12">
                <div className="flex flex-col">
                  <label className="flex pb-3 text-dark text-opacity-60">
                    Release Date
                  </label>
                  <input
                    type="date"
                    className="w-[275px] h-16 border border-dark border-opacity-20 rounded-md bg-background bg-opacity-20 pl-9"
                    placeholder="Action, Adventure, Sci-Fi"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="flex pb-3 text-dark text-opacity-60">
                    Duration (hour / minute)
                  </label>
                  <div className="flex flex-row gap-6">
                    <div>
                      <input
                        type="text"
                        className="w-[135px] h-16 border border-dark border-opacity-20 rounded-md bg-background bg-opacity-20 justify-center text-center"
                        placeholder="2"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="w-[135px] h-16 border border-dark border-opacity-20 rounded-md bg-background bg-opacity-20 justify-center text-center"
                        placeholder="13"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="flex pb-3 text-dark text-opacity-60">
                  Director Name
                </label>
                <input
                  type="text"
                  className="w-[616px] h-16 border border-dark border-opacity-20 rounded-md bg-background bg-opacity-20 pl-9"
                  placeholder="Jon Watts"
                />
              </div>
              <div className="flex flex-col">
                <label className="flex pb-3 text-dark text-opacity-60">
                  Cast
                </label>
                <input
                  type="text"
                  className="w-[616px] h-16 border border-dark border-opacity-20 rounded-md bg-background bg-opacity-20 pl-9"
                  placeholder="Tom Holland, Michael Keaton, Robert Dow.."
                />
              </div>
              <div className="flex flex-col">
                <label className="flex pb-3 text-dark text-opacity-60">
                  Synopsis
                </label>
                <input
                  type="text"
                  className="w-[616px] h-[207px] border border-dark border-opacity-20 rounded-md bg-background bg-opacity-20"
                  placeholder="Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, | "
                />
              </div>
              <div className="flex flex-col">
                <label className="flex pb-3 text-dark text-opacity-60">
                  Add Location
                </label>
                <input
                  type="text"
                  className="w-[616px] h-16 border border-dark border-opacity-20 rounded-md bg-background bg-opacity-20 pl-9"
                  placeholder="Purwokerto, Bandung, Bekasi"
                />
              </div>
              <div className="flex flex-col">
                <label className="flex pb-3 text-dark text-opacity-60">
                  Set Date & Time
                </label>
                <div className="flex flex-row bg-background w-[203px] h-10 justify-between items-center px-4 bg-opacity-20">
                  <div>
                    <CiCalendar />
                  </div>
                  <div>Set a date</div>
                  <div>
                    <RiArrowDropDownLine />
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-7">
                <div>
                  <button className="w-14 h-7 border border-dark text-dark flex justify-center items-center">
                    <FaPlus />
                  </button>
                </div>
                <div>08.30am</div>
                <div>10.30pm</div>
              </div>
              <hr />
              <div>
                <Link to="/manage-movie">
                  <button
                    type="submit"
                    className="w-[616px] h-14 bg-dark text-white flex items-center justify-center rounded"
                  >
                    Save Movie
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddMovie;
