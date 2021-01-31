import React from 'react';
import './filter.css';
import { useHistory } from "react-router-dom";
import queryString from 'query-string';

const Filter = (props) => {
    const years = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
    const condition = ['True', 'False'];
    let params = {};
    // params = this.props.match ? this.props.match.params : {};
    params = queryString.parse(props.location.search);

    const history = useHistory();
    let navigateTo = (param, value) => {
        params[param] = value;
        let url = '';
        for (let key in params) {
            url = `${url}${key}=${params[key]}&`;
        }
        url = url.slice(0, url.length - 1);
        history.push(`/?${url}`);
    }

    return (
        <div className="card filter">
            <h4 style={{ margin: '0px' }}>Filters</h4>
            <div className="border-bottom px-3" style={{ textAlign: 'center' }}>
                Launch Year
            </div>
            <div className="p-3 btn-container">
                {years.map((item) => {
                    return <div key="item" className="column-div">
                        <span className={params.launch_year == item ? 'btn btn-active' : 'btn'}
                            onClick={e => navigateTo(`launch_year`, item)}>{item}</span>
                    </div>
                })}
            </div>
            <div className="border-bottom px-3" style={{ textAlign: 'center' }}>
                Successful Launch
            </div>
            <div className="p-3 btn-container">
                {condition.map((item) => {
                    return <div key="item" className="column-div">
                        <span className={params.launch_success == item.toLowerCase() ? 'btn btn-active' : 'btn'}
                            onClick={e => navigateTo('launch_success', item.toLowerCase())}>{item}</span>
                    </div>
                })}
            </div>
            <div className="border-bottom px-3" style={{ textAlign: 'center' }}>
                Successful Landing
            </div>
            <div className="p-3 btn-container">
                {condition.map((item) => {
                    return <div key="item" className="column-div">
                        <span className={params.land_success == item.toLowerCase() ? 'btn btn-active' : 'btn'}
                            onClick={e => navigateTo('land_success', item.toLowerCase())}>{item}</span>
                    </div>
                })}
            </div>
        </div>
    );

}

export default Filter;