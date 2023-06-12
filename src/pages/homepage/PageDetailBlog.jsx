import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getMe } from "../../features/authSlice";
import Layout from "./Layout";
import DetailBlog from "../../components/homepage/DetailBlog";

const PageDetailBlog = () => {
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
      navigate(`/blogs/detail/${id}`);
    }
  }, [isError, user, navigate, id]);

  return (
    <div>
      <Layout>
        <DetailBlog />
      </Layout>
    </div>
  );
};

export default PageDetailBlog;
