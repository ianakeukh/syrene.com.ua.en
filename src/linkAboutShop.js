import React from 'react';
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {  BrowserRouter as Router } from 'react-router-dom'


import ShopMobileUpload from '../src/Backend/shopMobileUpload/shopMobileUpload';
import ShopAutorization from '../src/Backend/shopAutorization/shopAutorization';
import ShopRegistration from '../src/Backend/shopRegistration/shopRegistration';

import ShopNav from '../src/Components/shopNav/shopNav'
import ShopSlider from '../src/Components/shopSlider/shopSlider'
import ShopBrands from '../src/Components/shopBrands/shopBrands'
import ShopProducts from '../src/Components/shopProducts/shopProducts'
import ShopFooter from '../src/Components/shopFooter/shopFooter'

import ShopAboutShop from '../src/Components/shopNav/shopAboutShop/shopAboutShop';
import ShopCallMe from '../src/Components/shopNav/shopCallMe/shopCallMe';
import ShopContacts from '../src/Components/shopNav/shopContacts/shopContacts';
import ShopBin from '../src/Backend/shopBin/shopBin';



function linkAboutShop() {
    return (
        <Router>
            {/*<ShopAutorization />*/}
            {/*/!*<ShopRegistration />*!/*/}
            {/*/!*<ShopMobileUpload />*!/*/}
            <ShopNav />
            <ShopSlider />
            <ShopBrands />
            <ShopAboutShop />
            <ShopFooter />
            {/*<ShopProducts />*/}
            {/*<ShopAboutShop />*/}
            {/*<ShopCallMe />*/}
            {/*<ShopContacts />*/}
            {/*<ShopBin />*/}
        </Router>
    );
}

export default LinkAboutShop;
