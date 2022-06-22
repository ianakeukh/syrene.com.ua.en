import React from 'react';
import {Component} from 'react';
import './../shopOrder.css'

import VISA from './VISA'
import GOOGLEPAY from './GOOGLEPAY'


import {Link} from 'react-router-dom'

import {
    MDBCol,
    MDBRow,
    MDBCard,
    MDBInput,
    MDBCollapse, MDBBtn


} from 'mdbreact';



class ShopPayment extends Component  {

    state = {
        radio: 0
    }

    state = {
        collapseID: ''
    }

    state = {
        Cart: []
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

    componentDidMount() {

        const Cart = JSON.parse(localStorage.getItem('cart'));

        if(Cart)
            this.setState({Cart: Cart});

    }

    removeItemCart = (index) => {

        const Cart = [...this.state.Cart];

        Cart.splice(index, 1);

        this.setState({Cart: Cart});

        localStorage.setItem('cart', JSON.stringify((Cart)));
    }



    render() {
        return (
            <div className='rgba-purple-slight'>
                <div className='container pb-5'>
                    <h1 className='h1-responsive font-weight-bolder m-0 pt-2 py-xl-5 py-lg-5 py-md-5 py-sm-5 py-3 text-center'>Payment form</h1>
                    <MDBCard className='mt-xl-2 mt-lg-2 mt-md-2 mt-sm-3 mt-2 pb-0 border-0 z-index-0 bg-transparent'>
                        <MDBRow className='m-0 py-xl-4 py-lg-0 py-md-0 py-sm-0 py-0 flex-column'>
                            <p className='pl-2 pl-xl-4 pl-lg-4 pl-md-4 pl-sm-3 ml-3 font-weight-bold'>Information about payment</p>
                            <p className='pl-2 pl-xl-4 pl-lg-4 pl-md-4 pl-sm-3 ml-3 font-weight-bold'>Choice the best payment method:</p>
                            <MDBCol className='pl-0 p-0'>
                                <div className="custom-control custom-radio ml-1 my-2">
                                    <MDBInput onClick={this.toggleCollapse("basicCollapse")} checked={this.state.radio===3 ? true : false} label="Google Pay" type="radio" id="radio3"/>
                                </div>
                                <MDBCollapse id="basicCollapse" className="mx-2" isOpen={this.state.collapseID}>
                                    <GOOGLEPAY />
                                </MDBCollapse>
                                <div className="custom-control custom-radio ml-1 my-2">
                                    <MDBInput onClick={this.toggleCollapse("basicCollapse")} checked={this.state.radio===4 ? true : false} label="Visa/Mastercard" type="radio" id="radio3"/>
                                </div>
                                <MDBCollapse id="basicCollapse" className="mx-2" isOpen={this.state.collapseID}>
                                    <VISA />
                                </MDBCollapse>
                            </MDBCol>
                         </MDBRow>
                    </MDBCard>
                </div>
            </div>
        )
    }
}

export default ShopPayment;