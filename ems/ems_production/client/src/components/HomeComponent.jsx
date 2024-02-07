import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import cpic from "../components/images/1.jpeg";
import "./Home.css";

export default function HomeComponent() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg "
        style={{ backgroundColor: "lightblue" }}
      >
        <div className="container-fluid">
          <Link
            to="/"
            style={{ textDecoration: "none", color: "white", fontSize: "20px" }}
          >
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item m-4">
                <Link
                  to="/login"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontSize: "20px",
                  }}
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
          <div className="c-name">
            {/* <ul style={{textDecoration:"none"}}>
        <li style={{textDecoration:"none",color:"white"}}>  */}
            <span
              style={{
                color: "gray",
                fontFamily: "inherit",
                fontWeight: "bolder",
                fontSize: "40px",
              }}
            >
              Algotrade
            </span>
            {/* </li>
      </ul> */}
          </div>
        </div>
      </nav>

      <div className=" container-fluid start">
        <div className="welcome">Welcome to Algotrade</div>
        <div className="data">
          <span>Start a beautiful journey with us.</span>
        </div>
      </div>

      <div className="container main">
        <div className="company-img m-3">
          <img
            src={cpic}
            height={"500px"}
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="content-c">
          <p>
            Welcome to Algotrade Company, a coopearte company committed to
            innovation and Client-Centric Approach . Since our establishment in
            1983, we have been at the forefront of Strategic
            Partnerships,Data-Driven Insights.
          </p>
        </div>

        <div className="container">
          <h4>About Algotrade</h4>
          <p>
            At Algotrade, we are passionate about harnessing the power of
            technology to revolutionize the financial landscape. Our company is
            committed to providing cutting-edge solutions in algorithmic
            trading, where advanced algorithms and data-driven strategies
            converge to optimize investment decisions.
          </p>
          <h4>Mission Statement:</h4>
          <p className="fst-italic">Empowering Investors, Unleashing Potential.</p>
          <h4>Who We Are:</h4>
          <p>
            Algotrade is a dynamic and forward-thinking firm composed of experts
            in finance, data science, and technology. Our team is driven by
            innovation, integrity, and a shared vision of creating a more
            accessible and efficient financial marketplace.
          </p>

          <h4>What We Do:</h4>
          <h6>Algorithmic Trading:</h6>
          <p>
            We specialize in the development and implementation of sophisticated
            algorithmic trading strategies. Our algorithms leverage real-time
            market data and historical patterns to make informed and timely
            investment decisions.
          </p>
          <h6>Data Analytics:</h6>
          <p>
            At the core of our operations is a robust data analytics
            infrastructure. We believe in the power of data to uncover insights,
            identify trends, and guide our clients towards smarter financial
            choices.
          </p>
        </div>
      </div>
    </>
  );
}
