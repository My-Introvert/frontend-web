import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { IoArrowUndoSharp, IoDuplicate } from "react-icons/io5";

const FormAddUser = () => {
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [role, setRole] = useState("");
  const [label, setLabel] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("confPassword", confPassword);
    formData.append("role", role);
    formData.append("label", label);
    try {
      // Get Endpoint /users
      await axios.post(process.env.REACT_APP_API_URL + process.env.REACT_APP_ENDPOINT_USERS, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/users");
    } catch (error) {
      if (error.message) {
        setMsg(error.response.data.msg);
      }
    }
  };

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  return (
    <div>
      <h1 className="title">Pengguna</h1>
      <h2 className="subtitle">Tambah Pengguna Baru</h2>
      {/* Icon Back */}
      <Link to={"/users"}>
        <IoArrowUndoSharp className="title is-3" title="Kembali" />
      </Link>

      <div className="columns is-centered mb-6">
        <div className="column is-8">
          <div className="card is-shadowless">
            <div className="card-content">
              <div className="content">
                <form onSubmit={saveUser}>
                  <p className="has-text-centered has-text-danger">{msg}</p>
                  <div class="file mb-5">
                    <label class="file-label">
                      <input class="file-input" type="file" onChange={loadImage} />
                      <span class="file-cta">
                        <span class="file-icon">
                          <IoDuplicate />
                        </span>
                        <span class="file-label">Pilih Foto Profil</span>
                      </span>
                    </label>
                  </div>

                  {preview ? (
                    <figure className="image is-128x128">
                      <img src={preview} alt="Preview" style={{ marginLeft: "-55px" }} />
                    </figure>
                  ) : (
                    ""
                  )}

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
                    <label className="label">Label</label>
                    <div className="control">
                      <div className="select is-fullwidth">
                        <select value={label} onChange={(e) => setLabel(e.target.value)}>
                          <option value="choose">-- Pilih --</option>
                          <option value="not-label">Not-Label</option>
                          <option value="social-introvert">Social Introvert</option>
                          <option value="thinking-introvert">Thinking Introvert</option>
                          <option value="anxious-introvert">Anxious Introvert</option>
                          <option value="restrained-introvert">Restrained Introvert</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Role</label>
                    <div className="control">
                      <div className="select is-fullwidth">
                        <select value={role} onChange={(e) => setRole(e.target.value)}>
                          <option value="choose">-- Pilih --</option>
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
      </div>
    </div>
  );
};

export default FormAddUser;
