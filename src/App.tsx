import { RouterProvider, createBrowserRouter } from "react-router-dom"
import LoginPage from "./Pages/LoginPage"
import Dashboard from "./Pages/Dashboard"
import Users from "./Pages/Users"
import UserDetails from "./Pages/UserDetails"


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
        {
          element: <Users />,
          index: true
        },
        {
          path: 'userdetails/:userId',
          element: <UserDetails />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
