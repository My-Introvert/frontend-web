import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoPerson, IoBook, IoHome, IoLogOut } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";

const Sidebar = () => {
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
            <NavLink to={"/dashboard"}>
              <IoHome /> Dasbor
            </NavLink>
          </li>
          <li>
            <NavLink to={"/notes"}>
              <IoBook /> Catatan Harian
            </NavLink>
          </li>
        </ul>

        {/* Admin only */}
        {user && user.role === "admin" && (
          <div>
            <p className="menu-label">Admin</p>
            <ul className="menu-list">
              <li>
                <NavLink to={"/users"}>
                  <IoPerson /> Pengguna
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