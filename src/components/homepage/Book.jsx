import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Book = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    // Get Endpoint /books
    const response = await axios.get(process.env.REACT_APP_API_URL + process.env.REACT_APP_ENDPOINT_BOOKS);
    setBooks(response.data);
  };

  return (
    <div>
      <div className="columns mt-6">
        <div className="column">
          <h1 className="title is-3 has-text-centered mt-6">Rekomendasi Bacaan Buku</h1>
        </div>
      </div>

      <div class="tile is-ancestor tile-service pl-6 pr-6 mt-1">
        <div class="tile is-parent">
          <div className="columns">
            {books.map((book) => (
              <div className="column is-4">
                <Link>
                  <div class="card section-content p-3">
                    <span className="content-label">{book.label}</span>
                    <div class="card-image">
                      <figure class="image is-4by3">
                        <img src={book.urlImage} alt="Gambar" />
                      </figure>
                      <p class="title is-4 mt-2 p-1">{book.title}</p>
                      <p class="subtitle is-6 p-1">{book.sumarry}</p>
                    </div>
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

export default Book;
