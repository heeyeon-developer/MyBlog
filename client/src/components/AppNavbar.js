import React, { Fragment, useState, useCallback, useEffect } from "react";
import {Navbar, Container, NavbarToggler, Collapse, Nav} from 'reactstrap'
import {Link} from 'react-router-dom'
import LoginModal from "../components/auth/LoginModal";
import { useSelector, useDispatch} from 'react-redux';
import { LOGOUT_REQUEST } from '../redux/types';

const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const {isAuthenticated, user, userRole} = useSelector((state) =>  state.auth)
  console.log(userRole, "UserRole")

  const dispatch = useDispatch()
  const onLogout = useCallback(() => {
    dispatch({
      type: LOGOUT_REQUEST
    })
  },[dispatch])

  useEffect(() => {
    setIsOpen(false)
  },[user])

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }
    return (
      <Fragment>
        <Navbar color="dark" dark expand="lg" className="sticky-top">
          <Container>
            <Link to="/" className="text-white text-decoration-none">
              heeyeon's blog
            </Link>
          </Container>
          <NavbarToggler onClick={handleToggle}/>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="sl-auto d-flex justify-content-around" navbar>
              {isAuthenticated ? <h1 className="text-white">authLink</h1> : <LoginModal />}
            </Nav>
          </Collapse>
        </Navbar>
      </Fragment>
    );
}

export default AppNavbar