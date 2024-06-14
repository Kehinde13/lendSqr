import { RouterProvider, createBrowserRouter } from "react-router-dom"
import LoginPage from "./Pages/LoginPage"
import Dashboard from "./Pages/Dashboard"


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <LoginPage />
    },
    {
      path: 'dashboard',
      element: <Dashboard />,
      children: [

      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
