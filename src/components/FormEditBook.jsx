import React, { useState, useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { EditorState, convertToRaw } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
// import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from "axios";
import { IoDuplicate } from "react-icons/io5";

const FormEditBook = () => {
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const [title, setTitle] = useState("");
  const [sumarry, setSumarry] = useState("");
  const [urlBuy, setUrlBuy] = useState("");
  const [label, setLabel] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getBookById = async () => {
      try {
        // Get Endpoint /books
        const response = await axios.get(process.env.REACT_APP_API_URL + process.env.REACT_APP_ENDPOINT_BOOKS + "/" + id);
        setFile(response.data.image);
        setPreview(response.data.urlImage);
        setTitle(response.data.title);
        setSumarry(response.data.sumarry);
        setUrlBuy(response.data.urlBuy);
        setLabel(response.data.label);
      } catch (error) {
        if (error.message) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getBookById();
  }, [id]);

  const updateBook = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", title);
    formData.append("sumarry", sumarry);
    formData.append("urlBuy", urlBuy);
    formData.append("label", label);
    try {
      // Get Endpoint /books
      await axios.patch(process.env.REACT_APP_API_URL + process.env.REACT_APP_ENDPOINT_BOOKS + "/" + id, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/books");
    } catch (error) {
      if (error.message) {
        setMsg(error.response.data.msg);
      }
    }
  };

  //   WYSIWYG Editor
  //   const [editorState, setEditorState] = useState(EditorState.createEmpty());
  //   const handleChange = (data) => {
  //     setEditorState(data);
  //   };
  //   var htmlData = useMemo(() => draftToHtml(convertToRaw(editorState.getCurrentContent())), [editorState]);

  //   const toolbarOptions = {
  //     options: ["inline", "fontSize", "image", "emoji"],
  //     inline: {
  //       options: ["bold", "italic", "underline", "strikethrough"],
  //     },
  //   };
  //   End WYSIWYG Editor

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  return (
    <div>
      <h1 className="title">Buku</h1>
      <h2 className="subtitle">Tambah Buku</h2>

      <div className="columns is-centered mb-6 mt-6">
        <div className="column is-10">
          <div className="card is-shadowless">
            <div className="card-content">
              <div className="content">
                <form onSubmit={updateBook}>
                  <p className="has-text-centered has-text-danger">{msg}</p>
                  <div class="file mb-5">
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
                    <figure className="image is-128x128">
                      <img src={preview} alt="Preview" style={{ marginLeft: "-55px" }} />
                    </figure>
                  ) : (
                    ""
                  )}

                  <div className="field">
                    <label className="label">Judul Buku</label>
                    <div className="control">
                      <input type="text" className="input" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Judul buku ..." />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Label Konten</label>
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
                    <label className="label">Ringkasan Buku</label>
                    <p className="text-small">Maksimal 1000 Karakter</p>
                    <div className="control">
                      <textarea class="textarea" rows="8" value={sumarry} onChange={(e) => setSumarry(e.target.value)} placeholder="Ringkasan artikel kamu ..."></textarea>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">URL Beli Buku</label>
                    <div className="control">
                      <input type="text" className="input" value={urlBuy} onChange={(e) => setUrlBuy(e.target.value)} placeholder="URL buku ..." />
                    </div>
                  </div>
                  {/* WYSIWYG */}
                  {/* <label className="label">Isi Artikel</label>
                  <div className="app">
                    <Editor editorState={editorState} onEditorStateChange={handleChange} wrapperClassName="editor-wrapper" editorClassName="message-editor" toolbarClassName="message-toolbar" toolbar={toolbarOptions} />
                    <div className="html-output">{htmlData}</div>
                  </div> */}
                  {/* End WYSIWYG */}
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

export default FormEditBook;
