import React from "react";
import InputForm from "../components/shared/InputForm";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log(email, password);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="form-container">
        <h1 className="mb-5">Registration Form</h1>
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
    </>
  );
};

export default Login;
