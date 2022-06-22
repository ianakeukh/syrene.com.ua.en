import React, {Component} from 'react';
import './shopContacts.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {
MDBCard,
MDBCol,
MDBView, MDBIcon} from 'mdbreact';

class ShopContacts extends Component {

    state = {
        modal: false
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    logValue = value => {
        console.log(value);
    };


    render() {
        return (
            <div>
                <div className='container'>
                    <h4 className='h4-responsive text-center font-weight-bolder m-0 py-md-5 py-sm-5 py-4 py-xl-5 py-lg-5'>CONTACTS</h4>
                    <MDBCard className='border-0 laptop-v-block d-block m-0'>
                        <div className="text-center h-100 black-text px-3">
                            <ul className="text-lg-left list-unstyled ml-0">
                                <li>
                                    <p className="text-center contact-text">
                                        <a href='https://goo.gl/maps/bzk1W5AZCec4QVR89' className='black-ic'>
                                            <MDBIcon icon="map-marker-alt" className="pr-3"/>
                                            United Kingdom, Brighton
                                        </a>
                                    </p>
                                </li>
                                <li>
                                    <p className="text-center contact-text">
                                        <a href='#' className='black-ic'>
                                            <MDBIcon icon="clock" className="pr-3"/>
                                            Work hours: 09:00-20:00
                                        </a>
                                    </p>
                                </li>
                                <li>
                                    <p href='#' className="text-center contact-text" >
                                        <a href='tel:+447716134163' classname="black-ic">
                                            <MDBIcon icon="phone" className="pr-3"/>
                                            +44 77-16-1341-63
                                        </a>
                                    </p>
                                </li>
                                <li className='text-center justify-content-center'>
                                    <p  className="contact-text text-center justify-content-center">
                                        <a href='https://www.instagram.com/yvonnemultibrands/' className='black-ic'>
                                            <MDBIcon fab icon="instagram" className='pr-3'/>
                                            syrenecosmeticsbrands
                                        </a>
                                    </p>
                                </li>
                            </ul>
                            <hr className="hr-light my-2 mt-0 mb-0 p-0"/>
                        </div>
                    </MDBCard>
                    <MDBCard className='border-0 contact-map d-block mb-sm-5'>
                        <MDBCol className='col-12 m-0 p-0 contact-map z-depth-2 '>
                            <div
                                id='map-container'
                                className='map-container w-100 h-100'
                            >
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2537.969770113671!2d30.438142415733022!3d50.49752037948187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa853edd3a950b1e9!2zWVZPTk5FIC0g0YHQsNC70L7QvSDQutGA0LDRgdC4INGC0LAg0LzQsNCz0LDQt9C40L0!5e0!3m2!1suk!2sua!4v1607610843621!5m2!1suk!2sua"
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    allowFullScreen=""
                                    aria-hidden="false"
                                    tabIndex="0">
                                </iframe>
                            </div>
                        </MDBCol>
                    </MDBCard>
                </div>

                {/*mobile-version*/}

                <div className='mobile d-none justify-content-center m-auto'>
                    <MDBCard className='mobile-v-block mx-3 m-sm-3 rounded mb-3'>
                            <img src={require('../../../img/shop/slider11.jpg')} className="img-fluid m-0 p-0 w-100 position-absolute" alt="" />
                            <MDBCol className='col-12 m-0 p-0 contact-info d-block position-relative'>
                                <MDBView waves className='z-depth-3 h-100'>
                                    <div className="text-center h-100 black-text p-3">
                                        <ul className="text-lg-left list-unstyled ml-0 my-0 py-2">
                                            <li>
                                                <p className="text-center contact-text mb-0">
                                                    <MDBIcon icon="map-marker-alt" className="pr-3"/>
                                                    United Kingdom, Brighton
                                                </p>
                                            </li>
                                            <li>
                                                <p className="text-center contact-text mb-0">
                                                    <MDBIcon icon="clock" className="pr-3"/>
                                                    Work hours: 09:00-20:00
                                                </p>
                                            </li>
                                            <li>
                                                <p className="text-center contact-text mb-0">
                                                    <MDBIcon icon="phone" className="pr-3"/>
                                                    +44 77 163 14 163
                                                </p>
                                            </li>
                                            <li className='text-center justify-content-center mb-0'>
                                                <a href='https://www.instagram.com/yvonne__salon/?r=nametag' className="contact-text text-center justify-content-center">
                                                    <MDBIcon fab icon="instagram" className='pr-3'/>
                                                    serenecosmeticsbrands
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </MDBView>
                            </MDBCol>
                    </MDBCard>
                </div>
                <div className='mobile d-none justify-content-center m-auto overflow-hidden'>
                    <MDBCard className='mobile-v-block mb-3 mx-3 mx-sm-3 rounded'>
                            <MDBCol className='col-12 m-0 p-0 z-depth-2 position-relative'>
                                <div
                                    id="map-container"
                                    className="rounded z-depth-1-half map-container"
                                    style={{ height: '280px' }}
                                >
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src='https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed'
                                        frameBorder="0"
                                        style={{border:0}} >
                                    </iframe>
                                </div>
                            </MDBCol>
                    </MDBCard>
                </div>
            </div>
        )
    }
}

export default ShopContacts;
