import React, { useState, useEffect } from "react";
import axios from "axios";

const PageProfile = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getInfoUser();
  }, []);

  const getInfoUser = async () => {
    const response = await axios.get("http://localhost:5000/me");
    setUser(response.data);
  };

  return (
    <div>
      <div className="container">
        <section class="hero is-primary has-text-centered" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div class="hero-body">
            <figure class="image is-128x128">
              <img class="is-rounded" alt="Profile" src={user.urlImage} />
            </figure>
            <p class="title">{user.firstName + " " + user.lastName}</p>
            <p class="subtitle">Peran : {user.role}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PageProfile;
