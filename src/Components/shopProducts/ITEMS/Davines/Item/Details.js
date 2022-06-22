import {
    MDBCol,
    MDBIcon,
    MDBNav,
    MDBNavItem,
    MDBNavLink,
    MDBTabContent, MDBTable, MDBTableBody,
    MDBTabPane
} from 'mdbreact';
import React from 'react';

import './../../Davines/Item/detailsnew.css'
import './../../../shopProducts.css'

import Item from './Item';


class Details extends React.Component {


        state = {
            items: {
                default: '1',
            },
            value: 0,
            product: {},
        };




    togglePills = (type, tab) => e => {
        e.preventDefault();
        if (this.state.items[type] !== tab) {
            let items = { ...this.state.items };
            items[type] = tab;
            this.setState({
                items
            });
        }
    };

     componentDidMount(props) {

         const itemId = window.location.pathname.split('/').pop()
         const fd = new FormData();
         fd.append('id', itemId);

         // fetch('http://storeyvonne.com/get_item.php', {
         //     method: 'post',
         //     body: fd
         // })

         fetch('/backend/get_item.php', {
             method: 'post',
             body: fd
         }).then((res) => res.json()).then((data) => {
             console.log(data);

             this.setState({product: {...data} });
         });

    }


       render() {
           let title,  price, articul, typeitem, branditem, seriaitem, amount,  descr2, descr3, country, image;

           if (this.state.product) {
                title = this.state.product.title;
                price = this.state.product.price;
                image = this.state.product.image;
                articul = this.state.product.articul;
                typeitem = this.state.product.type;
                branditem = this.state.product.brand;
                seriaitem = this.state.product.seria;
                amount = this.state.product.amount;
                descr2 = this.state.product.descr2;
                descr3 = this.state.product.descr3;
                country = this.state.product.country;
           }


        return (
            <div>
                <div className='container'>
                    <div className='pt-3 mt-2 mt-lg-5'>
                        <button type="button" className="btn btn-link float-left bg-transparent "><MDBIcon icon="arrow-left" className='text-left float-left '/></button>
                       <div className='d-inline-flex flex-wrap w-100'>
                            <MDBCol sm='6' md='6' lg='6' xl='5' className='m-0'>
                                <div className='p-1 m-0 p-2'>
                                    <a href={`http://storeyvonne.com/upload/${image}`} data-lightbox="product">
                                        <img className='item-image m-auto w-100 justify-content-center d-block' id='image' src={`http://storeyvonne.com/upload/${image}`} alt={title}/>
                                    </a>
                                </div>
                            </MDBCol>
                            <MDBCol sm='6' md='6' lg='6' xl='7' className='p-2 m-0'>
                                <div className='p-2'>
                                    <h3 className='font-weight-normal'>{title}</h3>
                                    <p className='font-weight-bold py-1 m-0 grey-text'>Articul:<span className='font-weight-normal'>{articul}</span></p>
                                    <p className='font-weight-bold py-1 m-0'>Product type: <span className='font-weight-normal'>{typeitem}</span></p>
                                    <p className='font-weight-bold py-1 m-0'>Production: <span className='font-weight-normal'>{branditem}</span></p>
                                    <p className='font-weight-bold py-1 m-0'>Seria: <span className='font-weight-normal'>{seriaitem}</span></p>
                                    <p className='font-weight-bold py-1 m-0'>Volume: <span className='font-weight-normal'>{amount}</span></p>
                                    {/*<p className='font-weight-bold py-1 m-0'>Тип волосся: <span className='font-weight-normal'></span></p>*/}
                                    {/*<p className='font-weight-bold py-1 m-0'>Призначення: <span className='font-weight-normal'></span></p>*/}
                                    {/*<p className='font-weight-bold py-1 m-0'>Пол: <span className='font-weight-normal'>{gender}</span></p>*/}
                                    <p className='font-weight-bold py-1 m-0'>Description: <span className='font-weight-normal'>{descr2}</span></p>
                                    <p className='bg-white p-0 green-text py-1 m-0'><span className='font-weight-bold'><i className="fas fa-check green-text font-weight-bold p-2"></i>In stock</span></p>
                                    <p className='font-weight-bold py-1 m-0 price'>Price: <span className='font-weight-bold py-1 m-0'>{price}</span> GBP</p>
                                    <div className='d-inline-flex flex-wrap text-center py-4 w-100'>
                                        <button className='m-0 item-to-cart border-0 z-depth-1 mx-3 my-2 white-text' id='to-cart'>ADD</button>
                                        <button className='m-0 item-to-cart border-0 z-depth-1 mx-3 my-2 white-text'>BUY</button>
                                    </div>
                                </div>
                            </MDBCol>
                        </div>
                    </div>
                    <div>
                        <MDBNav  className='item-pills pills'>
                            <MDBNavItem className='w-25'>
                                <MDBNavLink
                                    className='white-text font-weight-normal px-1 py-3 description-link text-center'
                                    to='#'
                                    active={this.state.items['default'] === '1'}
                                    onClick={this.togglePills('default', '1')}
                                >
                                    DESCRIPTION
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem className='w-25'>
                                <MDBNavLink
                                    className='white-text font-weight-normal  px-1 py-3 description-link text-center'
                                    to='#'
                                    active={this.state.items['default'] === '2'}
                                    onClick={this.togglePills('default', '2')}
                                >
                                    DETAILS
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem className='w-25'>
                                <MDBNavLink
                                    className='white-text font-weight-normal description-link px-1 py-3 text-center'
                                    to='#'
                                    active={this.state.items['default'] === '3'}
                                    onClick={this.togglePills('default', '3')}
                                >
                                    RELATED
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem className='w-25'>
                                <MDBNavLink
                                    className='white-text font-weight-normal description-link px-1 py-3 text-center'
                                    to='#'
                                    active={this.state.items['default'] === '4'}
                                    onClick={this.togglePills('default', '4')}
                                >
                                    SHIPMENT
                                </MDBNavLink>
                            </MDBNavItem>
                        </MDBNav>
                        <MDBTabContent activeItem={this.state.items['default']} className='m-2 mb-5'>
                            <MDBTabPane tabId='1' className='mt-4 p-2'>
                                <p className='font-weight-bold'>
                                    Product description:
                                </p>
                                <div className='item-method-of-use'>
                                    {descr3}
                                </div>
                            </MDBTabPane>
                            <MDBTabPane tabId='2'  className='mt-4 p-2'>
                                <MDBTable>
                                    <MDBTableBody>
                                        <tr>
                                            <td>Articul:</td>
                                            <td>{articul}</td>
                                        </tr>
                                        <tr>
                                            <td>Volume:</td>
                                            <td>{amount} мл</td>
                                        </tr>
                                        <tr>
                                            <td>Product type:</td>
                                            <td>{typeitem}</td>
                                        </tr>
                                        <tr>
                                            <td>Production:</td>
                                            <td>{country}</td>
                                        </tr>
                                        <tr>
                                            <td>Manufacturer:</td>
                                            <td>{branditem}</td>
                                        </tr>
                                        <tr>
                                            <td>Seria:</td>
                                            <td>{seriaitem}</td>
                                        </tr>
                                        {/*<tr>*/}
                                        {/*    <td>Призначення:</td>*/}
                                        {/*    <td>{this.state.appo_arr}</td>*/}
                                        {/*</tr>*/}
                                        {/*<tr>*/}
                                        {/*    <td>Категорія:</td>*/}
                                        {/*    <td>{gender}</td>*/}
                                        {/*</tr>*/}
                                    </MDBTableBody>
                                </MDBTable>
                            </MDBTabPane>
                            <MDBTabPane tabId='3' className='m-1 p-2 '>
                                {/*<MDBRow className='mt-4 p-0 m-auto justify-content-around'>*/}
                                {/*    <MDBCol lg='4' md='4' xl='3' sm='6' className='pb-5 p-2 col-12' >*/}
                                {/*        <Item />*/}
                                {/*    </MDBCol>*/}
                                {/*    <MDBCol lg='4' md='4' xl='3' sm='6' className='pb-5 p-2 col-12' >*/}
                                {/*        <Item />*/}
                                {/*    </MDBCol>*/}
                                {/*    <MDBCol lg='4' md='4' xl='3' sm='6' className='pb-5 p-2 col-12' >*/}
                                {/*        <Item />*/}
                                {/*    </MDBCol>*/}
                                {/*</MDBRow>*/}
                            </MDBTabPane>
                            <MDBTabPane tabId='4'  className='mt-4 m-1 p-2'>
                                <p className='font-weight-bold'>
                                    Shipment
                                </p>
                                <MDBTable>
                                    <MDBTableBody>
                                        <p className='pl-0 w-100'>Products sent immediately having made an order.</p>
                                        <tr>
                                            <td>Post Office delivery</td>
                                            <td className='text-green'>5 p</td>
                                        </tr>
                                        <tr>
                                            <td><a href='/'>Royal mail</a></td>
                                            <td className='text-green'>5 p</td>
                                        </tr>
                                    </MDBTableBody>
                                </MDBTable>
                                <p className='font-weight-bold'>
                                    Payment
                                </p>
                                <div className='item-payment mb-5'>
                                    <p>
                                        <a href='https://www.privat24.ua/' className='font-weight-bold black-text'>
                                            <span><img className='item-payment-img pr-3' src={require('../../../../../img/shipment/b31d8ffa3d704df2a40ae39b4667c8a3.jpg')}/></span>
                                            GOOGLE PAY
                                        </a>
                                    </p>
                                    <p>
                                        <a href='https://www.visa.com.ua/uk_UA' className='font-weight-bold black-text'>
                                            <span><img className='item-payment-img pr-3' src={require('../../../../../img/shipment/Visa.jpg')} /></span>
                                            VISA
                                        </a>
                                    </p>
                                </div>
                            </MDBTabPane>
                        </MDBTabContent>
                    </div>
                </div>
            </div>
        )
    }
}


export default Details;
