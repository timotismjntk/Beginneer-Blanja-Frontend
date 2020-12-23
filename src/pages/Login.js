import React from 'react';
import { Button, Container, Input, Form } from 'reactstrap'
import '../assets/css/style.css'
import { Link } from 'react-router-dom'
import qs from 'querystring'
import Swal from 'sweetalert2'

import logo from '../assets/images/brand.png'

import {login} from '../helper/customer'

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }
    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
    },()=>{
        // console.log(this.state)
    })
    }

    onSubmit = async (e) => {
        e.preventDefault()
        const customer = qs.stringify({
            email: this.state.email,
            password: this.state.password
        })
        console.log(customer)
        await login(customer).then(response=>{
            console.log(response)
            if(response) {
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'You will directly go to the homepage',
                    showConfirmButton: false,
                    timer: 1500
                  })
                setTimeout(()=>{
                    this.props.history.push('/user/LandingPage')
                },900)
            }else if(!response){
                Swal.fire(
                    'Something Error?',
                    'Check your email and password again',
                    'error'
                  )
            }else {
            }
        }
        ).catch(err =>{
            console.log(err)
        })
    }
    render() {
        return (
            <React.Fragment>
                <Container className="form vh-100 vw-100 d-flex flex-column justify-content-center align-items-center">
                    <div className="header text-center">
                        <div className="logo mb-5">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="message">
                            <span>Please login with your account</span>
                        </div>
                    </div>
                    <div className="btn-group switch" role="group">
                    <Button className="button-primary text-light" style={{backgroundColor: '#DB3022'}}>Customer</Button>
                    <Button className="btn-secondary">Seller</Button>
                    </div>
                    <Form onSubmit={this.onSubmit} className="auth">
                        <div className="form-group input email">
                            <Input onChange={this.changeInput} value={this.state.email} type="email" name="email" placeholder="Email" required/>
                        </div>
                        <div class="form-group input pass">
                            <Input onChange={this.changeInput} value={this.state.password} type="password" name="password" placeholder="Password" required/>
                        </div>
                        <div class="text-right forgot-link">
                            <Link to="#" className="nav-link" style={{color: '#DB3022'}}>Forgot Password?</Link>
                        </div>
                        <div class="button">
                            <Button type="submit" className="btn-danger w-100 text-light" style={{backgroundColor: '#DB3022'}}>Login</Button>
                        </div>
                    </Form>
                    <div className="d-flex align-items-center">
                    <span>Don't have an account?</span>
                    <Link to="/user/register" className="nav-link register-link">Register</Link>
                    </div>
                    
                </Container>
            </React.Fragment>
        )
    }
}

export default Login;