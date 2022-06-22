import React from 'react';
import {Component} from 'react';
import {
    MDBContainer,
    MDBNav,
    MDBNavItem,
    MDBNavLink,
    MDBTabPane,
    MDBTabContent,
    MDBCol,
    MDBRow,
    MDBBtn,

} from 'mdbreact';

import './shopAccount.css'
import ShopAutorization from '../shopAutorization/shopAutorization';
import {Link} from 'react-router-dom';

let cl = console.log

class ShopAccount extends Component {

    state = {
        items: {
            content: '',
            // contentCard: '1',
        },
        alertTab1: '',
        changePasswordError: '',
        passwordInputs:{
            old:'',
            new:'',
            confirm:'',
        },
        user: {
            name: '',
            last_name: '',
            phone: '',
            email: '',
            city: '',
            house: '',
            street: ''
        },
        Cart: [],
        Like: [],
        Seen: [],
    }

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



    componentDidMount() { // получение данных с сервера
        console.log(this.props)
        this.setState({user:this.props.appState.user});

        const Cart = JSON.parse(localStorage.getItem('cart'))

        if(Cart)
            this.setState({Cart: Cart});


        const Like = JSON.parse(localStorage.getItem('like'))

        if(Like)
            this.setState({Like: Like});

        const Seen = JSON.parse(localStorage.getItem('seen'))

        if(Seen)
            this.setState({Seen: Seen});

    }

    removeItem = (index) => {

        const Cart = [...this.state.Cart];

        Cart.splice(index, 1);

        this.setState({Cart: Cart});

        localStorage.setItem('cart', JSON.stringify((Cart)));
    }

    removeItemLike = (index) => {

        const Like = [...this.state.Like];

        Like.splice(index, 1);

        this.setState({Like: Like});

        localStorage.setItem('like', JSON.stringify((Like)));
    }

    removeItemSeen = (index) => {

        const Seen = [...this.state.Seen];

        Seen.splice(index, 1);

        this.setState({Seen: Seen});

        localStorage.setItem('like', JSON.stringify((Seen)));
    }

    componentDidUpdate(prevProps) { // получение новых пропсов
        if(prevProps.tabIndex !== this.props.tabIndex){
            let items = { ...this.state.items };
            items.content = this.props.tabIndex
            this.setState({items});
        }
    }

    changeInputHandler = (event) => {
        let userData = {...this.props.appState.user}
        userData[event.target.name] = event.target.value
        this.props.setUserData({user: userData})
    }

    changePasswordInputHandler = (event) => {
        let passwordInputs = {...this.state.passwordInputs}
        passwordInputs[event.target.name] = event.target.value
        this.setState({passwordInputs})
    }

