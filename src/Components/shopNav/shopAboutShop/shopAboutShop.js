import React, {Component} from 'react';
import './shopAboutShop.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {
    MDBCard,
    MDBCol,
    MDBView,
    MDBRow,
    MDBIcon,
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBContainer
} from 'mdbreact';


class shopAboutShop extends Component {

    render() {
        return (
            <div>
                <div className='container'>
                    <h4 className='h4-responsive text-center font-weight-bolder m-0 py-md-5 py-sm-5 py-4 py-xl-5 py-lg-5'>ABOUT SHOP</h4>
                    <MDBCard className='d-inline-block mb-xl-5 mb-lg-4 mb-md-4 mb-sm-3 mb-2 border-0 z-index-0'>
                            <div className='d-block w-50 float-left text-center text-lg-left p-3'>
                                <MDBContainer className='pt-1 w-100'>
                                    <MDBCarousel
                                        activeItem={1}
                                        length={3}
                                        showControls={true}
                                        showIndicators={false}
                                        className='z-depth-0 slide'
                                    >
                                        <MDBCarouselInner>
                                            <MDBCarouselItem itemId='1'>
                                                <MDBView>
                                                    <img
                                                        className='img-fluid w-100'
                                                        src={require('../../../img/shop/kliss-champu.jpg')}
                                                        alt=''
                                                    />
                                                </MDBView>
                                            </MDBCarouselItem>
                                            <MDBCarouselItem itemId='2'>
                                                <MDBView>
                                                    <img
                                                        className='img-fluid w-100'
                                                        src={require('../../../img/shop/mossa.jpg')}
                                                        alt=''
                                                    />
                                                </MDBView>
                                            </MDBCarouselItem>
                                            <MDBCarouselItem itemId='3'>
                                                <MDBView>
                                                    <img
                                                        className='img-fluid w-100'
                                                        src={require('../../../img/salon/hair.jpg')}
                                                        alt=''
                                                    />
                                                </MDBView>
                                            </MDBCarouselItem>
                                        </MDBCarouselInner>
                                    </MDBCarousel>
                                </MDBContainer>
                            </div>
                                <div xl='10' md='11' size='10' sm='12'  className='px-sm-2 px-3 py-0 pt-2'>
                                    <h5 className='font-weight-bold mb-3 pt-3'>Assortment</h5>
                                    <p className='black-text'>
                                        Our shop Syrene range new and fashion products different brands from Italy, Spain, USA such brands as Choice, FarmaVita, ProfiStyle, Mirella, Davines, Joico, Schwarzkopf. You can order items by telephone or online. We will realise your order as soon as possible.

                                    </p>
                                </div>
                                <div xl='10' md='11' size='10' sm='12'  className='px-sm-2 px-3 py-0 pt-2'>
                                    <h5 className='font-weight-bold mb-3'>Quality</h5>
                                    <p className='black-text'>
                                        All products in the store are certified; <br/>
                                        Consultants choose the product you need; <br/>
                                        Shipment quickly; <br/>
                                        The range of products is constantly increasing. <br/>
                                        Shipment of goods takes place anywhere in United Kingdom; <br/>
                                        The store presents products of Italian, Usa, Spanish; <br/>
                                    </p>
                                </div>
                                <div xl='12' md='12' size='12' sm='12'  className='px-sm-2 px-3 py-0 pt-2'>
                                    <h5 className='font-weight-bold mb-3'>Order</h5>
                                    <p className='black-text'>
                                         To order products you must call our internet shop or make it online.
                                        <li className="list-unstyled pt-xl-3 pt-3 w-100">
                                            <a href="#!"><MDBIcon icon="home" className="green-text pr-3"/><span className='black-text w-75 font-small'>Brighton, United Kingdom</span></a>
                                        </li>
                                        <li className="list-unstyled">
                                            <a href="tel:+447716134163"><MDBIcon icon="phone-alt" className="green-text pr-3"/><span className='green-text w-75 font-small'>+44 771-6134-163</span></a>
                                        </li>
                                    </p>
                                </div>
                        <div className="mdb-lightbox no-margin mb-lg-5 mb-xl-5 mb-md-5 mb-sm-2 mb-1 mx-0 pt-3 pr-0">
                            <h5 className='font-weight-bold text-center w-100'>Наш салон-магазин YVONNE</h5>
                            <MDBRow className='pt-3 pt-sm-5 p-0 w-100 m-0'>
                                <MDBCol md="4"  sm="4"  className='p-2 w-100'>
                                    <figure>
                                        <img
                                            src={require('./../../../img/photos/IMG_4228-scaled.webp')}
                                            alt="Gallery"
                                            className="img-fluid w-100"
                                            onClick={() =>
                                                this.setState({ photoIndex: 0, isOpen: true })
                                            }
                                            data-lightbox="salon6"
                                        />
                                    </figure>
                                </MDBCol>
                                <MDBCol md="4"  sm="4"  className='p-2 w-100'>
                                    <figure>
                                        <img
                                            src={require('./../../../img/photos/Felps-Color-Premium-RP-Reconstruction-Treatment-2x500mL.webp')}
                                            alt="Gallery"
                                            className="img-fluid"
                                            onClick={() =>
                                                this.setState({ photoIndex: 1, isOpen: true })
                                            }
                                            data-lightbox="salon2"
                                        />
                                    </figure>
                                </MDBCol>
                                <MDBCol md="4"  sm="4"  className='p-2 w-100'>
                                    <figure>
                                        <img
                                            src={require('./../../../img/photos/bau_september_2020_joico_group_0008 (1)__20285.original.jpg')}
                                            alt="Gallery"
                                            className="img-fluid"
                                            onClick={() =>
                                                this.setState({ photoIndex: 2, isOpen: true })
                                            }
                                            data-lightbox="salon1"
                                        />
                                    </figure>
                                </MDBCol>
                                <MDBCol md="4"  sm="4"  className='p-2 w-100'>
                                    <figure>
                                        <img
                                            src={require('./../../../img/photos/D_NQ_NP_734324-MLM43957318326_102020-O.jpg')}
                                            alt="Gallery"
                                            className="img-fluid"
                                            onClick={() =>
                                                this.setState({ photoIndex: 8, isOpen: true })
                                            }
                                        />
                                    </figure>
                                </MDBCol>
                                <MDBCol md="4"  sm="4"  className='p-2 w-100'>
                                    <figure>
                                        <img
                                            src={require('./../../../img/photos/slider1-1.jpg')}
                                            alt="Gallery"
                                            className="img-fluid"
                                            onClick={() =>
                                                this.setState({ photoIndex: 3, isOpen: true })
                                            }
                                            data-lightbox="salon10"
                                        />
                                    </figure>
                                </MDBCol>
                                <MDBCol md="4"  sm="4"  className='p-2 w-100'>
                                    <figure>
                                        <img
                                            src={require('./../../../img/photos/blonde-life-home-page-slider.jpg')}
                                            alt="Gallery"
                                            className="img-fluid"
                                            onClick={() =>
                                                this.setState({ photoIndex: 4, isOpen: true })
                                            }
                                            data-lightbox="salon3"
                                        />
                                    </figure>
                                </MDBCol>
                                <MDBCol md="4"  sm="4"  className='p-2 w-100'>
                                    <figure>
                                        <img
                                            src={require('./../../../img/photos/Photo-by-PROF.KOSMETIKA-DLYA-VOLOS-on-_2_.jpg')}
                                            alt="Gallery"
                                            className="img-fluid"
                                            onClick={() =>
                                                this.setState({ photoIndex: 5, isOpen: true })
                                            }
                                            data-lightbox="salon9"
                                        />
                                    </figure>
                                </MDBCol>
                                <MDBCol md="4" sm="4" className='p-2 w-100'>
                                    <figure>
                                        <img
                                            src={require('./../../../img/photos/8b5f9c6765fe761c575b9e2c1690139a.jpg')}
                                            alt="Gallery"
                                            className="img-fluid"
                                            onClick={() =>
                                                this.setState({ photoIndex: 6, isOpen: true })
                                            }
                                        />
                                    </figure>
                                </MDBCol>
                                <MDBCol md="4"  sm="4" className='p-2 w-100'>
                                    <figure>
                                        <img
                                            src={require('./../../../img/photos/felps_professional_rp_premium_tratamento_de_reconstrucao_capilar_2x_500ml_1801_3_20200923013824.webp')}
                                            alt="Gallery"
                                            className="img-fluid"
                                            onClick={() =>
                                                this.setState({ photoIndex: 7, isOpen: true })
                                            }
                                        />
                                    </figure>
                                </MDBCol>
                            </MDBRow>
                        </div>
                    </MDBCard>
                </div>
            </div>
        )
    }
}

export default shopAboutShop;