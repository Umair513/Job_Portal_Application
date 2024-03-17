import React from "react";
import InputForm from "../components/shared/InputForm";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import { hideLoading, showLoading } from "../redux/features/alertSlice";
import Spinner from "../components/shared/Spinner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.alerts);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(showLoading());
      const { data } = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (data.success) {
        dispatch(hideLoading());
        localStorage.setItem("token", data.token);
        toast.success("Login Success");
        navigate("/dashboard");
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Invalid Credentials");
      console.log(error);
    }
  };
  return (
    <>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <div className="form-container">
          <h1 className="mb-5">Login Here!</h1>
          <form className="card p-5" onSubmit={handleSubmit}>
            <InputForm
              htmlFor="email"
              labelText="Email"
              type="email"
              value={email}
              name="email"
              handleChange={(e) => setEmail(e.target.value)}
            ></InputForm>
            <InputForm
              htmlFor="password"
              labelText="Password"
              type="password"
              value={password}
              name="password"
              handleChange={(e) => setPassword(e.target.value)}
            ></InputForm>
            <div className="d-flex justify-space-between">
              <p>
                Don't Have Account? <Link to="/register">Sign Up</Link>
              </p>
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
