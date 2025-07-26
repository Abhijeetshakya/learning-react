import React from 'react'
import react, { useState } from 'react';
import './AuthForm.css';


export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className='container'>
      <div className='form-container'>
        <div className='form-toggle'> 
          <button className={isLogin ? 'active' : ""}onClick={() => setIsLogin(true)}> Login</button>
          <button className={!isLogin ? 'active' : ""}onClick={() => setIsLogin(false)}> Sign Up</button>
        </div>
        <div className='form'>
          {isLogin ? (
            <>
              <div className='form'>
                <h2>Login Form</h2>
                 <input type='email' placeholder='Email'/>
                 <input type='password' placeholder='Password'/>
                 <a href='#'>forgot password</a>
                 <button>Login</button>
                 <p> not a member ? <a href='#' onClick={()=> setIsLogin(false)}>Sign Up Now</a></p>
              </div>
            </>
          ) : (
            <>
              <div className='form'>
                <h2>Signup Form</h2>
                 <input type='email' placeholder='Email'/>
                 <input type='password' placeholder='Password'/>
                  <input type='password' placeholder='Confirm Password'/>
                 <button>Sign Up</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
