import React from "react";
import { Link } from "react-router-dom";
import { IoDuplicate, IoPencil, IoTrash } from "react-icons/io5";

const NotesUser = () => {
  return (
    <div>
      <div className="container mt-6">
        <h1 className="title is-4 has-text-centered">Catatan Harian</h1>
        <Link className="button is-primary mb-2">
          <IoDuplicate />
          &nbsp;Catatan Baru
        </Link>
        <table className="table is-striped is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>No.</th>
              <th>Judul</th>
              <th>Catatan</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>Catatan Pertama Saya</td>
              <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, reiciendis.</td>
              <td>
                <Link className="button is-small is-info mr-2 mb-2">
                  <IoPencil />
                  &nbsp;Ubah
                </Link>
                <button className="button is-small is-danger">
                  <IoTrash />
                  &nbsp;Hapus
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NotesUser;
