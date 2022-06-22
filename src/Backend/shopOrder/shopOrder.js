import React from 'react';
import {Component} from 'react';
import './shopOrder.css'


import PRIVAT from './CARD/PRIVAT'
import LIQPAY from './CARD/LIQPAY'
import VISA from './CARD/VISA'
import SHIPMENT from './CARD/SHIPMENT'
import GOOGLEPAY from './CARD/GOOGLEPAY'


import {Link} from 'react-router-dom'

import {
    MDBCol,
    MDBRow,
    MDBCard,
    MDBInput,
    MDBCollapse, MDBBtn


} from 'mdbreact';



class ShopOrder extends Component  {

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
                    <h1 className='h1-responsive font-weight-bolder m-0 pt-2 py-xl-5 py-lg-5 py-md-5 py-sm-5 py-3 text-center'>Order form</h1>
                    <p className='order-p w-75 justify-content-center m-auto text-center w-responsive pb-sm-5 pb-3'>To make an order fill please the form. Our manager will contact you as soon as possible.</p>
                    <MDBCard className='mt-xl-4 mt-lg-4 mt-md-2 mt-sm-3 mt-2 border-0 z-index-0 bg-transparent'>
                        <p className='pl-2 pl-xl-4 pl-lg-4 pl-md-4 pl-sm-3 ml-3 font-weight-bold'>You order the next products:</p>
                        <MDBRow className='ml-4 m-0 pt-xl-4 pt-lg-0 pt-md-0 pt-sm-0 pt-0'>
                            <div className=' justify-content-center  z-depth-0 p-0 m-0 border-bottom'>
                                <div className='bg-white h-100 border-0 shop-order-goods p-4'>
                                    { this.state.Cart.length ?
                                        <>
                                            <form>
                                                <label htmlFor="defaultFormCardNameEx" className="bin-label grey-text font-weight-light mb-1 pl-3">
                                                    Products
                                                </label>
                                            </form>
                                            {this.state.Cart.map((product, index)=>(
                                                <div className="form-input d-inline-flex flex-sm-wrap-reverse flex-wrap w-100 py-4 w-responsive">
                                                    <MDBCol className='col-4 col-sm-2 p-0 m-0'>
                                                        <img src={`http://storeyvonne.com/upload/${product.image}`} className="img-fluid w-100" alt="Responsive" />
                                                    </MDBCol>
                                                    <MDBCol className='mx-1 col-7 col-sm-5 col-md-6 col-lg-6 col-xl-6 font-smaller px-xl-3 px-lg-3 px-md-3 px-sm-3 px-1'>
                                                        <p className='order-item px-2'>{product.title}</p>
                                                    </MDBCol>
                                                    <MDBCol className='col-3 col-sm-1 p-1 py-3 mx-0'>
                                                        <form className=''>
                                                            <input className='input-q' type='number' min='1' value={product.count}></input>
                                                        </form>
                                                    </MDBCol>
                                                    <MDBCol className='col-5 col-md-2 col-sm-3 px-3 py-1 mx-0'>
                                                        <p className='px-lg-2 px-xl-2 px-md-0 px-sm-2 px-2 py-3'>{product.price}<span> GBP</span></p>
                                                        <p className='px-lg-2 px-xl-2 px-md-0 px-sm-2 px-2 py-3'>{product.price * product.count}<span> GBP</span></p>
                                                    </MDBCol>
                                                    <MDBCol className='col-like p-1 py-2'>
                                                        <button onClick={() => this.removeItemCart(index)} type="button" className="px-3 px-md-1 px-xl-3 px-lg-3 px-0 btn btn-m m-0 text-center bg-transparent border-0 z-depth-0 button-like">
                                                            <i className="fas fa-times pr-0"></i>
                                                        </button>
                                                    </MDBCol>
                                                </div>
                                            ))}
                                        </>
                                        :
                                        <h1 className="text-center font-small">Basket empty!</h1>
                                    }
                                    <div>
                                        <MDBCol className='my-2 text-left order-price w-auto pr-0 w-100 pr-5 pb-5'>
                                            <span className='font-weight-small font-smaller'>Total price:
                                                {/*<span className='font-weight-small'>{this.props.appState.cart.total_price}</span>*/}
                                                  <span>    GBP</span></span>
                                        </MDBCol>
                                    </div>
                                </div>
                            </div>
                        </MDBRow>
                    </MDBCard>
                    <MDBCard className='mt-xl-4 mt-lg-4 mt-md-4 mt-sm-3 mt-4 border-0 z-index-0 bg-transparent'>
                        <p className='pl-2 pl-xl-4 pl-lg-4 pl-md-4 pl-sm-3 ml-3 font-weight-bold'>Contact information</p>
                        <MDBRow className='m-0 pt-xl-4 pt-lg-0 pt-md-0 pt-sm-0 pt-0'>
                            <MDBCol className='d-inline px-4 pr-0 col-12 col-sm-6'>
                                <MDBCol className='w-100 m-0 col-12 d-flex flex-column mb-3 pl-0 pl-sm-3 pr-xl-4 pr-lg-4 pr-md-4 pr-sm-4 pr-0'>
                                    <label htmlFor="fname"><i className="fa fa-user"></i>Name *</label>
                                    <input className='w-100 order' type="text" id="fname" name="firstname" placeholder="Ann" />
                                </MDBCol>
                                <MDBCol className='w-100 m-0 col-12 d-flex flex-column mb-3 pl-0 pl-sm-3 pr-xl-4 pr-lg-4 pr-md-4 pr-sm-4 pr-0'>
                                    <label htmlFor="email"><i className="fa fa-user"></i>Surname *</label>
                                    <input className='w-100 order' type="text" id="email" name="email" placeholder="Gregor" />
                                </MDBCol>
                            </MDBCol>
                            <MDBCol className='d-inline px-4 pr-0 col-12 col-sm-6'>
                                <MDBCol className='w-100 m-0 col-12 d-flex flex-column mb-3 pl-0 pl-sm-0 pr-xl-4 pr-lg-4 pr-md-4 pr-sm-4 pr-0'>
                                    <label htmlFor="email"><i className="fas fa-phone-alt"></i>Phone *</label>
                                    <input className='w-100 order' type="text" id="email" name="" placeholder="+44 771-6134-163" />
                                </MDBCol>
                                <MDBCol className='w-100 m-0 col-12 d-flex flex-column mb-3 pl-0 pl-sm-0 pr-xl-4 pr-lg-4 pr-md-4 pr-sm-4 pr-0'>
                                    <label htmlFor="fname"><i className="far fa-envelope"></i>Email</label>
                                    <input className='w-100 order' type="text" id="fname" name="email" placeholder="john@example.com" />
                                </MDBCol>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                    <MDBCard className='mt-xl-2 mt-lg-2 mt-md-2 mt-sm-3 mt-2 border-0 z-index-0 bg-transparent'>
                        <MDBRow className='m-0 py-xl-4 py-lg-0 py-md-0 py-sm-0 py-0 flex-column'>
                            <p className='font-weight-bold  pl-2 pl-xl-4 pl-lg-4 pl-md-4 pl-sm-3 ml-3 font-weight-bold'>Delivery method</p>
                            <p className='pl-2 pl-xl-4 pl-lg-4 pl-md-4 pl-sm-3 ml-3'>Choose the most convenient delivery method for you</p>
                            <SHIPMENT />
                            <p className='blue-grey-ic text-wrap font-smaller pl-2 pl-xl-4 pl-lg-4 pl-md-4 pl-sm-3 ml-3 pt-4'>As soon as we will get an order, we will send you products quickly and safety.</p>
                        </MDBRow>
                    </MDBCard>
                    <MDBCard className='mt-0 border-0 z-index-0 bg-transparent pb-sm-5 pb-0'>
                        <MDBRow className='pl-1 ml-0 m-0 pt-0'>
                            <div className='d-inline-block mt-4 w-100'>
                                <div className='private-policy-text mb-0'>
                                    <MDBInput
                                        type="checkbox"
                                        value="conditions"
                                        id="materialInvalidCheck"
                                        required
                                        label=""
                                        className="p-2 ml-1"
                                    />
                                    <p className="pb-0 pr-3 pl-2 pl-xl-4 pl-lg-4 pl-md-4 pl-sm-3 ml-5 d-inline-flex private-policy w-75">Я ознайомлений з правилами та даю згоду на обробку персональних данних згідно положень Політики Конфіденційності</p>
                                </div>
                            </div>
                        </MDBRow>
                    </MDBCard>
                    <div className='shop-bin px-4'>
                        <Link to='/shopPayment'><MDBBtn color="primary" className='btn-pay'>
                            ORDER</MDBBtn>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShopOrder;