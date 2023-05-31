import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { IoDuplicate, IoPencil, IoTrash } from "react-icons/io5";

const NoteList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    const response = await axios.get("http://localhost:5000/notes");
    setNotes(response.data);
  };

  const deleteNote = async (noteId) => {
    await axios.delete(`http://localhost:5000/note/${noteId}`);
    getNotes();
  };

  return (
    <div>
      <h1 className="title">Catatan</h1>
      <h2 className="subtitle">Daftar Catatan</h2>
      <Link to={"/notes/add"} className="button is-success mb-3">
        <IoDuplicate /> &nbsp; Tambah Baru
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No.</th>
            <th>Judul</th>
            <th>Ringkasan</th>
            <th>Dibuat Oleh</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((note, index) => (
            <tr key={note.uuid}>
              <td>{index + 1}</td>
              <td>{note.title}</td>
              <td>{note.sumarry}</td>
              <td>
                {note.user.firstName + " " + note.user.lastName} <br />
                <p className="tag is-success is-light">{note.user.role}</p>
              </td>
              <td>
                <Link to={`/notes/edit/${note.uuid}`} className="button is-small is-info mr-2 mb-2">
                  <IoPencil /> Ubah
                </Link>
                <button onClick={() => deleteNote(note.uuid)} className="button is-small is-danger">
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

export default NoteList;
