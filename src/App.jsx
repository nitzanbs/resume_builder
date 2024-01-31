import './App.css'
import { useState, useContext } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { UserContext } from './context/UserProvider'

import SignIn from './component/SignIn'
import SignUp from './component/SignUp'
import UserProvider from './context/UserProvider'
import Navbar from './component/navbar/NavBar';
import NotFound  from './pages/NotFound'
import Home from './pages/home/Home'
import Resume from './pages/resume/Resume'
import MyResume from './pages/myResume/MyResume';






function App() {


  const { user, setUser } = useContext(UserContext);


  return (
    <>
      <BrowserRouter>
        <Navbar user={user} />
        {user ? (
          <Routes>
            <Route
              path="/Home"
              element={
                <Home

                />
              }
            />
            <Route
              path="/Resume"
              element={
                <Resume

                />
              }
            />
            <Route
              path="/MyResume"
              element={
                <MyResume

                />
              }
            />
            
            <Route
              path="/SignIn"
              element={
                <SignIn

                />
              }
            />
          <Route path="/SignUp" element={<SignUp />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        ) : (
          <Routes>
            <Route
              path="/Home"
              element={
                <Home

                />
              }
            />
            <Route
              path="/"
              element={
                <Home

                />
              }
            />
            <Route
              path="/SignIn"
              element={
                <SignIn     />

           
              }
            />
             <Route path="/SignUp" element={<SignUp />} />
            <Route
              path="/Resume"
              element={
                <Resume

                />
              }
            />
            <Route
              path="/MyResume"
              element={
                <MyResume

                />
              }
            />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        )}
      </BrowserRouter>

    </>
  )
}

export default App
