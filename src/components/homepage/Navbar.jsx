import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../../features/authSlice";
import { IoHome, IoPerson, IoLogOut, IoLockOpenSharp } from "react-icons/io5";
import logoNavbar from "../../assets/logo-color.png";

const Navbar = () => {
  // Active Menu
  const activeMenu = "navbar-item active-menu";
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
      <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <p className="title is-4 title-navbar">
              MY INTROVERT <img src={logoNavbar} className="img-nav" alt="Logo" />
            </p>
          </a>

          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navMenu" class="navbar-menu">
          <div class="navbar-end">
            <div class="navbar-item">
              <NavLink to={"/"} className={({ isActive }) => (isActive ? activeMenu : normalMenu)}>
                <IoHome />
                &nbsp;Beranda
              </NavLink>
              <NavLink to={"/about"} className={({ isActive }) => (isActive ? activeMenu : normalMenu)}>
                Tentang
              </NavLink>
              <NavLink to={"/news"} className={({ isActive }) => (isActive ? activeMenu : normalMenu)}>
                Berita
              </NavLink>
              <NavLink to={"/contact"} className={({ isActive }) => (isActive ? activeMenu : normalMenu)}>
                Kontak
              </NavLink>

              {/* If user not Logged */}
              {!user && (
                <Link to={"/login"} className="button is-primary ml-3">
                  <IoLockOpenSharp />
                  &nbsp;Masuk
                </Link>
              )}
              {/* If user Logged */}
              {user && (
                <div class="navbar-item has-dropdown is-hoverable ml-3">
                  <Link class="button">
                    <img src={user && user.urlImage} className="img-home" alt="Profil" /> {user && user.firstName + " ..."}
                  </Link>

                  <div class="navbar-dropdown">
                    <NavLink to={"/dasbor"} className={({ isActive }) => (isActive ? activeMenu : normalMenu)}>
                      <IoPerson />
                      &nbsp;Profil Saya
                    </NavLink>
                    <hr class="navbar-divider" />
                    <Link className="navbar-item" onClick={Logout}>
                      <IoLogOut />
                      &nbsp;Keluar
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
