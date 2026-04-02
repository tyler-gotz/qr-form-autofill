import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Dashboard from "./pages/dashboard"
import IntakeForm from "./pages/intake-form";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />
  },
  {
    path: '/intake-form',
    element: <IntakeForm />
  }
])

export function App() {
  return <RouterProvider router={router} />
}

export default App
