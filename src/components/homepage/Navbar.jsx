import React from "react";
import { NavLink } from "react-router-dom";
import { IoHome, IoPerson } from "react-icons/io5";
import logoNavbar from "../../assets/logo-color.png";

const Navbar = () => {
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
              <NavLink className={"navbar-item"}>
                <IoHome />
                &nbsp;Beranda
              </NavLink>
              <NavLink className={"navbar-item"}>Tentang</NavLink>
              <NavLink className={"navbar-item"}>Berita</NavLink>
              <NavLink className={"navbar-item"}>Kontak</NavLink>
              <a href="/login" class="button is-primary ml-5">
                <IoPerson />
                &nbsp;Masuk
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
