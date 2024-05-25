import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignUp from './component/SignUp';
import Home from './component/Home';
import Login from './component/Login';
import ForgotPassword from './component/ForgotPassword';
import ResetPassword from './component/ResetPassword';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Login/>}/>
              <Route path='/signup' element={<SignUp/>}/>
              <Route path='/home' element={<Home/>}/>
              <Route path='/forgotpassword' element={<ForgotPassword/>}/>
              <Route path='/resetpassword/:id/:token' element={<ResetPassword/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

  