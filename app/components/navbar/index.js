"use client";
import React, { useState, useEffect, useContext } from "react";
import UserContext from "@/app/userContext";
import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "@/app/firebase";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [user, setUser] = useContext(UserContext);
  const [isAuth, setIsAuth] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const onLoad = async () => {
      if (localStorage.getItem("user")) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    };
    onLoad();
  }, [user]);

  const logout = async () => {
    await signOut(auth)
      .then(() => {
        setUser(null);
        setIsAuth(false);
        localStorage.removeItem("user");
        router.push("/");
      })
      .catch((error) => {
        setError(error);
      });
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
            {isAuth && (
              <li className="nav-item">
                <Link href={"/my-posts"} className="nav-link">
                  My Posts
                </Link>
              </li>
            )}
            {isAuth && (
              <li className="nav-item">
                <Link href={"/"} className="nav-link" onClick={logout}>
                  Logout
                </Link>
              </li>
            )}
            {!isAuth && (
              <li className="nav-item">
                <Link href={"/login"} className="nav-link">
                  Login
                </Link>
              </li>
            )}
            {!isAuth && (
              <li className="nav-item">
                <Link href={"/register"} className="nav-link">
                  Register
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
