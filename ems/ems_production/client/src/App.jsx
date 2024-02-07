import { useState } from 'react'
import {BrowserRouter as Router,Link,Routes,Route,useNavigate} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import MainPageComponent from './components/MainPageComponent'
import AdminDasboard from './components/AdminDasboard'
import RegFormComponent from './components/RegFormComponent'
import UpdateComponent from './components/updateComponent'
import EmployeeProfileComponent from './components/EmployeeProfileComponent'
import HomeComponent from './components/HomeComponent'
import { Logout } from './components/Logout'
import EmployeeDasboard from './components/EmployeeDasboard'
import ProfileComponent from './components/ProfileComponent'
import Login from './components/Login'
import ResetPassword from './components/ResetPassword'
import Forgot from './components/Fogot'




function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    
  
      {/* <MainPageComponent/> */}
      <Router>
      <Routes>
        <Route path="/" element={<HomeComponent/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/admin/dashboard" element={<AdminDasboard/>} />
        <Route path="/registration" element={<RegFormComponent/>} />
        <Route path="/view" element={<EmployeeProfileComponent/>} />
        <Route path="/profile/:id" element={<UpdateComponent/>} />
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/employee/dashboard" element={<EmployeeDasboard/>}/>
        <Route path="/profile" element={<ProfileComponent/>}/>
        <Route path="/reset/password" element={<ResetPassword/>}/>
        <Route path="/forgot/password" element={<ResetPassword/>}/>
        <Route path="/forgot-password" element={<Forgot/>}/>




      </Routes>
    </Router>
   {/* <HomeComponent/>  */}
   {/* <SuccessComponent/> */}
   {/* <Loading/> */}

    </>
  )
}

export default App
