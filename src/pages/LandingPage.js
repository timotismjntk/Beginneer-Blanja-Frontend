import React from 'react';
import NavbarUser from '../components/NavbarUser';
import {  Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Container } from 'reactstrap'
import '../assets/css/ecommerce.css';
// importing image
// import img1 from '.../assets/images/1.png'

class LandingPage extends React.Component {
    constructor(){
        super()
        this.state = {
            url: '#'
        }
    }
    render() {
        return (
            <React.Fragment>
                <NavbarUser />
                <Container className="mt-5">
                    <div className="slider-container d-flex justify-content-between align-items-center position-relative">
                        <div className="gambar position-relative">
                            <img src={require('../assets/images/1.png')} className="img1 rounded" alt="gambar"/>
                            <a href={this.state.url}><img src={require('../assets/images/left.png')} className="position-absolute arrow" alt="left"/></a>
                        </div>
                        <div className="gambar">
                            <img src={require('../assets/images/2.png')} className="img2 rounded" alt="gambar"/>
                            <span className="position-absolute caption font-weight-bold">Trends in 2020</span>
                        </div>
                        <div className="gambar">
                            <img src={require('../assets/images/3.png')} className="img3 rounded" alt="gambar"/>
                            <a href={this.state.url}><img src={require('../assets/images/right.png')} alt="right" className="position-absolute arrow1" /></a>
                            <span className="position-absolute caption1 font-weight-bold">Trends in 2020</span>
                        </div>
                        <div className="gambar">
                            <img src={require('../assets/images/4.png')} className="img4 rounded" alt="gambar"/>
                        </div>
                    </div>
                    <div className="indicator">
                            <span className="dot font-weight-bold text-secondary">•</span>
                            <span className="dot1 font-weight-bold">•</span>
                            <span className="dot1 font-weight-bold">•</span>
                            <span className="dot1 font-weight-bold">•</span>
                            <span className="dot1 font-weight-bold">•</span>
                    </div>
                    <div className="category mt-4">
                        <h2 className="font-weight-bold">Category</h2>
                        <span className="detail">What are you currently looking for</span>
                    </div>

                    <div className="slider-container-dua mt-4 d-flex justify-content-between align-items-center position-relative">
                        <div className="item1 position-relative d-flex justify-content-center align-items-center">
                        <img src={require('../assets/images/baju.png')} className="img1 rounded" alt="gambar" />
                        <span className="position-absolute caption2 font-weight-bold">T-Shirt</span>
                        </div>
                        <div className="item2 d-flex justify-content-center align-items-center">
                            <img src={require('../assets/images/celana-hijau.png')} className="rounded" alt="gambar"/>
                            <span className="position-absolute caption2 font-weight-bold">Shorts</span>
                        </div>
                        <div className="item3 d-flex justify-content-center align-items-center">
                            <img src={require('../assets/images/jaket.png')} className="rounded" alt="gambar"/>
                            <button class="btn btn-default position-absolute rounded-circle btn-arrow3"><img src={require('../assets/images/right.png')} alt="right" /></button>
                            <span className="position-absolute caption2 font-weight-bold">Jacket</span>
                        </div>
                        <div className="item4 d-flex justify-content-center align-items-center">
                            <img src={require('../assets/images/celana-panjang.png')} className="img4 rounded" alt="gambar" />
                            <span className="position-absolute caption2 font-weight-bold">Pants</span>
                        </div>
                        <div className="item5 d-flex justify-content-center align-items-center">
                            <img src={require('../assets/images/sepatu.png')} className="img4 rounded" alt="gambar" />
                            <span className="position-absolute caption2 font-weight-bold">Shoes</span>
                        </div>
                    </div>

                    <div className="category mt-5">
                        <h2 className="font-weight-bold">New</h2>
                        <span className="detail">What are you currently looking for</span>
                    </div>

                    <div className="row mb-3 mt-4">
                        <div className="col mb-3">
                            <Card className="mycard">
                                <CardImg top width="100%" src={require('../assets/images/jas.png')} alt="jas" className="card-img-top" />
                                <CardBody>
                                    <CardTitle className="font-weight-bold">Men's formal suit - Black & White</CardTitle>
                                    <CardSubtitle className="price">$ 40.0</CardSubtitle>
                                    <CardText className="text">Zalora Cloth</CardText>
                                    <div className="rating d-flex align-items-center flex-row justify-items-center text-center">
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <span className="text-secondary mt-1"><small>(10)</small></span>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col mb-3">
                            <Card className="mycard">
                                <CardImg top width="100%" src={require('../assets/images/jas.png')} alt="jas" className="card-img-top" />
                                <CardBody>
                                    <CardTitle className="font-weight-bold">Men's formal suit - Black & White</CardTitle>
                                    <CardSubtitle className="price">$ 40.0</CardSubtitle>
                                    <CardText className="text">Zalora Cloth</CardText>
                                    <div className="rating d-flex align-items-center flex-row justify-items-center text-center">
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <span className="text-secondary mt-1"><small>(10)</small></span>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col mb-3">
                            <Card className="mycard">
                                <CardImg top width="100%" src={require('../assets/images/jas.png')} alt="jas" className="card-img-top" />
                                <CardBody>
                                    <CardTitle className="font-weight-bold">Men's formal suit - Black & White</CardTitle>
                                    <CardSubtitle className="price">$ 40.0</CardSubtitle>
                                    <CardText className="text">Zalora Cloth</CardText>
                                    <div className="rating d-flex align-items-center flex-row justify-items-center text-center">
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <span className="text-secondary mt-1"><small>(10)</small></span>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col mb-3">
                            <Card className="mycard">
                                <CardImg top width="100%" src={require('../assets/images/jas.png')} alt="jas" className="card-img-top" />
                                <CardBody>
                                    <CardTitle className="font-weight-bold">Men's formal suit - Black & White</CardTitle>
                                    <CardSubtitle className="price">$ 40.0</CardSubtitle>
                                    <CardText className="text">Zalora Cloth</CardText>
                                    <div className="rating d-flex align-items-center flex-row justify-items-center text-center">
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <span className="text-secondary mt-1"><small>(10)</small></span>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col mb-3">
                            <Card className="mycard">
                                <CardImg top width="100%" src={require('../assets/images/jas.png')} alt="jas" className="card-img-top" />
                                <CardBody>
                                    <CardTitle className="font-weight-bold">Men's formal suit - Black & White</CardTitle>
                                    <CardSubtitle className="price">$ 40.0</CardSubtitle>
                                    <CardText className="text">Zalora Cloth</CardText>
                                    <div className="rating d-flex align-items-center flex-row justify-items-center text-center">
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <span className="text-secondary mt-1"><small>(10)</small></span>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </div>

                    <div className="row mb-3 mt-4">
                        <div className="col mb-3">
                            <Card className="mycard">
                                <CardImg top width="100%" src={require('../assets/images/jas.png')} alt="jas" className="card-img-top" />
                                <CardBody>
                                    <CardTitle className="font-weight-bold">Men's formal suit - Black & White</CardTitle>
                                    <CardSubtitle className="price">$ 40.0</CardSubtitle>
                                    <CardText className="text">Zalora Cloth</CardText>
                                    <div className="rating d-flex align-items-center flex-row justify-items-center text-center">
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <span className="text-secondary mt-1"><small>(10)</small></span>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col mb-3">
                            <Card className="mycard">
                                <CardImg top width="100%" src={require('../assets/images/jas.png')} alt="jas" className="card-img-top" />
                                <CardBody>
                                    <CardTitle className="font-weight-bold">Men's formal suit - Black & White</CardTitle>
                                    <CardSubtitle className="price">$ 40.0</CardSubtitle>
                                    <CardText className="text">Zalora Cloth</CardText>
                                    <div className="rating d-flex align-items-center flex-row justify-items-center text-center">
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <span className="text-secondary mt-1"><small>(10)</small></span>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col mb-3">
                            <Card className="mycard">
                                <CardImg top width="100%" src={require('../assets/images/jas.png')} alt="jas" className="card-img-top" />
                                <CardBody>
                                    <CardTitle className="font-weight-bold">Men's formal suit - Black & White</CardTitle>
                                    <CardSubtitle className="price">$ 40.0</CardSubtitle>
                                    <CardText className="text">Zalora Cloth</CardText>
                                    <div className="rating d-flex align-items-center flex-row justify-items-center text-center">
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <span className="text-secondary mt-1"><small>(10)</small></span>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col mb-3">
                            <Card className="mycard">
                                <CardImg top width="100%" src={require('../assets/images/jas.png')} alt="jas" className="card-img-top" />
                                <CardBody>
                                    <CardTitle className="font-weight-bold">Men's formal suit - Black & White</CardTitle>
                                    <CardSubtitle className="price">$ 40.0</CardSubtitle>
                                    <CardText className="text">Zalora Cloth</CardText>
                                    <div className="rating d-flex align-items-center flex-row justify-items-center text-center">
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <span className="text-secondary mt-1"><small>(10)</small></span>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col mb-3">
                            <Card className="mycard">
                                <CardImg top width="100%" src={require('../assets/images/jas.png')} alt="jas" className="card-img-top" />
                                <CardBody>
                                    <CardTitle className="font-weight-bold">Men's formal suit - Black & White</CardTitle>
                                    <CardSubtitle className="price">$ 40.0</CardSubtitle>
                                    <CardText className="text">Zalora Cloth</CardText>
                                    <div className="rating d-flex align-items-center flex-row justify-items-center text-center">
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <span className="text-secondary mt-1"><small>(10)</small></span>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </div>

                    <div className="row mb-3 mt-4">
                        <div className="col mb-3">
                            <Card className="mycard">
                                <CardImg top width="100%" src={require('../assets/images/jas.png')} alt="jas" className="card-img-top" />
                                <CardBody>
                                    <CardTitle className="font-weight-bold">Men's formal suit - Black & White</CardTitle>
                                    <CardSubtitle className="price">$ 40.0</CardSubtitle>
                                    <CardText className="text">Zalora Cloth</CardText>
                                    <div className="rating d-flex align-items-center flex-row justify-items-center text-center">
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <span className="text-secondary mt-1"><small>(10)</small></span>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col mb-3">
                            <Card className="mycard">
                                <CardImg top width="100%" src={require('../assets/images/jas.png')} alt="jas" className="card-img-top" />
                                <CardBody>
                                    <CardTitle className="font-weight-bold">Men's formal suit - Black & White</CardTitle>
                                    <CardSubtitle className="price">$ 40.0</CardSubtitle>
                                    <CardText className="text">Zalora Cloth</CardText>
                                    <div className="rating d-flex align-items-center flex-row justify-items-center text-center">
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <span className="text-secondary mt-1"><small>(10)</small></span>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col mb-3">
                            <Card className="mycard">
                                <CardImg top width="100%" src={require('../assets/images/jas.png')} alt="jas" className="card-img-top" />
                                <CardBody>
                                    <CardTitle className="font-weight-bold">Men's formal suit - Black & White</CardTitle>
                                    <CardSubtitle className="price">$ 40.0</CardSubtitle>
                                    <CardText className="text">Zalora Cloth</CardText>
                                    <div className="rating d-flex align-items-center flex-row justify-items-center text-center">
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <span className="text-secondary mt-1"><small>(10)</small></span>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col mb-3">
                            <Card className="mycard">
                                <CardImg top width="100%" src={require('../assets/images/jas.png')} alt="jas" className="card-img-top" />
                                <CardBody>
                                    <CardTitle className="font-weight-bold">Men's formal suit - Black & White</CardTitle>
                                    <CardSubtitle className="price">$ 40.0</CardSubtitle>
                                    <CardText className="text">Zalora Cloth</CardText>
                                    <div className="rating d-flex align-items-center flex-row justify-items-center text-center">
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <span className="text-secondary mt-1"><small>(10)</small></span>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col mb-3">
                            <Card className="mycard">
                                <CardImg top width="100%" src={require('../assets/images/jas.png')} alt="jas" className="card-img-top" />
                                <CardBody>
                                    <CardTitle className="font-weight-bold">Men's formal suit - Black & White</CardTitle>
                                    <CardSubtitle className="price">$ 40.0</CardSubtitle>
                                    <CardText className="text">Zalora Cloth</CardText>
                                    <div className="rating d-flex align-items-center flex-row justify-items-center text-center">
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <span className="text-secondary mt-1"><small>(10)</small></span>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </div>

                    <div className="category mt-5">
                        <h2 className="font-weight-bold">Popular</h2>
                        <span className="detail">Find clothes that are trending recently</span>
                    </div>

                    <div className="row mb-3 mt-4">
                        <div className="col mb-3">
                            <Card className="mycard">
                                <CardImg top width="100%" src={require('../assets/images/jas.png')} alt="jas" className="card-img-top" />
                                <CardBody>
                                    <CardTitle className="font-weight-bold">Men's formal suit - Black & White</CardTitle>
                                    <CardSubtitle className="price">$ 40.0</CardSubtitle>
                                    <CardText className="text">Zalora Cloth</CardText>
                                    <div className="rating d-flex align-items-center flex-row justify-items-center text-center">
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <span className="text-secondary mt-1"><small>(10)</small></span>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col mb-3">
                            <Card className="mycard">
                                <CardImg top width="100%" src={require('../assets/images/jas.png')} alt="jas" className="card-img-top" />
                                <CardBody>
                                    <CardTitle className="font-weight-bold">Men's formal suit - Black & White</CardTitle>
                                    <CardSubtitle className="price">$ 40.0</CardSubtitle>
                                    <CardText className="text">Zalora Cloth</CardText>
                                    <div className="rating d-flex align-items-center flex-row justify-items-center text-center">
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <span className="text-secondary mt-1"><small>(10)</small></span>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col mb-3">
                            <Card className="mycard">
                                <CardImg top width="100%" src={require('../assets/images/jas.png')} alt="jas" className="card-img-top" />
                                <CardBody>
                                    <CardTitle className="font-weight-bold">Men's formal suit - Black & White</CardTitle>
                                    <CardSubtitle className="price">$ 40.0</CardSubtitle>
                                    <CardText className="text">Zalora Cloth</CardText>
                                    <div className="rating d-flex align-items-center flex-row justify-items-center text-center">
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <span className="text-secondary mt-1"><small>(10)</small></span>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col mb-3">
                            <Card className="mycard">
                                <CardImg top width="100%" src={require('../assets/images/jas.png')} alt="jas" className="card-img-top" />
                                <CardBody>
                                    <CardTitle className="font-weight-bold">Men's formal suit - Black & White</CardTitle>
                                    <CardSubtitle className="price">$ 40.0</CardSubtitle>
                                    <CardText className="text">Zalora Cloth</CardText>
                                    <div className="rating d-flex align-items-center flex-row justify-items-center text-center">
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <span className="text-secondary mt-1"><small>(10)</small></span>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col mb-3">
                            <Card className="mycard">
                                <CardImg top width="100%" src={require('../assets/images/jas.png')} alt="jas" className="card-img-top" />
                                <CardBody>
                                    <CardTitle className="font-weight-bold">Men's formal suit - Black & White</CardTitle>
                                    <CardSubtitle className="price">$ 40.0</CardSubtitle>
                                    <CardText className="text">Zalora Cloth</CardText>
                                    <div className="rating d-flex align-items-center flex-row justify-items-center text-center">
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <span className="text-secondary mt-1"><small>(10)</small></span>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </div>

                    <div className="row mb-3 mt-4">
                        <div className="col mb-3">
                            <Card className="mycard">
                                <CardImg top width="100%" src={require('../assets/images/jas.png')} alt="jas" className="card-img-top" />
                                <CardBody>
                                    <CardTitle className="font-weight-bold">Men's formal suit - Black & White</CardTitle>
                                    <CardSubtitle className="price">$ 40.0</CardSubtitle>
                                    <CardText className="text">Zalora Cloth</CardText>
                                    <div className="rating d-flex align-items-center flex-row justify-items-center text-center">
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <span className="text-secondary mt-1"><small>(10)</small></span>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col mb-3">
                            <Card className="mycard">
                                <CardImg top width="100%" src={require('../assets/images/jas.png')} alt="jas" className="card-img-top" />
                                <CardBody>
                                    <CardTitle className="font-weight-bold">Men's formal suit - Black & White</CardTitle>
                                    <CardSubtitle className="price">$ 40.0</CardSubtitle>
                                    <CardText className="text">Zalora Cloth</CardText>
                                    <div className="rating d-flex align-items-center flex-row justify-items-center text-center">
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <span className="text-secondary mt-1"><small>(10)</small></span>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col mb-3">
                            <Card className="mycard">
                                <CardImg top width="100%" src={require('../assets/images/jas.png')} alt="jas" className="card-img-top" />
                                <CardBody>
                                    <CardTitle className="font-weight-bold">Men's formal suit - Black & White</CardTitle>
                                    <CardSubtitle className="price">$ 40.0</CardSubtitle>
                                    <CardText className="text">Zalora Cloth</CardText>
                                    <div className="rating d-flex align-items-center flex-row justify-items-center text-center">
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <span className="text-secondary mt-1"><small>(10)</small></span>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col mb-3">
                            <Card className="mycard">
                                <CardImg top width="100%" src={require('../assets/images/jas.png')} alt="jas" className="card-img-top" />
                                <CardBody>
                                    <CardTitle className="font-weight-bold">Men's formal suit - Black & White</CardTitle>
                                    <CardSubtitle className="price">$ 40.0</CardSubtitle>
                                    <CardText className="text">Zalora Cloth</CardText>
                                    <div className="rating d-flex align-items-center flex-row justify-items-center text-center">
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <span className="text-secondary mt-1"><small>(10)</small></span>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col mb-3">
                            <Card className="mycard">
                                <CardImg top width="100%" src={require('../assets/images/jas.png')} alt="jas" className="card-img-top" />
                                <CardBody>
                                    <CardTitle className="font-weight-bold">Men's formal suit - Black & White</CardTitle>
                                    <CardSubtitle className="price">$ 40.0</CardSubtitle>
                                    <CardText className="text">Zalora Cloth</CardText>
                                    <div className="rating d-flex align-items-center flex-row justify-items-center text-center">
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <span className="text-secondary mt-1"><small>(10)</small></span>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </div>

                    <div className="row mb-3 mt-4">
                        <div className="col mb-3">
                            <Card className="mycard">
                                <CardImg top width="100%" src={require('../assets/images/jas.png')} alt="jas" className="card-img-top" />
                                <CardBody>
                                    <CardTitle className="font-weight-bold">Men's formal suit - Black & White</CardTitle>
                                    <CardSubtitle className="price">$ 40.0</CardSubtitle>
                                    <CardText className="text">Zalora Cloth</CardText>
                                    <div className="rating d-flex align-items-center flex-row justify-items-center text-center">
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <span className="text-secondary mt-1"><small>(10)</small></span>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col mb-3">
                            <Card className="mycard">
                                <CardImg top width="100%" src={require('../assets/images/jas.png')} alt="jas" className="card-img-top" />
                                <CardBody>
                                    <CardTitle className="font-weight-bold">Men's formal suit - Black & White</CardTitle>
                                    <CardSubtitle className="price">$ 40.0</CardSubtitle>
                                    <CardText className="text">Zalora Cloth</CardText>
                                    <div className="rating d-flex align-items-center flex-row justify-items-center text-center">
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <span className="text-secondary mt-1"><small>(10)</small></span>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col mb-3">
                            <Card className="mycard">
                                <CardImg top width="100%" src={require('../assets/images/jas.png')} alt="jas" className="card-img-top" />
                                <CardBody>
                                    <CardTitle className="font-weight-bold">Men's formal suit - Black & White</CardTitle>
                                    <CardSubtitle className="price">$ 40.0</CardSubtitle>
                                    <CardText className="text">Zalora Cloth</CardText>
                                    <div className="rating d-flex align-items-center flex-row justify-items-center text-center">
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <span className="text-secondary mt-1"><small>(10)</small></span>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col mb-3">
                            <Card className="mycard">
                                <CardImg top width="100%" src={require('../assets/images/jas.png')} alt="jas" className="card-img-top" />
                                <CardBody>
                                    <CardTitle className="font-weight-bold">Men's formal suit - Black & White</CardTitle>
                                    <CardSubtitle className="price">$ 40.0</CardSubtitle>
                                    <CardText className="text">Zalora Cloth</CardText>
                                    <div className="rating d-flex align-items-center flex-row justify-items-center text-center">
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <span className="text-secondary mt-1"><small>(10)</small></span>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col mb-3">
                            <Card className="mycard">
                                <CardImg top width="100%" src={require('../assets/images/jas.png')} alt="jas" className="card-img-top" />
                                <CardBody>
                                    <CardTitle className="font-weight-bold">Men's formal suit - Black & White</CardTitle>
                                    <CardSubtitle className="price">$ 40.0</CardSubtitle>
                                    <CardText className="text">Zalora Cloth</CardText>
                                    <div className="rating d-flex align-items-center flex-row justify-items-center text-center">
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang"/>
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <div className="star">
                                            <img src={require('../assets/images/Star.svg')} alt="bintang" />
                                        </div>
                                        <span className="text-secondary mt-1"><small>(10)</small></span>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </Container>
            </React.Fragment>
        )
    }
}

export default LandingPage