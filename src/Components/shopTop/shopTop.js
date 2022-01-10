import './../../Backend/shopLike/shopLike.css'
import ShopBin from '../../Backend/shopBin/shopBin';
import ShopLike from '../../Backend/shopLike/shopLike';



import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';
import './../shopNav/shopNav.css';
import './../../Backend/shopBin/shopBin.css';
import './shopTop.css';
import './../../Backend/shopOrder/shopOrder';


import {
    MDBModal,
    MDBModalHeader,
    MDBModalBody,
    MDBModalFooter,
    MDBIcon,
    MDBBtn,
    MDBCol,
} from 'mdbreact';
import Item from "../shopProducts/ITEMS/Davines/Item/Item";
let cl = console.log

class ShopTop extends Component {


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
        query: '',
        products: [],
        searchString: []
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


    cartCirclesModalToggle = () => {
        this.setState({
            isCartCirclesModalOpened: !this.state.isCartCirclesModalOpened
        });
    }


    changeModalBody = (where_to_go) => {
        this.setState({modalBody: where_to_go})

        if (where_to_go === 'authorization') {
            this.setState({modalTitle: 'Авторизація'})
        } else if (where_to_go === 'registration') {
            this.setState({modalTitle: 'Регистрація'})
        }
    }



    searchHandleToggle = () => {
        this.setState({
            isSearchModalOpened: !this.state.isSearchModalOpened
        })
    }




    handleInputChange = (event) => {
        this.setState({
            query: event.target.value
        },()=>{
            this.filterArray();
        })

    }

    getData = () => {

        // fetch(`http://storeyvonne.com/products.php`)

        fetch(`/backend/products.php`)
            .then(response => response.json())
            .then(responseData => {

                console.log('responseData: ', responseData);

                // console.log(responseData)
                // this.setState({
                //     products:responseData,
                //     searchString:responseData
                // })
            })
    }

    filterArray = () => {
        let searchString = this.state.query;
        let responseData = this.state.products;



        if(searchString.length > 0){
            responseData = responseData.filter(searchString);
            this.setState({
                responseData
            })
        }

    }

    componentWillMount() {
        this.getData();
    }


