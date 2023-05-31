import React from "react";
import heroImage from "../../assets/hero-image.png";
import { IoPerson } from "react-icons/io5";

const Hero = () => {
  return (
    <div>
      <section class="hero my-hero is-success mt-6">
        <div class="hero-body my-hero-child">
          <div className="container">
            <div className="columns">
              <div className="column is-10">
                <p class="title is-1 hero-title">Kami hadir untuk memberi kamu Solusi</p>
                <p class="subtitle hero-subtitle">My Introvert, sebuah Solusi Aplikasi untuk Introvert</p>
                <button className="button is-info hero-button">
                  <IoPerson />
                  &nbsp;Gabung Sekarang
                </button>
              </div>
              <div className="column is-2">
                <img src={heroImage} className="hero-image" alt="Icon" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
