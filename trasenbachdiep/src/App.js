
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
// import Regiter from './component/Register'
// import Login from './component/Login';
// import Index from './component/Index';
// import Gioithieu from './component/Gioithieu';
// import Sanpham from './component/Sanpham';
// import Tintuc from './component/Tintuc';
// import Lienhe from './component/Lienhe';
// import CtSanpham1 from './component/CtSanpham1';
// import Footer from './component/Footer';
// import Navbar from './component/Navbar';
// import { useState } from 'react';

// function App() {
//   const [login, setLogin] = useState(false);
//   const handleLogin = (login) => {
//     setLogin(login)
//   }
//   console.log(login);
//   const element = login ? <>
//     <BrowserRouter >
//       <Navbar />
//       <Routes >
//         <Route path='register' element={<Regiter />}></Route>
//         <Route path='/' element={<Login />}></Route>
//         <Route path='index' element={<Index />}></Route>
//         <Route path="gioithieu" element={<Gioithieu />} ></Route>
//         <Route path="sanpham" element={<Sanpham />} ></Route>
//         <Route path="tintuc" element={<Tintuc />} ></Route>
//         <Route path="lienhe" element={<Lienhe />} ></Route>
//         <Route path="ctsp1" element={<CtSanpham1 />} ></Route>
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   </> :
//     <BrowserRouter>
//       <Login onLogin={handleLogin} />
//     </BrowserRouter>



//   return (
//     <div className="App">
//       {element}
//     </div>
//   );
// }

// export default App;


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './component/Index';
import Gioithieu from './component/Gioithieu';
import Sanpham from './component/Sanpham';
import Tintuc from './component/Tintuc';
import Lienhe from './component/Lienhe';
import CtSanpham1 from './component/CtSanpham1';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import { useEffect, useState } from 'react';
import axioProduct from './api/mockapi/user'
import Login from './component/Login';
import Register from './component/Register';

function App({onData}) {
  const [listUser, setListUser] = useState([]);


  useEffect(() => {
    getAllUser()
  }, [])
  const getAllUser = async () => {
    const resp = await axioProduct.get('product');
    setListUser(resp.data)
  }

  let hadleData = listUser.map((item) => {
    return item
  })

  const handleShow = (item, index) => {
    onData(item, index);
    
  } 
  console.log("a",onData);
  return (
    <div className="App">
      <>
        <BrowserRouter >
          <Navbar />
          <Routes >
            <Route path='/' element={<Index />}></Route>
            <Route path="gioithieu" element={<Gioithieu />} ></Route>
            <Route path="sanpham" element={<Sanpham renderProduct={hadleData} onData={handleShow}/>} ></Route>
            <Route path="tintuc" element={<Tintuc />} ></Route>
            <Route path="lienhe" element={<Lienhe />} ></Route>
            <Route path="ctsp1" element={<CtSanpham1 renderProduct={hadleData} renderData={handleShow}/>} ></Route>
            <Route path='login' element={<Login />}></Route>
            <Route path='register' element={<Register />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;

