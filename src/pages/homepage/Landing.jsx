import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/authSlice";
import Layout from "./Layout";
import Hero from "../../components/homepage/Hero";
import TilesInfo from "../../components/homepage/Tiles";
import Blog from "../../components/homepage/Blog";
import Video from "../../components/homepage/Video";
import Book from "../../components/homepage/Book";
import "./css/Landing.css";

const LandingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);

  return (
    <div>
      <Layout>
        <Hero />
        <TilesInfo />
        <Blog />
        <Video />
        <Book />
      </Layout>
    </div>
  );
};

export default LandingPage;
