import React from 'react';
import {Component} from 'react';
import './shopFooter.css'
import {Link, withRouter, NavLink} from 'react-router-dom';
import {
    MDBRow,
    MDBCol,
    MDBNavbarNav,
    MDBNavItem,
    MDBIcon,
    MDBContainer,
    MDBFooter
} from 'mdbreact';


class ShopFooter extends Component  {

    state = {
        collapseID: ''
    }

    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ''
        }));
    }


    chooseFooterHandler = (type) => {
        // this.props.setFilterFooter(type)
    }
    //
    // isActive = (type) => {
    //     const category = window.location.pathname.split('/').pop()
    //     return category === type ? 'active' : ''
    // }



    render() {
        return (
                <div className='shop-footer w-100'>
                    <MDBFooter className="font-small pt-4 mt-4">
                        <MDBContainer fluid className="container text-center text-md-left pl-0 pl-sm-2 pl-md-0 pl-lg-0  pr-sm-2 pr-md-0 pr-lg-0">
                            <MDBRow className='pb-5 mx-3 ml-sm-0 ml-md-0 ml-lg-0 ml-xl-0 mr-sm-0 mr-md-0 mr-lg-0 mr-xl-0'>
                                <MDBCol sm="5" md="3" lg="3" className='col-5  w-responsive p-md-0 p-sm-0 p-0 pb-5'>
                                    <div className='w-100 pb-5 w-responsive'>
                                       <img className='image-bordo w-100 w-responsive' src={require('./../../img/catalogue/sirene-logo.png')}/>
                                    </div>
                                    <p className="logo-text pr-1">Початкова краса - це те, як людина виглядає вранці, ледь встав з ліжка, тобто природно, але бездоганно.</p>
                                    <p className="logo-text-cr pb-1 mb-0 pr-1">Сьюзен Коллінз, "Голодні ігри"</p>
                                </MDBCol>
                                <MDBCol sm="5" md="3" className='col-6 w-responsive p-md-0 p-sm-0 p-0 mb-5'>
                                    <h5 className="title pl-lg-5 pl-md-2 footer-nav pl-sm-2 pl-1 text-left pl-2 pt-2 pt-xl-4 pt-md-3 pt-sm-2">Навігація</h5>
                                    <ul className='pl-lg-5 pl-md-2 pl-sm-2 text-left pl-2 d-table'>
                                        <li>
                                            <Link to='/' className="w-100 pb-2 footer-nav">
                                                <span>Головна</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/shopAboutShop' className="w-100 list-unstyled pb-2 footer-nav">
                                                <span>Про магазин</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/ShopJob' className="w-100 list-unstyled pb-2 footer-nav">
                                                <span>Співпраця</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/shopContacts' className="w-100 list-unstyled pb-2 footer-nav">
                                                <span>Контакти</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </MDBCol>
                                <MDBCol sm="5" md="3" className='col-5  w-responsive p-md-0 p-sm-0 p-0'>
                                    <h5 className="title pl-lg-5 pl-md-2 pl-sm-4 text-left pt-2 pt-2 pt-xl-4 pt-md-3 pt-sm-2 pl-0">Товари</h5>
                                    <ul className='pl-lg-5 pl-md-2 pl-sm-4 text-left pl-0 h-100'>
                                        <li>
                                            <NavLink to="/shampoo"  className="list-unstyled pb-2 w-100">
                                                Шампуні для волосся
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/conditioner" className="list-unstyled pb-2">
                                                Кондиціонери для волосся
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/mask" className="list-unstyled pb-2">
                                                Маски для волосся
                                            </NavLink>
                                        </li>
                                       <li>
                                           <NavLink to="/styling" className="list-unstyled pb-2">
                                               Стайлінги
                                           </NavLink>
                                       </li>
                                        <li>
                                            <NavLink to="/oil" className="list-unstyled pb-2">
                                                Олія
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/protection" className="list-unstyled pb-2">
                                                Захист
                                            </NavLink>
                                        </li>
                                    </ul>
                                </MDBCol>
                                <MDBCol sm="5" md="3" className='col-7  w-responsive p-md-0 p-sm-0 p-0 h-100 pl-sm-4'>
                                    <h5 className="ml-3 ml-sm-0 title pl-lg-4 pl-md-4 pl-sm-3 text-left pl-4 pt-2 pt-2 pt-xl-4 pt-md-3 pt-sm-2">Контакти</h5>
                                    <ul className='ml-3 ml-sm-0 pl-lg-4 pl-md-4 pl-sm-3 pl-4 text-left mb-0 h-100'>
                                        <li>
                                            <a href='https://goo.gl/maps/bzk1W5AZCec4QVR89' className='white-ic'>
                                                    м.Київ, вул. Данченко 32 (вхід з двору)
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#' className="list-unstyled pb-2" href='tel:+380735005533'>
                                                <MDBIcon icon="phone-alt" className="green-text pr-1"/>+38 073 500 55 33
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#' className="list-unstyled pb-2" href='tel:+380985005533'>
                                                <MDBIcon icon="phone-alt" className="green-text pr-1"/>+38 098 500 55 33
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#' className="list-unstyled pb-2">
                                                Графік роботи:
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#' className="list-unstyled pb-2">
                                                09:00 - 20:00 (без вихідних)
                                            </a>
                                        </li>
                                        <MDBNavbarNav right inline className="border-0 footer-ic w-100 mb-0">
                                            <MDBNavItem  className='border-0 col-4 d-inline pr-3 pt-2 pb-3'>
                                                <a href='https://www.facebook.com/yvonnemultibrands'>
                                                     <MDBIcon fab icon="facebook-f"  className="footer-icons white-text"/>
                                                </a>
                                            </MDBNavItem>
                                            <MDBNavItem className='border-0 col-4 d-inline pr-3 pt-2 pb-3' >
                                                <a href='https://www.instagram.com/yvonnemultibrands/'>
                                                    <MDBIcon fab icon="instagram" className="footer-icons white-text"/>
                                                </a>
                                            </MDBNavItem>
                                            <MDBNavItem  className='border-0 col-4 d-inline pr-3 pt-2 pb-3' >
                                                <Link to='/writetous'>
                                                     <MDBIcon far icon="envelope" className="footer-icons white-text"/>
                                                </Link>
                                            </MDBNavItem>
                                        </MDBNavbarNav>
                                    </ul>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                        <div className="footer-copyright text-center py-3 w-100 h-auto">
                            <MDBContainer style={{textAlign: 'center'}}>
                                <a className="shop-salon w-75 d-inline-block" href="https://www.mdbootstrap.com"><span className='font-smaller'>&copy;  Copyright {new Date().getFullYear()} </span>   YVONNE BEAUTY COSMETICS SHOP - All Rights Reserved </a>
                            </MDBContainer>
                        </div>
                    </MDBFooter>
                </div>
        )
    }
}

export default withRouter(ShopFooter);