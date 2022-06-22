import React from 'react';

// import 'react-credit-cards/es/styles-compiled.css';

class LIQPAY extends React.Component {

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
                    <div className="row py-3 justify-content-center m-auto">
                        <div className="panel-item col-xs-5 col-sm-6 col-md-6 col-lg-5 col-xl-4 col-6 z-depth-2 pb-5 pt-3 px-4 rgba-white-strong">
                            <div className="panel panel-default ">
                                <div className="panel-heading">
                                    <h2 className="panel-name green-text text-left green-text font-weight-bold pb-0 mb-0">
                                        <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/000000/external-google-pay-is-the-fast-simple-way-to-pay-online-in-stores-and-more-logo-shadow-tal-revivo.png"/>
                                    </h2>
                                    <div className='payment-form pt-0' id="PaymentForm">
                                        <div
                                            number={this.state.number}
                                            cvc={this.state.cvc}
                                            expiry={this.state.expiry}
                                            focused={this.state.focused}
                                            name={this.state.name}
                                            styles={{width: '15px'}}
                                        />
                                        <form>
                                            <div className="form-group mb-1">
                                                <label htmlFor="cardNumber" className='pt-0 pb-0 mb-1'>CARD NUMBER</label>
                                                <input className="order w-100 m-auto justify-content-center "
                                                       id="cardNumber"
                                                       type="tel"
                                                       pattern="[0-9\s]{13,19}"
                                                       autoComplete="cc-number" maxLength="19"
                                                       label="xxxx xxxx xxxx xxxx"
                                                       onChange={this.handleInputChange}
                                                       onFocus={this.handleInputFocus}
                                                />
                                            </div>
                                            <div className="d-inline-flex pt-2">
                                                <div className="col-5 col-md-7 col-sm-7 p-0">
                                                    <div className="form-group">
                                                        <label htmlFor="expityMonth" className='mb-1'>
                                                            EXPIRY DATE</label>
                                                        <div className='d-inline-flex'>
                                                            <div className="col-xs-5 col-lg-5 pl-ziro p-0 m-0">
                                                                <input type="text"
                                                                       className="w-100 order m-0"
                                                                       id="expityMonth"
                                                                       placeholder="MM"
                                                                       maxLength="2"
                                                                       label="XX"
                                                                       required
                                                                       onChange={this.handleInputChange}
                                                                       onFocus={this.handleInputFocus}
                                                                />
                                                            </div>
                                                            <div className="col-xs-5 col-lg-5 pl-ziro p-0 m-0 ml-3 mr-0">
                                                                <input type="text"
                                                                       className="w-100 order m-0"
                                                                       id="expityYear"
                                                                       placeholder="YY"
                                                                       maxLength="2"
                                                                       label="YY"
                                                                       required
                                                                       onChange={this.handleInputChange}
                                                                       onFocus={this.handleInputFocus}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-5 col-md-5 col-sm-4  pull-right p-0 ccv-code">
                                                    <div className="d-inline-flex flex-column">
                                                        <label htmlFor="cvCode" className='ml-3 mb-1'>
                                                            CV CODE</label>
                                                        <input type="text"
                                                               className="w-100 order m-0"
                                                               id="cvCode"
                                                               placeholder="CVV2" required
                                                               onChange={this.handleInputChange}
                                                               onFocus={this.handleInputFocus}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <ul className="nav nav-pills nav-stacked d-inline-flex w-100 pb-3">
                                    <li className="text-left w-50">Final Payment:</li>
                                    <li className="text-right w-50">25<span> GBP</span></li>
                                </ul>
                                <br />
                                <form method="POST" className='w-100' action="https://www.liqpay.ua/api/3/checkout"
                                      accept-charset="utf-8">
                                    <input type="hidden" className="w-100" name="data" value="eyAidmVyc2lvbiIgOiAzLCAicHVibGljX2tleSIgOiAieW91cl9wdWJsaWNfa2V5IiwgImFjdGlvbiIgOiAicGF5IiwgImFtb3VudCIgOiAxLCAiY3VycmVuY3kiIDogIlVTRCIsICJkZXNjcmlwdGlvbiIgOiAiZGVzY3JpcHRpb24gdGV4dCIsICJvcmRlcl9pZCIgOiAib3JkZXJfaWRfMSIgfQ=="/>
                                    <input type="hidden" className='w-100' name="signature" value="QvJD5u9Fg55PCx/Hdz6lzWtYwcI="/>
                                    <a href="http://www.jquery2dotnet.com" className="btn btn-success btn-block font-weight-bolder" role="button">PAY</a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </p>
        )
    }
}

export default LIQPAY;