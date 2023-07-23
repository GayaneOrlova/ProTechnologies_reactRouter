import React, { useEffect } from 'react';
import {Routes, Route } from "react-router-dom";

import { PageHeader } from "./Components/PageHeader";
import { Login } from "./Components/Login";
import { ProductCard } from "./Components/ProductCard";
import { DetailCard } from "./Components/DetailCard";
import RequireAuth from "./Components/RequireAuth";
import { getAllProjects } from './API/project.api';
import { addManyProjects } from './Store/projectSlice';
import { useAppDispatch, useAppSelector } from './Store/hooks';

function App() {
  const projectList = useAppSelector((state) => state.project.projectList);
  
  const dispatch = useAppDispatch();

  const fetchAllProjects  = async () => {
    try {
      const response = await getAllProjects();
      dispatch(addManyProjects(response.data))
    } catch(er) {
      console.log(er);
    }
  }
  
  
    // new
    useEffect(() => {
      fetchAllProjects();
    }, [])
  
 




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
