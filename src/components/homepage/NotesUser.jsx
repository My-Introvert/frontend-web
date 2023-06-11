import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { IoDuplicate, IoPencil, IoTrash } from "react-icons/io5";

const NotesUser = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    // Get Endpoint /notes
    const response = await axios.get(process.env.REACT_APP_API_URL + process.env.REACT_APP_ENDPOINT_NOTES);
    setNotes(response.data);
  };

  const deleteNote = async (noteId) => {
    // Get Endpoint /notes
    await axios.delete(process.env.REACT_APP_API_URL + process.env.REACT_APP_ENDPOINT_NOTES + "/" + noteId);
    getNotes();
  };

  return (
    <div>
      <div className="container mt-6">
        <h1 className="title is-4 has-text-centered">Catatan Harian</h1>
        <Link to={"/user/notes/add"} className="button is-primary mb-2">
          <IoDuplicate />
          &nbsp;Catatan Baru
        </Link>
        <table className="table is-striped is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>No.</th>
              <th>Judul</th>
              <th>Tanggal</th>
              <th>Catatan</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {notes.map((note, index) => (
              <tr key={note.uuid}>
                <td>{index + 1}</td>
                <td>{note.title}</td>
                <td>{note.createdAt}</td>
                <td>{note.sumarry}</td>
                <td>
                  <Link to={`/user/notes/edit/${note.uuid}`} className="button is-small is-info mr-2 mb-2">
                    <IoPencil />
                    &nbsp;Ubah
                  </Link>
                  <button onClick={() => deleteNote(note.uuid)} className="button is-small is-danger">
                    <IoTrash />
                    &nbsp;Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NotesUser;
