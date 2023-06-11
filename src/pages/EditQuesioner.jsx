import React, { useEffect } from "react";
import Layout from "./Layout";
import FormEditQuesioner from "../components/FormEditQuesioner";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const EditQuesioner = () => {
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
      <FormEditQuesioner />
    </Layout>
  );
};

export default EditQuesioner;
