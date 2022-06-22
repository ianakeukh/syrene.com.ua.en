import React from 'react';
import {Component} from 'react';
import './shopProducts.css'
import {MDBCollapse, MDBHamburgerToggler} from 'mdbreact';

import {
    MDBRow,
    MDBCol,
    MDBPagination,
    MDBPageNav,
    MDBPageItem,
} from 'mdbreact';

import $ from 'jquery';
import 'jquery';
import 'mdbreact/dist/css/mdb.css';

import Item from './../shopProducts/ITEMS/Davines/Item/Item'
import TopFilter from './topFilter';
import ShopBrands from './../shopBrands/shopBrands';
import ShopFilter from './../shopProducts/shopFilter';




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

class ShopProducts extends Component  {


    sidenavToggle = sidenavId => () => {
        const sidenavNr = `sideNav${sidenavId}`
        this.setState({
            [sidenavNr]: !this.state[sidenavNr]
        });
    };



    constructor(props) {
        super(props);

        this.state = {
            sideNavLeft: false,
            collapseID: '',
            value: 0,
            items: {
                default: '1',
            },
            products: [],
            navigation: false,
            filterData: null,
            top: {}
        }

        this.filter = {
            price: {}
        }

    }



    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ''
        }));
    }


    componentDidUpdate()
    {
        console.log('did update products')

        const URL = window.location.pathname.split('/').pop();

        console.log(URL);

        let param = null;

        switch(URL)
        {
            case 'shampoo': param = { type: 'type_id', value: 1 }; break;
            case 'conditioner': param = { type: 'type_id', value: 4 }; break;
            case 'mask': param = { type: 'type_id', value: 2 }; break;
            case 'styling': param = { type: 'type_id', value: 7 }; break;
            case 'oil': param = { type: 'type_id', value: 9 }; break;
            case 'protection': param = { type: 'type_id', value: 12 }; break;

            case 'farmavita': param = { type: 'brand_id', value: 1 }; break;
            case 'davines': param = { type: 'brand_id', value: 2 }; break;
            case 'joico': param = { type: 'brand_id', value: 3 }; break;
            case 'profystyle': param = { type: 'brand_id', value: 5 }; break;
            case 'felps': param = { type: 'brand_id', value: 6 }; break;
            case 'schwarzkopf': param = { type: 'brand_id', value: 4 }; break;
        }

        console.log(param);
        // console.log('test')

        const fd = new FormData();

        fd.append('data', JSON.stringify(param));

        const _this = this;

        fetch('/backend/get_navbar.php', {
            method: 'post',
            body: fd
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                console.log(this.state.filterData);

                if(JSON.stringify(this.state.products) != JSON.stringify(data))
                    this.setState({products: [...data]});
            });




    }





    componentDidMount(props) {

        console.log('ok products');

        // fetch('http://storeyvonne.com/filter.php', {
        //     method: 'post'
        // })

        fetch('/backend/filter.php', {
            method: 'post'
        }).then((res) => res.json()).then((data) => {
            console.log(data);

            this.setState({filterData: {...data} });
        });

        // fetch('http://storeyvonne.com/products.php', {
        //     method: 'post'
        // })

        fetch('/backend/products.php', {
            method: 'post'
        }).then((res) => res.json()).then((data) => {
            console.log(data);
            console.log(this.state.products);

            if(JSON.stringify(this.state.products) != JSON.stringify(data))
                this.setState({products: [...data]});

        });



    }

    setFilterData(param)
    {
        console.log(param);

        this.setState({products: [...param]});
    }


    render() {
        return (
          <div>
            <div className='shop-products-block w-100'>
                <div id='sb' className='container shop-brand w-100'>
                    <ShopBrands
                    setFilterMark = {this.setFilterMark}/>
                </div>
                <div className='container pt-2 pt-md-3 pt-lg-3 shop-nav-brand'>
                    <TopFilter
                        setFilterTop = {this.setFilterTop}/>
                </div>


                {/*filters*/}

             <div className='container'>
                <div id='display-products-big-size'>
                   <div className='shop-filters-block w-responsive w-100 justify-content-center m-auto pt-3 pb-5 mt-5'>
                       <div className='d-inline-flex'>
                        <ShopFilter
                            data={this.state.filterData}
                            setFilterData = {this.setFilterData.bind(this)}
                        />

                    {/*products list*/}
                    <div className='shop-items right w-75 bg-white d-inline-block ml-0  pr-3 pr-xl-0 ml-xl-3 ml-sm-3 ml-lg-3 ml-md-3'>
                        <div className='shop-items-md bg-white'>
                            <h4 className='text-center p-4 font-weight-bold'>Products</h4>
                            <p className='shop-items-text grey-text text-center w-responsive mx-auto mb-5'>
                                There are a huge variety of luxery products elite brands: shampoo, conditioners, oil and the others products.  </p>
                            { this.state.products.length ?
                            <MDBRow className='p-0 m-2 ml-0 border-0 products'>
                                <div className='justify-content-between m-auto w-100'>
                                {this.state.products.map((product) => (
                                <MDBCol key={product.id} lg='6' md='6' xl='4' className='pb-5 p-2 float-left align-content-center m-auto'>
                                    <Item product={product} />
                                </MDBCol>
                                ))}
                                </div>
                            </MDBRow>
                                :
                                <h1>Products not found</h1>
                            }
                        </div>
                        <MDBPagination color='purple'>
                            <MDBPageItem>
                                <MDBPageNav onClick={this.goToPrevPage} aria-label='Previous'>
                                    <span aria-hidden='true'>&laquo;</span>
                                    <span className='sr-only'>Previous</span>
                                </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem active>
                                <MDBPageNav>
                                    1 <span className='sr-only'>(current)</span>
                                </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav>
                                    2
                                </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav>
                                    3
                                </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav>
                                    4
                                </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav>
                                    5
                                </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem onClick={this.goToNextPage}>
                                <MDBPageNav>
                                    &raquo;
                                </MDBPageNav>
                            </MDBPageItem>
                        </MDBPagination>
                    </div>
                   </div>
                   </div>
                 </div>

                     {/*small-display */}
                 <MDBHamburgerToggler color="black" id="hamburger1"  className='bg-transparent d-sm-block d-md-none mx-3 left-side-toggle collapse-button' onClick={this.toggleCollapse('navbarCollapse1')} />
                 <MDBCollapse
                     id='navbarCollapse1'
                     isOpen={this.state.collapseID}
                     navbar
                     className='shop-nav-navbar '
                 >
                         <div className='left-0 position-absolute shop-filters-block pt-0 pb-0'>
                                <ShopFilter
                                    data={ this.state.filterData }
                                    setFilterData = {this.setFilterData.bind(this)}
                                />
                            </div>

                         </MDBCollapse>
                            {/*products list*/}
                            <div className='z-index-5 shop-items pt-0 m-auto justify-content-center w-100 bg-white d-block  d-md-none'>
                                <div className='shop-items-md bg-white '>
                                    <h4 className='text-center px-4 py-1 font-weight-bold'>Products</h4>
                                    <p className='shop-items-text grey-text text-center mx-auto mb-5'>
                                        В нашому магазині представлений широкий вибір професійної косметики для волосся: шампуні для домашнього догляду та для професіного використання.
                                    </p>
                                    <MDBRow className='p-0 m-2 ml-0 border-0 products'>
                                        {this.state.products.map((product) => (
                                            <MDBCol key={product.id} lg='6' md='6' xl='4' className='m-auto justify-content-center col-12 p-0 p-sm-2 pb-3 m-0 float-left product-card h-100'>
                                                <Item product={product}/>
                                            </MDBCol>
                                        ))}
                                    </MDBRow>
                                </div>
                                <MDBPagination color='purple' className='h-100'>
                                    <MDBPageItem disabled>
                                        <MDBPageNav aria-label='Previous'>
                                            <span aria-hidden='true'>&laquo;</span>
                                            <span className='sr-only'>Previous</span>
                                        </MDBPageNav>
                                    </MDBPageItem>
                                    <MDBPageItem active>
                                        <MDBPageNav>
                                            1 <span className='sr-only'>(current)</span>
                                        </MDBPageNav>
                                    </MDBPageItem>
                                    <MDBPageItem>
                                        <MDBPageNav>
                                            2
                                        </MDBPageNav>
                                    </MDBPageItem>
                                    <MDBPageItem>
                                        <MDBPageNav>
                                            3
                                        </MDBPageNav>
                                    </MDBPageItem>
                                    <MDBPageItem>
                                        <MDBPageNav>
                                            4
                                        </MDBPageNav>
                                    </MDBPageItem>
                                    <MDBPageItem>
                                        <MDBPageNav>
                                            5
                                        </MDBPageNav>
                                    </MDBPageItem>
                                    <MDBPageItem>
                                        <MDBPageNav>
                                            &raquo;
                                        </MDBPageNav>
                                    </MDBPageItem>
                                </MDBPagination>
                            </div>
                    </div>
             </div>
             </div>
        )
    }
}

export default ShopProducts;