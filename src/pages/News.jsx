import React, { useEffect } from "react";
import Layout from "./Layout";
import NewsList from "../components/NewsList";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const News = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/login");
    }
    if (user && user.role === "user") {
      navigate("/dasbor");
    }
  }, [isError, user, navigate]);

  return (
    <Layout>
      <NewsList />
    </Layout>
  );
};

export default News;
