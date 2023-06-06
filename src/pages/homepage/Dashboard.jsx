import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/authSlice";
import Layout from "./Layout";
import Cover from "../../components/homepage/CoverProfile";
import Notes from "../../components/homepage/NotesUser";

const Dashboard = () => {
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
      navigate("/dasbor");
    }
  }, [isError, user, navigate]);

  return (
    <div>
      <Layout>
        <Cover />
        <Notes />
      </Layout>
    </div>
  );
};

export default Dashboard;
