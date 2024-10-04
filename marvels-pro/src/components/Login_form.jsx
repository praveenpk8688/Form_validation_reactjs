import React from 'react'
const Login_form=() => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 p-4 mt-4 ">
                    <div className="card">
                        <h2 className="text-center">Login</h2>
                        <div className="card-body">
                            <label className='login-label'>Email Id / Mobile</label>
                            <input type="text" className="form-control" />
                            <label className='login-label'>Password</label>
                            <input type="password" className="form-control" />
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
