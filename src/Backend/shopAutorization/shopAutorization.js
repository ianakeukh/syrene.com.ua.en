import React from 'react';
import {Component} from 'react';
import './shopAutorization.css';


const cl = console.log

function doLogin(_this){
     // const url = 'http://yvonne-server.loc/api/login'; // урл UserController->login
     //
     // fetch(url, {
     //    method: 'POST', // или 'PUT'
     //    body: new URLSearchParams(_this.state.form).toString(), // отправляем данные из формы
     //    headers: {
     //        // 'Content-Type': 'application/json'
     //         'Content-Type': 'application/x-www-form-urlencoded'
     //        }
     // }).then((response) => {
     //     return response.json();
     // }).then((data) => {
     //     if(data.success === 'ok') {
     //         _this.setState({alert:''}) // очищаем alert
     //         localStorage.setItem('token', data.token); // сохраняем данные в localStorage
     //         localStorage.setItem('user', JSON.stringify(data.user)); // объект user преобразовуем в строку (JSON.stringify)
     //         _this.props.setUserData(data) // сохраняем данные в App.state
     //        _this.props.loginModalToggle() // скрываем модальное окно
     //     }else{
     //         _this.setState({alert:'Неверный логин или пароль'}) // выводим сообщение об ошибке
     //     }
     // });

    const fd = new FormData();

    console.log(_this.state.form);


    fd.append('data', JSON.stringify(_this.state.form));
    fd.append('data', JSON.stringify(_this.state.form));

    // const url = 'http://storeyvonne.com/login.php';
    const url = '/backend/login.php';

    fetch(url, {
        method: 'POST', // или 'PUT'
        body: fd, // данные могут быть 'строкой' или {объектом}!

    }).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        if(data.success === 'ok') {
            _this.setState({alert:''})
            localStorage.setItem('token', data.token);
            window.location.reload();
        }else{
            _this.setState({alert:'Uncorrect login and password'})
            if(data.errors) _this.setState({errors: _this.getErrorsList(data.errors)})
        }
    });

}

function getUser(argument) {
    // body...
}

class ShopAutorization extends Component  {


    state = {
        form: {
            email: 'grady.anabelle@example.net',
            password: 'password',
            device_name: 'chrome'
        },
        alert: '',
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


    loginSubmit = () => { // срабатывает при клике на "Авторизоваться"
        doLogin(this) // вызываем функцию doLogin
    }


    goToRegistration = () => {
        // cl('registration')
        this.props.changeModalBody('registration')
    }

    goToForgot = () => {
        // cl('registration')
        this.props.changeModalBody('forgetpassword')
    }

    render() {
            return (
                <div>
                    <div className='w-100'>
                    <div className='m-0'>
                        <div className='card z-depth-0 border-0'>
                            <form className='text-center px-4 px-sm-5 pb-5 pt-3' action="#!">
                                <p style={{color:'red'}}>
                                    {this.state.alert}
                                </p>
                                <input onChange={this.changeEmailHandler} value={this.state.form.email} type='email' className="mx-auto justify-content-center form-control mb-4 form-reg" placeholder="Email" />
                                <input onChange={this.changePasswordHandler} value={this.state.form.password} type='password' className="mx-auto justify-content-center form-control mb-2 mb-sm-4 form-reg" placeholder="Password" />
                                <div className="d-flex justify-content-around">
                                     <div>
                                        <a href="#" onClick={ this.goToForgot } className='py-0 form-text'>Forgot password!</a>
                                    </div>
                                </div>
                                <button onClick={this.loginSubmit} className="btn btn-reg font-weight-bold mx-0 mx-sm-0 my-sm-4 my-2 w-100" type="button">Authorisation</button>
                                <p>You are not registered yet?
                                    <a href="#" onClick={this.goToRegistration} className='pl-3' >Register</a>
                                </p>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
            )
        }
    }

export default ShopAutorization;