import React, { useState, useEffect } from 'react';
import { useAppDispatch } from './store/hooks';
import { Routes, Route } from "react-router-dom";
import { PageHeader } from "./pages/Header";
import { Login } from "./pages/Login";
import { AllProductCards } from './pages/AllProjectCards';
import { DetailCard } from "./pages/DetailCard";
import RequireAuth from './pages/RequireAuth';
import { getUser } from './API/user.api';
import { setUser } from './store/userSlice';
import { PageFooter } from './pages/Footer';


function App() {
  const [initialization, setInitialization] = useState(false);

  const dispatch = useAppDispatch()

  const fetchToken = async () => {
    // const token = localStorage.getItem('access');
    // if(!token) {return}
    
    try {
      const response = await getUser();
      const user = response.data;
      dispatch(setUser(user))

    } catch (er) {
      console.log(er);
    } finally {
      setInitialization(true)
      console.log("баревчики")
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
        <Route index element={<AllProductCards />} />
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
