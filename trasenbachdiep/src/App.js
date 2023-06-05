
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Regiter from './component/Register'
import Login from './component/Login';
import Index from './component/Index';
import Gioithieu from './component/Gioithieu';
import Sanpham from './component/Sanpham';
import Tintuc from './component/Tintuc';
import Lienhe from './component/Lienhe';
import CtSanpham1 from './component/CtSanpham1';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import {  useEffect, useState } from 'react';

function App() {
  const [login, setLogin] = useState(false);
  const handleLogin = (login) => {
    setLogin(login)
  }
  const element = login ? <>
    <BrowserRouter >
      <Navbar />
      <Routes >
        <Route path='register' element={<Regiter/>}></Route>
        <Route path='/' element={<Login />}></Route>
        <Route path='index' element={<Index />}></Route>
        <Route path="gioithieu" element={<Gioithieu />} ></Route>
        <Route path="sanpham" element={<Sanpham />} ></Route>
        <Route path="tintuc" element={<Tintuc />} ></Route>
        <Route path="lienhe" element={<Lienhe />} ></Route>
        <Route path="ctsp1" element={<CtSanpham1 />} ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </> :
  <BrowserRouter><Login onLogin={handleLogin}/></BrowserRouter>

  
  
  return (
    <div className="App">
      {element}
    </div>
  );
}

export default App;
