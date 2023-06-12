import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import { BsInstagram, BsFacebook, BsLinkedin, BsGithub, BsYoutube, BsEnvelopeCheckFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div>
      <Layout>
        <div className="columns is-centered has-text-centered maps-title p-mobile-css">
          <div className="column is-10">
            <h1 className="title">Kontak Kami</h1>
            <p>Berikut adalah beberapa Informasi terkait My Introvert, silahkan hubungi Tim Kami segera jika dibutuhkan, untuk mendapatkan bantuan lebih lanjut. Tim Kami selalu siap 1x24 Jam, Semoga hari hari kamu menyenangkan.</p>
            <div className="sosmed">
              <Link>
                <BsInstagram title="Instagram" className="m-2 icon" />
              </Link>
              <Link>
                <BsFacebook title="Facebook" className="m-2 icon" />
              </Link>
              <Link>
                <BsLinkedin title="LinkedIn" className="m-2 icon" />
              </Link>
              <Link>
                <BsGithub title="GitHub" className="m-2 icon" />
              </Link>
              <Link>
                <BsYoutube title="YouTube" className="m-2 icon" />
              </Link>
              <Link>
                <BsEnvelopeCheckFill title="Email" className="m-2 icon" />
              </Link>
            </div>
          </div>
        </div>
        <div className="columns is-centered maps-address p-mobile-css">
          <div className="column is-10">
            <div className="container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.47919914666204!2d104.89100686293135!3d-4.827087138262567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e38a93ea714aa49%3A0xa1e776ce5dafee72!2sMY%20INTROVERT!5e0!3m2!1sid!2sid!4v1686438116934!5m2!1sid!2sid"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Contact;
