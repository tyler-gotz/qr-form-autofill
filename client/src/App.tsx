import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Dashboard from "./pages/dashboard"
import IntakeForm from "./pages/intake-form";
import NewPatient from "./pages/new-patient";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />
  },
  {
    path: '/intake-form',
    element: <IntakeForm />
  },
  {
    path: '/patients/new',
    element: <NewPatient />
  }
])

export function App() {
  return <RouterProvider router={router} />
}

export default App
