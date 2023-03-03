import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Main from "./pages/Main";
import Create from "./pages/Create";
import Profile from "./pages/Profile";
import CreatedProfile from "./components/profile/CreatedProfile";
import SavedProfile from "./components/profile/SavedProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <NotFound />,
    children: [
      { index: true, element: <Main /> },
      { path: "create", element: <Create /> },
      // { path: "profile/:id", element: <Profile /> },
    ],
  },
  {
    path: "/profile/:id",
    element: <Profile />,
    children: [
      { path: "created", element: <CreatedProfile /> },
      { path: "saved", element: <SavedProfile /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
