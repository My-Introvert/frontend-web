import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoPerson, IoBook, IoBookOutline, IoHome, IoLogOut, IoBrowsersSharp, IoFilmOutline, IoMic, IoGlobeOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";

const Sidebar = () => {
  // Active Menu
  const activeMenu = "is-active";
  const normalMenu = "";

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
      <aside className="menu pl-3 has-shadow">
        <p className="menu-label">Umum</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/dashboard"} className={({ isActive }) => (isActive ? activeMenu : normalMenu)}>
              <IoHome /> Dasbor
            </NavLink>
          </li>
          <li>
            <NavLink to={"/notes"} className={({ isActive }) => (isActive ? activeMenu : normalMenu)}>
              <IoBook /> Catatan
            </NavLink>
          </li>
          <li>
            <NavLink to={"/quesioners"} className={({ isActive }) => (isActive ? activeMenu : normalMenu)}>
              <IoBrowsersSharp /> Kuisioner
            </NavLink>
          </li>
        </ul>

        {/* Admin only */}
        {user && user.role === "admin" && (
          <div>
            <p className="menu-label">Admin</p>
            <ul className="menu-list">
              <li>
                <NavLink to={"/users"} className={({ isActive }) => (isActive ? activeMenu : normalMenu)}>
                  <IoPerson /> Pengguna
                </NavLink>
              </li>
              <li>
                <NavLink to={"/blogs"} className={({ isActive }) => (isActive ? activeMenu : normalMenu)}>
                  <IoBook /> Artikel
                </NavLink>
              </li>
              <li>
                <NavLink to={"/videos"} className={({ isActive }) => (isActive ? activeMenu : normalMenu)}>
                  <IoFilmOutline /> Vidio
                </NavLink>
              </li>
              <li>
                <NavLink to={"/podcasts"} className={({ isActive }) => (isActive ? activeMenu : normalMenu)}>
                  <IoMic /> Podcast
                </NavLink>
              </li>
              <li>
                <NavLink to={"/books"} className={({ isActive }) => (isActive ? activeMenu : normalMenu)}>
                  <IoBookOutline /> Saran Buku
                </NavLink>
              </li>
              <li>
                <NavLink to={"/news/list"} className={({ isActive }) => (isActive ? activeMenu : normalMenu)}>
                  <IoGlobeOutline /> Berita
                </NavLink>
              </li>
            </ul>
          </div>
        )}
        {/* End admin only */}

        <p className="menu-label">Pengaturan</p>
        <ul className="menu-list">
          <li>
            <button className="button is-white" onClick={Logout}>
              <IoLogOut /> Keluar
            </button>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
