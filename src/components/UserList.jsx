import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { IoAdd, IoPencil, IoTrash } from "react-icons/io5";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUsers(response.data);
  };

  const deleteUser = async (userId) => {
    await axios.delete(`http://localhost:5000/user/${userId}`);
    getUsers();
  };

  return (
    <div>
      <h1 className="title">Pengguna</h1>
      <h2 className="subtitle">Daftar Pengguna</h2>
      <Link to={"/users/add"} className="button is-success mb-3">
        <IoAdd /> Tambah Baru
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No.</th>
            <th>Nama</th>
            <th>Surel</th>
            <th>Peran</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.uuid}>
              <td>{index + 1}</td>
              <td>{user.firstName + " " + user.lastName}</td>
              <td>{user.email}</td>
              <td>
                <span className="tag is-primary is-light">{user.role}</span>
              </td>
              <td>
                <Link to={`/users/edit/${user.uuid}`} className="button is-small is-info mr-2 mb-2">
                  <IoPencil /> Ubah
                </Link>
                <button onClick={() => deleteUser(user.uuid)} className="button is-small is-danger">
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

export default UserList;
