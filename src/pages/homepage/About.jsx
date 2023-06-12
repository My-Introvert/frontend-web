import React from "react";
import Layout from "./Layout";
import Logo from "../../assets/logo-about.jpg";

const About = () => {
  return (
    <div>
      <Layout>
        <div className="columns is-centered section-about p-mobile-css ml-0">
          <div className="column">
            <div className="container">
              <div class="tile is-ancestor">
                <div class="tile is-3 is-vertical is-parent">
                  <div class="tile is-child box">
                    <div className="columns is-centered">
                      <div className="column has-text-centered">
                        <figure class="image">
                          <img src={Logo} alt="Gambar" />
                          <p className="my-label mt-2">Logo My Introvert</p>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tile is-parent">
                  <div class="tile is-child box pb-6">
                    <h1 className="title has-text-centered mb-5">Tentang My Introvert</h1>
                    <p className="desc-about">
                      Bermula dari Pengalaman Pribadi yang bisa dibilang Tim Kami adalah Introvert, banyak hal yang dirasakan atas Karakter yang kami miliki, yang jelas ada beberapa kondisi yang membuat setiap dari kami tidak nyaman atas
                      Kepribadiaan kami. barulah muncul Ide membuat Aplikasi khusus untuk membantu para Introvert, dimana kami melihat banyak Blocker untuk Introvert tetapi tidak banyak yang menyadari hal ini, dan tidak ada Aplikasi khusus
                      yang dibuat untuk mengatasi masalah ini, yang mana dalam Ide diawal kami hanya berfokus pada "Membantu Meningkatkan Keterampilan Sosial dan Kesehatan Mental" untuk para Introvert.
                    </p>
                    <br />
                    <p className="desc-about">
                      Masalah yang banyak terjadi adalah disetiap Profesi pasti ada beberapa atau banyak orang Introvert di dalamnya, apalagi di Bidang IT banyak sekali orang Introvert di dalamnya, masalah yang paling besar adalah setiap
                      orang Introvert sepertinya memiliki Dunianya sendiri, ada Karakter lain yang dimiliki Introvert sehingga membuat Introvert ketika di Publik ada beberapa masalah atau ada Blocker untuk Introvert. Ini salah satu alasan
                      dari Tim kami berfokus untuk mencari Solusi dari masalah yang kami temui dan alami.
                    </p>
                    <br />
                    <p className="desc-about">
                      Dari hasil Observasi kami, ada beberapa Kendala atau Masalah Umum yang dialami oleh banyak orang Introvert, seperti Kesulitan Berbicara di depan umum, terlalu Over Thinking, tidak menyukai Keramaian, sulit menjadi
                      Pemimpin, dan masih banyak lagi. Menurut Penelitian yang ada, ada 2 ciri umum yang dimiliki manusia yaitu Introvert dan Ekstrovert, dimana khusus untuk Introvert banyak hal atau sifat diluar dari manusia biasanya.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default About;
