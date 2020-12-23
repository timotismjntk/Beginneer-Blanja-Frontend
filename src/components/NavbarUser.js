import React from 'react';
import { Container, Nav, Collapse, Form, Navbar,
    NavbarToggler, NavbarBrand,Button, Input,
    NavItem
 } from 'reactstrap';
import '../assets/css/style.css';
import Swal from 'sweetalert2'
import { Link, withRouter } from 'react-router-dom' // harus di import untuk berpindah halaman

import Brand from '../assets/images/logo.svg'
import Search from '../assets/images/Search.svg'
import Filter from '../assets/images/filter.svg'
import Cart from '../assets/images/cart.svg'
import Bell from '../assets/images/bell.svg'
import Mail from '../assets/images/mail.svg'
import Profile from '../assets/images/profile.svg'

class NavbarUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            navbarOpen: false,
            url: '#'
        }
    }

    logOut(e){
        e.preventDefault()
        Swal.fire(
            'You are logout successfully',
            'redirecting to landing page',
            'success'
          )
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
    }

    render() {
        const loginLink = (
            <ul className="navbar-nav btn-user ml-auto">
                <li className="nav-item">
                    <button className="btn btn-primary rounded-pill mr-2 p-0 login">
                        <Link to="/user/login" className="nav-link text-white p-0">Login</Link>
                    </button>
                </li>
                <li className="nav-item btn-user">
                    <button className="btn btn-outline-secondary rounded-pill p-0">
                        {/* <Link to="/user/register" className="nav-link text-secondary p-0">Signup</Link> */}
                        <Link to="/admin" className="nav-link text-secondary p-0">Admin</Link>
                    </button>
                </li>
            </ul>
        )
        const userLink = (
            <ul className="navbar-nav d-flex align-items-center">
                <li className="nav-item">
                    <span></span>
                </li>
                <li className="nav-item">
                    <a href={this.url} className="bell">
                        <img className="cart-icon mr-4" src={Bell} alt="bell" />
                    </a>
                </li>
                <li className="nav-item">
                    <a href={this.url} className="mail">
                        <img className="cart-icon mr-4" src={Mail} alt="mail" />
                    </a>
                </li>
                <li className="nav-item">
                    <a href={this.url} className="profile mr-4">
                        <img className="cart-icon" src={Profile} alt="profile" />
                    </a>
                </li>
                <li className="nav-item">
                    <Button onClick={this.logOut.bind(this)} className="nav-link text-secondary font-weight-bold btn-sm rounded-pill">
                        Log Out
                    </Button>
                </li>
            </ul>
        )
        return(
            <Container>
                <Navbar color="light" dark expand="md" className="sticky-top d-flex align-items-center"> 
                        <NavbarBrand><img src={Brand} alt="logo" /></NavbarBrand>
                        <NavbarToggler className='buttonToggler' onClick={() => this.setState({navbarOpen: !this.state.navbarOpen})}/>
                        <Collapse isOpen={this.state.navbarOpen} navbar className='joinNav'>
                            <Nav className="customNav d-flex ml-auto" navbar>
                                <NavItem className="d-flex justify-content-between">
                                    <Form className="form d-flex flex-row align-items-center">
                                        <div className="search-bar">
                                            <Input type="text" className="form-control" placeholder="Search" />
                                        </div>
                                        <a href={this.url}><img className="search-icon w-100" src={Search} alt="search" /></a>
                                        <Button type="button" id="filter" className="btn btn-outline-dark filter"><img className="filter-icon" src={Filter} alt="filter"/></Button>
                                    </Form>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto anotherCustomNav" navbar>
                                <NavItem className='ml-auto cust'>
                                    <div className="d-flex align-items-center justify-content-center">  
                                        <a href={this.url} className="cart ml-auto mr-4">
                                            <img className="cart-icon" src={Cart} alt="cart" />
                                        </a>
                                        {localStorage.usertoken ? userLink : loginLink}
                                    </div>
                                </NavItem>
                            </Nav>
                        </Collapse>
                </Navbar>
            </Container> 
        )
    }
}

export default withRouter(NavbarUser)