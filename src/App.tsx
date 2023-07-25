import React from 'react';
import { Routes, Route } from "react-router-dom";
import { PageHeader } from "./Components/PageHeader";
import { Login } from "./Components/Login";
import { AllProductCards } from './Components/AllProductCards';
import { DetailCard } from "./Components/DetailCard";
import RequireAuth from "./Components/RequireAuth";

function App() {
  

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
