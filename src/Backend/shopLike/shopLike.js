import {MDBCol, MDBRow} from "mdbreact";
import React from "react";

import './../../Backend/shopLike/shopLike.css'



class ShopLike extends React.Component {


    state = {
        Like: []
    }

    componentDidMount() {
        const Like = JSON.parse(localStorage.getItem('like'));

        if(Like)
            this.setState({Like: Like});
    }


    removeItemLike = (index) => {
        const Like = [ ...this.state.Like ];

        Like.splice(index, 1);

    this.setState({Like: Like});

    localStorage.setItem('cart', JSON.stringify((Like)));
    }

    render() {
        return (
            <div className='w-100 h-100 bin-container border-0'>
                <div className=' justify-content-center  z-depth-0 p-0 m-0 border-0'>
                    <div className='bg-white h-100 border-0'>
                        { this.state.Like.length ?
                            <>
                                <form>
                                    <label htmlFor="defaultFormCardNameEx" className="bin-label grey-text font-weight-light mb-1 pl-3">
                                        Products
                                    </label>
                                </form>
                                {this.state.Like.map((product, index)=>(
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
                                            <button onClick={() => this.removeItemLike(index)} type="button" className="px-3 px-md-1 px-xl-3 px-lg-3 px-0 btn btn-m m-0 text-center bg-transparent border-0 z-depth-0 button-like">
                                                <i className="fas fa-times pr-0"></i>
                                            </button>
                                        </MDBCol>
                                    </div>
                                ))}
                            </>
                            :
                            <h1 className="text-center font-small">Basket empty!</h1>
                        }
                    </div>
                </div>
            </div>

)
}
}


export default ShopLike;