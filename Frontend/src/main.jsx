import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { TaskProvider } from "./contexts/TaskContext.jsx";
import { TeamProvider } from "./contexts/TeamContext.jsx";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Teams from "./pages/Teams.jsx";
import Report from "./pages/Report.jsx";
import Settings from "./pages/Settings.jsx";
import ProjectDetails from "./pages/ProjectDetails.jsx";
import TaskDetails from "./pages/TaskDetails.jsx";
import Logout from "./components/Logout.jsx";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <App />,
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/teams",
    element: <Teams />,
  },
  {
    path: "/report",
    element: <Report />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/project/:projectName",
    element: <ProjectDetails />,
  },
  {
    path: "/task/:taskId",
    element: <TaskDetails />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TeamProvider>
      <TaskProvider>
        <RouterProvider router={router}></RouterProvider>
      </TaskProvider>
    </TeamProvider>
  </StrictMode>
);
