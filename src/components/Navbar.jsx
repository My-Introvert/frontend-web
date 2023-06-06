import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { IoLogOut, IoEarth } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const Logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    if (user.role === "admin" || user.role === "editor") {
      navigate("/login");
    } else {
      navigate("/");
    }
  };

  return (
    <div>
      <nav class="navbar is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <NavLink to={"/dashboard"} className="navbar-item">
            <img src={logo} alt="Logo" width="112" height="28" />
          </NavLink>

          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <Link to={"/"} className="navbar-item" title="Homepage">
              <IoEarth />
            </Link>
            <div className="navbar-item has-dropdown is-hoverable">
              <button className="button is-white navbar-link">{user && user.firstName + " " + user.lastName}</button>
              <div className="navbar-dropdown">
                <a href="/users/:id" className="navbar-item">
                  <img src={user && user.urlImage} alt="Profil" /> &nbsp; Profil Saya
                </a>
                <hr className="navbar-divider" />
                <button className="button is-white is-fullwidth" onClick={Logout}>
                  <IoLogOut /> &nbsp; Keluar
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
