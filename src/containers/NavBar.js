import React from "react";
// reactstrap components
import {
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

// core components

function NavBar(props){
    return (
    <>
        <Navbar className="bg-info" expand="lg">
            <Container>
            <NavbarBrand>
                Hello, {props.user}!
            </NavbarBrand>
                <button className="navbar-toggler" id="navbarNav" type="button">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <Nav navbar>
                <NavItem>
                    <NavLink href="/main">
                        Home <span className="sr-only">(current)</span>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/establishment-map">
                    View Establishment Map
                    </NavLink>
                </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
                <NavItem className='active'>
                    <NavLink href='/profile'>
                    <i className="now-ui-icons users_circle-08"></i>
                    <p>View Your Profile</p>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" onClick={()=> props.logout()}>
                    <p>Log Out</p>
                    </NavLink>
                </NavItem>
            </Nav>
        </Container>
        </Navbar>
    </>
    );
}

export default NavBar;