import "./styles/index.css";
import "./styles/banner.css";
import "./styles/authentication.css";
import "./styles/capitol.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Clasa9 from "./pages/Clase/Clasa9";
import Clasa10 from "./pages/Clase/Clasa10";
import Clasa11 from "./pages/Clase/Clasa11";
import Clasa12 from "./pages/Clase/Clasa12";
import Manuale from "./pages/SuportDidactic/Manuale";
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
        path: "/manuale",
        element: <Manuale />,
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
