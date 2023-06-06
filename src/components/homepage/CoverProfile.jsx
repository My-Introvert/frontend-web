import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoPencil } from "react-icons/io5";

const CoverProfile = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <section class="hero my-cover">
        <div class="hero-body cover-body">
          <p class="title is-4">Saya Introvert</p>
          <p class="subtitle is-6">Social, Thinking, Anxious, Restrained</p>
        </div>
      </section>
      <figure class="image img-cover is-128x128">
        <img src={user && user.urlImage} className="is-rounded" alt="Profil" />
      </figure>
      <div className="bio">
        <p className="title is-4">{user && user.firstName + " " + user.lastName}</p>
        <p className="subtitle is-6">Web Developer | Content Creators | Digital Marketer</p>
        <p className="subtitle is-6 mt-min">Surel : {user && user.email}</p>
        <Link className="button is-small edit-bio">
          Ubah Bio &nbsp;
          <IoPencil />
        </Link>
      </div>
    </div>
  );
};

export default CoverProfile;
