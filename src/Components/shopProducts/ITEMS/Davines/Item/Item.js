import {MDBCard, MDBCardBody, MDBCardImage} from 'mdbreact';
import React from 'react';
import {Link} from 'react-router-dom'

import './../../../shopProducts.css'

import './details.css';

class Item extends React.Component {


    state = {

        product:{
            image: '',
            title: '',
            branditem: '',
            seriaitem: '',
            price: '',
            id: '',
            typeitem: '',
            articul: '',
            descr2: '',
            descr3: '',
            country: ''
        }
    }

    componentDidMount(props) {

    }

    addToLikeList(Item)
    {
        const Like = JSON.parse(localStorage.getItem('like')) || [];

        const CopyLike = Like.find((elem) => elem.id == Item.id)

        if(CopyLike)
            CopyLike.count++;
        else
            {
            Item.count = 1;
            Like.push(Item);
        }

        console.log(Item);

        localStorage.setItem('like', JSON.stringify(Like));

    }

    addToCart(Item)
    {
        const Cart = JSON.parse(localStorage.getItem('cart')) || [];
        const Copy = Cart.find((elem) => elem.id == Item.id)
        if(Copy)
            Copy.count++;
        else
        {
            Item.count = 1;
            Cart.push(Item);
        }
        console.log(Item);
        localStorage.setItem('cart', JSON.stringify(Cart));
    }

    addToSeenList(Item)
    {
        const Seen = JSON.parse(localStorage.getItem('seen')) || [];
        const Copy = Seen.find((elem) => elem.id == Item.id)
        if(Copy)
            Copy.count++;
        else
        {
            Item.count = 1;
            Seen.push(Item);
        }
        console.log(Item);
        localStorage.setItem('seen', JSON.stringify(Seen));
    }

    render() {

        let { image, title, branditem, seriaitem, price, id, typeitem, articul, descr2, descr3, country} = this.props.product;

    return (
        <MDBCard className='border-0 z-depth-3 p-3 w-100'>
                <div className='text-white text-center align-items-center p-0 '>
                    <div className='image-block'>
                        <Link to={`/details/${id}`} onClick={ () => this.addToSeenList(this.props.product)} name={id}>
                        <div className='image-block-list'>
                            <img
                                src={`http://storeyvonne.com/upload/${image}`}
                                className='prod-img h-100 mx-auto justify-content-center'
                                alt=''>
                            </img>
                        </div>
                        </Link>
                    </div>
                    <MDBCardBody className='w-responsive w-100 m-0 p-0 h-100 product-card-body'>
                        <p className='prod-name text-left pl-0 pb-0 mb-1 w-100 font-weight-bold'>{title}</p>
                        <div className='w-100'>
                            <p className='black-text m-0 py-1 text-left font-weight-normal black-ic prod-name-type'><b className='font-italic type-name'>Type: </b><span>{typeitem}</span></p>
                            <p className='black-text m-0 py-0 text-left font-weight-normal black-ic prod-name-type'><b className='font-italic brand-name'>Brand: </b><span>{branditem}</span></p>
                            <p className='font-weight-bold black-text py-1 text-left float-left prod-name-type'><span>{price}</span> грн</p>
                            <p className='float-right m-0'>
                               <button className='btn-like bg-transparent btn-outline-purple' onClick={ () => this.addToLikeList(this.props.product)} name={id}>
                                 <span className='bg-transparent border-0'>
                                    <i className="fas fa-heart p-2 outline-none "></i>
                                </span>
                               </button>
                            </p>
                        </div>
                        <div>
                            <button
                                onClick={ () => this.addToCart(this.props.product)} name={id}
                                className='w-100 prod-btn white-text z-depth-1 p-2 border-0 justify-content-center m-0 align-content-center'>ADD
                            </button>
                        </div>
                    </MDBCardBody>
                </div>

        </MDBCard>
        )
    }
}

export default Item;