    changePassword = () => {
        fetch('http://yvonne-server.loc/api/changePassword', {
            method: 'POST', // или 'PUT' 
            // body: new URLSearchParams(this.props.appState.user).toString(),
            body: JSON.stringify(this.state.passwordInputs),
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + this.props.appState.token
            }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            if (data.success && data.success === 'ok') {
                this.setState({passwordInputs:{old:'',new:'',confirm:''}})
                this.setState({changePasswordError:'Success'})
            }else{
                this.setState({changePasswordError:data.message})
            }
        });
    }

    saveUserData = () => {
        this.setState({alertTab1: ''})
        fetch('http://yvonne-server.loc/api/userUpdate', {
            method: 'POST', // или 'PUT' 
            // body: new URLSearchParams(this.props.appState.user).toString(),
            body: JSON.stringify(this.props.appState.user),
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + this.props.appState.token
            }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            if (data.success && data.success === 'ok') {
                this.setState({alertTab1: 'Дані збережено'})
                localStorage.setItem('user', JSON.stringify(data.user)); // объект user преобразовуем в строку (JSON.stringify)
            }else{
                this.setState({alertTab1: 'Error!'})
            }
        });
    }

    render() {
        let tabIndex = this.state.items.content || this.props.tabIndex || '1'
        let user = this.props.appState.user
        if (!localStorage.getItem('token')) {
            return (
                <React.Fragment>
                    <h1>Ви не авторизовані!</h1>
                    <div style={{'max-width':'350px',margin:'auto'}}>
                        <ShopAutorization changeModalBody={()=>{}}
                                     loginModalToggle={()=>{}}
                                     appState={this.props.appState}
                                     setUserData={this.props.setUserData} />
                        </div>
                </React.Fragment>
                )
        }else return (
            <MDBContainer className='pb-0 pb-sm-5'>
                <h4 className='h4-responsive text-center font-weight-bolder m-0 py-md-5 py-sm-5 py-4 py-xl-5 py-lg-5'>My account</h4>
                <MDBRow className='p-0 w-100 m-0'>
                    <MDBCol md="12" className='p-0 w-100'>
                        <MDBNav
                            pills
                            className="nav-justified pills-rounded pills-purple-gradient"
                        >
                            <MDBNavItem className='p-0'>
                                <MDBNavLink
                                    link
                                    to="#"
                                    active={tabIndex === "1"}
                                    onClick={this.togglePills("content", "1")}
                                    className='font-weight-bold black-text rgba-grey-light p-3 m-0 nav-links '
                                >
                                    PROFILE
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem className='p-0'>
                                <MDBNavLink
                                    link
                                    to="#"
                                    active={tabIndex === "2"}
                                    onClick={this.togglePills("content", "2")}
                                    className='font-weight-bold black-text rgba-grey-light p-3  m-0 nav-links'
                                >
                                    ORDER
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem className='p-0'>
                                <MDBNavLink
                                    link
                                    to="#"
                                    active={tabIndex === "3"}
                                    onClick={this.togglePills("content", "3")}
                                    className='font-weight-bold black-text rgba-grey-light p-3 nav-links'
                                >
                                    LIKE
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem className='p-0'>
                                <MDBNavLink
                                    link
                                    to="#"
                                    active={tabIndex === "4"}
                                    onClick={this.togglePills("content", "4")}
                                    className='font-weight-bold black-text rgba-grey-light p-3 nav-links'
                                >
                                    REVISED
                                </MDBNavLink>
                            </MDBNavItem>
                        </MDBNav>
                        <MDBTabContent activeItem={tabIndex}>
                            <MDBTabPane tabId="1" className='p-2'>
                                <p className='pt-3' style={{textAlign:'center',color:'green'}}>{this.state.alertTab1}</p>
                                <div className='py-0 py-sm-0 pb-3'>
                                    <h4 className='py-0'>Information</h4>
                                    <div col='12' className='d-inline-flex flex-wrap w-100 info-pain'>
                                        <div className='p-2 p-sm-3 col-12 col-sm-3'>
                                            <p>Nama</p>
                                            <p><input className='w-100' onChange={this.changeInputHandler} /></p>
                                        </div>
                                        <div className='p-2 p-sm-3 col-12 col-sm-3'>
                                            <p>Surname</p>
                                            <p><input className='w-100' onChange={this.changeInputHandler} name="last_name" /></p>
                                        </div>
                                        <div className='py-3 px-2 py-0 py-sm-0 px-sm-3 col-6 col-sm-3 d-block m-auto mr-0 float-right'>
                                            <button onClick={this.saveUserData} className='d-block m-auto border-0 p-2 mt-2 mb-2 my-sm-5 w-100 rgba-grey-light white-ic'>Зберегти</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='py-0 py-sm-3 pb-3'>
                                    <h4 className='py-3'>Contacts</h4>
                                    <div col='12' className='d-inline-flex flex-wrap  w-100 info-pain'>
                                        <div className='p-2 p-sm-3 col-12 col-sm-3'>
                                            <p>Mobile phone</p>
                                            <p><input className='w-100' onChange={this.changeInputHandler} name="phone" /></p>
                                        </div>
                                        <div className='p-2 p-sm-3 col-12 col-sm-3'>
                                            <p>Email</p>
                                            <p><input className='w-100' onChange={this.changeInputHandler} name="email"/></p>
                                        </div>
                                        <div className='py-3 px-2 py-0 py-sm-0 px-sm-3 col-6 col-sm-3 d-block m-auto float-right'>
                                            <button onClick={this.saveUserData} className='d-block m-auto float-right border-0 p-2 mt-2 mb-2 my-sm-5 w-100 rgba-grey-light white-ic'>Save</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='py-0 py-sm-3 pb-3'>
                                    <h4 className='py-3'>Shipment adress</h4>
                                    <div col='12' className='d-inline-flex flex-wrap  w-100 info-pain'>
                                        <div className='p-2 p-sm-3 col-12 col-sm-3'>
                                            <p>Phone</p>
                                            <p><input className='w-100' onChange={this.changeInputHandler} name="phone"/></p>
                                        </div>
                                        <div className='p-2 p-sm-3 col-12 col-sm-3'>
                                            <p>Email</p>
                                            <p><input className='w-100' onChange={this.changeInputHandler} name="email"/></p>
                                        </div>
                                    </div>
                                </div>
                                <div className='py-0 py-sm-3 pb-3'>
                                    <h4 className='py-3 m-0'>Change password</h4>
                                    <p style={{color:'red'}}>{this.state.changePasswordError}</p>
                                    <div col='12' className='d-inline-flex flex-wrap w-100 info-pain'>
                                        <div className='p-2 p-sm-3 col-12 col-sm-3'>
                                            <p>Old password</p>
                                            <p><input className='w-100'  type="password" onChange={this.changePasswordInputHandler} name="old" value={this.state.passwordInputs.old}/></p>
                                        </div>
                                        <div className='p-2 p-sm-3 col-12 col-sm-3'>
                                            <p>New password</p>
                                            <p><input className='w-100' type="password" onChange={this.changePasswordInputHandler} name="new" value={this.state.passwordInputs.new}/></p>
                                        </div>
                                        <div className='p-2 p-sm-3 col-12 col-sm-3'>
                                            <p>New password</p>
                                            <p><input className='w-100' type="password" onChange={this.changePasswordInputHandler} name="confirm" value={this.state.passwordInputs.confirm}/></p>
                                        </div>
                                        <div className='py-3 px-2 py-0 py-sm-0 px-sm-3 col-6 col-sm-3 d-block m-auto float-right'>
                                            <button onClick={this.saveUserData} className='d-block m-auto float-right border-0 p-2 mt-2 mb-2 my-sm-5 w-100 rgba-grey-light white-ic'>Змінити</button>
                                        </div>
                                    </div>
                                </div>
                            </MDBTabPane>
                            <MDBTabPane tabId="2" className='p-2'>
                                        <div className='py-3'>
                                            <h4 className='py-3'>Your order:</h4>
                                            <div col='12' className='d-inline-flex w-100 info-pain'>
                                                <div className="form-input d-inline-flex w-100 py-4 w-responsive p-3">
                                                    <div className='bg-white h-100 border-0'>
                                                        { this.state.Cart.length ?
                                                            <>
                                                                {this.state.Cart.map((product, index)=>(
                                                                    <div className="form-input d-inline-flex flex-sm-wrap-reverse flex-wrap w-100 py-4 w-responsive">
                                                                        <MDBCol className='col-4 col-sm-2 p-0 m-0'>
                                                                            <img src={`http://storeyvonne.com/upload/${product.image}`} className="img-fluid w-100" alt="Responsive" />
                                                                        </MDBCol>
                                                                        <MDBCol className='mx-1 col-7 col-sm-5 col-md-6 col-lg-6 col-xl-6 font-smaller px-xl-3 px-lg-3 px-md-3 px-sm-3 px-1'>
                                                                            <p className='order-item px-2'>{product.title}</p>
                                                                        </MDBCol>
                                                                        <MDBCol className='col-3 col-sm-1 p-1 py-3 mx-0'>
                                                                            <form className=''>
                                                                                <input className='input-q' type='number' min='1' value={product.count}></input>
                                                                            </form>
                                                                        </MDBCol>
                                                                        <MDBCol className='col-5 col-md-2 col-sm-3 px-3 py-1 mx-0'>
                                                                            <p className='px-lg-2 px-xl-2 px-md-0 px-sm-2 px-2 py-3'>{product.price}<span> GBP</span></p>
                                                                            <p className='px-lg-2 px-xl-2 px-md-0 px-sm-2 px-2 py-3'>{product.price * product.count}<span> GBP</span></p>
                                                                        </MDBCol>
                                                                        <MDBCol className='col-like p-1 py-2'>
                                                                            <button onClick={() => this.removeItem(index)} type="button" className="px-3 px-md-1 px-xl-3 px-lg-3 px-0 btn btn-m m-0 text-center bg-transparent border-0 z-depth-0 button-like">
                                                                                <i className="fas fa-times pr-0"></i>
                                                                            </button>
                                                                        </MDBCol>
                                                                    </div>
                                                                ))}
                                                            </>
                                                            :
                                                            <h1 className="text-center font-small">Basket empty!</h1>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='shop-bin'>
                                                <Link to='/shopOrder'><MDBBtn color="primary" className='btn-pay'>Place an order</MDBBtn>
                                                </Link>
                                            </div>
                                        </div>
                            </MDBTabPane>
                            <MDBTabPane tabId="3" className='p-2'>
                                <div className='py-3'>
                                    <h4 className='py-3'>Preferences:</h4>
                                    <div col='12' className='d-inline-flex w-100 info-pain'>
                                        <div className="form-input d-inline-flex w-100 py-4 w-responsive p-3">
                                            <div className='bg-white h-100 border-0'>
                                            { this.state.Like.length ?
                                            <>
                                                <form>
                                                    <label htmlFor="defaultFormCardNameEx" className="bin-label grey-text font-weight-light mb-1 pl-3">
                                                        Products
                                                    </label>
                                                </form>
                                                {this.state.Like.map((product, index)=>(
                                                    <div className="form-input d-inline-flex flex-sm-wrap-reverse flex-wrap w-100 py-4 w-responsive">
                                                        <MDBCol className='col-4 col-sm-2 p-0 m-0'>
                                                            <img src={`http://storeyvonne.com/upload/${product.image}`} className="img-fluid w-100" alt="Responsive" />
                                                        </MDBCol>
                                                        <MDBCol className='mx-1 col-7 col-sm-5 col-md-6 col-lg-6 col-xl-6 font-smaller px-xl-3 px-lg-3 px-md-3 px-sm-3 px-1'>
                                                            <p className='order-item px-2'>{product.title}</p>
                                                        </MDBCol>
                                                        <MDBCol className='col-3 col-sm-1 p-1 py-3 mx-0'>
                                                            <form className=''>
                                                                <input className='input-q' type='number' min='1' value={product.count}></input>
                                                            </form>
                                                        </MDBCol>
                                                        <MDBCol className='col-5 col-md-2 col-sm-3 px-3 py-1 mx-0'>
                                                            <p className='px-lg-2 px-xl-2 px-md-0 px-sm-2 px-2 py-3'>{product.price}<span> GBP</span></p>
                                                            <p className='px-lg-2 px-xl-2 px-md-0 px-sm-2 px-2 py-3'>{product.price * product.count}<span> GBP</span></p>
                                                        </MDBCol>
                                                        <MDBCol className='col-like p-1 py-2'>
                                                            <button onClick={() => this.removeItemLike(index)} type="button" className="px-3 px-md-1 px-xl-3 px-lg-3 px-0 btn btn-m m-0 text-center bg-transparent border-0 z-depth-0 button-like">
                                                                <i className="fas fa-times pr-0"></i>
                                                            </button>
                                                        </MDBCol>
                                                    </div>
                                                ))}
                                            </>
                                            :
                                            <h1 className="text-center font-small">Basket empty!</h1>
                                        }
                                       </div>
                                      </div>
                                    </div>
                                    <div className='shop-bin'>
                                        <Link to='/shopOrder'><MDBBtn color="primary" className='btn-pay'>PLACE AN ORDER</MDBBtn>
                                        </Link>
                                    </div>
                                </div>
                            </MDBTabPane>
                            <MDBTabPane tabId="4" className='p-2'>
                                <div className='py-3'>
                                    <h4 className='py-3'>You have viewed the following products:</h4>
                                    <div col='12' className='d-inline-flex w-100 info-pain'>
                                        <div className="form-input d-inline-flex w-100 py-4 w-responsive p-3">
                                            <div className='bg-white h-100 border-0'>
                                                { this.state.Seen.length ?
                                                    <>
                                                        <form>
                                                            <label htmlFor="defaultFormCardNameEx" className="bin-label grey-text font-weight-light mb-1 pl-3">
                                                                Products
                                                            </label>
                                                        </form>
                                                        {this.state.Seen.map((product, index)=>(
                                                            <div className="form-input d-inline-flex flex-sm-wrap-reverse flex-wrap w-100 py-4 w-responsive">
                                                                <MDBCol className='col-4 col-sm-2 p-0 m-0'>
                                                                    <img src={`http://storeyvonne.com/upload/${product.image}`} className="img-fluid w-100" alt="Responsive" />
                                                                </MDBCol>
                                                                <MDBCol className='mx-1 col-7 col-sm-5 col-md-6 col-lg-6 col-xl-6 font-smaller px-xl-3 px-lg-3 px-md-3 px-sm-3 px-1'>
                                                                    <p className='order-item px-2'>{product.title}</p>
                                                                </MDBCol>
                                                                <MDBCol className='col-3 col-sm-1 p-1 py-3 mx-0'>
                                                                    <form className=''>
                                                                        <input className='input-q' type='number' min='1' value={product.count}></input>
                                                                    </form>
                                                                </MDBCol>
                                                                <MDBCol className='col-5 col-md-2 col-sm-3 px-3 py-1 mx-0'>
                                                                    <p className='px-lg-2 px-xl-2 px-md-0 px-sm-2 px-2 py-3'>{product.price}<span>грн</span></p>
                                                                    <p className='px-lg-2 px-xl-2 px-md-0 px-sm-2 px-2 py-3'>{product.price * product.count}<span>грн</span></p>
                                                                </MDBCol>
                                                                <MDBCol className='col-like p-1 py-2'>
                                                                    <button onClick={() => this.removeItemSeen(index)} type="button" className="px-3 px-md-1 px-xl-3 px-lg-3 px-0 btn btn-m m-0 text-center bg-transparent border-0 z-depth-0 button-like">
                                                                        <i className="fas fa-times pr-0"></i>
                                                                    </button>
                                                                </MDBCol>
                                                            </div>
                                                        ))}
                                                    </>
                                                    :
                                                    <h1 className="text-center font-small">Basket empty!</h1>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className='shop-bin'>
                                        <Link to='/shopOrder'><MDBBtn color="primary" className='btn-pay'>Place an order</MDBBtn>
                                        </Link>
                                    </div>
                                </div>
                            </MDBTabPane>
                        </MDBTabContent>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}

export default ShopAccount;