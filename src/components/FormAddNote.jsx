import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { IoArrowUndoSharp } from "react-icons/io5";

const FormAddNote = () => {
  const [title, setTitle] = useState("");
  const [sumarry, setSumarry] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveNote = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/note", {
        title: title,
        sumarry: sumarry,
      });
      navigate("/notes");
    } catch (error) {
      if (error.message) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="title">Catatan</h1>
      <h2 className="subtitle">Tambah Catatan Baru</h2>
      {/* Icon Back */}
      <Link to={"/notes"}>
        <IoArrowUndoSharp className="title is-3" title="Kembali" />
      </Link>

      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveNote}>
              <p className="has-text-centered has-text-danger">{msg}</p>
              <div className="field">
                <label className="label">Judul</label>
                <div className="control">
                  <input type="text" className="input" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Judul catatan ..." required />
                </div>
              </div>
              <div className="field">
                <label className="label">Catatan</label>
                <div className="control">
                  <textarea class="textarea" value={sumarry} onChange={(e) => setSumarry(e.target.value)} placeholder="Catatan kamu ..." required></textarea>
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

export default FormAddNote;
