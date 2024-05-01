import "./styles/index.css";
import "./styles/banner.css";
import "./styles/capitol.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Clasa8 from "./pages/Clase/Clasa8";
import Clasa9 from "./pages/Clase/Clasa9";
import Clasa10 from "./pages/Clase/Clasa10";
import Clasa11 from "./pages/Clase/Clasa11";
import Clasa12 from "./pages/Clase/Clasa12";
import Manual8 from "./pages/SuportDidactic/manual8";
import Manual9 from "./pages/SuportDidactic/manual9";
import Manual10 from "./pages/SuportDidactic/manual10";
import Manual11 from "./pages/SuportDidactic/manual11";
import Manual12 from "./pages/SuportDidactic/manual12";
import FiseDeLucru from "./pages/SuportDidactic/FiseDeLucru";
import SuportTeoretic from "./pages/SuportDidactic/SuportTeoretic";
import News from "./pages/News";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import ProtectedRoute from "./ProtectedRoute";
import Profile from "./pages/Profile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/profil",
            element: <Profile />,
          },
          {
            path: "/clasa8",
            element: <Clasa8 />,
          },

          {
            path: "/clasa9",
            element: <Clasa9 />,
          },
          {
            path: "/clasa10",
            element: <Clasa10 />,
          },
          {
            path: "/clasa11",
            element: <Clasa11 />,
          },
          {
            path: "/clasa12",
            element: <Clasa12 />,
          },
          {
            path: "/manual8",
            element: <Manual8 />,
          },
          {
            path: "/manual9",
            element: <Manual9 />,
          },
          {
            path: "/manual10",
            element: <Manual10 />,
          },
          {
            path: "/manual11",
            element: <Manual11 />,
          },
          {
            path: "/manual12",
            element: <Manual12 />,
          },
          {
            path: "/fisedelucru",
            element: <FiseDeLucru />,
          },
          {
            path: "/suportteoretic",
            element: <SuportTeoretic />,
          },
          {
            path: "/noutati",
            element: <News />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <KindeProvider
        clientId="7404b3bcee1540d19cf57ad2a67bb08c"
        domain="https://universulfizica.kinde.com"
        redirectUri="https://universul-fizica.netlify.app"
        logoutUri="https://universul-fizica.netlify.app"
      >
        <RouterProvider router={router} />
      </KindeProvider>
    </div>
  );
};

export default App;
