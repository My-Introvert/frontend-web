import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { IoDuplicate, IoPencil, IoTrash, IoEyeSharp, IoBagCheckSharp } from "react-icons/io5";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    // Get Endpoint /books
    const response = await axios.get(process.env.REACT_APP_API_URL + process.env.REACT_APP_ENDPOINT_BOOKS);
    setBooks(response.data);
  };

  const deleteBook = async (bookId) => {
    // Get Endpoint /books
    await axios.delete(process.env.REACT_APP_API_URL + process.env.REACT_APP_ENDPOINT_BOOKS + "/" + bookId);
    getBooks();
  };

  return (
    <div>
      <h1 className="title">Saran Buku</h1>
      <h2 className="subtitle">Daftar Buku</h2>
      <Link to={"/books/add"} className="button is-success mb-3">
        <IoDuplicate /> &nbsp; Tambah Baru
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No.</th>
            <th>Judul</th>
            <th>Gambar</th>
            <th>Ringkasan</th>
            <th>Label</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book.uuid}>
              <td>{index + 1}</td>
              <td>{book.title}</td>
              <td>
                <figure class="image is-64x64">
                  <img src={book.urlImage} alt="Gambar" />
                </figure>
              </td>
              <td>{book.sumarry}</td>
              <td>
                <span className="tag is-primary is-light">{book.label}</span>
              </td>
              <td>
                <Link to={book.urlBuy} target="_blank" className="button is-small is-info mr-2 mb-2">
                  <IoBagCheckSharp /> &nbsp; Beli Buku
                </Link>
                <Link to={`/books/edit/${book.uuid}`} className="button is-small is-info mr-2 mb-2">
                  <IoPencil /> Ubah
                </Link>
                <button onClick={() => deleteBook(book.uuid)} className="button is-small is-danger">
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

export default BookList;
