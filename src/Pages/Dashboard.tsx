import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import '../Styles/Dashboard.css'

const Dashboard = () => {
  return (
    <div>
        <Navbar />
        <div className='main'>
          <Sidebar />
          <Outlet />
        </div>
    </div>
  )
}

export default Dashboard