import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { getAuth, signOut } from 'firebase/auth';
import { UserContext } from '../../context/UserProvider';



function Navbar() {
  const auth = getAuth();
  const { user, setUser } = useContext(UserContext);


  return (
    <nav className='navbar'>
      <div>
        <p className='Resumaker'>Resumaker</p>
      </div>

      <div>
        <Link className='pNav' to="/Home">Home</Link>
      </div>


      <Link className='pNav' to="/Resume">Resume</Link>

{user && (
  <div>
    {}
  </div>
)}

{!user && (
  <>
    <Link className='pNav' to="/SignIn">SignIn</Link>
    <Link className='pNav' to="/SignUp">SignUp</Link>
  </>
)}


      {user ?
        <div className="DivForSignOutBtn">
          <button onClick={() => signOut(auth)} className="SignOutBtn">  Sign Out   </button>

          <p className='pNavUser'>Hello <br /> {user.email}</p>

        </div> 
        : null}

    </nav>
  );
}

export default Navbar;