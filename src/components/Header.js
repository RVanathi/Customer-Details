import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav>
        <h1 className="head-title">Customer Details Application</h1>
        <div className="head-buttons">
          <Link className="link" to="/">
            <button className="head-btn">Home</button>
          </Link>{" "}
          <Link to="/list">
            <button className="head-btn">Customers</button>
          </Link>{" "}
          <Link to="/customer/new">
            <button className="head-btn">New</button>
          </Link>
        </div>
      </nav>
      <section></section>
    </>
  );
};

export default Header;