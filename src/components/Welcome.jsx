import React from "react";
import { useSelector } from "react-redux";

const Welcome = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <h1 className="title">Dasbor</h1>
      <h2 className="subtitle">
        Selamat datang, <strong>{user && user.firstName + " " + user.lastName}</strong>
      </h2>

      {/* Info */}
      <div class="tile is-ancestor">
        <div class="tile is-parent column is-3">
          <article class="tile is-child box">
            <p class="title is-4">Pengguna</p>
            <p class="subtitle is-5">Total : ...</p>
          </article>
        </div>
        <div class="tile is-parent column is-3">
          <article class="tile is-child box">
            <p class="title is-4">Vidio</p>
            <p class="subtitle is-5">Total : ...</p>
          </article>
        </div>
        <div class="tile is-parent column is-3">
          <article class="tile is-child box">
            <p class="title is-4">Artikel</p>
            <p class="subtitle is-5">Total : ...</p>
          </article>
        </div>
        <div class="tile is-parent column is-3">
          <article class="tile is-child box">
            <p class="title is-4">Buku</p>
            <p class="subtitle is-5">Total : ...</p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
