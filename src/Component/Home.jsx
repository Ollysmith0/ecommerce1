import Header from "./Header/Header.jsx";
import Content from "./Content/Content.jsx";
import Footer from "./Footer/Footer.jsx";

import "./Home.scss";
import React from "react";

const Home = (props) => {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
};

export default Home;
