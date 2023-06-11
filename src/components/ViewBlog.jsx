import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { IoArrowUndoSharp } from "react-icons/io5";
import userImage from "../../src/assets/user-default2.png";

const BlogView = () => {
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
      {/* Icon Back */}
      <Link to={"/blogs"}>
        <IoArrowUndoSharp className="title is-3" title="Kembali" />
      </Link>
      <div className="columns mb-6">
        <div className="column is-12">
          <div className="container">
            <div class="tile is-ancestor">
              <div class="tile is-3 is-vertical is-parent">
                <div class="tile is-child box">
                  <div className="columns is-centered">
                    <div className="column has-text-centered">
                      <figure class="image my-img-center is-128x128">
                        <img src={userImage} alt="Gambar" />
                      </figure>
                      <span className="my-lable">{blog.label}</span>
                      <p className="mt-2">{blog.sumarry}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tile is-parent">
                <div class="tile is-child box">
                  <p class="title is-4">{blog.title}</p>
                  <figure class="image">
                    <img src={blog.urlImage} alt="Gambar" />
                  </figure>
                  <p className="mt-5">{blog.blog}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogView;
