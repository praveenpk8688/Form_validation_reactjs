import React, { useState } from 'react';

const SignUp_form = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [errors, setErrors] = useState({});

 const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = {};

    // First Name Validation
    if (!firstname) {
      validationErrors.firstname = 'First name is required';
    } else if (!/^[A-Z][a-z]*$/ || !/^[A-Z]+$/.test(firstname)) {
      validationErrors.firstname = 'First letter should be capital/Full name should be in capital letters.';
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
    } else if (!/^[0-9]{10}$/.test(mobile)) {
      validationErrors.mobile = 'Please enter a valid 10-digit mobile number.';
    }

    // Email Validation
    if (!email) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Please enter a valid email address.';
    }

    // Password Validation
    if (!password) {
      validationErrors.password = 'Password is required';
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
      validationErrors.password = 'Password must meet the criteria below.';
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
                <i className="fa-solid fa-house fa-2xl"></i>
              </a>
              <h2 className="text-center">SignUp</h2>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="firstname" className='login-label'>First Name</label>
                    <input
                      type="text"
                      id="firstname"
                      name='firstname'
                      className={`form-control ${errors.firstname ? 'is-invalid' : ''}`}
                      placeholder='First Name'
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                    {errors.firstname && <div className="invalid-feedback">{errors.firstname}</div>}
                  </div>
                  {/* Repeat similar structure for other input fields */}
                  <div className="mb-3">
                    <label htmlFor="lastname" className='login-label'>Last Name</label>
                    <input
                      type="text"
                      id="lastname"
                      name='lastname'
                      className={`form-control ${errors.lastname ? 'is-invalid' : ''}`}
                      placeholder='Last Name'
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                    {errors.lastname && <div className="invalid-feedback">{errors.lastname}</div>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="mobile" className='login-label'>Mobile Number</label>
                    <input
                      type="number"
                      id="mobile"
                      name='mobile'
                      className={`form-control ${errors.mobile ? 'is-invalid' : ''}`}
                      placeholder='Mobile Number'
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                    />
                    {errors.mobile && <div className="invalid-feedback">{errors.mobile}</div>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className='login-label'>Email Id</label>
                    <input
                      type="text"
                      id="email"
                      name='email'
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      placeholder='Email Id'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className='login-label'>Create Password</label>
                    <input
                      type="password"
                      id="password"
                      name='password'
                      className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                      placeholder='Create Password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                    <span>Create a Password with:
                      <ul>
                        <li>Minimum 8 characters.</li>
                        <li>At least one uppercase letter.</li>
                        <li>At least one number.</li>
                        <li>At least one special character('@,%,&,!').</li>
                      </ul>
                    </span>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="cpassword" className='login-label'>Confirm Password</label>
                    <input
                      type="password"
                      id="cpassword"
                      className={`form-control ${errors.cpassword ? 'is-invalid' : ''}`}
                      placeholder='Confirm Password'
                      value={cpassword}
                      onChange={(e) => setCpassword(e.target.value)}
                    />
                    {errors.cpassword && <div className="invalid-feedback">{errors.cpassword}</div>}
                  </div>
                  <button id='signup-btn' type="submit" className="btn btn-primary w-100 mt-3">SignUp</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp_form;
