import React from 'react';
import {Routes, Route } from "react-router-dom";

import { PageHeader } from "./Components/PageHeader";
import { Login } from "./Components/Login";
import { ProductCard } from "./Components/ProductCard";
import { DetailCard } from "./Components/DetailCard";
import RequireAuth from "./Components/RequireAuth";
// import { postUser } from './API/ProTech.api';
import { getAllProjects } from './API/user.api';


function App() {
 
  


  // const fetchAllProjects  = async () => {
  //   try {
  //     const response = await getAllProjects();
  //     dispatch(addManyProjects(response.data))
  //   } catch(er) {
  //     console.log(er);
  //   }
  // }
  
  
 




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
