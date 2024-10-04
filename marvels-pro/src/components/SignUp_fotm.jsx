import React from 'react'

const SignUp_form=() => {
  return (
    <div>
        <div className="container ">
            <div className="row">
                <div className="col-md-6 offset-md-3 p-4 ">
                    <div className="card ">
                        <h2 className="text-center">SignUp</h2>
                        <div className="card-body">
                            <label className='login-label'>First Name</label>
                            <input type="text" className="form-control" />
                            <label className='login-label'>Last Name</label>
                            <input type="text" className="form-control" />
                            <label className='login-label'>Mobile Number</label>
                            <input type="number" className="form-control" />
                            <label className='login-label'>Email Id</label>
                            <input type="text" className="form-control" />
                            <label className='login-label'>Create Password</label>
                            <input type="password" className="form-control" />
                            <label className='login-label'>Confirm Password</label>
                            <input type="password" className="form-control" />
                            <button id='signup-btn' className="btn btn-primary w-100 mt-3">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default SignUp_form
