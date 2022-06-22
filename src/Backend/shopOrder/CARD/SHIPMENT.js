import React from 'react';
import {Component} from 'react';
import './../shopOrder.css'

import {
    MDBCard,
    MDBCol,
    MDBInput, MDBRow,
} from 'mdbreact';



class SHIPMENT extends Component  {

    state = {
        radio: 0
    }

    state = {
        collapseID: ""
    }

    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }))
    }


    onClick = nr => () => {
        this.setState({
            radio: nr
        })


    }

    render() {
        return (
            <MDBCol className='p-0'>
                <div className="custom-control custom-radio m-0 px-4">
                    <MDBInput onClick={this.onClick=(2)} checked={this.state.radio===2 ? true : false} label="Post Office" type="radio"  id='radio2' />
                    <MDBCard className='mt-0 border-0 z-index-0 bg-transparent'>
                        <MDBRow className='m-0 pt-xl-4 pt-lg-4 pt-md-3 pt-sm-3 pt-2 pb-4'>
                            <MDBCol className='d-inline col-sm-6 col-12 pr-0 pl-0 pl-sm-3'>
                                <MDBCol className='col-12 d-flex flex-column mb-3 pl-0 pr-lg-4 pr-md-4 pr-sm-4 pr-0'>
                                    <label htmlFor="fname"><i className="fas fa-map-marked-alt"></i>City</label>
                                    <input className='w-100 order' type="text" id="email" name="city" placeholder="Kiev" />
                                </MDBCol>
                                <MDBCol className='col-12 d-flex flex-column mb-3 pl-0 pr-lg-4 pr-md-4 pr-sm-4 pr-0'>
                                    <label htmlFor="email"><i className="fas fa-map-marker-alt"></i>Street</label>
                                    <input className='w-100 order' type="text" id="adr" name="address" placeholder="Balsdean 5" />
                                </MDBCol>
                            </MDBCol>
                            <MDBCol className='d-inline col-sm-6 col-12 pr-0 pl-0 pl-sm-3'>
                                <MDBCol className='col-12 d-flex flex-column mb-3 pl-0 pr-lg-4 pr-md-4 pr-sm-4 pr-0'>
                                    <label htmlFor="email"><i className="fas fa-house-user"></i>House</label>
                                    <input className='w-100 order' type="text" id="city" name="address" placeholder="32" />
                                </MDBCol>
                                <MDBCol className='col-12 d-flex flex-column mb-3 pl-0 pr-lg-4 pr-md-4 pr-sm-4 pr-0'>
                                    <label htmlFor="fname"><i className="fas fa-house-user"></i>Post code</label>
                                    <input className='w-100 order' type="text" id="city" name="post code" placeholder="BN1" />
                                </MDBCol>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                </div>
                <div className="custom-control custom-radio ml-0 px-4">
                    <MDBInput onClick={this.onClick=(2)} checked={this.state.radio===2 ? true : false} label="Royal Mail" type="radio"  id='radio2' />
                    <MDBCard className='mt-0 border-0 z-index-0 bg-transparent'>
                        <MDBRow className='m-0 pt-xl-4 pt-lg-4 pt-md-3 pt-sm-3 pt-2 '>
                            <MDBCol className='d-inline col-sm-6 col-12 pr-0 pl-0 pl-sm-3'>
                                <MDBCol className='col-12 d-flex flex-column mb-3 pl-0 pr-lg-4 pr-md-4 pr-sm-4 pr-0'>
                                    <label htmlFor="fname"><i className="fas fa-map-marked-alt"></i>City</label>
                                    <input className='w-100 order' type="text" id="email" name="city" placeholder="Kiev" />
                                </MDBCol>
                                <MDBCol className='col-12 d-flex flex-column mb-3 pl-0 pr-lg-4 pr-md-4 pr-sm-4 pr-0'>
                                    <label htmlFor="email"><i className="fas fa-map-marker-alt"></i>Street</label>
                                    <input className='w-100 order' type="text" id="adr" name="address" placeholder="Balsdean 5" />
                                </MDBCol>
                            </MDBCol>
                            <MDBCol className='d-inline col-sm-6 col-12 pr-0 pl-0 pl-sm-3'>
                                <MDBCol className='col-12 d-flex flex-column mb-3 pl-0 pr-lg-4 pr-md-4 pr-sm-4 pr-0'>
                                    <label htmlFor="email"><i className="fas fa-house-user"></i>House</label>
                                    <input className='w-100 order' type="text" id="city" name="address" placeholder="32" />
                                </MDBCol>
                                <MDBCol className='col-12 d-flex flex-column mb-3 pl-0 pr-lg-4 pr-md-4 pr-sm-4 pr-0'>
                                    <label htmlFor="fname"><i className="fas fa-house-user"></i>Post code</label>
                                    <input className='w-100 order' type="text" id="city" name="post code" placeholder="BN1" />
                                </MDBCol>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                </div>
            </MDBCol>
        )
    }
}

export default SHIPMENT;