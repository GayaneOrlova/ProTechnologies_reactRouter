
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PageHeader } from "./Components/Header/PageHeader";
import { Login } from "./Components/Forms/Login";
import { ProductCard } from "./Components/ProductCard";
import { DetailCard } from "./Components/DetailCard";
import RequireAuth from "./Components/RequireAuth";
import { AuthProvider } from "./Components/AuthContext";

const AdminAuthRequire = (
  <RequireAuth>
      <DetailCard />
  </RequireAuth>
)


function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <PageHeader />
      <Routes>
        <Route index element={<ProductCard />}/>
        <Route path="login/" element={<Login />} />
        <Route path="project/:id/" element={<AdminAuthRequire/>} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
