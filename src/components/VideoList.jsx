import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { IoDuplicate, IoPencil, IoTrash } from "react-icons/io5";

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    // Get Endpoint /videos
    const response = await axios.get(process.env.REACT_APP_API_URL + process.env.REACT_APP_ENDPOINT_VIDEOS);
    setVideos(response.data);
  };

  const deleteVideo = async (videoId) => {
    // Get Endpoint /videos
    await axios.delete(process.env.REACT_APP_API_URL + process.env.REACT_APP_ENDPOINT_VIDEOS + "/" + videoId);
    getVideos();
  };

  return (
    <div>
      <h1 className="title">Vidio</h1>
      <h2 className="subtitle">Daftar Vidio</h2>
      <Link to={"/videos/add"} className="button is-success mb-3">
        <IoDuplicate /> &nbsp; Tambah Baru
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No.</th>
            <th>Judul</th>
            <th>Ringkasan</th>
            <th>URL</th>
            <th>Label</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {videos.map((video, index) => (
            <tr key={video.uuid}>
              <td>{index + 1}</td>
              <td>{video.title}</td>
              <td>{video.sumarry}</td>
              <td>
                <iframe width="200" height="100" src={video.embededUrl} title="Vidio"></iframe>
              </td>
              <td>
                <span className="tag is-primary is-light">{video.label}</span>
              </td>
              <td>
                <Link to={`/videos/edit/${video.uuid}`} className="button is-small is-info mr-2 mb-2">
                  <IoPencil /> Ubah
                </Link>
                <button onClick={() => deleteVideo(video.uuid)} className="button is-small is-danger">
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

export default VideoList;
