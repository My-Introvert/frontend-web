import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const FormEditQuesioner = () => {
  const [yourIntrovert, setYourIntrovert] = useState("");
  const [levelIntrovert, setLevelIntrovert] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [publicSpeaking, setPublicSpeaking] = useState("");
  const [leadership, setLeadership] = useState("");
  const [meetStrangers, setMeetStrangers] = useState("");
  const [crowd, setCrowd] = useState("");
  const [oldFriends, setOldFriends] = useState("");
  const [onlineActivities, setOnlineActivities] = useState("");
  const [offlineActivities, setOfflineActivities] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getQuesionerById = async () => {
      try {
        // Get Endpoint /Quesioners
        const response = await axios.get(process.env.REACT_APP_API_URL + process.env.REACT_APP_ENDPOINT_QUESIONERS + "/" + id);
        setYourIntrovert(response.data.yourIntrovert);
        setLevelIntrovert(response.data.levelIntrovert);
        setAge(response.data.age);
        setGender(response.data.gender);
        setStatus(response.data.status);
        setPublicSpeaking(response.data.publicSpeaking);
        setLeadership(response.data.leadership);
        setMeetStrangers(response.data.meetStrangers);
        setCrowd(response.data.crowd);
        setOldFriends(response.data.oldFriends);
        setOnlineActivities(response.data.onlineActivities);
        setOfflineActivities(response.data.offlineActivities);
      } catch (error) {
        if (error.message) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getQuesionerById();
  }, [id]);

  const updateQuesioner = async (e) => {
    e.preventDefault();
    try {
      // Get Endpoint /Quesioner
      await axios.patch(process.env.REACT_APP_API_URL + process.env.REACT_APP_ENDPOINT_QUESIONERS + "/" + id, {
        yourIntrovert: yourIntrovert,
        levelIntrovert: levelIntrovert,
        age: age,
        gender: gender,
        status: status,
        publicSpeaking: publicSpeaking,
        leadership: leadership,
        meetStrangers: meetStrangers,
        crowd: crowd,
        oldFriends: oldFriends,
        onlineActivities: onlineActivities,
        offlineActivities: offlineActivities,
      });
      navigate("/quesioners");
    } catch (error) {
      if (error.message) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="title">Kuisioner</h1>
      <h2 className="subtitle">Perbarui Kuisioner</h2>

      <div className="columns is-centered mb-6 mt-6">
        <div className="column is-8">
          <div className="card is-shadowless">
            <div className="card-content">
              <div className="content">
                <form onSubmit={updateQuesioner}>
                  <p className="has-text-centered has-text-danger">{msg}</p>
                  <div className="field">
                    <label className="label">Apakah Kamu Introvert</label>
                    <div className="control">
                      <div className="select is-fullwidth">
                        <select value={yourIntrovert} onChange={(e) => setYourIntrovert(e.target.value)}>
                          <option value="choose">-- Pilih --</option>
                          <option value="Iya">Iya</option>
                          <option value="Tidak">Tidak</option>
                          <option value="Mungkin">Mungkin</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Level Introvert Kamu</label>
                    <div className="control">
                      <div className="select is-fullwidth">
                        <select value={levelIntrovert} onChange={(e) => setLevelIntrovert(e.target.value)}>
                          <option value="choose">-- Pilih --</option>
                          <option value="1">Sedikit Introvert</option>
                          <option value="2">Cukup Introvert</option>
                          <option value="3">Introvert</option>
                          <option value="4">Sangat Introvert</option>
                          <option value="5">Sangat Introvert Sekali</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Usia Kamu</label>
                    <div className="control">
                      <input type="number" className="input" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Usia kamu ..." required />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Jenis Kelamin</label>
                    <div className="control">
                      <div className="select is-fullwidth">
                        <select value={gender} onChange={(e) => setGender(e.target.value)}>
                          <option value="choose">-- Pilih --</option>
                          <option value="Laki-Laki">Laki-Laki</option>
                          <option value="Perempuan">Perempuan</option>
                          <option value="Lainnya">Lainnya</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Status Kamu</label>
                    <div className="control">
                      <div className="select is-fullwidth">
                        <select value={status} onChange={(e) => setStatus(e.target.value)}>
                          <option value="choose">-- Pilih --</option>
                          <option value="Mahasiswa">Mahasiswa</option>
                          <option value="Karyawan">Karyawan</option>
                          <option value="Freelancer">Freelancer</option>
                          <option value="Guru / Pengajar">Guru / Pengajar</option>
                          <option value="Kreator Digital">Kreator Digital</option>
                          <option value="Lainnya">Lainnya</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Berbicara di Depan Umum</label>
                    <div className="control">
                      <div className="select is-fullwidth">
                        <select value={publicSpeaking} onChange={(e) => setPublicSpeaking(e.target.value)}>
                          <option value="choose">-- Pilih --</option>
                          <option value="Sangat Tidak Nyaman">Sangat Tidak Nyaman</option>
                          <option value="Tidak Nyaman">Tidak Nyaman</option>
                          <option value="Nyaman">Nyaman</option>
                          <option value="Sangat Nyaman">Sangat Nyaman</option>
                          <option value="Sangat Nyaman Sekali">Sangat Nyaman Sekali</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Menjadi Pemimpin</label>
                    <div className="control">
                      <div className="select is-fullwidth">
                        <select value={leadership} onChange={(e) => setLeadership(e.target.value)}>
                          <option value="choose">-- Pilih --</option>
                          <option value="Sangat Tidak Nyaman">Sangat Tidak Nyaman</option>
                          <option value="Tidak Nyaman">Tidak Nyaman</option>
                          <option value="Nyaman">Nyaman</option>
                          <option value="Sangat Nyaman">Sangat Nyaman</option>
                          <option value="Sangat Nyaman Sekali">Sangat Nyaman Sekali</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Bertemu Orang Baru</label>
                    <div className="control">
                      <div className="select is-fullwidth">
                        <select value={meetStrangers} onChange={(e) => setMeetStrangers(e.target.value)}>
                          <option value="choose">-- Pilih --</option>
                          <option value="Sangat Tidak Nyaman">Sangat Tidak Nyaman</option>
                          <option value="Tidak Nyaman">Tidak Nyaman</option>
                          <option value="Nyaman">Nyaman</option>
                          <option value="Sangat Nyaman">Sangat Nyaman</option>
                          <option value="Sangat Nyaman Sekali">Sangat Nyaman Sekali</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Suasana Keramaian</label>
                    <div className="control">
                      <div className="select is-fullwidth">
                        <select value={crowd} onChange={(e) => setCrowd(e.target.value)}>
                          <option value="choose">-- Pilih --</option>
                          <option value="Sangat Tidak Nyaman">Sangat Tidak Nyaman</option>
                          <option value="Tidak Nyaman">Tidak Nyaman</option>
                          <option value="Nyaman">Nyaman</option>
                          <option value="Sangat Nyaman">Sangat Nyaman</option>
                          <option value="Sangat Nyaman Sekali">Sangat Nyaman Sekali</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Intraksi Dengan Teman Lama</label>
                    <div className="control">
                      <div className="select is-fullwidth">
                        <select value={oldFriends} onChange={(e) => setOldFriends(e.target.value)}>
                          <option value="choose">-- Pilih --</option>
                          <option value="Sangat Tidak Nyaman">Sangat Tidak Nyaman</option>
                          <option value="Tidak Nyaman">Tidak Nyaman</option>
                          <option value="Nyaman">Nyaman</option>
                          <option value="Sangat Nyaman">Sangat Nyaman</option>
                          <option value="Sangat Nyaman Sekali">Sangat Nyaman Sekali</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Mengikuti Kegiatan Online</label>
                    <div className="control">
                      <div className="select is-fullwidth">
                        <select value={onlineActivities} onChange={(e) => setOnlineActivities(e.target.value)}>
                          <option value="choose">-- Pilih --</option>
                          <option value="Sangat Tidak Nyaman">Sangat Tidak Nyaman</option>
                          <option value="Tidak Nyaman">Tidak Nyaman</option>
                          <option value="Nyaman">Nyaman</option>
                          <option value="Sangat Nyaman">Sangat Nyaman</option>
                          <option value="Sangat Nyaman Sekali">Sangat Nyaman Sekali</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Mengikuti Kegiatan Offline</label>
                    <div className="control">
                      <div className="select is-fullwidth">
                        <select value={offlineActivities} onChange={(e) => setOfflineActivities(e.target.value)}>
                          <option value="choose">-- Pilih --</option>
                          <option value="Sangat Tidak Nyaman">Sangat Tidak Nyaman</option>
                          <option value="Tidak Nyaman">Tidak Nyaman</option>
                          <option value="Nyaman">Nyaman</option>
                          <option value="Sangat Nyaman">Sangat Nyaman</option>
                          <option value="Sangat Nyaman Sekali">Sangat Nyaman Sekali</option>
                        </select>
                      </div>
                    </div>
                  </div>
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

export default FormEditQuesioner;
