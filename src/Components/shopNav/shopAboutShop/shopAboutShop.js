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
                    <h4 className='h4-responsive text-center font-weight-bolder m-0 py-md-5 py-sm-5 py-4 py-xl-5 py-lg-5'>ПРО МАГАЗИН</h4>
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
                                    <h5 className='font-weight-bold mb-3 pt-3'>Асортимент</h5>
                                    <p className='black-text'>
                                        Інтернет магазин YVONNE пропонує широкий асортимент продукції для догляду за волоссям та аксесуарами. Замовляти товари можливо як онлайн, так і зателефонувавши за номерами в контактах. Існує можливість замовити будь-який товар, який не представлений серед асортименту продукції. Магазин співпрацює із такими марками, як:
                                        Choice, FarmaVita, ProfiStyle, Mirella, Davines, Joico, Schwarzkopf
                                    </p>
                                </div>
                                <div xl='10' md='11' size='10' sm='12'  className='px-sm-2 px-3 py-0 pt-2'>
                                    <h5 className='font-weight-bold mb-3'>Якість та послуги</h5>
                                    <p className='black-text'>
                                        Усі товари у магазині сертифіковані;<br/>
                                        Консультанти оберуть для вас необхідний товар;<br/>
                                        Відправлення товару відбувається швидко;<br/>
                                        У магазині постійно діють <span className='red-text font-weight-bold'>АКЦІЇ</span>;<br/>
                                        Наш магазин діє на основі салону краси ІВОН у місті Києві;<br/>
                                        Постійно збільшується асортимент продукції.<br/>
                                        Відправлення товаріз відбувається у будь-яку точкі України;<br/>
                                        Магазин представляє продукцію Італійських та Українських брендів;<br/>
                                    </p>
                                </div>
                                <div xl='12' md='12' size='12' sm='12'  className='px-sm-2 px-3 py-0 pt-2'>
                                    <h5 className='font-weight-bold mb-3'>Замовлення</h5>
                                    <p className='black-text'>
                                        Замовлення можливо здійснити як через особистий кабінет, так і зателефонувавши нам номерами, вказаними у контактах. Також є можливість відвідати нам салон краси та магазин Івон за наступними реквізитами:
                                        <li className="list-unstyled pt-xl-3 pt-3 w-100">
                                            <a href="#!"><MDBIcon icon="home" className="green-text pr-3"/><span className='black-text w-75 font-small'>м.Київ, вул. Данченко 32</span></a>
                                        </li>
                                        <li className="list-unstyled">
                                            <a href="#!"><span className='w-75 font-small purple-text font-weight-bold'>ЗАТЕЛЕФОНУЙТЕ НАМ!</span></a>
                                        </li>
                                        <li className="list-unstyled">
                                            <a href="tel:+380735005533"><MDBIcon icon="phone-alt" className="green-text pr-3"/><span className='green-text w-75 font-small'>+38 073 500 55 33</span></a>
                                        </li>
                                        <li className="list-unstyled">
                                            <a href="tel:+380985005533"><MDBIcon icon="phone-alt" className="green-text pr-3"/><span className='green-text w-75 font-small'>+38 098 500 55 33</span></a>
                                        </li>
                                    </p>
                                </div>
                        <div className="mdb-lightbox no-margin mb-lg-5 mb-xl-5 mb-md-5 mb-sm-2 mb-1 mx-0 pt-3 pr-0">
                            <h5 className='font-weight-bold text-center w-100'>Наш салон-магазин YVONNE</h5>
                            <MDBRow className='pt-3 pt-sm-5 p-0 w-100 m-0'>
                                <MDBCol md="4" className='p-2 w-100'>

                                    <figure>
                                        <img
                                            src={require('./../../../img/salon6.jpg')}
                                            alt="Gallery"
                                            className="img-fluid w-100"
                                            onClick={() =>
                                                this.setState({ photoIndex: 0, isOpen: true })
                                            }
                                            data-lightbox="salon6"
                                        />
                                    </figure>
                                </MDBCol>
                                <MDBCol md="4" className='p-2 w-100'>
                                    <figure>
                                        <img
                                            src={require('./../../../img/salon2.jpg')}
                                            alt="Gallery"
                                            className="img-fluid"
                                            onClick={() =>
                                                this.setState({ photoIndex: 1, isOpen: true })
                                            }
                                            data-lightbox="salon2"
                                        />
                                    </figure>
                                </MDBCol>
                                <MDBCol md="4" className='p-2 w-100'>
                                    <figure>
                                        <img
                                            src={require('./../../../img/salon1.jpg')}
                                            alt="Gallery"
                                            className="img-fluid"
                                            onClick={() =>
                                                this.setState({ photoIndex: 2, isOpen: true })
                                            }
                                            data-lightbox="salon1"
                                        />
                                    </figure>
                                </MDBCol>
                                <MDBCol md="4" className='p-2 w-100'>
                                    <figure>
                                        <img
                                            src={require('./../../../img/salon10.JPG')}
                                            alt="Gallery"
                                            className="img-fluid"
                                            onClick={() =>
                                                this.setState({ photoIndex: 3, isOpen: true })
                                            }
                                            data-lightbox="salon10"
                                        />
                                    </figure>
                                </MDBCol>
                                <MDBCol md="4" className='p-2 w-100'>
                                    <figure>
                                        <img
                                            src={require('./../../../img/salon3.jpg')}
                                            alt="Gallery"
                                            className="img-fluid"
                                            onClick={() =>
                                                this.setState({ photoIndex: 4, isOpen: true })
                                            }
                                            data-lightbox="salon3"
                                        />
                                    </figure>
                                </MDBCol>
                                <MDBCol md="4" className='p-2 w-100'>
                                    <figure>
                                        <img
                                            src={require('./../../../img/salon9.JPG')}
                                            alt="Gallery"
                                            className="img-fluid"
                                            onClick={() =>
                                                this.setState({ photoIndex: 5, isOpen: true })
                                            }
                                            data-lightbox="salon9"
                                        />
                                    </figure>
                                </MDBCol>
                                <MDBCol md="4" className='p-2 w-100'>
                                    <figure>
                                        <img
                                            src={require('./../../../img/salon4.jpg')}
                                            alt="Gallery"
                                            className="img-fluid"
                                            onClick={() =>
                                                this.setState({ photoIndex: 6, isOpen: true })
                                            }
                                        />
                                    </figure>
                                </MDBCol>
                                <MDBCol md="4" className='p-2 w-100'>
                                    <figure>
                                        <img
                                            src={require('./../../../img/salon8.JPG')}
                                            alt="Gallery"
                                            className="img-fluid"
                                            onClick={() =>
                                                this.setState({ photoIndex: 7, isOpen: true })
                                            }
                                        />
                                    </figure>
                                </MDBCol>
                                <MDBCol md="4" className='p-2 w-100'>
                                    <figure>
                                        <img
                                            src={require('./../../../img/salon5.jpg')}
                                            alt="Gallery"
                                            className="img-fluid"
                                            onClick={() =>
                                                this.setState({ photoIndex: 8, isOpen: true })
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