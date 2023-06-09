import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { LoginUser, reset } from "../features/authSlice";
import { IoArrowBackOutline } from "react-icons/io5";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, isSuccess, isError, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user || isSuccess) {
      if (user.role === "admin" || user.role === "editor") {
        navigate("/dashboard");
      } else {
        navigate("/dasbor");
      }
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };

  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-5">
              <form onSubmit={Auth} className="box">
                <h1 className="title is-3 has-text-centered">Silahkan Masuk</h1>
                <hr class="navbar-divider" />
                <div className="field">
                  <label className="label">Surel</label>
                  <div className="control">
                    <input type="text" className="input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Surel kamu ..." />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Kata Sandi</label>
                  <div className="control">
                    <input type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="******" />
                  </div>
                </div>
                {isError && <p className="has-text-centered has-text-danger">{message}</p>}
                <div className="field mt-5 has-text-centered">
                  <button type="submit" className="button is-success is-fullwidth">
                    {isLoading ? "Loading..." : "Masuk"}
                  </button>
                  <Link to={"/"} className="button is-ghost mt-1">
                    <IoArrowBackOutline />
                    Kembali ke Beranda
                  </Link>
                  <Link to={"/register"} className="button is-ghost mt-1">
                    atau Mendaftar ?
                  </Link>
                </div>
                <hr class="navbar-divider" />
                <div className="demo-login">
                  <div className="columns is-centered">
                    <div className="column is-6">
                      <p>
                        <strong>Akses Masuk Admin :</strong>
                      </p>
                      <p>Email : admin@gmail.com</p>
                      <p>Password : 123456</p>
                    </div>
                    <div className="column is-6">
                      <p>
                        <strong>Akses Masuk User :</strong>
                      </p>
                      <p>Email : user@gmail.com</p>
                      <p>Password : 123456</p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
