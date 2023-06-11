import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { IoDuplicate, IoPencil, IoTrash, IoEyeSharp } from "react-icons/io5";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    // Get Endpoint /blogss
    const response = await axios.get(process.env.REACT_APP_API_URL + process.env.REACT_APP_ENDPOINT_BLOGS);
    setBlogs(response.data);
  };

  const deleteBlog = async (blogId) => {
    // Get Endpoint /blogs
    await axios.delete(process.env.REACT_APP_API_URL + process.env.REACT_APP_ENDPOINT_BLOGS + "/" + blogId);
    getBlogs();
  };

  return (
    <div>
      <h1 className="title">Blog</h1>
      <h2 className="subtitle">Daftar Artikel</h2>
      <Link to={"/blogs/add"} className="button is-success mb-3">
        <IoDuplicate /> &nbsp; Tambah Baru
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No.</th>
            <th>Judul</th>
            <th>Gambar</th>
            <th>Ringkasan</th>
            <th>Label</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog, index) => (
            <tr key={blog.uuid}>
              <td>{index + 1}</td>
              <td>{blog.title}</td>
              <td>
                <figure class="image is-96x96">
                  <img src={blog.urlImage} alt="Gambar" />
                </figure>
              </td>
              <td>{blog.sumarry}</td>
              <td>
                <span className="tag is-primary is-light">{blog.label}</span>
              </td>
              <td>
                <Link to={`/blogs/view/${blog.uuid}`} className="button is-small is-info mr-2 mb-2">
                  <IoEyeSharp /> &nbsp; Lihat
                </Link>
                <Link to={`/blogs/edit/${blog.uuid}`} className="button is-small is-info mr-2 mb-2">
                  <IoPencil /> Ubah
                </Link>
                <button onClick={() => deleteBlog(blog.uuid)} className="button is-small is-danger">
                  <IoTrash /> Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlogList;
