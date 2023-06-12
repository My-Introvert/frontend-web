import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailBlog = () => {
  const [blog, setBlog] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getBlog = async () => {
      // Get Endpoint /blogs
      const response = await axios.get(process.env.REACT_APP_API_URL + process.env.REACT_APP_ENDPOINT_BLOGS + "/" + id);
      setBlog(response.data);
    };

    getBlog();
  }, [id]);

  return (
    <div>
      <div className="columns section-about p-mobile-css ml-0">
        <div className="column">
          <div className="container">
            <div class="tile is-ancestor">
              <div class="tile is-3 is-vertical is-parent">
                <div class="tile is-child box">
                  <div className="columns">
                    <div className="column">
                      <h1 className="title is-4 mb-3">Ringkasan</h1>
                      <span className="my-label-color">{blog.label}</span>
                      <p className="mt-1">{blog.sumarry}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tile is-parent">
                <div class="tile is-child box pb-6">
                  <h1 className="title mb-5">{blog.title}</h1>
                  <figure class="image mb-5">
                    <img src={blog.urlImage} alt="Gambar" />
                  </figure>
                  <p className="desc-about">{blog.blog}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBlog;
