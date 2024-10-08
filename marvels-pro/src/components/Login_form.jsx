import React from 'react'
import { Route, Routes,Link } from 'react-router-dom';

const Login_form=() => {
  return (
    <div>
        <div className="container" id='login-container'>
            <div className="row">
                <div className="col-md-6  p-4 mt-4 ">
                    <div className="card">
                    <a href='./'>
                    <i class="fa-solid fa-house fa-2xl" id='logo-homelogin'></i>
                    </a>
                        <h2 className="text-center">Login</h2>
                        <div className="card-body">
                            <label className='login-label'>Email Id / Mobile</label>
                            <input type="text" className="form-control" />
                            <label className='login-label'>Password</label>
                            <input type="password" className="form-control" />
                            <a id='forgot' href="">Forgot password</a>
                            <a id='create-account' href="/signup">Create an Account</a>
                            <button id='login-btn' className="btn btn-success w-100 mt-3">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Login_form
