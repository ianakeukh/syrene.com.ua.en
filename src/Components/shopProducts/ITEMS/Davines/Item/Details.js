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
                       <div className='d-inline-flex flex-wrap'>
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
                                    <p className='font-weight-bold py-1 m-0 grey-text'>Артикул:<span className='font-weight-normal'>{articul}</span></p>
                                    <p className='font-weight-bold py-1 m-0'>Вид товару: <span className='font-weight-normal'>{typeitem}</span></p>
                                    <p className='font-weight-bold py-1 m-0'>Виробник: <span className='font-weight-normal'>{branditem}</span></p>
                                    <p className='font-weight-bold py-1 m-0'>Серія: <span className='font-weight-normal'>{seriaitem}</span></p>
                                    <p className='font-weight-bold py-1 m-0'>Об'єм: <span className='font-weight-normal'>{amount}</span></p>
                                    {/*<p className='font-weight-bold py-1 m-0'>Тип волосся: <span className='font-weight-normal'></span></p>*/}
                                    {/*<p className='font-weight-bold py-1 m-0'>Призначення: <span className='font-weight-normal'></span></p>*/}
                                    {/*<p className='font-weight-bold py-1 m-0'>Пол: <span className='font-weight-normal'>{gender}</span></p>*/}
                                    <p className='font-weight-bold py-1 m-0'>Опис: <span className='font-weight-normal'>{descr2}</span></p>
                                    <p className='bg-white p-0 green-text py-1 m-0'><span className='font-weight-bold'><i className="fas fa-check green-text font-weight-bold p-2"></i>В наявності</span></p>
                                    <p className='font-weight-bold py-1 m-0 price'>Ціна: <span className='font-weight-bold py-1 m-0'>{price}</span> грн</p>
                                    <div className='d-inline-flex flex-wrap text-center py-4 w-100'>
                                        <button className='m-0 item-to-cart border-0 z-depth-1 mx-3 my-2 white-text' id='to-cart'>В КОРЗИНУ</button>
                                        <button className='m-0 item-to-cart border-0 z-depth-1 mx-3 my-2 white-text'>КУПИТИ</button>
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
                                    ОПИС
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem className='w-25'>
                                <MDBNavLink
                                    className='white-text font-weight-normal  px-1 py-3 description-link text-center'
                                    to='#'
                                    active={this.state.items['default'] === '2'}
                                    onClick={this.togglePills('default', '2')}
                                >
                                    ДЕТАЛІ
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem className='w-25'>
                                <MDBNavLink
                                    className='white-text font-weight-normal description-link px-1 py-3 text-center'
                                    to='#'
                                    active={this.state.items['default'] === '3'}
                                    onClick={this.togglePills('default', '3')}
                                >
                                    СХОЖІ ТОВАРИ
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem className='w-25'>
                                <MDBNavLink
                                    className='white-text font-weight-normal description-link px-1 py-3 text-center'
                                    to='#'
                                    active={this.state.items['default'] === '4'}
                                    onClick={this.togglePills('default', '4')}
                                >
                                    ДОСТАВКА
                                </MDBNavLink>
                            </MDBNavItem>
                        </MDBNav>
                        <MDBTabContent activeItem={this.state.items['default']} className='m-2 mb-5'>
                            <MDBTabPane tabId='1' className='mt-4 p-2'>
                                <p className='font-weight-bold'>
                                    Детальний опис товару:
                                </p>
                                <div className='item-method-of-use'>
                                    {descr3}
                                </div>
                            </MDBTabPane>
                            <MDBTabPane tabId='2'  className='mt-4 p-2'>
                                <MDBTable>
                                    <MDBTableBody>
                                        <tr>
                                            <td>Артикул товару:</td>
                                            <td>{articul}</td>
                                        </tr>
                                        <tr>
                                            <td>Об'єм:</td>
                                            <td>{amount} мл</td>
                                        </tr>
                                        <tr>
                                            <td>Тип товару:</td>
                                            <td>{typeitem}</td>
                                        </tr>
                                        <tr>
                                            <td>Країна виробник:</td>
                                            <td>{country}</td>
                                        </tr>
                                        <tr>
                                            <td>Виробник:</td>
                                            <td>{branditem}</td>
                                        </tr>
                                        <tr>
                                            <td>Серія:</td>
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
                                    Доставка
                                </p>
                                <MDBTable>
                                    <MDBTableBody>
                                        <p className='pl-0 w-100'>Відправлення товарів відбувається одразу ж після отримання замовлення.</p>
                                        <tr>
                                            <td><a href='/'>Самовивіз із салону ІВОН (вул. Данченко 32)</a></td>
                                            <td className='text-green'>Безкоштовно</td>
                                        </tr>
                                        <tr>
                                            <td><a href='https://novaposhta.ua/'>Самовивіз із НОВОЇ ПОШТИ</a></td>
                                            <td className='text-green'>Безкоштовно</td>
                                        </tr>
                                        <tr>
                                            <td><a href='www.ukrposhta.ua'>Самовивіз із УКРПОШТИ</a></td>
                                            <td className='text-green'>Безкоштовно</td>
                                        </tr>
                                        <tr>
                                            <td><a href='/'>Доставка кур'єром (м. Київ)</a></td>
                                            <td className='text-green'>50 грн</td>
                                        </tr>
                                    </MDBTableBody>
                                </MDBTable>
                                <p className='font-weight-bold'>
                                    Оплата
                                </p>
                                <p className='pl-0'>Оплата товарів відбувається  через передплату на карту Приват Банка, також наложеним платежем</p>
                                <div className='item-payment mb-5'>
                                    <p>
                                        <a href='https://www.privat24.ua/' className='font-weight-bold black-text'>
                                            <span><img className='item-payment-img pr-3' src={require('../../../../../img/shipment/privat.png')} alt="privat"/></span>
                                            PRIVAT 24
                                        </a>
                                    </p>
                                    <p>
                                        <a href='https://www.visa.com.ua/uk_UA' className='font-weight-bold black-text'>
                                            <span><img className='item-payment-img pr-3' src={require('../../../../../img/shipment/Visa.jpg')} alt="Visa"/></span>
                                            VISA
                                        </a>
                                    </p>
                                    <p>
                                        <a href='https://www.mastercard.ua/uk-ua.html' className='font-weight-bold black-text'>
                                            <span><img className='item-payment-img pr-3' src={require('../../../../../img/shipment/MasterCard.png')} alt="MasterCard"/></span>
                                            MASTERCARD
                                        </a>
                                    </p>
                                    <p>
                                        <a href='https://www.liqpay.ua/uk' className='font-weight-bold black-text'>
                                            <span><img className='item-payment-img pr-3' src={require('../../../../../img/shipment/liqpay.png')} alt="liqpay"/></span>
                                            LIQPAY
                                        </a>
                                    </p>
                                </div>
                                <p className='font-weight-bold'>
                                    Гарантія
                                </p>
                                <div>
                                    <span className='font-weight-bold'>Повернення замовлених товарів неможливе згідно із Законом України 'Про захист справ споживачів'.</span>
                                    (Відповідно до Постанови Кабінету Міністрів України від 19 березня 1994 р. № 172 "Про реалізацію окремих положень Закону України "Про захист прав споживачів", затверджено перелік товарів належної якості, що не підлягають обміну (поверненню): Парфюмерно-косметичні вироби. )
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
