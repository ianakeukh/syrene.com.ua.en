import {MDBBtn, MDBModal, MDBModalBody, MDBModalHeader} from "mdbreact";
import React, {Component} from "react";
import ShopAutorization from "../shopAutorization/shopAutorization";
import ShopRegistration from "../shopRegistration/shopRegistration";
import ShopForgetPassword from "../shopForgetPassword/shopForgetPassword";





class ModalAutorization extends Component {


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
        isSearchModalOpened: false
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
            this.setState({modalTitle: 'Authorization'})
        } else if (where_to_go === 'registration') {
            this.setState({modalTitle: 'Registration'})
        } else if (where_to_go === 'forgetpassword') {
            this.setState({modalTitle: 'Forgot password'})
        }
    }


    modalBody = () => {
        if (this.state.modalBody === 'authorization') {
            return <ShopAutorization
                changeModalBody={this.changeModalBody}
                loginModalToggle={this.loginModalToggle}/>
        } else if (this.state.modalBody === 'registration') {
            return <ShopRegistration
                changeModalBody={this.changeModalBody}
                loginModalToggle={this.loginModalToggle}/>
        } else if (this.state.modalBody === 'forgetpassword') {
            return <ShopForgetPassword
                changeModalBody={this.changeModalBody}
                loginModalToggle={this.loginModalToggle}/>
        } else if (this.state.modalBody === 'successRgistration') {
            return <div>You have been registrated!</div>
        } else {
            return <div>Error!</div>
        }
    }


    logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        this.setState({showProfileMenu: false})
    }


    profileMenu = () => {
        let user = localStorage.getItem('user', 1);
        if (user && this.state.showProfileMenu) {
            return (
                <ul className="profile-menu">
                    <li>Personal account</li>
                    <li>Orders</li>
                    <li>Preferences</li>
                    <li onClick={this.logout}>Log out</li>
                </ul>
            )
        } else {
            return false
        }
    }


    searchHandleToggle = () => {
        this.setState({
            isSearchModalOpened: !this.state.isSearchModalOpened
        })
    }


    render() {
        return (
            <div>
                <MDBModal className='z-depth-0 w-100 modal-autorization' isOpen={this.state.isLoginModalOpened}
                          toggle={this.loginModalToggle}>
                    <MDBModalHeader className='text-center justify-content-center mt-3 mb-0'>{this.state.modalTitle}
                        <MDBBtn className='btn-aut m-2 p-2 border-0 position-absolute z-depth-0' color="secondary"
                                onClick={this.loginModalToggle}><i className="fas fa-times mr-2"></i></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody className='h-100 modal-body z-depth-0'>
                        {this.modalBody()}
                    </MDBModalBody>
                </MDBModal>
                {this.profileMenu()}
            </div>
        )
    }
}


export default ModalAutorization;