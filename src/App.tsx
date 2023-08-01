import React, { useState, useEffect } from 'react';
import { getUser } from './api/user.api';
import { useAppDispatch } from './store/hooks';
import { setUser } from './store/slices/userSlice';
import { Routes, Route } from "react-router-dom";
import RequireAuth from './auth/RequireAuth';
import { PageHeader } from "./pages/header/Header";
import { HomePage } from './pages/home/homePage/HomePage';
import { Login } from "./pages/login/Login";
import { DetailCard } from "./pages/detail/DetailPage";
import { PageFooter } from './pages/footer/Footer';
    

function App() {
  const [initialization, setInitialization] = useState(false);
  const dispatch = useAppDispatch()
  const token = localStorage.getItem('access');
  
  const fetchToken = async () => {
    if(!token) {return}

    try {
      const response = await getUser();
      const user = response.data;
      dispatch(setUser(user))

    } catch (er) {
      console.log(er);
    } finally {
      setInitialization(true)
    }
  }

  useEffect(() => {
    fetchToken();
  }, [])

  if (!initialization) { return null; }

  return (
    <>
      <PageHeader />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="project/:id" element={
          <RequireAuth>
            <DetailCard />
          </RequireAuth>
        } />
      </Routes>
      
      <PageFooter />
    </>
  );
}

export default App;