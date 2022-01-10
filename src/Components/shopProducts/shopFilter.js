import React from 'react';
import {Component} from 'react';
import './shopProducts.css'
import { Scrollbars } from 'react-custom-scrollbars';

import {
    MDBInput,
} from 'mdbreact';
import 'jquery';
import 'mdbreact/dist/css/mdb.css';

// import Item from './../shopProducts/ITEMS/Davines/Item/Item'

const cl = console.log

class ShopFilter extends Component  {
    
      Filter = {
        type: [],
        brand: [],
        seria: [],
        amount: [],
          dry: '',
          fatter: '',
          lamina: '',
          clarified: '',
          alltype: '',
              health: '',
              salon: '',
              reconstraction: '',
              protection: '',
              coloring: '',
              stratening: '',
              natural: '',
              curl: '',
              skin: '',
              yellow: '',
              volume: '',
              sebo: '',
              lupa: '',
              loss: '',
              woman: '',
              man: '',
              child: '',
              price_from: '',
              price_to: ''

      };

    setFilter(e) {
        if(e.target.name == 'price_from')
            this.Filter.price_from = e.target.value.trim();
        else if(e.target.name == 'price_to')
            this.Filter.price_to = e.target.value.trim();
        else if (e.target.name == 'hairtype') {
            let type = 'dry'
            switch (e.target.value) {

                case '1':
                    type = 'dry';
                    break;
                case '2':
                    type = 'fatter';
                    break;
                case '3':
                    type = 'lamina';
                    break;
                case '4':
                    type = 'clarified';
                    break;
                case '5':
                    type = 'alltype';
                    break;
            }

            this.Filter[type] = e.target.checked ? 1 : 0;
        }
        else if (e.target.name == 'appointment') {
            let type = 'health'
            switch (e.target.value) {

                case '1':
                    type = 'health';
                    break;
                case '2':
                    type = 'salon';
                    break;
                case '3':
                    type = 'reconstraction';
                    break;
                case '4':
                    type = 'protection';
                    break;
                case '5':
                    type = 'coloring';
                    break;
                case '6':
                    type = 'stratening';
                    break;
                case '7':
                    type = 'natural';
                    break;
                case '8':
                    type = 'curl';
                    break;
                case '9':
                    type = 'skin';
                    break;
                case '10':
                    type = 'yellow';
                    break;
                case '11':
                    type = 'volume';
                    break;
                case '12':
                    type = 'sebo';
                    break;
                case '13':
                    type = 'lupa';
                    break;
                case '14':
                    type = 'loss';
                    break;

            }

            this.Filter[type] = e.target.checked ? 1 : 0;
        }
        else if (e.target.name == 'gender') {
            let type = 'woman'
            switch (e.target.value) {

                case '1':
                    type = 'woman';
                    break;
                case '2':
                    type = 'man';
                    break;
                case '3':
                    type = 'child';
                    break;
            }

            this.Filter[type] = e.target.checked ? 1 : 0;
        }
        else if (!this.Filter[e.target.name].find((elem) => elem == e.target.value))
            this.Filter[e.target.name].push(e.target.value);
        else {
            const Index = this.Filter[e.target.name].findIndex((elem) => elem == e.target.value);
            this.Filter[e.target.name].splice(Index, 1);
        }

        console.log(this.Filter);

        const fd = new FormData();

        fd.append('data', JSON.stringify(this.Filter));

        // fetch('http://storeyvonne.com/get_filter.php', {
        //     method: 'post',
        //     body: fd
        // })

        fetch('/backend/get_filter.php', {
            method: 'post',
            body: fd
        }).then((res) => res.json())
            .then((data) => {
                console.log(data)
                this.props.setFilterData(data);
            });
    }




