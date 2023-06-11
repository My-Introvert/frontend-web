import React from "react";
import Layout from "./Layout";
import Logo from "../../assets/logo-about.png";

const About = () => {
  return (
    <div>
      <Layout>
        <div className="columns is-centered about-img">
          <div className="column">
            <div className="container">
              <img src={Logo} alt="Gambar" />
            </div>
          </div>
        </div>
        <div className="columns is-centered about-text">
          <div className="column is-8">
            <div className="container">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ipsa iste optio nesciunt, tempore dolorem quos provident dolorum assumenda hic exercitationem mollitia voluptatibus magni voluptates. Fuga modi, provident
                perferendis consectetur eius omnis amet voluptates ut vero sequi iure nemo libero, repellat recusandae reprehenderit itaque ab quisquam assumenda corrupti. Et eum officiis, accusantium alias doloribus atque voluptatem unde
                fugiat beatae eos explicabo illo consequuntur ratione consequatur incidunt temporibus ex distinctio similique odit odio recusandae. Dolores alias a voluptatibus totam mollitia illum quas explicabo est dolor. Accusantium
                expedita voluptatibus corrupti sapiente provident similique suscipit, dicta reiciendis ea? Id odit cumque beatae sapiente.
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nulla modi molestiae nobis asperiores repudiandae rem officia eveniet expedita molestias neque earum quaerat! Aperiam, sed fugiat iste nulla magni itaque
                voluptatibus ullam, non quas a veniam perspiciatis placeat quam alias cupiditate quisquam, impedit sunt sapiente aliquid consequuntur nam esse voluptate. Vel magnam repellat molestias ratione iste dolores? Quidem porro fugit
                est id, error earum laboriosam libero facilis minima sequi esse corporis dolorum ducimus reprehenderit accusamus numquam molestiae nostrum aliquam iusto ex optio voluptatibus quisquam! Expedita voluptatibus voluptas, quia
                odit voluptatem asperiores! Voluptatem sapiente assumenda maiores cum ipsa ratione, ipsam odio!
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default About;
