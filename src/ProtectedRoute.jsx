import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { Outlet } from "react-router-dom";
import "./styles/authentication.css";

export default function ProtectedRoute() {
  const { isLoading, isAuthenticated, login, register } = useKindeAuth();
  if (isLoading) {
    return <div className="authentication-container">Loading...</div>;
  }
  if (!isLoading && !isAuthenticated) {
    return (
      <div className="authentication-container">
        <div className="authentication">
          <h1>...Înregistreazăte!</h1>
          <button className="authentication-button" onClick={() => login()}>
            Ai deja cont?
          </button>
          <button className="authentication-button" onClick={() => register()}>
            Vrea un cont!
          </button>
        </div>
      </div>
    );
  }
  if (!isLoading && isAuthenticated) {
    return <Outlet />;
  }
}
