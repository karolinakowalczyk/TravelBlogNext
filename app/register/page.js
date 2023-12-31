"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/firebase";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorCode, setErrorCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const signUp = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        router.push("/login");
      })
      .catch((error) => {
        setErrorCode(error.code);
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="container">
      <h1 className="pb-2 page-header">Register</h1>
      <form onSubmit={handleSubmit(signUp)}>
        <div className="form-group py-2">
          <label htmlFor="email">Email: </label>
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
          <label htmlFor="password">Password: </label>
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
        <div className="form-group py-2">
          <label htmlFor="confirm">Repeat password: </label>
          <input
            id="confirm"
            className="form-control"
            type="password"
            value={confirmPassword}
            {...register("cofirmPassword", {
              required: "This field is required.",
              onChange: (e) => {
                e.preventDefault();
                setConfirmPassword(e.target.value);
              },
            })}
          />
        </div>
        <button type="submit" name="register" className="main-btn p-2">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