    render() {
        console.log(this.props);
        return (
    <div className='shop-filters h-100 left w-responsive'>
        <h5 className='font-weight-bold pt-2 pt-md-4 pl-5 pb-4 ml-sm-0 ml-3' >Фільтри</h5>
        <div className='shop-filters-prod filter filter-basic'>
            {this.props.data ?
            <div className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5'>
                <p className='m-2 mb-3 font-weight-bold'>ВИД ПРОДУКЦІЇ</p>
                <input onChange={this.typeInputChange} type='text' className='w-75 m-2 mt-3 mb-3 search-input' />
                <Scrollbars className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5 w-100 scroll'>
                    {this.props.data.type.map((elem, index) => (
                        <MDBInput key={index} value={elem.type_id} name='type' label={elem.type_title} name="type" onChange={ (e) => this.setFilter(e) } type='checkbox' className='check-item'/>
                    ))}
                </Scrollbars>
            </div>: null}
            {this.props.data ?
            <div className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5'>
                <p className='m-2 font-weight-bold'>БРЕНД</p>
                <input onChange={this.brandInputChange} type='text' className='w-75 m-2 mt-3 mb-3 search-input' />
                <Scrollbars className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5 w-100 scroll'>
                {this.props.data.brand.map((elem, index) => (
                    <MDBInput key={index} value={elem.brand_id} name='brand' onChange={ (e) => this.setFilter(e) } label={elem.brand_title} type='checkbox' />
                ))}
                </Scrollbars>
            </div>: null}
            {this.props.data ?
            <div className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5'>
                <p className='m-2 font-weight-bold'>СЕРІЯ</p>
                <input onChange={this.volumeInputChange} type='text' className='w-75 m-2 mt-3 mb-3 search-input' />
                <Scrollbars className='mb-5 w-100 scroll'>
                    {this.props.data.seria.map((elem, index) => (
                        <MDBInput key={index} value={elem.seria_id} name='seria' onChange={ (e) => this.setFilter(e) } label={elem.seria_title} type='checkbox' />
                    ))}
                </Scrollbars>
            </div>: null }
            {this.props.data ?
            <div className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5'>
                <p className='m-2 font-weight-bold'>ОБСЯГ</p>
                <input onChange={this.amountInputChange} type='text' className='w-75 m-2 mt-3 mb-3 search-input' />
                <Scrollbars className='mb-0 w-100 scroll'>
                    {this.props.data.amount.map((elem, index) => (
                        <MDBInput key={index} value={elem.amount_id} name='amount' onChange={ (e) => this.setFilter(e) }  label={elem.amount_title} type='checkbox'/>
                    ))}
                </Scrollbars>
            </div>: null}
            {this.props.data ?
            <div className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5'>
                <p className='m-2 mb-3 font-weight-bold'>ТИП ВОЛОССЯ</p>
                {this.props.data.hairtype.map((elem, index) => (
                <MDBInput key={index} value={elem.hairtype_id} name='hairtype' onChange={ (e) => this.setFilter(e) } label={elem.hairtype_title} type='checkbox' />
                ))}
            </div>: null}
            {this.props.data ?
            <div className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5'>
                <p className='m-2 mb-3 font-weight-bold'>ПРИЗНАЧЕННЯ</p>
                <input onChange={this.appInputChange} type='text' className='w-75 m-2 mt-3 mb-3 search-input' />
                <Scrollbars className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5 w-100 scroll'>
                    {this.props.data.appointment.map((elem, index) => (
                        <MDBInput key={index} value={elem.app_id} name='appointment' onChange={ (e) => this.setFilter(e) } label={elem.app_title} type='checkbox' />
                    ))}
                </Scrollbars>
            </div>: null}
            {this.props.data ?
            <div className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5'>
                <p className='m-2 mb-3 font-weight-bold'>КАТЕГОРІЯ</p>
                {this.props.data.gender.map((elem, index) => (
                    <MDBInput key={index} value={elem.gen_id} name='gender' onChange={ (e) => this.setFilter(e) } label={elem.gen_title} type='checkbox' />
                ))}
            </div>: null}
            <div className='mb-5'>
                <p className='m-2 mb-3 font-weight-bold'>ЦІНА</p>
                <div className='d-flex'>
                    <form className='multi-range-field w-50 w-auto d-inline-flex m-2 '>
                        <input className='w-25'  id='min'  type='number' placeholder="Від" name="price_from" onChange={ (e) => this.setFilter(e) }></input>
                        <p className='px-3 mt-2 mb-0'> — </p>
                        <input className='w-25'  id='max'  type='number' placeholder="До" name="price_to" onChange={ (e) => this.setFilter(e) }></input>
                    </form>
                </div>
            </div>
        </div>
    </div>
        )
    }
}

export default ShopFilter;