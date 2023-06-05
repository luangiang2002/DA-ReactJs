import React, { useEffect, useState } from 'react'
import '../css/login.css'
import { Link } from 'react-router-dom'
import axiosUser from '../api/mockapi/user'
import { useNavigate } from 'react-router-dom'
import isEmpty from 'validator/lib/isEmpty'
function Login({onLogin}) {
    const [listUser, setListUsers] = useState([]);
    const [username, setUserName] = useState('');
    const [password, setPassWord] = useState('');
    const [validationMsg,setValidationMsg]=useState('')
    // console.log(username.length);
    // gọi api để lấy dữ liệu về - GET
    useEffect(() => {
        getAllUsers();
    }, [])

    const getAllUsers = async () => {
        const resp = await axiosUser.get("user");
        // console.log(resp);
        // console.log(resp.data);
        setListUsers(resp.data)
    }
    // console.log(isEmpty);
    const navigator = useNavigate()
   const validateAll=()=>{
    const msg={}
    if(isEmpty(username)){
        msg.username="Vui lòng nhập Email/Name"
    }
    if(isEmpty(password)){
        msg.password="Vui lòng nhập Password"
    }
    setValidationMsg(msg)
    if(Object.keys(msg).length>0) return false
    return true
   
   }
    const handleSubmit=()=>{
        const isValid=validateAll()
        if(!isValid) return
        
         listUser.map((item, index) => {
               if(item.username===username && item.password===password)
               onLogin(isValid)
               return navigator("/index")
              
            })
        
    }
    return (
        <div className='login'>
            <div className='login-lg'>
                <h1>LOGIN</h1>
                <p>Please enter your and password</p>
                <input type='text' placeholder='Email/Name' required onChange={(e) => setUserName(e.target.value)}></input>
                <span>{validationMsg.username}</span>
                <input type='password' placeholder='Password' required onChange={(e) => setPassWord(e.target.value)}></input>
                <span>{validationMsg.password}</span>
                <input type='submit' value="LOGIN" onClick={handleSubmit}></input>
                <p>Don't have an account ? <Link to={'/register'}>Sign Up</Link></p>
            </div>
        </div>
    )
}

export default Login