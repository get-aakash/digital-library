import { signOut } from 'firebase/auth';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase-config/firebaseConfig';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../pages/signup-signin/userSlice';

const Header = () => {
  const { user } = useSelector(state => state.user)
  const dispatch = useDispatch()
  const handleOnLogout = () => {
    
    signOut(auth).then(() => {
      dispatch(setUser({}))
      toast.success("Signout successfully")
    }).catch(error => toast.error(error.message))
  }
  return (
    <Navbar expand="md border" bg='none' >
      <Container>
        <Navbar.Brand href="#home"><Link to="/">DL</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-4 fs-4">
            {user?.uid &&  <div className="nav-link">Welcome {user.name}</div>}
         
            <Link to="/" title='Home'><i class="fa-solid fa-house"></i></Link>
            <Link to="/dashboard" title='Dashboard'><i class="fa-solid fa-gauge"></i></Link>
            {user?.uid ? 
            <>
            {user?.role === "admin" && (<Link to='/admin/books' ><i class="fa-solid fa-book"></i></Link> )}
            
            
            <Link to='/' onClick={handleOnLogout} title='SignOut'><i class="fa-solid fa-person-walking-arrow-right"></i></Link> 
            
            </>
            : (
            <>
              <Link to="/signup" title='SignUp'><i className="fa-solid fa-user-pen"></i></Link>
              <Link to="/signin" title='SignIn'><i className="fa-solid fa-right-to-bracket"></i></Link>
            </>
          )}



          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
