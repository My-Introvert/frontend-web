import React, { useEffect } from "react";
import Layout from "./Layout";
import FormEditBook from "../components/FormEditBook";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const EditBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/login");
    }
    if (user && user.role !== "admin") {
      navigate("/dashboard");
    }
    if (user && user.role === "user") {
      navigate("/dasbor");
    }
  }, [isError, user, navigate]);

  return (
    <Layout>
      <FormEditBook />
    </Layout>
  );
};

export default EditBook;