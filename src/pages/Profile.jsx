import React, { useEffect } from "react";
import Layout from "./Layout";
import PageProfile from "../components/PageProfile";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const Profile = () => {
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
  }, [isError, user, navigate]);

  return (
    <div>
      <Layout>
        <PageProfile />
      </Layout>
    </div>
  );
};

export default Profile;