    render() {
        return (
            <div className='shop-bg-nav'>
                <div className='container m-auto justify-content-center px-0 h-100 py-2'>
                    <div className='w-100 d-block h-100'>
                      <div className='px-2 px-md-0 h-100'>
                          <div className='float-left py-1 py-sm-2'>

                              <img
                                  className='logo-bordo-gold'
                                  src={require('../../img/catalogue/three.png')}
                                  alt='fl1'
                              />
                          </div>
                        <div className='float-left py-0 py-sm-0'>

                                <img
                                    className='logo-bordo'
                                    src={require('../../img/catalogue/sirene-logo.png')}
                                    alt='fl1'
                                />
                        </div>
                          <div className='float-left py-1 py-sm-2 overflow-hidden'>

                              <img
                                  className='logo-bordo-flower-one overflow-hidden'
                                  src={require('../../img/catalogue/two.png')}
                                  alt='fl1'
                              />
                          </div>
                          <div className='float-left py-1 py-sm-2 overflow-hidden'>

                              <img
                                  className='logo-bordo-flower-two overflow-hidden'
                                  src={require('../../img/catalogue/two.png')}
                                  alt='fl1'
                              />
                          </div>
                          <div className='float-left py-1 py-sm-2 overflow-hidden'>

                              <img
                                  className='logo-bordo-flower-four overflow-hidden'
                                  src={require('../../img/catalogue/two.png')}
                                  alt='fl1'
                              />
                          </div>
                        <div className='float-right py-1 pt-sm-0 pt-md-4 pb-1'>
                            <div className='nav-block pt-2 pt-sm-3 pb-2 px-0 px-sm-1 px-md-2 px-lg-1'>

                {/*search*/}
                                <button onClick={this.searchHandleToggle}
                                        className='nav-block-btn float-right black-text m-auto  btn-bk p-1 bg-transparent border-0 float-left m-0 p-0 font-weight-bold w-responsive font-small w-100'>
                                    <i className="fas fa-search p-0 search-icon"></i>
                                </button>
                                <MDBModal className='pt-3 modal-bin mx-auto justify-content-center' isOpen={this.state.isSearchModalOpened} toggle={this.searchHandleToggle}>
                                    <MDBModalBody className='h-100 modal-body z-depth-0'>
                                        <MDBBtn className='btn-search m-2 p-2 border-0   z-depth-0 position-absolute float-right display-block'
                                                 color="secondary" onClick={this.searchHandleToggle}><i className="fas fa-times mr-2"></i>
                                        </MDBBtn>
                                        <div className="searchForm">
                                            <form
                                                className="bg-transparent form-inline d-inline-flex form-search  p-0 m-0 my-2 justify-content-center w-100">
                                                <input className="bg-transparent form-control form-control-sm w-75 input-search"
                                                       type="text"
                                                       placeholder="Search"
                                                       aria-label="Search"
                                                       id="filter"
                                                       onChange={this.handleInputChange}
                                                />
                                            </form>
                                            {/*<div>*/}
                                            {/*    {*/}
                                            {/*        this.state.responseData.map((i) =>*/}
                                            {/*            <p>{i.name}</p>*/}
                                            {/*        )*/}
                                            {/*    }*/}
                                            {/*</div>*/}
                                        </div>
                                    </MDBModalBody>
                                </MDBModal>


             {/*корзина*/}
                                <button onClick={this.cartModalToggle}
                                        className='nav-block-btn black-text m-auto  btn-bk p-1 bg-transparent border-0 float-left m-0 p-0 font-weight-bold w-responsive font-small w-100'>
                                    <i className="fas fa-cart-plus p-0"></i>
                                </button>
                                <MDBModal isOpen={this.state.isCartModalOpened} toggle={this.cartModalToggle}
                                          className='pt-3 modal-bin mx-auto justify-content-center'>
                                    <MDBModalHeader className='text-center justify-content-center my-0 my-sm-3'>Корзина
                                        <MDBBtn className='btn-x m-2 p-2 border-0   z-depth-0 position-absolute'
                                                color="secondary" onClick={this.cartModalToggle}><i className="fas fa-times mr-2"></i>
                                        </MDBBtn>
                                    </MDBModalHeader>
                                    <MDBModalBody className='border-0 h-100 modal-body px-4 mx-md-5 mx-sm-5 py-sm-5 py-3'>
                                        <ShopBin appState={this.props.appState} setUserData={this.props.setUserData}/>
                                    </MDBModalBody>
                                    <MDBModalFooter className='mx-0 mx-sm-5 p-0'>
                                        <MDBCol className='my-2 text-left order-price w-auto pr-0 w-100'><span
                                            className='font-weight-small font-smaller'>Разом до сплати:  <span
                                            className='font-weight-small'>{this.props.appState.cart.total_price}</span> грн</span></MDBCol>
                                        <div className='w-100 d-inline-flex flex-wrap m-0 justify-content-center'>
                                            <MDBBtn color="secondary" className='mb-2 mb-sm-0 mb-md-5 btn-pay'
                                                    onClick={this.cartModalToggle}>ЗАКРИТИ</MDBBtn>
                                            <Link to='/shopOrder'><MDBBtn color="primary" className='btn-pay mb-5'>ОФОРМИТИ
                                                ЗАМОВЛЕННЯ</MDBBtn>
                                            </Link>
                                        </div>
                                    </MDBModalFooter>
                                </MDBModal>

             {/*сподобалось*/}
                                <button onClick={this.cartLikeModalToggle}
                                        className='nav-block-btn  m-auto  black-text btn-bk m-1 p-1  bg-transparent border-0 p-0 font-weight-bold w-responsive w-100'>
                                    <MDBIcon className='heart-icon pr-0' icon='heart'/>
                                </button>
                                <MDBModal isOpen={this.state.isCartLikeModalOpened} toggle={this.cartLikeModalToggle}
                                          className='pt-3 mx-auto justify-content-center'>
                                    <MDBModalHeader className='text-center my-0 my-sm-3 justify-content-center'>Сподобалось
                                        <MDBBtn className='btn-s m-2 p-2 border-0 z-depth-0 position-absolute'
                                                color="secondary" onClick={this.cartLikeModalToggle}><i
                                            className="fas fa-times mr-2"></i></MDBBtn>
                                    </MDBModalHeader>
                                    <MDBModalBody className='h-100 modal-body px-4 mx-md-5 mx-sm-5 py-sm-5 py-3'>
                                        <ShopLike/>
                                    </MDBModalBody>
                                    <MDBModalFooter className='mx-0 mx-sm-5 p-0'>
                                        <div className='w-100 d-inline-flex flex-wrap m-0 justify-content-center'>
                                            <MDBBtn color="secondary" className='mb-2 mb-sm-0 mb-md-5 btn-pay'
                                                    onClick={this.cartLikeModalToggle}>ЗАКРИТИ</MDBBtn>
                                            <Link to='/shopOrder'>
                                                <MDBBtn color="primary" className='btn-pay mb-5'>ОФОРМИТИ
                                                    ЗАМОВЛЕННЯ</MDBBtn>
                                            </Link>
                                        </div>
                                    </MDBModalFooter>
                                </MDBModal>
                            </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default ShopTop;