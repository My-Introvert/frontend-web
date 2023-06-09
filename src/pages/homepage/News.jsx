import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";

const News = () => {
  return (
    <div>
      <Layout>
        <div className="columns mt-6">
          <div className="column">
            <h1 className="title is-3 has-text-centered mt-6">Berita Terbaru Hari Ini</h1>
          </div>
        </div>

        <div class="tile is-ancestor tile-service pl-6 pr-6 mt-1">
          <div class="tile is-parent">
            <Link>
              <div class="card section-content p-3">
                <span className="content-label">Not-Label</span>
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="https://uploads-ssl.webflow.com/614836791e40b065edfe427b/628346ac4b1bd6d1b8963376_Tips%20Bekerja%20dalam%20Tim%20Untuk%20Kamu%20yang%20Introvert.jpg" alt="Gambar" />
                  </figure>
                  <p class="title is-4 mt-2 p-1">Artikel Pertama Introvert</p>
                  <p class="subtitle is-6 p-1">Platform ini dibuat atas Kepedulian kami terhadap kamu.</p>
                </div>
              </div>
            </Link>
          </div>
          <div class="tile is-parent">
            <Link>
              <div class="card section-content p-3">
                <span className="content-label">Not-Label</span>
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="https://uploads-ssl.webflow.com/614836791e40b065edfe427b/628346ac4b1bd6d1b8963376_Tips%20Bekerja%20dalam%20Tim%20Untuk%20Kamu%20yang%20Introvert.jpg" alt="Gambar" />
                  </figure>
                  <p class="title is-4 mt-2 p-1">Artikel Pertama Introvert</p>
                  <p class="subtitle is-6 p-1">Platform ini dibuat atas Kepedulian kami terhadap kamu.</p>
                </div>
              </div>
            </Link>
          </div>
          <div class="tile is-parent">
            <Link>
              <div class="card section-content p-3">
                <span className="content-label">not-label</span>
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="https://uploads-ssl.webflow.com/614836791e40b065edfe427b/628346ac4b1bd6d1b8963376_Tips%20Bekerja%20dalam%20Tim%20Untuk%20Kamu%20yang%20Introvert.jpg" alt="Gambar" />
                  </figure>
                  <p class="title is-4 mt-2 p-1">Artikel Pertama Introvert</p>
                  <p class="subtitle is-6 p-1">Platform ini dibuat atas Kepedulian kami terhadap kamu.</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default News;
