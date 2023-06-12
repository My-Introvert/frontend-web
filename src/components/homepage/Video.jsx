import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Video = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    // Get Endpoint /videos
    const response = await axios.get(process.env.REACT_APP_API_URL + process.env.REACT_APP_ENDPOINT_VIDEOS);
    setVideos(response.data);
  };

  return (
    <div>
      <div className="columns mt-6">
        <div className="column">
          <h1 className="title is-3 has-text-centered mt-6">Rekomendasi Vidio</h1>
        </div>
      </div>

      <div class="tile is-ancestor tile-service pl-6 pr-6 mt-1">
        <div class="tile is-parent">
          <div className="columns">
            {videos.map((video) => (
              <div className="column is-4">
                <Link>
                  <div class="card section-content p-3">
                    <span className="content-label">{video.label}</span>
                    <iframe
                      className="iframe-yt"
                      src={video.embededUrl}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                    <p class="title is-4 mt-2 p-1">{video.title}</p>
                    <p class="subtitle is-6 p-1">{video.sumarry}</p>
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

export default Video;
