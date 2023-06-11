import React, { useEffect } from "react";
import Layout from "./Layout";
import FormAddBlog from "../components/FormAddBlog";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const AddBlog = () => {
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
      <FormAddBlog />
    </Layout>
  );
};

export default AddBlog;
