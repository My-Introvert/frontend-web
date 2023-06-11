import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
// import { EditorState, convertToRaw } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
// import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from "axios";
import { IoDuplicate } from "react-icons/io5";

const FormAddBlog = () => {
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const [title, setTitle] = useState("");
  const [sumarry, setSumarry] = useState("");
  const [blog, setBlog] = useState("");
  const [label, setLabel] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveBlog = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", title);
    formData.append("sumarry", sumarry);
    formData.append("blog", blog);
    formData.append("label", label);
    try {
      // Get Endpoint /blogs
      await axios.post(process.env.REACT_APP_API_URL + process.env.REACT_APP_ENDPOINT_BLOGS, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/blogs");
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

  return (
    <div>
      <h1 className="title">Blog</h1>
      <h2 className="subtitle">Tambah Artikel</h2>

      <div className="columns is-centered mb-6 mt-6">
        <div className="column is-10">
          <div className="card is-shadowless">
            <div className="card-content">
              <div className="content">
                <form onSubmit={saveBlog}>
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
                    <label className="label">Judul Artikel</label>
                    <div className="control">
                      <input type="text" className="input" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Judul artikel kamu ..." />
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
                    <label className="label">Ringkasan Artikel</label>
                    <p className="text-small">Maksimal 200 Karakter</p>
                    <div className="control">
                      <textarea class="textarea" rows="2" value={sumarry} onChange={(e) => setSumarry(e.target.value)} placeholder="Ringkasan artikel kamu ..."></textarea>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Isi Artikel</label>
                    <p className="text-small">Maksimal 10.000 Karakter</p>
                    <div className="control">
                      <textarea class="textarea" rows="15" value={blog} onChange={(e) => setBlog(e.target.value)} placeholder="Ringkasan artikel kamu ..."></textarea>
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

export default FormAddBlog;
