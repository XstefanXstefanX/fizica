import React from "react";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignIn = () => {
  const nagivate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  async function handleSignIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        nagivate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <div className="auth-container">
      <form className="auth-form">
        <label>Bine ai revenit!</label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
          placeholder="Email"
        />
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="Parola"
        />
        <button
          onClick={(e) => {
            handleSignIn(e);
          }}
        >
          Sign In
        </button>
        <label>
          <Link to="/signup">
            <h3 className="signin-link">Nu ai cont?</h3>
          </Link>
        </label>
      </form>
    </div>
  );
};

export default SignIn;
