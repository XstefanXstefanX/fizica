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
      <button className="logout-button" onClick={() => handleSignOut()}>
        Vrei să pleci?
      </button>
    </div>
  );
};

export default Profile;
