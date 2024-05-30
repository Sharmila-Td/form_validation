import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
 
const Home = () => {
  return (

        <nav className='nav-bar'>
          <ul>
            <li><Link to='/home' >Home </Link></li>
            <li><Link >About</Link></li>
            <li><Link >Service </Link></li>
            <li><Link>Contact </Link></li> 
          </ul>
       
       </nav>
    
  )
}

export default Home