import './content.css';
import React, { Component, Fragment } from 'react';
import axios from 'axios';
import queryString from 'query-string';
class Content extends Component {

    state = {
        list: []
    }

    convertBooleanToString = (value) => {
        return value ? 'True' : value === false ? 'False' : '';
    }

    loadData = () => {
        let params = {};
        // params = this.props.match ? this.props.match.params : {};
        params = queryString.parse(this.props.location.search);
        params['limit'] = '100';
        axios.get(`https://api.spaceXdata.com/v3/launches`, {
            params: params
        })
            .then(result => {
                this.setState({
                    list: result.data
                });
            })
            .catch(err => {
            });
    }

    // static getDerivedStateFromProps() {
    //     loadData();
    // }

    componentDidUpdate(prevProps) {
        if (this.props.location.search !== prevProps.location.search) {
            this.loadData();
        }
    }

    componentDidMount() {
        this.loadData();
    }

    render() {
        return (
            <>
                {
                    this.state.list.map((item, index) => {
                        return <div key={index} className="column">
                            <div className="card">
                                <img src={item.links.mission_patch_small} className="mission-image" />
                                <span>{item.mission_name} #{item.flight_number}</span>
                                <h5>Mission Ids:</h5>
                                <ul>
                                    {item.mission_id.map((listItem, i) => <li key={i}>{listItem}</li>)}
                                </ul>
                                <div> <h6>Launch Year: {item.launch_year}</h6>
                                </div>
                                <div> <h6>Successful Launch: {this.convertBooleanToString(item.launch_success)}</h6>
                                </div>
                                <div> <h6>Successful Landing: {this.convertBooleanToString(item.launch_landing)}</h6>
                                </div>
                            </div>
                        </div>
                    })
                }
            </>
        );
    }
}

export default Content;