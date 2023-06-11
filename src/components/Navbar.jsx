import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logoNavbar from "../assets/logo-color.png";
import { IoLogOut, IoPerson, IoEarth } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";

const Navbar = () => {
  // Active Menu
  const activeMenu = "navbar-item is-active";
  const normalMenu = "navbar-item";

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
          <a class="navbar-item" href="/dashboard">
            <p className="title is-4">
              MY INTROVERT <img src={logoNavbar} className="img-nav" alt="Logo" />
            </p>
          </a>

          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navMenu" class="navbar-menu">
          <div class="navbar-end">
            <div class="navbar-item">
              <Link to={"/"} className="navbar-item" title="Beranda Web">
                <IoEarth />
                <span className="hidden">&nbsp;Situs</span>
              </Link>
              <div className="navbar-item has-dropdown is-hoverable">
                <button className="button is-white navbar-link">
                  <img src={user && user.urlImage} className="img-home" alt="Profil" /> {user && user.firstName + " " + user.lastName}
                </button>
                <div class="navbar-dropdown">
                  <NavLink to={"/users/:id"} className={({ isActive }) => (isActive ? activeMenu : normalMenu)}>
                    <IoPerson />
                    &nbsp;Profil Saya
                  </NavLink>
                  <hr class="navbar-divider" />
                  <a className="navbar-item" onClick={Logout}>
                    <IoLogOut />
                    &nbsp;Keluar
                  </a>
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
