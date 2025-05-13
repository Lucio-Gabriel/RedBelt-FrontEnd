import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateAlarmPage from "./pages/CreateAlarmPage.jsx";
import EditAlarmPage from "./pages/EditAlarmPage.jsx";
import ShowAlarmPage from "./pages/ShowAlarmPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/alarm-create",
    element: <CreateAlarmPage />,
  },
  {
    path: "/alarm-edit/:id",
    element: <EditAlarmPage />,
  },
  {
    path: "/alarm-show/:id",
    element: <ShowAlarmPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
