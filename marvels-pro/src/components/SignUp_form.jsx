import React from 'react'
import { useState }from 'react';

const SignUp_form=() => {
    var[firstname,setFirstname]=useState('');
    var[lastname,setLastname]=useState('');
    var[mobile,setMobile]=useState('');
    var[email,setEmail]=useState('');
    var[password,setPassword]=useState('');
    var[cpassword,setCpassword]=useState('');
    var[errors,setErrors]=useState({});


    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = {};
    
        // First Name Validation
        if (!firstname) {
          validationErrors.firstname = 'First name is required';
        } else if (!/^[A-Z][a-z]*$/ || !/^[A-Z]+$/.test(firstname)) {
          validationErrors.firstname = 'Full name should be in capital letters.';
        }
    
        // Last Name Validation
        if (!lastname) {
          validationErrors.lastname = 'Last name is required';
        } else if (!/^[A-Z][a-z]*$/ || !/^[A-Z]+$/.test(lastname)) {
          validationErrors.lastname = 'First letter should be capital/Full name should be in capital letters.';
        }
    
        // Mobile Number Validation
        if (!mobile) {
          validationErrors.mobile = 'Mobile number is required';
        } else if (!/^[6-9]\d{9}$/.test(mobile)) {
          validationErrors.mobile = 'Please enter a valid 10-digit mobile number.';
        }
    
        // Email Validation
        if (!email) {
          validationErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          validationErrors.email = <span>Please enter valid email id, as <u>mymail@mydomine.com</u>;</span>
        }
    
        // Password Validation
        if (!password) {
          validationErrors.password = 'Password is required';
        } else if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)) {
          validationErrors.password = <span>Create a Password with:
          <ul>
              <li>Minimum 8 characters.</li>
              <li>At least one uppercase letter.</li>
              <li>At least one number.</li>
              <li>At least one special character('@,%,&,!').</li>
          </ul>
      </span>;
        }
    
        // Confirm Password Validation
        if (!cpassword) {
          validationErrors.cpassword = 'Please confirm your password';
        } else if (password !== cpassword) {
          validationErrors.cpassword = 'Passwords do not match';
        }
    
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
        } else {
          // If there are no errors, proceed with form submission
          console.log('Form submitted successfully!');
          // Add your form submission logic here
        }
      };
    


  return (
    <div id='signup-form'>
        <div className="container" id='signup-container'>
            <div className="row">
                <div className="col-md-6  p-4 " id='signup-card'>
                    <div className="card ">
                        <a href='./'>
                        <i class="fa-solid fa-house fa-2xl"></i>
                        </a>
                        <h2 className="text-center">SignUp</h2>
                        <div className="card-body">
                <form onSubmit={handleSubmit}>
                         <div className="mb-3">
                            <label className='login-label'>First Name</label>
                            <input type="text" name='firstname' className={`form-control ${errors.firstname ? 'is-invalid' : ''}`} placeholder='First Name' onChange={(e) => setFirstname(e.target.value)}/>
                            <div className="invalid-feedback">{errors.firstname}</div>

                            {/* <span>First letter should be capital/Full name should be in capital letters.</span><br /> */}
                            <label className='login-label'>Last Name</label>
                            <input type="text" name='lastname' className={`form-control ${errors.lastname ? 'is-invalid' : ''}`} placeholder='Last Name' onChange={(e) => setLastname(e.target.value)}/>
                             <div className="invalid-feedback">{errors.lastname}</div>

                            {/* <span>First letter should be capital/Full name should be in capital letters.</span><br /> */}
                            <label className='login-label'>Mobile Number</label>
                            <input type="number" name='mobile' className={`form-control ${errors.mobile ? 'is-invalid' : ''}`} placeholder='Mobile Number' onChange={(e) => setMobile(e.target.value)}/>
                            <div className="invalid-feedback">{errors.mobile}</div>

                            {/* <span>Please enter valid mobile number.</span><br /> */}
                            <label className='login-label'>Email Id</label>
                            <input type="text" name='email' className={`form-control ${errors.email ? 'is-invalid' : ''}`} placeholder='Email Id' id='email' onChange={(e) => setEmail(e.target.value)}/>
                            <div className="invalid-feedback">{errors.email}</div>
                            {/* <span>Please enter valid email id, as <u>mymail@mydomine.com</u>.</span><br /> */}
                            <label className='login-label'>Create Password</label>
                            <input type="password" name='password' className={`form-control ${errors.password ? 'is-invalid' : ''}`} placeholder='Create Password' onChange={(e) => setPassword(e.target.value)}
                            />
                            <div className="invalid-feedback">{errors.password}</div>
                            {/* <span>Create a Password with:
                                <ul>
                                    <li>Minimum 8 characters.</li>
                                    <li>At least one uppercase letter.</li>
                                    <li>At least one number.</li>
                                    <li>At least one special character('@,%,&,!').</li>
                                </ul>
                            </span> */}
                            <label className='login-label'>Confirm Password</label>
                            <input type="password" className={`form-control ${errors.cpassword ? 'is-invalid' : ''}`} placeholder='Confirm Password' onChange={(e) => setCpassword(e.target.value)}
                            />
                            <div className="invalid-feedback">{errors.cpassword}</div>
                            {/* <span>Please confirm your password.</span> */}
                            <button id='signup-btn' className="btn btn-primary w-100 mt-3">SignUp</button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
      
    </div>
  )
};

export default SignUp_form
