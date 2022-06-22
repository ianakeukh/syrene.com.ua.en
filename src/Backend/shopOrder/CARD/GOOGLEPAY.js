import React from 'react';
// import Cards from 'react-credit-cards';
import './../shopOrder.css'

// import 'react-credit-cards/es/styles-compiled.css';


class GOOGLEPAY extends React.Component {

    state = {
        number: '',
        cvc: '',
        expiry: '',
        focused: '',
        name: ''
    }

    handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }


    render() {
        return (
            <p>
                <div className="container">
                    <div className="row py-3 justify-content-center m-auto px-3">
                        <div className="panel-item col-xs-5 col-sm-6 col-md-6 col-lg-5 col-xl-4 col-6 z-depth-2 py-5 px-4 rgba-white-strong">

                        </div>
                    </div>
                </div>
            </p>
        )
    }
}

export default GOOGLEPAY;