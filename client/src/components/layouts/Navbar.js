import React from 'react'
import styled from 'styled-components'
import logo from '../../images/logo 1.png'
import {Link} from 'react-router-dom'
import { Button, Navbar, Nav, Form,  FormControl  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return (
        <NavbarContainer>
          <Navbar  expand="lg" className="mak">
            <Link className="navbar-brand" to="/">
                        <img style={{ width:"40px",radious:"50%"}} src={logo} alt="logo"/></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="nav-link" to="/welcome">Home</Link>
                    </Nav>
                   
                    <Nav>
                    <Link className="nav-link" to="/Signin">Login</Link>
                        <Link className="nav-link" to="/Signup">Signup</Link>
                        <Link className="nav-link" to="/welcome">Logout</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </NavbarContainer>
    )
}

export default NavBar
//main navbar container
const NavbarContainer=styled.div`
background:var(--dark-green);
.nav-link {
    color: #fff !important;
    &:hover{
        background:var(--light-green);
    }
}


`;