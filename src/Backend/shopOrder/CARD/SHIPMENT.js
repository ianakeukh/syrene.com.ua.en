import React from 'react';
import {Component} from 'react';
import './../shopOrder.css'

import {
    MDBCol,
    MDBInput,
} from 'mdbreact';



class SHIPMENT extends Component  {

    state = {
        radio: 0
    }

    state = {
        collapseID: ""
    }

    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }))
    }


    onClick = nr => () => {
        this.setState({
            radio: nr
        })


    }

    render() {
        return (
            <MDBCol className='pl-5'>
                <div className="custom-control custom-radio ml-1 my-2">
                    <MDBInput onClick={this.onClick=(1)}  checked={this.state.radio===1 ? true : false} label="Самовивіз із нашого магазину YVONNE" type="radio" id="Radio2"  />
                </div>
                <div className="custom-control custom-radio ml-1 my-2">
                    <MDBInput onClick={this.onClick=(2)} checked={this.state.radio===2 ? true : false} label="Кур'єром за адресою" type="radio"  id='radio2' />
                    <div className='inline-flex'>
                        <MDBCol className='col-12 pl-xl-5 pl-md-5 pl-lg-5 pl-sm-5 pl-4'>
                              <input className="col-5 col-xl-4 col-lg-4 col-md-4 col-sm-4 browser-default mr-3 input-shipment mt-2 ml-2 w-50" type="text" id="adr" name="address" placeholder="Місто" />
                              <input className="col-5 col-xl-4 col-lg-4 col-md-4 col-sm-4 browser-default mr-3 input-shipment mt-2 ml-2 w-50" type="text" id="adr" name="address" placeholder="Вулиця" />
                              <input className="col-5 col-xl-4 col-lg-4 col-md-4 col-sm-4 browser-default mr-3 input-shipment mt-2 ml-2 w-50" type="text" id="adr" name="address" placeholder="Будинок" />
                              <input className="col-5 col-xl-4 col-lg-4 col-md-4 col-sm-4 browser-default mr-3 input-shipment mt-2 ml-2 w-50" type="text" id="adr" name="address" placeholder="Квартира" />
                        </MDBCol>
                    </div>
                </div>
                <div className="custom-control custom-radio ml-1 my-2">
                    <MDBInput onClick={this.onClick=(3)} checked={this.state.radio===3 ? true : false} label='Новою Поштою'  type="radio" id="radio3" />
                    <div className='inline-flex'>
                        <MDBCol className='col-12 pl-xl-5 pl-md-5 pl-lg-5 pl-sm-5 pl-4'>
                            <select className="col-5 col-xl-4 col-lg-4 col-md-4 col-sm-4 browser-default custom-select mr-3 input-shipment mt-2 ml-2 mr-4 w-50">
                                <option>Оберіть місто</option>
                                <option value="1">м.Київ</option>
                                <option value="2">м.Тернопіль</option>
                                <option value="3">м.Одесса</option>
                                <option value="4">м.Полтава</option>
                                <option value="5">м.Рівне</option>
                                <option value="6">м.Миколаїв</option>
                                <option value="7">м.Запоріжжя</option>
                                <option value="8">м.Кривий Ріг</option>
                                <option value="9">м.Вінниця</option>
                                <option value="10">м.Львів</option>
                            </select>
                            <input className='input-shipment-one' type="text" id="adr" name="address" placeholder="Номер відділення НП" />
                        </MDBCol>
                    </div>
                </div>
                <div className="custom-control custom-radio ml-1 my-2">
                    <MDBInput onClick={this.onClick=(4)} checked={this.state.radio===4 ? true : false} label='Укрпоштою'  type="radio" className="input-shipment" id="radio4" />
                    <div className='inline-flex'>
                        <MDBCol className='col-12 pl-xl-5 pl-md-5 pl-lg-5 pl-sm-5 pl-4'>
                            <select className="col-5 col-xl-4 col-lg-4 col-md-4 col-sm-4 browser-default custom-select mr-3 input-shipment mt-2 ml-2 mr-4 ">
                                <option>Оберіть місто</option>
                                <option value="1">м.Київ</option>
                                <option value="2">м.Тернопіль</option>
                                <option value="3">м.Одесса</option>
                                <option value="4">м.Полтава</option>
                                <option value="5">м.Рівне</option>
                                <option value="6">м.Миколаїв</option>
                                <option value="7">м.Запоріжжя</option>
                                <option value="8">м.Кривий Ріг</option>
                                <option value="9">м.Вінниця</option>
                                <option value="10">м.Львів</option>
                            </select>
                            <input className='input-shipment-one' type="text" id="adr" name="address" placeholder="Номер відділення УП" />
                        </MDBCol>
                    </div>
                </div>
            </MDBCol>
        )
    }
}

export default SHIPMENT;