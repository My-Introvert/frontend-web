import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { IoDuplicate, IoPencil, IoTrash, IoEyeSharp } from "react-icons/io5";

const QuesionerList = () => {
  const [quesioners, setQuesioners] = useState([]);

  useEffect(() => {
    getQuesioners();
  }, []);

  const getQuesioners = async () => {
    // Get Endpoint /quesioners
    const response = await axios.get(process.env.REACT_APP_API_URL + process.env.REACT_APP_ENDPOINT_QUESIONERS);
    setQuesioners(response.data);
  };

  const deleteQuesioner = async (quesionerId) => {
    // Get Endpoint /quesioners
    await axios.delete(process.env.REACT_APP_API_URL + process.env.REACT_APP_ENDPOINT_QUESIONERS + "/" + quesionerId);
    getQuesioners();
  };

  return (
    <div>
      <h1 className="title">Kuisioner</h1>
      <h2 className="subtitle">Daftar Kuisioner</h2>
      <Link to={"/quesioners/add"} className="button is-success mb-3">
        <IoDuplicate /> &nbsp; Tambah Baru
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No.</th>
            <th>Nama</th>
            <th>Introvert</th>
            <th>Email</th>
            <th>Label</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {quesioners.map((quesioner, index) => (
            <tr key={quesioner.uuid}>
              <td>{index + 1}</td>
              <td>{quesioner.user.firstName + " " + quesioner.user.lastName}</td>
              <td>{quesioner.yourIntrovert}</td>
              <td>{quesioner.user.email}</td>
              <td>
                <span className="tag is-primary is-light">{quesioner.user.label}</span>
              </td>
              <td>
                <Link to={`/quesioners/view/${quesioner.uuid}`} className="button is-small is-info mr-2 mb-2">
                  <IoEyeSharp /> &nbsp; Lihat
                </Link>
                <Link to={`/quesioners/edit/${quesioner.uuid}`} className="button is-small is-info mr-2 mb-2">
                  <IoPencil /> Ubah
                </Link>
                <button onClick={() => deleteQuesioner(quesioner.uuid)} className="button is-small is-danger">
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

export default QuesionerList;
