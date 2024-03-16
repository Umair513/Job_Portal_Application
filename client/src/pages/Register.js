import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputForm from "../components/shared/InputForm";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../redux/features/alertSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UseSelector } from "react-redux";
import Spinner from "../components/shared/Spinner";

const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading } = useSelector((state) => state.alerts);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !password) {
        alert("Please provide all fields");
        return;
      }
      dispatch(showLoading());
      const { data } = await axios.post("/api/v1/auth/register", {
        name,
        lastName,
        email,
        password,
      });
      dispatch(hideLoading());
      if (data.success) {
        alert("User Registered Successfully");
        navigate("/dashboard");
      }
    } catch (error) {
      dispatch(hideLoading());
      alert("Invalid form details");
      console.log(error);
    }
  };

  return <>{loading ? (<Spinner></Spinner>) : (
    <div className="form-container">
        <h1 className="mb-5">Registration Form</h1>
        <form className="card p-5" onSubmit={handleSubmit}>
          <InputForm
            htmlFor="name"
            labelText="Name"
            type="text"
            value={name}
            name="name"
            handleChange={(e) => setName(e.target.value)}
          ></InputForm>
          <InputForm
            htmlFor="lastName"
            labelText="Last Name"
            type="text"
            value={lastName}
            name="lastName"
            handleChange={(e) => setLastName(e.target.value)}
          ></InputForm>
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
              Already Registered? <Link to="/login">Login</Link>
            </p>
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
  ) }</>;
};

export default Register;
