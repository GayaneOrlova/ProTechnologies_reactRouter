import React from 'react';
import {Routes, Route } from "react-router-dom";

import { PageHeader } from "./Components/Header/PageHeader";
import { Login } from "./Components/Forms/Login";
import { ProductCard } from "./Components/ProductCard";
// import { DetailCard } from "./Components/DetailCard";
// import RequireAuth from "./Components/RequireAuth";
import { AuthProvider } from "./Components/AuthContext";
// import { postUser } from './API/ProTech.api';

// const AdminAuthRequire = (
//   <RequireAuth>
//       <DetailCard />
//   </RequireAuth>
// )

// const onLogin = async (value: object) => {
//   try {
//     // if (!value.trim()) {
//     //   return;
//     // }
//     // const response = await postUser(value);
//     // dispatch(addItem(response.data));
//     // console.log(response)
    
//   } catch(er) {
//     console.log(er);
//   }
// }



function App() {
  return (
    <AuthProvider>
    {/* <BrowserRouter> */}
      <PageHeader />
      <Routes>
        <Route index element={<ProductCard />}/>
       
        <Route path="login/" element={<Login/>} />  {/* new */}
        
        {/* <Route path="project/:id/" element={<AdminAuthRequire/>} /> */}
      </Routes>
    {/* </BrowserRouter> */}
    // </AuthProvider>
  );
}

export default App;
