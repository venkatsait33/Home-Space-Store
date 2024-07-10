import { FaBarsStaggered } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../redux/userSlice";

const NavBar = () => {
  const dispatch = useDispatch();

  const handleTheme = () => {
    dispatch(toggleTheme());
  };
  return (
    <nav className=" bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          <Link
            to="/"
            className="items-center text-xl max-[560px]:hidden btn btn-primary"
          >
            Store
          </Link>

          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost md:hidden  max-[560px]:flex max-[960px]:hidden"
            >
              <FaBarsStaggered className="w-6 h-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center max-[560px]:hidden lg:flex">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          {/* THEME SETUP */}
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={handleTheme} />
            {/* sun icon*/}
            <BsSunFill className="w-4 h-4 swap-on" />
            {/* moon icon*/}
            <BsMoonFill className="w-4 h-4 swap-off" />
          </label>
          {/* CART LINK */}
          <NavLink to="/cart" className="ml-4 btn btn-ghost btn-circle btn-md">
            <div className="indicator">
              <BsCart3 className="w-6 h-6" />
              <span className="badge badge-sm badge-primary indicator-item">
                0
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
