import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import { IoDuplicate, IoArrowUndo } from "react-icons/io5";

const FormEditUser = () => {
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
  const { id } = useParams();

  useEffect(() => {
    const getUserById = async () => {
      try {
        // Get Endpoint /users
        const response = await axios.get(process.env.REACT_APP_API_URL + process.env.REACT_APP_ENDPOINT_USERS + "/" + id);
        setFile(response.data.image);
        setPreview(response.data.urlImage);
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmail(response.data.email);
        setRole(response.data.role);
        setLabel(response.data.label);
      } catch (error) {
        if (error.message) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getUserById();
  }, [id]);

  const updateUser = async (e) => {
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
      await axios.patch(process.env.REACT_APP_API_URL + process.env.REACT_APP_ENDPOINT_USERS + "/" + id, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/dasbor");
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
      <h2 className="title is-4 has-text-centered mt-6 mb-6">
        <Link to={"/dasbor"}>
          <IoArrowUndo className="subtitle" title="Kembali" />
        </Link>
        &nbsp; Perbarui Profil
      </h2>
      <div className="columns is-centered mb-6 mt-3">
        <div className="column is-6">
          <div className="card is-shadowless">
            <div className="card-content">
              <div className="content">
                <form onSubmit={updateUser}>
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
                    <div className="control">
                      <button type="submit" className="button is-success">
                        Perbarui
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

export default FormEditUser;
