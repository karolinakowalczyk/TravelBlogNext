"use client";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "next/navigation";
import UserContext from "../userContext";

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const [user, setUser] = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorCode, setErrorCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const login = async () => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        localStorage.setItem("user", user.accessToken);
        router.push("/");
      })
      .catch((error) => {
        setErrorCode(error.code);
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="container">
      <h1 className="pb-2 page-header">Login</h1>
      <form onSubmit={handleSubmit(login)}>
        <div className="form-group py-2">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            className="form-control"
            type="text"
            value={email}
            {...register("email", {
              required: "This field is required.",
              onChange: (e) => {
                e.preventDefault();
                setEmail(e.target.value);
              },
            })}
          />
        </div>
        <div className="form-group py-2">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            className="form-control"
            type="password"
            value={password}
            {...register("password", {
              required: "This field is required.",
              onChange: (e) => {
                e.preventDefault();
                setPassword(e.target.value);
              },
            })}
          />
        </div>
        <button type="submit" name="login" className="main-btn p-2">
          Login
        </button>
      </form>
    </div>
  );
}
