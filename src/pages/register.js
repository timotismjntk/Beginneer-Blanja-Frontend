import React from 'react';
import { Container, Button, Form, Input } from 'reactstrap'
import { Link } from 'react-router-dom'
import {register} from '../helper/customer'
import qs from 'querystring'

import Swal from 'sweetalert2'

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            DisplayCustomer: 'block',
            DisplaySeller: 'none',
            CustomerColor: '#DB3022',
            SellerColor: '#FFFFFF',
            fontSeller: '#9B9B9B',
            fontCustomer: '#FFFFFF',
            name: '',
            email: '',
            password: '',
            phone_number: '',
            address: ''
        }
    }
    
    
    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
    },()=>{
        console.log(this.state)
    })
    }

    onSubmit =  (e) => {
        e.preventDefault()
        const newCustomer = qs.stringify({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            phone_number: this.state.phone_number,
            address: this.state.address
        })
        console.log(newCustomer)
        register(newCustomer).then(response=>{
            console.log(response.error)
            if(!response.error) {
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'You will directly go to the Login Page',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  setTimeout(()=>{
                    this.props.history.push('/user/login')
                },900)
            }else {
                Swal.fire(
                    'Email Already Taken',
                    'Check your email and password again',
                    'error'
                  )
            }
        })
    }
    

    render() {
        let style = {
            display: this.state.DisplayCustomer,
        }
        let styleBtnCust = {
            backgroundColor: this.state.CustomerColor,
            border: '1px solid #9B9B9B',
            color: this.state.fontCustomer
        }
        let style2 = {
            display: this.state.DisplaySeller
        }
        let styleBtnSell = {
            backgroundColor: this.state.SellerColor,
            border: '1px solid #9B9B9B',
            color: this.state.fontSeller
        }
        return(
            <React.Fragment>
                <Container className="form d-flex flex-column justify-content-center align-items-center mt-3">
                    <div className="header text-center">
                        <div className="logo mb-5">
                            <img src={require('../assets/images/logo.svg')} alt="brand" />
                        </div>
                        <div className="message">
                            <span>Please sign up with your account</span>
                        </div>
                    </div>
                    <div className="btn-group switch" role="group">
                        <Button type="button" style={styleBtnCust} onClick={()=>{this.setState({DisplayCustomer: 'block', DisplaySeller: 'none', SellerColor: '#FFFFFF', CustomerColor: '#DB3022', fontSeller: '#9B9B9B', fontCustomer: '#FFFFFF'})}} className="btn btn-primary">Customer</Button>
                        <Button type="button" style={styleBtnSell} onClick={()=>{this.setState({DisplaySeller: 'block', DisplayCustomer: 'none', SellerColor: '#DB3022', CustomerColor: '#FFFFFF', fontSeller: '#FFFFFF', fontCustomer: '#9B9B9B'})}} className="btn btn-light">Seller</Button>
                    </div>
                    <Form onSubmit={this.onSubmit} className="auth">
                        <div className="form Customer" id="form1" style={style}>
                            <div className="form-group input">
                                <Input onChange={this.changeInput} value={this.state.name} type="name" name="name" placeholder="Name" required/>
                            </div>
                            <div className="form-group input">
                                <Input onChange={this.changeInput} value={this.state.email} type="email" name="email" placeholder="Email" required/>
                            </div>
                            <div className="form-group input">
                                <Input onChange={this.changeInput} value={this.state.password} type="name" name="password" placeholder="Password" required/>
                            </div>
                            <div className="form-group input">
                                <Input onChange={this.changeInput} value={this.state.phone_number} type="name" name="phone_number" placeholder="Phone Number" required/>
                            </div>
                            <div className="form-group input mb-5">
                            <Input onChange={this.changeInput} value={this.state.address} type="name" name="address" placeholder="Address" required/>
                            </div>
                            <div className="button">
                                <Button type="submit" className="btn btn-primary w-100 text-light" style={{backgroundColor: '#DB3022'}}>Register</Button>
                            </div>
                        </div>
                    </Form>
                    <Form className="auth">
                        <div class="form" id="form1" style={style2}>
                            <div className="form-group input">
                                <input className="w-100" type="name"  placeholder="Name" required/>
                            </div>
                            <div className="form-group input">
                                <input className="w-100" type="email"  placeholder="Email" required/>
                            </div>
                            <div className="form-group input">
                                <input className="w-100" type="phone"  placeholder="Phone Number" required/>
                            </div>
                            <div className="form-group input">
                                <input className="w-100" type="name"  placeholder="Store Name" required/>
                            </div>
                            <div className="form-group input mb-5">
                                <input className="w-100" type="password" placeholder="Password" required/>
                            </div>
                            <div className="button">
                                <button className="btn btn-primary w-100">Register</button>
                            </div>
                        </div>
                    </Form>
                    <div className="d-flex align-items-center">
                        <span className>Already have a Tokopedia account?</span>
                        <Link to="/user/login" className="nav-link" style={{color: '#DB3022'}}>Login</Link>
                    </div>
                </Container>
            </React.Fragment>
        )
    }
}

export default Register