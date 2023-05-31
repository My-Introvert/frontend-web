import React from "react";
import Navbar from "../../components/homepage/Navbar";
import Footer from "../../components/homepage/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <React.Fragment>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </React.Fragment>
    </div>
  );
};

export default Layout;
