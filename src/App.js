
import React from 'react';
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import ShopNav from '../src/Components/shopNav/shopNav'
import ShopTop from '../src/Components/shopTop/shopTop'
import ShopSlider from '../src/Components/shopSlider/shopSlider'
import ShopBrands from '../src/Components/shopBrands/shopBrands'
import ShopProducts from '../src/Components/shopProducts/shopProducts'
import ShopFooter from '../src/Components/shopFooter/shopFooter'

import ShopAboutShop from '../src/Components/shopNav/shopAboutShop/shopAboutShop';
import ShopContacts from '../src/Components/shopNav/shopContacts/shopContacts';
import ShopCertification from './Components/shopNav/shopCertification/shopCertification'



import ShopAutorization from '../src/Backend/shopAutorization/shopAutorization';
import ShopRegistration from '../src/Backend/shopRegistration/shopRegistration';
import ShopAccount from './Backend/shopAccount/shopAccount';
import Writetous from './Backend/writretous/writetous';
import Mobile from './Backend/shopMobile/Mobile';
// import ShopLike from '../src/Backend/shopLike/shopLike';
import ShopOrder from '../src/Backend/shopOrder/shopOrder';
import Congratulation from './Backend/shopOrder/CARD/Congratulation';

import ShopMobileUpload from '../src/Backend/shopMobileUpload/shopMobileUpload';
// import ShopCallMe from '../src/Backend/shopCallMe/shopCallMe';


import Details from './Components/shopProducts/ITEMS/Davines/Item/Details';

import {Component} from 'react';


class App extends Component  {


    state = {
        token: '',
        user: '', //1. Получаем пользователя
        cart: {
            id:'',
            products:[],
        },
    }

    // setUserData = (data) => {
    //     this.setState(data)
    // }

    componentDidMount() {
      const token = localStorage.getItem('token');
      const user = JSON.parse(localStorage.getItem('user'));
      this.setState({ user, token });


        console.log('ok');

        // fetch('http://storeyvonne.com/products.php',
        //     {
        //         method: 'post'
        //     })


        fetch('/backend/products.php',
            {
                method: 'post'
            }).then(res => res.json()).then(data => {
            console.log(data)

            this.setState({products: data})

        });

    }
    
    render(){
        return (
            <Router>
                <ShopNav appState={this.state} setUserData={this.setUserData}/>
                <ShopTop appState={this.state} setUserData={this.setUserData}/>
                <ShopSlider />
                <Switch>
                    <Route path='/' exact>
                        <ShopProducts appState={this.state} setUserData={this.setUserData}  />
                    </Route>
                    <Route path='/shopAboutShop'>
                        <ShopAboutShop />
                    </Route>
                    <Route path='/shopAccount'>
                        <ShopAccount appState={this.state} setUserData={this.setUserData} tabIndex="1" />
                    </Route>
                    <Route path='/myOrders'>
                        <ShopAccount appState={this.state} setUserData={this.setUserData} tabIndex="2" />
                    </Route>
                    <Route path='/thatLike'>
                        <ShopAccount appState={this.state} setUserData={this.setUserData} tabIndex="3" />
                    </Route>
                    <Route path='/haveSeen'>
                        <ShopAccount appState={this.state} setUserData={this.setUserData} tabIndex="4" />
                    </Route>
                    <Route path='/shopContacts'>
                        <ShopContacts />
                    </Route>
                    <Route path='/shopOrder'>
                        <ShopOrder />
                    </Route>
                    <Route path='/congratulation'>
                        <Congratulation />
                    </Route>
                    <Route path='/shopJob'>
                        <ShopCertification />
                    </Route>
                    <Route path='/shopAutorization'>
                        <ShopAutorization />
                    </Route>
                    <Route path='/shopRegistration'>
                        <ShopRegistration />
                    </Route>
                    <Route path='/shopMobileUpload'>
                       <ShopMobileUpload />
                    </Route>
                    <Route path='/details/:id'>
                        <Details />
                    </Route>

                    <Route path='/shampoo'>
                        <ShopProducts appState={this.state} setUserData={this.setUserData} />
                    </Route>
                    <Route path='/conditioner'>
                        <ShopProducts appState={this.state} setUserData={this.setUserData} />
                    </Route>
                    <Route path='/mask'>
                        <ShopProducts appState={this.state} setUserData={this.setUserData} />
                    </Route>
                    <Route path='/styling'>
                        <ShopProducts appState={this.state} setUserData={this.setUserData} />
                    </Route>
                    <Route path='/oil'>
                        <ShopProducts appState={this.state} setUserData={this.setUserData} />
                    </Route>
                    <Route path='/protection'>
                        <ShopProducts appState={this.state} setUserData={this.setUserData} />
                    </Route>

                    <Route path='/farmavita'>
                        <ShopProducts appState={this.state} setUserData={this.setUserData} />
                    </Route>
                    <Route path='/davines'>
                        <ShopProducts appState={this.state} setUserData={this.setUserData} />
                    </Route>
                    <Route path='/joico'>
                        <ShopProducts appState={this.state} setUserData={this.setUserData} />
                    </Route>
                    <Route path='/profystyle'>
                        <ShopProducts appState={this.state} setUserData={this.setUserData} />
                    </Route>
                    <Route path='/felps'>
                        <ShopProducts appState={this.state} setUserData={this.setUserData} />
                    </Route>
                    <Route path='/schwarzkopf'>
                        <ShopProducts appState={this.state} setUserData={this.setUserData} />
                    </Route>



                    {/*<Route path='/brand/:brand'>*/}
                    {/*    <ShopProducts appState={this.state} setUserData={this.setUserData} />*/}
                    {/*</Route>*/}
                    <Route path='/writetous'>
                        <Writetous />
                    </Route>
                    <Route path='/mobile'>
                        <Mobile />
                    </Route>
                </Switch>
                <ShopFooter/>
                {/*<ShopAccount />*/}
            </Router>
      );
    }
}

export default App;
