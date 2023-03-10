import React from 'react'

//Router
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

//Hooks
import { useAuth } from './hooks/useAuth';

import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Home from './pages/Home/Home'
import EditProfile from './pages/EditProfile/EditProfile';
import Profile from './pages/Profile/Profile';
import Photo from './pages/Photo/Photo';
export default function App() {

  const { auth, loading } = useAuth();

  if (loading) {
    return <p>Carregando...</p>
  }

  return (
    <div>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path='/' 
              element={auth ? <Home /> : <Navigate to="/login" />} 
            />
            <Route path='/profile' 
              element={auth ? <EditProfile /> : <Navigate to="/login" />} 
            />
            <Route path='/users/:id' 
              element={auth ? <Profile /> : <Navigate to="/login" />} 
            />
            <Route path='/photos/:id' 
              element={auth ? <Photo /> : <Navigate to="/login" />} 
            />
            <Route path='/login' 
              element={!auth ? <Login /> : <Navigate to="/" />} 
            />
            <Route path='/register' 
              element={!auth ? <Register /> : <Navigate to="/" />} 
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  )
}
