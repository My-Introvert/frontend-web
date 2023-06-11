import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { IoArrowBackOutline, IoDuplicate } from "react-icons/io5";

const Login = () => {
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

  const Register = async (e) => {
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
      navigate("/login");
    } catch (error) {
      if (error.message) {
        setMsg(error.response.data.msg);
      }
    }
  };

  // Load Image
  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-5">
              <form onSubmit={Register} className="box">
                <h1 className="title is-3 has-text-centered">Mendaftar Akun</h1>
                <hr class="navbar-divider" />
                <div className="columns is-centered">
                  <div className="column">
                    <div class="file mt-1">
                      <label class="file-label">
                        <input class="file-input" type="file" onChange={loadImage} />
                        <span class="file-cta">
                          <span class="file-icon">
                            <IoDuplicate />
                          </span>
                          <span class="file-label">Pilih Gambar</span>
                        </span>
                      </label>
                    </div>
                    {preview ? (
                      <figure className="image is-128x128 mt-2 img-register">
                        <img src={preview} alt="Preview" style={{ marginLeft: "-55px" }} />
                      </figure>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="columns mb-0">
                  <div className="column">
                    <div className="field">
                      <label className="label">Nama Depan</label>
                      <div className="control">
                        <input type="text" className="input" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Nama depan ..." />
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="field">
                      <label className="label">Nama Belakang</label>
                      <div className="control">
                        <input type="text" className="input" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Nama belakang ..." />
                      </div>
                    </div>
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
                <p className="has-text-centered has-text-danger">{msg}</p>
                <div className="field mt-5 has-text-centered">
                  <button type="submit" className="button is-success is-fullwidth">
                    Mendaftar
                  </button>
                  <Link to={"/"} className="button is-ghost mt-1">
                    <IoArrowBackOutline />
                    Kembali ke Beranda
                  </Link>
                  <Link to={"/login"} className="button is-ghost mt-1">
                    atau Masuk ?
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
