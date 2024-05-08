import React from "react";
import { signOut, getAuth } from "firebase/auth";

const Profile = () => {
  const auth = getAuth();
  async function handleSignOut() {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="profile">
      <h1>Vrei să pleci?</h1>
      <button className="logout-button" onClick={() => handleSignOut()}>
        Logout
      </button>
    </div>
  );
};

export default Profile;
