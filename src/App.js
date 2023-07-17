// import logo from './logo.svg';
// import './App.css';
// import {MainPage} from './MainPage';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import { Header } from './Components/Header';
import { Login } from './Components/Forms/Login';
import {ProductCard} from './Components/ProductCard';


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route index element={
        <div>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div> } />
      <Route path="login" element={<Login/>} />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
