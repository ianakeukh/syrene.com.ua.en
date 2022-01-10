import React from 'react';
import {Component} from 'react';
import './shopMobileUpload.css'

import $ from 'jquery'





class ShopMobileUpload extends Component  {
    render() {
    $(document).ready( function() {
        var h = $(window).height()
        $('.shop-upload').css({'height': h, 'overflow': 'hidden'})
    })

        return (
          <div className='shop-upload'>
            <div className='w-100'>
                <div className='shop-upload-img-top pt-5'>
                    <img src={require('../../img/shop/pion25.png')} alt="..."/>
                </div>
                <div className='shop-top py-5'>
                    <h4 className='mt-4 py-1 text-center font-weight-light font-italic font-weight-normal yellow-text'>Brands makes your
                        excellence</h4>
                    <h1 className='py-2 text-center font-weight-bold purple-text shop-upload-logo'>Y  V  O  N  N  E</h1>
                    <h5 className='mb-4 py-1 text-center font-weight-normal purple-text shop-upload-slogan'>HAIR COSMETICS SHOP</h5>
                </div>
                <div className='shop-upload-img-bottom'>
                    <img src={require('../../img/shop/pion25.png')} alt="..."/>
                </div>
            </div>
          </div>
        )
    }
}

export default ShopMobileUpload;