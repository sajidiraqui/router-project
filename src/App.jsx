import "./App.css";
import { useState } from "react";
import { Routes,Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const[isLoggedIn,setIsLoggedIn]=useState(false);
  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Navbar>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Login>}/>
      <Route path="/signup" element={<Signup isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Signup>}/>
      <Route path="/dashboard" element={
        <PrivateRoute isLoggedIn={isLoggedIn}>
          <Dashboard></Dashboard>
        </PrivateRoute>
      }/>
       
      </Routes>
    </div>
  )
}

export default App;
