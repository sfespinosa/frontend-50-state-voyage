import React, { Component } from 'react';
import '../assets/css/us-map.css';
import USAMap from "react-usa-map";
import { connect } from 'react-redux';
import { fetchAllUsStates } from '../actions/usStateActions'

class USMap extends Component {

    componentDidMount(){
        this.props.fetchAllUsStates()
    }

  /* mandatory */
    mapHandler = (e) => {
        this.props.toggleDrawer()
    };

    /* optional customization of filling per state and calling custom callbacks per state */
    statesCustomConfig = () => {
        return {
        "NJ": {
            fill: "green",
            clickHandler: (event) => console.log('Custom handler for NJ', event.target.dataset)
        },
        "NY": {
            fill: "#CC0000"
        }
        };
    };

    render() {
        return (
        <div className='us-map-container'>
            <USAMap className='us-map' customize={this.statesCustomConfig()} onClick={this.mapHandler} />
        </div>
        );
    }
}

const mapStateToProps = state => {
    return { usStates: state.usStatesInfo.usStates }
}

export default connect(mapStateToProps, {fetchAllUsStates})(USMap);