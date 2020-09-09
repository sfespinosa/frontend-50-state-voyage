import React from "react";
// reactstrap components
import {
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

// core components

function NavBar(props){
    return (
    <>
        <Navbar className="bg-info" expand="lg">
            <Container>
            <NavbarBrand>
            <img
              alt="website-logo"
              width='90'
            //   height='35'
              className="n-logo"
              src={require("../assets/img/50-state-voyage-logo.png")}
            ></img>
            </NavbarBrand>
                <button className="navbar-toggler" id="navbarNav" type="button">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <Nav navbar className="mr-auto">
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
                <NavItem>
                    <NavLink href={`/users/${props.user.id}`}>
                    <i className="now-ui-icons users_circle-08"></i>
                    <p>View Your Profile</p>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href='/findusers'>
                    <i className="now-ui-icons ui-1_zoom-bold"></i>
                    <p>Find Other Users</p>
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