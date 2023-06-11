import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { IoArrowUndo } from "react-icons/io5";

const FormAddNote = () => {
  const [title, setTitle] = useState("");
  const [sumarry, setSumarry] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  // Get Endpoint /notes
  const saveNote = async (e) => {
    e.preventDefault();
    try {
      await axios.post(process.env.REACT_APP_API_URL + process.env.REACT_APP_ENDPOINT_NOTES, {
        title: title,
        sumarry: sumarry,
      });
      navigate("/dasbor");
    } catch (error) {
      if (error.message) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h2 className="title is-4 has-text-centered mt-6">
        <Link to={"/dasbor"}>
          <IoArrowUndo className="subtitle" title="Kembali" />
        </Link>
        &nbsp; Tambah Catatan Baru
      </h2>

      <div className="columns is-centered">
        <div className="column is-6">
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
      </div>
    </div>
  );
};

export default FormAddNote;
