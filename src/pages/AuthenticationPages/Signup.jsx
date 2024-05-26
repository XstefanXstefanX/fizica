import React from "react";
import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  async function handleSignUp(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  }
  const handleGoogleSignUp = async (e) => {
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
    <div>
      <div className="auth-container">
        <form className="auth-form">
          <label>Crează un cont nou</label>
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
              handleSignUp(e);
            }}
          >
            Sign Up
          </button>
          <button className="google-sign-in-out" onClick={handleGoogleSignUp}>
            <h1>Sign Up With Google</h1>
          </button>
          <label>
            <Link to="/signin">
              <h3 className="signin-link">Ai deja cont?</h3>
            </Link>
          </label>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
