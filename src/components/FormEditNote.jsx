import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const FormEditNote = () => {
  const [title, setTitle] = useState("");
  const [sumarry, setSumarry] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getNoteById = async () => {
      try {
        // Get Endpoint /notes
        const response = await axios.get(process.env.REACT_APP_API_URL + process.env.REACT_APP_ENDPOINT_NOTES + "/" + id);
        setTitle(response.data.title);
        setSumarry(response.data.sumarry);
      } catch (error) {
        if (error.message) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getNoteById();
  }, [id]);

  const updateNote = async (e) => {
    e.preventDefault();
    try {
      // Get Endpoint /notes
      await axios.patch(process.env.REACT_APP_API_URL + process.env.REACT_APP_ENDPOINT_NOTES + "/" + id, {
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
      <h2 className="subtitle">Perbarui Catatan</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updateNote}>
              <p className="has-text-centered has-text-danger">{msg}</p>
              <div className="field">
                <label className="label">Judul</label>
                <div className="control">
                  <input type="text" className="input" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Judul catatan ..." />
                </div>
              </div>
              <div className="field">
                <label className="label">Catatan</label>
                <div className="control">
                  <textarea class="textarea" value={sumarry} onChange={(e) => setSumarry(e.target.value)} placeholder="Catatan kamu ..."></textarea>
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
  );
};

export default FormEditNote;
