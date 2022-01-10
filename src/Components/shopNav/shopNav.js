import React, {Component} from 'react';
import './shopNav.css'
import './../../Backend/shopBin/shopBin.css'
import {Link, NavLink} from 'react-router-dom';
import {
    MDBModal,
    MDBModalHeader,
    MDBModalBody,
    MDBNavbar,
    MDBNavbarNav,
    MDBNavItem,
    MDBIcon,
    MDBBtn,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBContainer
} from 'mdbreact';


import './../../Backend/shopAutorization/shopAutorization.css'
import './../../Backend/shopRegistration/shopRegistration.css'
import './../../Backend/shopLike/shopLike.css'
import ShopAutorization from '../../Backend/shopAutorization/shopAutorization';
import ShopBin from '../../Backend/shopBin/shopBin';
import ShopRegistration from '../../Backend/shopRegistration/shopRegistration';
import ShopLike from '../../Backend/shopLike/shopLike';
import ShopForgetPassword from '../../Backend/shopForgetPassword/shopForgetPassword';
import ModalAutorization from './../../Backend/modalAutorization/modalAutorization'
import Mobile from './../../Backend/shopMobile/Mobile'


class ShopNav extends Component  {


    // name: 'app',
    // components: {
    //     mdbFilter,
    // },

    state = {
        collapseID: '',
        isCartModalOpened: false,
        isCartLikeModalOpened: false,
        isCartCircleModalOpened: false,
        isLoginModalOpened: false,
        modalBody: 'authorization', // registration
        modalTitle: 'Авторизація',
        showProfileMenu: true,
        isSearchModalOpened: false,

    }


    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ''
        }));
    }


    cartLikeModalToggle = () => {
        this.setState({
            isCartLikeModalOpened: !this.state.isCartLikeModalOpened
        });
    }

    cartModalToggle = () => {
        this.setState({
            isCartModalOpened: !this.state.isCartModalOpened
        });
    }


    loginModalToggle = () => {
        if(this.props.appState.user && !this.state.isLoginModalOpened) return false
        this.setState({
            isLoginModalOpened: !this.state.isLoginModalOpened
        });
    }


    cartModalToggle = () => {
        this.setState({
            isCartModalOpened: !this.state.isCartModalOpened
        });
    }


    cartCirclesModalToggle = () => {
        this.setState({
            isCartCirclesModalOpened: !this.state.isCartCirclesModalOpened
        });
    }


    changeModalBody = (where_to_go) => {
        this.setState({modalBody: where_to_go})

        if (where_to_go === 'authorization') {
            this.setState({modalTitle: 'Авторизація'})
        }else if(where_to_go === 'registration'){
            this.setState({modalTitle: 'Реєстрація'})
        }else if(where_to_go === 'forgetpassword'){
            this.setState({modalTitle: 'Забули пароль'})
       }
    }


    modalBody = () => {
        if (this.state.modalBody === 'authorization') {
            return <ShopAutorization changeModalBody={this.changeModalBody}
                                     loginModalToggle={this.loginModalToggle}
                                     appState={this.props.appState}
                                     setUserData={this.props.setUserData} />
        }else if(this.state.modalBody === 'registration'){
            return <ShopRegistration changeModalBody={this.changeModalBody}
                                     loginModalToggle={this.loginModalToggle}
                                     appState={this.props.appState}
                                     setUserData={this.props.setUserData} />
        }else if(this.state.modalBody === 'forgetpassword'){
            return <ShopForgetPassword changeModalBody={this.changeModalBody}
                                     loginModalToggle={this.loginModalToggle}
                                     appState={this.props.appState}
                                     setUserData={this.props.setUserData} />
        }else if(this.state.modalBody === 'successRgistration'){
            return <div>Ви успішно зареєструвалися!</div>
        }else{
            return <div>Виникла помилка!</div>
        }
    }


    logout = () => { //
        localStorage.removeItem('token') // удаляем данные из localStorage
        // localStorage.removeItem('user') // удаляем данные из localStorage
        // this.props.setUserData({user:'', token:''}) // удаляем данные из App.state

        window.location.reload();
    }


    profileMenu = () => {

        if (this.state.auth) { // если пользователь авторизован
            return (
                <React.Fragment>
                        <ul className="profile-menu p-3 z-depth-5">
                            <li><Link to="/shopAccount" className='pm-link font-weight-bold'>Профіль</Link></li>
                            <li><Link to="/myOrders" className='pm-link'>Замовлення</Link></li>
                            <li><Link to="/thatLike" className='pm-link'>Сподобалось</Link></li>
                            <li><Link to="/haveSeen" className='pm-link'>Переглянуті</Link></li>
                            <li onClick={this.logout}><Link className='pm-link white-ic'>Вихід</Link></li>
                        </ul>
                </React.Fragment>
            )
        }

    }

    profileName = () => {
        let user = this.props.appState.user
        if(user) {
            let hello = `${user.name}`
            return (
                <React.Fragment>{/*  */}
                    <p className='p-0 m-0' style={{color: 'white'}}>{hello}</p>
                </React.Fragment>
            )
        }
    }



    searchHandleToggle = () => {
        this.setState( {
            isSearchModalOpened: !this.state.isSearchModalOpened
        })
    }


    // componentDidMount(props) {
    //     // cl(this.props)
    //
    //     const fd = new FormData();
    //
    //     fd.append('token', localStorage.getItem('token'));
    //
    //     const url = 'http://storeyvonne.com/auth.php';
    //
    //     fetch(url, {
    //         method: 'POST', // или 'PUT'
    //         body: fd
    //     })
    //     .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //
    //             if(data.email && data.token)
    //                 this.setState({auth: true});
    //         })
    //
    //
    //
    // }


    render() {
        return (
            <div>
                <div className='shop-nav-first h-100'>
                        <MDBNavbar expand='md' scrolling fixed='top' className='navbar-bg p-0 p white'>
                            <div className='container'>
                                <MDBNavbarNav left className='p-2'>
                                    <MDBNavItem active>
                                        <Link to='/'  className='nav-text white-text text-decoration-none d-inline p-4 pl-lg-2 p-md-0 pr-md-2 font-weight-normal'>Головна</Link>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <Link to='/shopAboutShop' className='nav-text white-text text-decoration-none d-inline p-3 p-md-0 pr-md-2 font-weight-normal pl-lg-2'>Про магазин</Link>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <Link to='/shopContacts' className='nav-text white-text text-decoration-none d-inline p-3 p-md-0 pr-md-2 font-weight-normal pl-lg-3'>Контакти</Link>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                                <p className='nav-text adr white-text text-decoration-none d-inline pt-3 p-3 m-0 pr-md-2 font-weight-normal font-small font-weight-lighter'>
                                    <a href='tel:+380735005533' className='tell white-ic font-weight-bold'> +38 073 500 55 33 </a>
                                </p>
                                <p className='nav-text adr white-text text-decoration-none d-inline pt-3 p-3 m-0 font-weight-normal font-small font-weight-lighter'>
                                    <a href='tel:+380935005533' className='tell white-ic font-weight-bold'> +38 093 500 55 33 </a>
                                </p>
                                {/*<p className='nav-text adr white-text text-decoration-none d-inline pt-3 p-3 m-0 font-weight-normal font-small font-weight-lighter'>вул.*/}
                                {/*    <a href='https://goo.gl/maps/bzk1W5AZCec4QVR89' className='white-ic'> Данченко 32, м. Київ </a>*/}
                                {/*    </p>*/}
                                <MDBNavbarNav right className='nav-hidden'>
                                    <MDBNavItem className='w-25 d-inline px-3 py-3 pt-2 pb-2 white-text'>
                                        <a href='https://www.facebook.com/yvonnemultibrands/?modal=suggested_action&notif_id=1606398322385544&notif_t=page_user_activity&ref=notif'   className='white-ic icon'>
                                            <MDBIcon fab icon='facebook-f'/>
                                        </a>
                                    </MDBNavItem>
                                    <MDBNavItem className='w-25 d-inline px-3 py-3 pt-2 pb-2 white-text'>
                                        <a href='https://www.instagram.com/yvonnemultibrands/' className='white-ic icon'>
                                            <MDBIcon fab icon='instagram'/>
                                        </a>
                                    </MDBNavItem>
                                    <MDBNavItem className='w-25 d-inline px-3 py-3 pt-2 pb-2 white-text'>
                                        <Link to='/writetous' className='icon'>
                                            <a className='white-ic icon'>
                                                 <MDBIcon far icon='envelope' className='white-ic icon'/>
                                            </a>
                                        </Link>
                                    </MDBNavItem>
                                    <div className='w-100 profile-menu-block'>
                                        <div>
                                            {!this.state.auth ?
                                                <button onClick={this.loginModalToggle}
                                                        className='w-100 d-inline p-3 pr-md-2 pl-md-1 pt-2 pb-2 white-text btn-circle bg-transparent'>
                                                    <MDBIcon icon='user-circle' className='border-left pl-3 pr-0 pt-0'/>
                                                </button> :
                                                <button
                                                    className='w-100 d-inline p-3 pr-md-2 pl-md-1 pt-2 pb-2 white-text btn-circle bg-transparent'>
                                                    <MDBIcon icon='user-circle' className='border-left pl-3 pr-0 pt-0'/>
                                                </button>
                                            }
                                            <MDBModal className='z-depth-0 modal-autorization justify-content-center mx-auto mt-4' isOpen={this.state.isLoginModalOpened}
                                                      toggle={this.loginModalToggle}>
                                                <MDBModalHeader className='text-center justify-content-center mt-3 mb-0'>{this.state.modalTitle}
                                                    <MDBBtn className='btn-aut m-2 p-2 border-0 position-absolute z-depth-0' color="secondary"
                                                            onClick={this.loginModalToggle}><i className="fas fa-times mr-2"></i></MDBBtn>


                                                </MDBModalHeader>
                                                <MDBModalBody className='h-100 modal-body z-depth-0'>
                                                    {this.modalBody()}
                                                </MDBModalBody>
                                            </MDBModal>
                                        </div>
                                        <div className='position-absolute profile-menu-info' id='pm-info'>
                                            <div className='pr-menu-link'>
                                                  {this.profileMenu()}
                                            </div>
                                        </div>
                                    </div>
                                </MDBNavbarNav>
                                <div>{this.profileName()}</div>
                            </div>
                        </MDBNavbar>
                </div>
    {/*mobile-version*/}
                <div className='shop-nav-second'>
                    <MDBContainer className='m-auto w-100'>
                        <MDBNavbar
                            className='z-depth-0 w-100 pt-sm-0 pt-md-2 pb-sm-0 pb-md-0 pt-0 pb-0 px-0'
                        >
                            <MDBContainer className='m-0 justify-content-center w-100'>
                                <MDBNavbarToggler
                                    className='bg-transparent'
                                    onClick={this.toggleCollapse('navbarCollapse1')}
                                />
                                <MDBNavbarNav right className=' nav-hidden d-inline-block px-xl-0 px-lg-3 px-md-0 m-0'>
                                            <a href='https://www.facebook.com/yvonnemultibrands' className='d-inline-flex pl-2 pr-2 pt-0 pb-0 pl-sm-2 pr-sm-3 pt-sm-2 pb-sm-2 pr-md-4 pl-md-2 white-text nav-icon'>
                                                <MDBIcon fab icon='facebook-f' className=' fb-icon'/>
                                            </a>
                                            <a href='https://www.instagram.com/yvonnemultibrands/' className=' d-inline pl-2 pr-2 pt-0 pb-0  pl-sm-2 pr-sm-3 pt-sm-2 pb-sm-2 pr-md-4 pl-md-2 white-text nav-icon'>
                                                <MDBIcon fab icon='instagram' className=' insta-icon'/>
                                            </a>
                                            <Link to='/writetous'>
                                                <MDBIcon far icon='envelope' className='pt-2 pl-2 email-icon white-ic'/>
                                            </Link>
                         {/*окно авторизации*/}
                                             <div className='profile-menu-block m-0 d-inline'>
                                                 <button onClick={this.loginModalToggle} className='btn-circle bg-transparent d-inline  white-text'>
                                                     <MDBIcon icon='user-circle'  className=' border-left px-3 pt-0'/>
                                                 </button>
                                                 <ModalAutorization />
                                                <MDBModal className='z-depth-0 w-100 py-5 modal-autorization justify-content-center mx-auto' isOpen={this.state.isLoginModalOpened} toggle={this. loginModalToggle} >
                                                    <MDBModalHeader className='text-center justify-content-center  my-0 my-sm-3'>{this.state.modalTitle}
                                                        <MDBBtn className='btn-aut m-2 p-2 border-0 position-absolute z-depth-0' color="secondary" onClick={this.loginModalToggle}><i className="fas fa-times mr-2"></i></MDBBtn>
                                                    </MDBModalHeader>
                                                    <MDBModalBody className='h-100 modal-body z-depth-0 p-0'>
                                                        {this.modalBody()}
                                                    </MDBModalBody>
                                                </MDBModal>
                                             </div>
                                    <div className='position-absolute profile-menu-info'>
                                    {this.profileMenu()}
                                    </div>
                                </MDBNavbarNav>
                                <MDBCollapse
                                    id='navbarCollapse1'
                                    isOpen={this.state.collapseID}
                                    navbar
                                    className='shop-nav-navbar'
                                >
                                    <MDBNavbarNav left className='d-block py-1'>
                                        <MDBNavItem active>
                                            <MDBNavLink onClick={this.toggleCollapse('navbarCollapse1')} to='/' exact className='pl-3 p-0 font-weight-normal text-white tgl-item'>Головна</MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink onClick={this.toggleCollapse('navbarCollapse1')} to='/shopAboutShop' className='pl-3 p-0 font-weight-normal text-white tgl-item'>Про магазин</MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink onClick={this.toggleCollapse('navbarCollapse1')} to='/shopContacts' className='pl-3 p-0 font-weight-normal text-white tgl-item'>Контакти</MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink onClick={this.toggleCollapse('navbarCollapse1')} to='#!' className='pl-3 p-0 font-weight-normal text-white tgl-item'>До салону краси</MDBNavLink>
                                        </MDBNavItem>
                                    </MDBNavbarNav>
                                </MDBCollapse>
                            </MDBContainer>
                        </MDBNavbar>
                    </MDBContainer>
                    <div>
                        <Mobile />
                    </div>
                </div>
            </div>
        )
    }
}

export default ShopNav;