import "./styles/index.css";
import "./styles/banner.css";
import "./styles/authentication.css";
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
import Logout from "./pages/Logout";
import SignIn from "./pages/AuthenticationPages/Signin";
import SignUp from "./pages/AuthenticationPages/Signup";
import { AuthContext, Context } from "./Context/AuthContext";
import { Protected } from "./components/Protected";
const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/logout",
        element: (
          <Protected>
            <Logout />
          </Protected>
        ),
      },
      {
        path: "/clasa8",
        element: (
          <Protected>
            <Clasa8 />
          </Protected>
        ),
      },

      {
        path: "/clasa9",
        element: (
          <Protected>
            <Clasa9 />
          </Protected>
        ),
      },
      {
        path: "/clasa10",
        element: (
          <Protected>
            <Clasa10 />
          </Protected>
        ),
      },
      {
        path: "/clasa11",
        element: (
          <Protected>
            <Clasa11 />
          </Protected>
        ),
      },
      {
        path: "/clasa12",
        element: (
          <Protected>
            <Clasa12 />
          </Protected>
        ),
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
]);

const App = () => {
  return (
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  );
};

export default App;
