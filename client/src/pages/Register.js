import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputForm from "../components/shared/InputForm";

const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log(name, lastName, email, password);
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
    </>
  );
};

export default Register;
