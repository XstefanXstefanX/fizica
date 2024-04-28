import React from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const Profile = () => {
  const { isLoading, isAuthenticated, logout, user } = useKindeAuth();

  if (!isLoading && isAuthenticated) {
    return (
      <div className="authentication-container">
        <div className="authentication">
          <h1>Profilul meu</h1>
          <h2>Prenume: {user.given_name}</h2>
          <h2>Nume: {user.family_name}</h2>
          <h2>
            Poză:
            <img
              className="profile-picture"
              src={user.picture}
              alt="profile-picture"
            />
          </h2>
          <button className="authentication-button" onClick={() => logout()}>
            Vrei să pleci?
          </button>
        </div>
      </div>
    );
  }
};

export default Profile;
