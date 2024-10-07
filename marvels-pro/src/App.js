import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import SignUp_form from './components/SignUp_form';
import Login_form from './components/Login_form';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login_form />} />
        <Route path="/SignUp" element={<SignUp_form />} />
      </Routes>
    </div>
  );
}

export default App;
