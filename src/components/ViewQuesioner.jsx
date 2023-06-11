import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { IoArrowUndoSharp } from "react-icons/io5";

const ViewQuesioner = () => {
  const [quesioner, setQuesioner] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getQuesioner();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getQuesioner = async () => {
    // Get Endpoint /quesioner
    const response = await axios.get(process.env.REACT_APP_API_URL + process.env.REACT_APP_ENDPOINT_QUESIONERS + "/" + id);
    setQuesioner(response.data);
  };

  return (
    <div>
      <h1 className="title">Kuisioner</h1>
      <h2 className="subtitle">Rincian Kuisioner</h2>
      {/* Icon Back */}
      <Link to={"/quesioners"}>
        <IoArrowUndoSharp className="title is-3" title="Kembali" />
      </Link>

      {/* <div className="columns">
        <div className="column">
          <figure class="image is-128x128">
            <img src={quesioner.user.urlImage} alt="Gambar" />
          </figure>
        </div>
      </div> */}

      <div className="data-quesioner mt-3">
        <div className="columns is-centered">
          <div className="column is-10">
            <div class="table-container mb-6">
              <table class="table is-hoverable is-bordered is-fullwidth">
                <thead>
                  <tr className="is-selected">
                    <th>Atribut</th>
                    <th>Nilai</th>
                  </tr>
                </thead>
                <tbody>
                  {/* <tr>
                    <td>Nama Responden</td>
                    <td>{quesioner.user.firstName + " " + quesioner.user.lastName}</td>
                  </tr> */}
                  <tr>
                    <td>Usia Saat ini</td>
                    <td>{quesioner.age + " Tahun"}</td>
                  </tr>
                  {/* <tr>
                    <td>Email Aktif</td>
                    <td>{quesioner.user.email}</td>
                  </tr> */}
                  <tr>
                    <td>Apakah Introvert</td>
                    <td>{quesioner.yourIntrovert}</td>
                  </tr>
                  <tr>
                    <td>Level Introvert</td>
                    <td>{quesioner.levelIntrovert}</td>
                  </tr>
                  {/* <tr>
                    <td>Jenis Introvert</td>
                    <td>{quesioner.user.label}</td>
                  </tr> */}
                  <tr>
                    <td>Jenis Kelamin</td>
                    <td>{quesioner.gender}</td>
                  </tr>
                  <tr>
                    <td>Status</td>
                    <td>{quesioner.status}</td>
                  </tr>
                  <tr>
                    <td>Bicara Didepan Umum</td>
                    <td>{quesioner.publicSpeaking}</td>
                  </tr>
                  <tr>
                    <td>Menjadi Pemimpin</td>
                    <td>{quesioner.leadership}</td>
                  </tr>
                  <tr>
                    <td>Interaksi Dengan Orang Asing</td>
                    <td>{quesioner.meetStrangers}</td>
                  </tr>
                  <tr>
                    <td>Disuasana Keramaian</td>
                    <td>{quesioner.crowd}</td>
                  </tr>
                  <tr>
                    <td>Berbicara Dengan Teman Lama</td>
                    <td>{quesioner.oldFriends}</td>
                  </tr>
                  <tr>
                    <td>Mengikuti Kegiatan Online</td>
                    <td>{quesioner.onlineActivities}</td>
                  </tr>
                  <tr>
                    <td>Mengikuti Kegiatan Offline</td>
                    <td>{quesioner.offlineActivities}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="is-selected">
                    <th className="has-text-centered" colSpan={"2"}>
                      Data Kuisioner ini akan difungsikan untuk Personalisasi Konten
                    </th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewQuesioner;
