import React, { useState, useEffect } from 'react';
import { useAppDispatch } from './Store/hooks';
import { Routes, Route } from "react-router-dom";
import { PageHeader } from "./Components/PageHeader";
import { Login } from "./Components/Login";
import { AllProductCards } from './Components/AllProductCards';
import { DetailCard } from "./Components/DetailCard";
import RequireAuth from './Components/RequireAuth';
import { getUser } from './API/user.api';
import { setUser } from './Store/userSlice';


function App() {
  const [authorized, setAuthorized] = useState(false);

  const dispatch = useAppDispatch()

  const fetchToken = async () => {
    const token = localStorage.getItem('access');
    try {
      const response = await getUser(token);
      const user = response.data;
      dispatch(setUser(user))

    } catch (er) {
      console.log(er);
    } finally {
      setAuthorized(true)
    }
  }

  useEffect(() => {
    fetchToken();
  }, [])

  if (!authorized) { return null; }

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
    </>
  );
}

export default App;
