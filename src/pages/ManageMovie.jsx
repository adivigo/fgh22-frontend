import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { SlMagnifier } from "react-icons/sl";
import { IoCalendarClearOutline } from "react-icons/io5";
import g2 from "/src/assets/images/g2.png";
import { IoEyeOutline } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import defpp from "/src/assets/images/defpp.png";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../redux/reducers/auth";
import { GiHamburgerMenu } from "react-icons/gi";

function ManageMovie() {
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
      <div className="bg-background bg-opacity-20 w-full h-screen">
        <div className="flex justify-center items-center pt-16">
          <div className="w-[1105px] h-[567px] bg-white rounded-2xl">
            <div className="flex flex-row justify-between pl-[58px] pr-[36px] pt-6">
              <div className="flex items-center">
                <div className="text-2xl font-bold">List Movie</div>
              </div>
              <div className="flex flex-row gap-3">
                <div className=" w-72 h-14 flex justify-between items-center bg-background bg-opacity-20 px-6 rounded-lg">
                  <div>
                    <IoCalendarClearOutline />
                  </div>
                  <div>November 2023</div>
                  <div>
                    <RiArrowDropDownLine />
                  </div>
                </div>
                <div>
                  <Link to="/add-movie">
                    <button className="w-[140px] h-14 bg-dark text-white rounded-lg">
                      Add Movie
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <table>
              <thead>
                <tr className="w-[1105px] flex items-center border-b-2 border-dark border-opacity-20 pb-4 text-xs pt-10">
                  <th className="pl-14">No.</th>
                  <th className="pl-14">Thumbnail</th>
                  <th className="pl-28">Movie Name</th>
                  <th className="pl-36">Category</th>
                  <th className="pl-28">Released Date</th>
                  <th className="pl-20">Duration</th>
                  <th className="pl-28">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="w-[1105px] flex justify-between items-center pl-[58px] pr-[36px] pt-2 border-b-2 border-dark border-opacity-20 pb-4">
                  <td>1</td>
                  <td>
                    <img src={g2} alt="" className="w-[46px] h-[38px]" />
                  </td>
                  <td>Spiderman HomeComing</td>
                  <td>Action, Adventure</td>
                  <td>07/05/2023</td>
                  <td>07/05/2023</td>
                  <td className="flex gap-3">
                    <button className="w-[31px] h-[31px] bg-dark">
                      <div className="flex justify-center items-center text-white">
                        <IoEyeOutline />
                      </div>
                    </button>
                    <button className="w-[31px] h-[31px] bg-dark">
                      <div className="flex justify-center items-center text-white">
                        <FaPen />
                      </div>
                    </button>
                    <button className="w-[31px] h-[31px] bg-red">
                      <div className="flex justify-center items-center text-white">
                        <FiTrash />
                      </div>
                    </button>
                  </td>
                </tr>
                <tr className="w-[1105px] flex justify-between items-center pl-[58px] pr-[36px] pt-2 border-b-2 border-dark border-opacity-20 pb-4">
                  <td>2</td>
                  <td>
                    <img src={g2} alt="" className="w-[46px] h-[38px]" />
                  </td>
                  <td>Spiderman HomeComing</td>
                  <td>Action, Adventure</td>
                  <td>07/05/2023</td>
                  <td>07/05/2023</td>
                  <td className="flex gap-3">
                    <button className="w-[31px] h-[31px] bg-dark">
                      <div className="flex justify-center items-center text-white">
                        <IoEyeOutline />
                      </div>
                    </button>
                    <button className="w-[31px] h-[31px] bg-dark">
                      <div className="flex justify-center items-center text-white">
                        <FaPen />
                      </div>
                    </button>
                    <button className="w-[31px] h-[31px] bg-red">
                      <div className="flex justify-center items-center text-white">
                        <FiTrash />
                      </div>
                    </button>
                  </td>
                </tr>
                <tr className="w-[1105px] flex justify-between items-center pl-[58px] pr-[36px] pt-2 border-b-2 border-dark border-opacity-20 pb-4">
                  <td>3</td>
                  <td>
                    <img src={g2} alt="" className="w-[46px] h-[38px]" />
                  </td>
                  <td>Spiderman HomeComing</td>
                  <td>Action, Adventure</td>
                  <td>07/05/2023</td>
                  <td>07/05/2023</td>
                  <td className="flex gap-3">
                    <button className="w-[31px] h-[31px] bg-dark">
                      <div className="flex justify-center items-center text-white">
                        <IoEyeOutline />
                      </div>
                    </button>
                    <button className="w-[31px] h-[31px] bg-dark">
                      <div className="flex justify-center items-center text-white">
                        <FaPen />
                      </div>
                    </button>
                    <button className="w-[31px] h-[31px] bg-red">
                      <div className="flex justify-center items-center text-white">
                        <FiTrash />
                      </div>
                    </button>
                  </td>
                </tr>
                <tr className="w-[1105px] flex justify-between items-center pl-[58px] pr-[36px] pt-2 border-b-2 border-dark border-opacity-20 pb-4">
                  <td>4</td>
                  <td>
                    <img src={g2} alt="" className="w-[46px] h-[38px]" />
                  </td>
                  <td>Spiderman HomeComing</td>
                  <td>Action, Adventure</td>
                  <td>07/05/2023</td>
                  <td>07/05/2023</td>
                  <td className="flex gap-3">
                    <button className="w-[31px] h-[31px] bg-dark">
                      <div className="flex justify-center items-center text-white">
                        <IoEyeOutline />
                      </div>
                    </button>
                    <button className="w-[31px] h-[31px] bg-dark">
                      <div className="flex justify-center items-center text-white">
                        <FaPen />
                      </div>
                    </button>
                    <button className="w-[31px] h-[31px] bg-red">
                      <div className="flex justify-center items-center text-white">
                        <FiTrash />
                      </div>
                    </button>
                  </td>
                </tr>
                <tr className="w-[1105px] flex justify-between items-center pl-[58px] pr-[36px] pt-2 border-b-2 border-dark border-opacity-20 pb-4">
                  <td>5</td>
                  <td>
                    <img src={g2} alt="" className="w-[46px] h-[38px]" />
                  </td>
                  <td>Spiderman HomeComing</td>
                  <td>Action, Adventure</td>
                  <td>07/05/2023</td>
                  <td>07/05/2023</td>
                  <td className="flex gap-3">
                    <button className="w-[31px] h-[31px] bg-dark">
                      <div className="flex justify-center items-center text-white">
                        <IoEyeOutline />
                      </div>
                    </button>
                    <button className="w-[31px] h-[31px] bg-dark">
                      <div className="flex justify-center items-center text-white">
                        <FaPen />
                      </div>
                    </button>
                    <button className="w-[31px] h-[31px] bg-red">
                      <div className="flex justify-center items-center text-white">
                        <FiTrash />
                      </div>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex flex-row gap-x-5 pb-7 justify-center items-center pt-5">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageMovie;
