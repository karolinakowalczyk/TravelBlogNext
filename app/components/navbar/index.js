"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  const logout = () => {
    console.log("log out");
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-light fixed-top bg-light p-5">
      <div className="container-fluid">
        <Link href={"/"} className="navbar-brand primary">
          360 <span>&#176;</span> TRAVEL INSPIRATIONS
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href={"/"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/"} className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/"} className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/my-posts"} className="nav-link">
                My Posts
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/"} className="nav-link" onClick={logout}>
                Logout
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/login"} className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/register"} className="nav-link">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
