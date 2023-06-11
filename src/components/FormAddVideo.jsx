import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { IoArrowUndoSharp } from "react-icons/io5";

const FormAddVideo = () => {
  const [title, setTitle] = useState("");
  const [sumarry, setSumarry] = useState("");
  const [embededUrl, setEmbededUrl] = useState("");
  const [label, setLabel] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  // Get Endpoint /videos
  const saveVideo = async (e) => {
    e.preventDefault();
    try {
      await axios.post(process.env.REACT_APP_API_URL + process.env.REACT_APP_ENDPOINT_VIDEOS, {
        title: title,
        sumarry: sumarry,
        embededUrl: embededUrl,
        label: label,
      });
      navigate("/videos");
    } catch (error) {
      if (error.message) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="title">Vidio</h1>
      <h2 className="subtitle">Tambah Vidio Baru</h2>
      {/* Icon Back */}
      <Link to={"/videos"}>
        <IoArrowUndoSharp className="title is-3" title="Kembali" />
      </Link>

      <div className="columns is-centered mb-6">
        <div className="column is-10">
          <div className="card is-shadowless">
            <div className="card-content">
              <div className="content">
                <form onSubmit={saveVideo}>
                  <p className="has-text-centered has-text-danger">{msg}</p>
                  <div className="field">
                    <label className="label">Judul Vidio</label>
                    <div className="control">
                      <input type="text" className="input" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Judul vidio ..." required />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Ringkasan Vidio</label>
                    <div className="control">
                      <textarea class="textarea" value={sumarry} onChange={(e) => setSumarry(e.target.value)} placeholder="Ringkasan vidio ..." required></textarea>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">URL Vidio</label>
                    <div className="control">
                      <input type="url" className="input" value={embededUrl} onChange={(e) => setEmbededUrl(e.target.value)} placeholder="Embeded URL vidio ..." required />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Label Vidio</label>
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

export default FormAddVideo;
