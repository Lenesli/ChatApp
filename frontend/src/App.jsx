import React, { useEffect } from 'react'
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import HomePage from "./Pages/HomePage";
import SignUpPage from './Pages/SignUpPage';
import LoginPage from './Pages/LoginPage';
import SettingsPage from './Pages/SettingsPage';
import ProfilePage from './Pages/ProfilePage';
import { useAuthStore } from './store/useAuthStore';

const App = () => {
  const {authUser,checkAuth} = useAuthStore;
    useEffect(()=>{
      checkAuth();
    },[checkAuth]);
    console.log({authUser});
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/settings" element={<SettingsPage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
      </Routes>
    </div>
  )
}

export default App
