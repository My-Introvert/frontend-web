import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/authSlice";
import Layout from "./Layout";
import Cover from "../../components/homepage/CoverProfile";
import FormAddNote from "../../components/homepage/FormAddNote";

const AddNote = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
    if ((user && user.role === "admin") || (user && user.role === "editor")) {
      navigate("/dashboard");
    }
    if (user && user.role === "user") {
      navigate("/user/notes/add");
    }
  }, [isError, user, navigate]);

  return (
    <div>
      <Layout>
        <Cover />
        <FormAddNote />
      </Layout>
    </div>
  );
};

export default AddNote;
