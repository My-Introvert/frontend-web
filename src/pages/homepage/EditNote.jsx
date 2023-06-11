import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getMe } from "../../features/authSlice";
import Layout from "./Layout";
import Cover from "../../components/homepage/CoverProfile";
import FormEditNote from "../../components/homepage/FormEditNote";

const EditNote = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);
  const { id } = useParams();

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
      navigate(`/user/notes/edit/${id}`);
    }
  }, [isError, user, navigate, id]);

  return (
    <div>
      <Layout>
        <Cover />
        <FormEditNote />
      </Layout>
    </div>
  );
};

export default EditNote;
