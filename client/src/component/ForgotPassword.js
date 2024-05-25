import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ForgotPassword = () => {

    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    axios.defaults.withCredentials = true;
    const handlesubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:4000/forgotpassword',{email})
      .then(res => {
           if(res.data.status === "Success"){
                  navigate('/login')
                 
               }   
      })
      .catch(err => console.log(err))
    }
  return (
    <div className='forgot'>
        <form onSubmit={handlesubmit}>
            <h2>Forgot Password</h2>
 
            <input type='email' name='email' placeholder='Enter your Email id'  value={email} onChange={(e)=>setEmail(e.target.value)}/>
            
           
            <button type='submit'>Send</button>

            <p> Back to  <Link to='/login'>Login</Link></p>
        </form>
      
    </div>
  )
}

export default ForgotPassword;