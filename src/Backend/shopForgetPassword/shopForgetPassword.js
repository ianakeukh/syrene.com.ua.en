import React from 'react';
import {Component} from 'react';
import '../shopAutorization/shopAutorization.css'



class ShopForgetPassword extends Component  {

    state = {
        email: '',
        form: {
            email: '',
            password: 'password',
            remember: true,
            device_name: 'chrome'
        },
        alert: '',
    }

    componentDidUpdate() {
        console.log(this.state.email);
    }

    changeEmailHandler = (event) => {
        let formData = {...this.state.form}
        formData.email = event.target.value
        this.setState({form: formData})
    }

    changePasswordHandler = (event) => {
        let formData = {...this.state.form}
        formData.password = event.target.value
        this.setState({form: formData})
    }

    rememberInputChange = () => {
        let formData = {...this.state.form}
        formData.remember = !this.state.form.remember
        this.setState({form: formData})
    }

    submitForgot(e)
    {
        e.preventDefault();

        const url = 'http://storeyvonne.com/forgot.php';

        const fd = new FormData();
        fd.append('email', this.state.email);

        fetch(url, {
            method: 'post',
            body: fd
        })
            .then(res => res.text())
            .then(data => {
                if(data == 'ok')
                    this.setState({alert: 'Send link to email'});
                else
                    this.setState({alert: 'this email not found'});
            });

    }


    goToRegistration = () => {
        this.props.changeModalBody('registration')
    }

    render() {
        return (
            <div>
                <div className='w-100'>
                    <div className='m-0'>
                        <div className='card z-depth-0 border-0'>
                            <form className='text-center px-5 pb-5 pt-3' action="#!" onSubmit={ (e) => this.submitForgot(e) }>
                                <input  value={this.state.email} onChange={ (e) => this.setState({email: e.target.value})} type='email' className="form-control mb-4 form-reg" placeholder="Email" />

                                <p>{ this.state.alert }</p>

                                <button onClick={this.loginSubmit} className="btn btn-reg font-weight-bold my-4 w-100" >Get password</button>
                                <p>You are not registered yet
                                    <a href="#" onClick={ () => this.goToRegistration() } className='pl-3' >Register</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}





export default ShopForgetPassword;