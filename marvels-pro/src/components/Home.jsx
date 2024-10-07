import React from 'react'
// import Login_form from './components/Login_form';
// import SignUp_form from './components/SignUp_form';
import { Routes, Route, Link } from 'react-router-dom';
export default function Home() {
  return (
    <div  >
      <div className="container " >
        <div className="row">
          <div className="col-md-12 text-center  " >
            <h1>Welcome to Home Page !</h1>
            <h2>If you already have an account please login.</h2>
            <Link to='./Login'>
            <button id='btn-login' className='btn '>Login</button>
            </Link>
            <h2>If you don't have an account please SignUp/Register.</h2>
            <Link to='./SignUp'>
            <button className='btn btn-primary' id='btn-signup'>SignUp</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
