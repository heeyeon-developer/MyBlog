import React, { Fragment } from 'react'
import {Navbar, Container, NavbarToggler, Collapse, Nav} from 'reactstrap'
import {Link} from 'react-router-dom'

const AppNavbar = () => {
    return(
        <Fragment>
            <Navbar color='dark' dark expand='lg' className='sticky-top'>
                <Container>
                    <Link to='/' className='text-white text-decoration-none'>
                        heeyeon's blog
                    </Link>
                </Container>
                <NavbarToggler />
                <Collapse isOpen={true} navbar>
                    <Nav className='ml-auto d-flex justify-content-around' navbar>
                        {true? <h1 className='text-white'>authLink</h1> : <h1>gestlink</h1>}
                    </Nav>
                </Collapse>
            </Navbar>
        </Fragment>
    )
}

export default AppNavbar