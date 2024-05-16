import React from "react";
import { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  async function handleSignIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  }
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };
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
          className="sign-button"
          onClick={(e) => {
            handleSignIn(e);
          }}
        >
          Sign In
        </button>
        <button className="google-sign-in-out" onClick={handleGoogleSignIn}>
          <h1>Sign In with Google</h1>
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
