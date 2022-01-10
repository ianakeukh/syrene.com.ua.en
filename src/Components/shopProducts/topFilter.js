import React from 'react';
import {Component} from 'react';
import './shopProducts.css'
// import ShopFilter from './shopFilter'

import {
    MDBCol,
    MDBCard,
    MDBLink,
} from 'mdbreact';

import $ from 'jquery';
import 'jquery';
import 'mdbreact/dist/css/mdb.css';

import { withRouter } from 'react-router-dom';

// import Item from './../shopProducts/ITEMS/Davines/Item/Item'



$(document).ready(function () {
    $(function () {
        $('#mdb-lightbox-ui').load('mdb-addons/mdb-lightbox-ui.html');
    });
});

$(document).ready(function() {
    $(window).resize( function() {
        var brandWidth = $(window).width();
        if(brandWidth < 991)
            $('.shop-nav-brand').removeClass('container')
        else(
            $('.shop-nav-brand').addClass('container')
        )
    })
})


const cl = console.log

class TopFilter extends Component  {

    constructor(props) {
        super(props);

        this.state = {
            collapseID: '',
            value: 0,
            items: {
                default: '1',
            },
            products: []

        }

    }

    doAjax() {
        let url
        if (Object.keys(this.filter).length !== 0) {
            url = 'http://yvonne-server.loc/filter?filter='+encodeURIComponent(JSON.stringify(this.filter))
        }else{
            url = 'http://yvonne-server.loc/products'
        }
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({products: data.products}));
    }


    chooseTopHandle = (type) => {
         // this.props.setFilterTop(type)
    }

    isActive = (type) => {
        const category = window.location.pathname.split('/').pop()
        return category === type ? 'active' : ''
    }



    // componentDidMount(props) {
    //     cl(this.props)
    // }




    render() {
        return (
            <div>
                    <div className='d-inline-flex w-100'>
                        <MDBCol className='col-filter-top col-2 p-0'>
                            <MDBCard className='dd-text pink lighten-5 h-100' color='#fce4ec'>
                                <MDBLink to="/shampoo" className='p-0 text-center active h-100 p-0 m-0' >
                                        <button onClick={this.chooseTopHandle.bind(null,'shampoo')} className={'border-0 h-100 p-0 m-0 w-100 top-filter-btn bg-transparent py-5 pt-sm-4 pb-sm-4 pt-md-5 pb-md-5 pt-lg-5 pb-lg-5 pt-xl-5 pb-xl-5 '+this.isActive('shampoo')}>
                                            <span className='text-span mt-3 font-weight-bold shop-prod-item'>ШАМПУНІ</span>
                                        </button>
                                </MDBLink>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol className='col-filter-top col-2 p-0'>
                            <MDBCard className='dd-text pink lighten-5' color='#fce4ec'>
                                <MDBLink to="/conditioner" className='p-0 text-center h-100 p-0 m-0' >
                                    <button onClick={this.chooseTopHandle.bind(null,'conditioner')} className={'px-0 border-0 h-100 w-100 top-filter-btn bg-transparent pt-4 pb-4 pt-sm-4 pb-sm-4 pt-md-5 pb-md-5 pt-lg-5 pb-lg-5 pt-xl-5 pb-xl-5 '+this.isActive('conditioner')}>
                                        <span className='text-span mt-3 font-weight-bold shop-prod-item'>КОНДИЦІОНЕРИ</span>
                                    </button>
                                </MDBLink>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol className='col-filter-top col-2 p-0'>
                            <MDBCard className='dd-text pink lighten-5' color='#fce4ec'>
                                <MDBLink to="/mask" className='p-0 text-center h-100 p-0 m-0' >
                                    <button onClick={this.chooseTopHandle.bind(null, 'mask')} className={'border-0 h-100 w-100 top-filter-btn bg-transparent pt-4 pb-4 pt-sm-4 pb-sm-4 pt-md-5 pb-md-5 pt-lg-5 pb-lg-5 pt-xl-5 pb-xl-5 '+this.isActive('mask')}>
                                        <span className='text-span mt-3 font-weight-bold shop-prod-item'>МАСКИ</span>
                                    </button>
                                </MDBLink>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol className='col-filter-top col-2 p-0'>
                            <MDBCard className='dd-text pink lighten-5' color='#fce4ec'>
                                <MDBLink to="/styling" className='p-0 text-center h-100 p-0 m-0' >
                                    <button onClick={this.chooseTopHandle.bind(null, 'styling')} className={'border-0 h-100 w-100 top-filter-btn bg-transparent pt-4 pb-4 pt-sm-4 pb-sm-4 pt-md-5 pb-md-5 pt-lg-5 pb-lg-5 pt-xl-5 pb-xl-5 '+this.isActive('styling')}>
                                        <span className='text-span mt-3 font-weight-bold shop-prod-item'>СТАЙЛІНГИ</span>
                                    </button>
                                </MDBLink>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol className='col-filter-top col-2 p-0'>
                            <MDBCard className='dd-text pink lighten-5' color='#fce4ec'>
                                <MDBLink to="/oil" className='p-0 text-center h-100 p-0 m-0' >
                                    <button onClick={this.chooseTopHandle.bind(null, 'oil')} className={'border-0 h-100 w-100 bg-transparent top-filter-btn pt-4 pb-4 pt-sm-4 pb-sm-4 pt-md-5 pb-md-5 pt-lg-5 pb-lg-5 pt-xl-5 pb-xl-5 '+this.isActive('oil')}>
                                        <span className='text-span mt-3 font-weight-bold shop-prod-item'>ОЛІЇ</span>
                                    </button>
                                </MDBLink>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol className='col-filter-top col-2 p-0'>
                            <MDBCard className='dd-text pink lighten-5' color='#fce4ec'>
                                <MDBLink to="/protection" className='p-0 text-center h-100 p-0 m-0' >
                                    <button onClick={this.chooseTopHandle.bind(null, 'protection')} className={'border-0 h-100 w-100 bg-transparent top-filter-btn  pt-4 pb-4 pt-sm-4 pb-sm-4 pt-md-5 pb-md-5 pt-lg-5 pb-lg-5 pt-xl-5 pb-xl-5 '+this.isActive('protection')}>
                                        <span className='text-span mt-3 font-weight-bold shop-prod-item'>ЗАХИСТ</span>
                                    </button>
                                </MDBLink>
                            </MDBCard>
                        </MDBCol>
                    </div>
                </div>
        )
    }
}

// let TopFilterDD = withRouter(TopFilter);

export default withRouter(TopFilter);