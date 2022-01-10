import React from 'react';
import {Component} from 'react';
import './shopRegistration.css'
import {Link} from 'react-router-dom';

let cl = console.log


function fetchRegister(_this){

    const fd = new FormData();

    console.log(_this.state.value);


    fd.append('data', JSON.stringify(_this.state.value));

    // const url = 'http://storeyvonne.com/register.php';
    const url = '/backend/register.php';

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
            localStorage.setItem('user', JSON.stringify(data.user));
            _this.props.changeModalBody('successRgistration')
        }else{
            _this.setState({alert:'Неверный логин или пароль'})
            if(data.errors) _this.setState({errors: _this.getErrorsList(data.errors)})
        }
    });
}



class ShopRegistration extends Component  {

    state= {
        value: {
            name: '',
            last_name: '',
            email: '',
            password: '',
            phone: ''
        },
        alert: '',
        errors: [],
    }

    goToAuthorization = () => {
        this.props.changeModalBody('authorization')
    }

    changeInputHandler = (event) => {
        let formData = {...this.state.value}
        formData[event.target.name] = event.target.value
        this.setState({value: formData})
    }

    registerSubmit = () => {
        fetchRegister(this)
    }

    getErrorsList = (errors) => {
        let errorsList = []
        for(let error in errors){
            errorsList.push(errors[error])
        }
        return errorsList
    }

    componentDidUpdate()
    {
        console.log(this.state.value);
    }


    render() {
        return (
            <div>
                <div className='container registration z-index-0'>
                    <div className='card z-depth-0'>
                        <form className="text-center px-sm-5 px-3 py-4 my-2" action="#!">
                            <ul className="errors-list">
                            {this.state.errors.map((error) => (
                                <li style={{color:'red'}}>{error}</li>
                            ))}
                            </ul>
                            <div className="form-row mb-4">
                                <div className="col">
                                    <input onChange={this.changeInputHandler} value={this.state.value.name} name="name"  type="text" id="defaultRegisterFormFirstName" className="mx-auto justify-content-center form-control form-aut" placeholder="Ім'я" />
                                </div>
                                <div className="col">
                                    <input onChange={this.changeInputHandler} value={this.state.value.last_name} name="last_name" type="text" id="defaultRegisterFormLastName" className="mx-auto justify-content-center form-control form-aut" placeholder="Фамілія" />
                                </div>
                            </div>
                            <input onChange={this.changeInputHandler} value={this.state.value.email} name="email"  type="email" id="defaultRegisterFormEmail" className="mx-auto justify-content-center w-100 form-control mb-4 form-reg" placeholder="Електронна пошта" />
                            <input onChange={this.changeInputHandler} value={this.state.value.phone} name="phone" type="text" id="defaultRegisterPhonePassword" className="mx-auto justify-content-center form-control mb-4 form-reg" placeholder="Номер телефону" aria-describedby="defaultRegisterFormPhoneHelpBlock" />
                            <input onChange={this.changeInputHandler} value={this.state.value.password} name="password" type="password" id="defaultRegisterFormPassword" className="mx-auto justify-content-center form-control form-reg" placeholder="Пароль" aria-describedby="defaultRegisterFormPasswordHelpBlock" />
                            <small id="defaultRegisterFormPasswordHelpBlock" className="form-text text-muted mb-2">
                                Щонайменше 8 літер латиницею
                            </small>
                            <a href='#' onClick={this.goToAuthorization} className='p-2 m-0 text-left w-100' >
                                Авторизуватися
                             </a>
                            <button onClick={this.registerSubmit} className="btn btn-reg font-weight-bold mb-4 mt-2 mx-0 w-100" type="button">Реєстрація</button>
                            <p>В той час як ви натискаєте на<em> Реєстрація </em>, ви погоджуєтесь із<a href="/" target="_blank"> політикою конфіденційності</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShopRegistration;