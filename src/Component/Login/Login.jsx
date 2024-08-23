import React from 'react'
import logo from '../../image/logo.png'
import './Login.css'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='login'>
                <img src={logo} alt="" />
                <div className='login2'>
                    <div className='login3'>
                        <h6>Please Login</h6>
                    </div>
                    <div className='login6'>
                        <div className='login4'>
                            <label htmlFor="">Email</label>
                            <input type="email" />
                        </div>
                        <div className='login4'>
                            <label htmlFor="">Password</label>
                            <input type="password" />
                        </div>
                        <p>Forgot Password</p>
                        <div className='login5'>
                            <button onClick={() => navigate('/home')} >Login</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Login