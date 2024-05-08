import React from "react";
import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const nagivate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  async function handleSignUp(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        nagivate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  }
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
            onClick={(e) => {
              handleSignUp(e);
            }}
          >
            Sign Up
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
