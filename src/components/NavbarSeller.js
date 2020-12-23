import React from 'react';
import { Container, Nav, Collapse, Navbar, NavItem,
    NavbarToggler, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom' // harus di import untuk berpindah halaman
// import SearchBar from './searchComponent'

class NavbarSeller extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            navbarOpen: false
        }
    }
    render() {
        return(
        <Navbar color="dark" dark expand="md" className="sticky-top"> 
            <Container>
                <NavbarBrand className="mr-5">
                    <a href='/' className="text-secondary">Ecommerce</a>
                </NavbarBrand>
                <NavbarToggler onClick={() => this.setState({navbarOpen: !this.state.navbarOpen})}/>
                <Collapse navbar isOpen={this.state.navbarOpen} className="ml-5">
                {/* <SearchBar /> */}
                <Nav navbar className="ml-auto">
                    <NavItem>
                        <Link to="/" className="nav-link">Home</Link>
                    </NavItem>
                </Nav>
                </Collapse>
            </Container>
        </Navbar> 
        )
    }
}

export default NavbarSeller