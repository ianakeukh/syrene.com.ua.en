import React from 'react';

import {  MDBRow,  MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";

import './Writetous.css'

class Contactform extends React.Component {

    state = {
        form: {
            name: '',
            email: '',
            phone: '',
            company: '',
            message: '',
            'send-telegram': 1
        },
        alert: ''
    }


    initial_state = {
        form: {
            name: '',
            email: '',
            phone: '',
            company: '',
            message: '',
            'send-telegram':1
        },
        alert: ''
    }


    changeInputHandler = (event) => {
        let dataForm = {...this.state.form}
        dataForm[event.target.name] = event.target.value
        this.setState({form: dataForm})
    }

    formSubmit = () => {

        if (this.state.form.name.trim() === '') {
            this.setState({alert: 'Enter name!'})
            return false
        }
        if (this.state.form.email.trim() === '') {
            this.setState({alert: 'Enter email!'})
            return false
        }
        if (this.state.form.phone.trim() === '') {
            this.setState({alert: 'Enter telephone number!'})
        }

        let url = 'http://yvonneshop.com.ua/telegram/'
        fetch(url, {
            method: 'POST', // или 'PUT'
            body: new URLSearchParams(this.state.form).toString(),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            if (data.ok) {
                this.setState({form:this.initial_state.form, alert: 'Message sent!'})
            }
        });
    }

    render() {
        return (
            <div>
                <div className='container  justify-content-center m-auto pb-5 contacts'>
                    <div className='price w-100 m-auto justify-content-center'>
                        <h4 className='h4-responsive text-center font-weight-bolder m-0 pt-xl-5 pt-lg-5 pt-md-5 pt-sm-5 pt-4 pb-4 pb-xl-5 pb-lg-5 pb-md-5 pb-sm-4'>Contact form</h4>
                        <div className='p-2 m-auto justify-content-center contact-card z-depth-3'>
                                <div lg="12" className='w-100'>
                                    <MDBCardBody className="p-0 p-sm-2 w-100">
                                        <p className='text-center contact-text pt-3'>
                                            <MDBIcon icon="envelope" className="pr-2 pt-3" />
                                            Write to us:
                                        </p>
                                        <p className='px-3' style={{color:'green'}}>{this.state.alert}</p>
                                        <div className='d-inline-flex w-100'>
                                            <div className='w-50 h-100 col-contact pl-3 px-sm-3 m-0'>
                                                <div className="mb-0 h-100 m-0">
                                                    <MDBInput
                                                        type="text"
                                                        id="form-contact-name"
                                                        label="Your name"
                                                        className='m-0 w-100 h-100'
                                                        name='name'
                                                        value={this.state.form.name}
                                                        onChange={this.changeInputHandler}
                                                    />
                                                </div>
                                            </div>
                                            <div className='w-50 h-100 col-contact pl-0 px-sm-3'>
                                                <div className="mb-0 h-100 mr-0">
                                                    <MDBInput
                                                        type="text"
                                                        id="form-contact-email"
                                                        label="Email"
                                                        name='email'
                                                        value={this.state.form.email}
                                                        onChange={this.changeInputHandler}
                                                        className='m-0'
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='d-inline-flex w-100 mb-4'>
                                            <div className='w-50 h-100 col-contact pl-3 px-sm-3'>
                                                <div className=" mb-0 mt-2">
                                                    <MDBInput
                                                        type="text"
                                                        id="form-contact-phone"
                                                        label="Telephone number"
                                                        name="phone"
                                                        value={this.state.form.phone}
                                                        onChange={this.changeInputHandler}
                                                    />
                                                </div>
                                            </div>
                                            <div className='w-50 h-100 col-contact pl-0 px-sm-3'>
                                                <div className="md-form mb-0 mt-2 ">
                                                    <MDBInput
                                                        type="text"
                                                        id="form-contact-company"
                                                        label="Your company"
                                                        name='company'
                                                        value={this.state.form.company}
                                                        onChange={this.changeInputHandler}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='px-3 mb-2 mb-sm-5 h-100 col-contact'>
                                            <div md="12">
                                                <div className="md-form m-0">
                                                    <MDBInput
                                                        type="textarea"
                                                        id="form-contact-message"
                                                        label="Your message"
                                                        name='message'
                                                        value={this.state.form.message}
                                                        onChange={this.changeInputHandler}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <MDBBtn onClick={this.formSubmit} rounded color="purple" className='mb-3 justify-content-center m-auto d-block '>
                                             Send
                                        </MDBBtn>
                                    </MDBCardBody>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Contactform;