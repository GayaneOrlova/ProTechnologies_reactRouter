import React from 'react';
import {Routes, Route } from "react-router-dom";

import { PageHeader } from "./Components/Header/PageHeader";
import { Login } from "./Components/Forms/Login";
import { ProductCard } from "./Components/ProductCard";
import { DetailCard } from "./Components/DetailCard";
import RequireAuth from "./Components/RequireAuth";
// import { postUser } from './API/ProTech.api';


function App() {

  return (
  <>
    {/* <BrowserRouter> */}
      <PageHeader />
      <Routes>
        <Route index element={<ProductCard />}/>   
        <Route path="login/" element={<Login/>} />  {/* new */}
        <Route path="project/:id/" element={
          <>
            <RequireAuth>
              <DetailCard />
            </RequireAuth>/
          </>} />
      </Routes>
    {/* </BrowserRouter> */}
       </>
  );
}

export default App;
