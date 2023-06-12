import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    // Get Endpoint /blogss
    const response = await axios.get(process.env.REACT_APP_API_URL + process.env.REACT_APP_ENDPOINT_BLOGS);
    setBlogs(response.data);
  };

  return (
    <div>
      <div className="columns mt-6">
        <div className="column">
          <h1 className="title is-3 has-text-centered mt-6">Rekomendasi Artikel</h1>
        </div>
      </div>

      <div class="tile is-ancestor tile-service pl-6 pr-6 mt-1">
        <div class="tile is-parent">
          <div className="columns">
            {blogs.map((blog) => (
              <div className="column is-4">
                <Link to={`/blogs/detail/${blog.uuid}`}>
                  <div class="card section-content p-3">
                    <span className="content-label">{blog.label}</span>
                    <div class="card-image">
                      <figure class="image is-4by3">
                        <img src={blog.urlImage} alt="Gambar" />
                      </figure>
                      <p class="title is-4 mt-2 p-1">{blog.title}</p>
                      <p class="subtitle is-6 p-1">{blog.sumarry}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
