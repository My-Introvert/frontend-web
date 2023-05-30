import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { IoLogOut } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";
import userImageDefault from "../assets/user-default.png";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const Logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/login");
  };

  return (
    <div>
      <nav className="navbar is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <NavLink to={"/dashboard"} className="navbar-item">
            <img src={logo} alt="Logo" width="112" height="28" />
          </NavLink>

          <a href="!#" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="navbar-item has-dropdown is-hoverable">
                <button className="button is-white navbar-link">{user && user.firstName + " " + user.lastName}</button>
                <div className="navbar-dropdown">
                  <a href="/me" className="navbar-item">
                    <img src={userImageDefault} alt="Profil" /> &nbsp; Profil Saya
                  </a>
                  <hr className="navbar-divider" />
                  <button className="button is-white is-fullwidth" onClick={Logout}>
                    <IoLogOut /> &nbsp; Keluar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
