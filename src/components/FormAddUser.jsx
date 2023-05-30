import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { IoArrowUndoSharp } from "react-icons/io5";

const FormAddUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [role, setRole] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/user", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        confPassword: confPassword,
        role: role,
      });
      navigate("/users");
    } catch (error) {
      if (error.message) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="title">Pengguna</h1>
      <h2 className="subtitle">Tambah Pengguna Baru</h2>
      {/* Icon Back */}
      <Link to={"/users"}>
        <IoArrowUndoSharp className="title is-3" title="Kembali" />
      </Link>

      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveUser}>
              <p className="has-text-centered has-text-danger">{msg}</p>
              <div className="field">
                <label className="label">Nama Depan</label>
                <div className="control">
                  <input type="text" className="input" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Nama depan ..." />
                </div>
              </div>
              <div className="field">
                <label className="label">Nama Belakang</label>
                <div className="control">
                  <input type="text" className="input" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Nama belakang ..." />
                </div>
              </div>
              <div className="field">
                <label className="label">Surel</label>
                <div className="control">
                  <input type="text" className="input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Surel kamu ..." />
                </div>
              </div>
              <div className="field">
                <label className="label">Kata Sandi</label>
                <div className="control">
                  <input type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="******" />
                </div>
              </div>
              <div className="field">
                <label className="label">Konfirmasi Kata Sandi</label>
                <div className="control">
                  <input type="password" className="input" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} placeholder="******" />
                </div>
              </div>
              <div className="field">
                <label className="label">Role</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                      <option value="admin">Admin</option>
                      <option value="editor">Editor</option>
                      <option value="user">User</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Simpan
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddUser;
