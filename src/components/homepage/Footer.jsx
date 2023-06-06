import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="top-footer">
        <div class="content has-text-centered">
          <p>
            Dibuat dengan <span className="heart-footer">&#10084;</span> oleh{" "}
            <a href="https://github.com/My-Introvert">
              <strong>MY INTROVERT</strong>
            </a>{" "}
            | Copyright <strong>&copy; 2023 - {new Date().getFullYear()}</strong> All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
