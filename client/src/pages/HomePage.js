import React from "react";
import MyVideo from "../assets/videos/bg.mp4";
import Logo from "../assets/images/logo.png";
import "../../src/styles/Homepage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <video autoPlay muted loop id="myVideo">
        <source src={MyVideo} type="video/mp4"></source>
      </video>
      <div className="content">
        <div className="card w-25">
          <img src={Logo} alt="Logo"></img>
          <hr></hr>
          <div className="card-body" style={{ marginTop: "-20px" }}>
            <h5 className="card-title">Pakistan's No #1 Career Platform</h5>
            <p className="card-text">
              Search and manage your jobs with ease. Free and open source job
              portal application by Umair Ahmed
            </p>
            <div className="d-flex justify-content-between mt-5">
              <p>
                Not a User Register <Link to="/register">here</Link>
              </p>
              <p>
                <Link to="/login" className="myBtn">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
