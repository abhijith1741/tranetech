import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name == "admin" && password == "admin"){
            navigate("/home")
        }else {
            navigate("/error")
        }
    }
  return (
    <div className='login-section'>
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text" placeholder='Enter Username' value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="text" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type='submit'>Submit</button>
        </form>
    </div>

    
  )
}

export default Login