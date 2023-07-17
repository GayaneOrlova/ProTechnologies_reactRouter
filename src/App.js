// import logo from './logo.svg';
// import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

  
import { Header } from './Components/Header';
// import {MainPage} from './MainPage';
import { Login } from './Components/Forms/Login';


function App() {
  return (
    <BrowserRouter>
    <Header/>
    {/* <Login/> */}
    <Routes>
      <Route index element={<div>No page is selected.</div> } />
      <Route path="login" element={<Login/>} />
    </Routes>
      
    </BrowserRouter>
  );
}

export default App;
