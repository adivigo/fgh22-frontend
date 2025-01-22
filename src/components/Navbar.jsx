import React from "react";
import defpp from "/src/assets/images/defpp.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { SlMagnifier } from "react-icons/sl";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as profileAction from "../redux/reducers/profile";
import { loginAction } from "../redux/reducers/auth";

function Navbar() {
  const [isShow, setShow] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const profileData = useSelector((state) => state.profile.data);

  async function getProfile(token) {
    if (profileData.fullName === undefined) {
      const data = await (
        await fetch("http://localhost:8888/profiles", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
      ).json();
      // console.log(data.results);
      dispatch(profileAction.setProfile(data.results));
    }
  }

  const doLogout = () => {
    dispatch(loginAction(""));
    dispatch(profileAction.setProfile({}));
    localStorage.removeItem("user");
    navigate("/login");
  };

  React.useEffect(() => {
    if (token !== "") {
      getProfile(token);
    } else {
      navigate("/login");
    }
  }, [token]);
  return (
    <div>
      <nav className="px-20 md:px-32 flex flex-row justify-between items-center h-24 shadow-lg">
        <Link to="/" className="text-3xl">
          TixIT
        </Link>
        <ul>
          <li className="hidden md:flex gap-14 text-sm">
            <Link to="/">Home</Link>
            <Link to="/list-movie">Movie</Link>
            <Link to="/detail-movie">Buy Ticket</Link>
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
                src={
                  profileData.image
                    ? `http://localhost:8888/profiles/images/${profileData.image}`
                    : defpp
                }
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
      <div>
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
      </div>
    </div>
  );
}

export default Navbar;
