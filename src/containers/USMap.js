import React, { Component } from 'react';
import '../assets/css/us-map.css';
import USAMap from "react-usa-map";
import { connect } from 'react-redux';
import { fetchAllUsStates } from '../actions/usStateActions'
import { fetchEstablishments } from '../actions/establishmentActions'

class USMap extends Component {

    componentDidMount(){
        this.props.fetchAllUsStates()
        this.props.fetchEstablishments()
        let dc = document.querySelector('circle.DC2')
        dc.remove()
    }

    /* Click handling for each state */
    mapHandler = (e) => {
        this.props.toggleDrawer(this.props.usStates.filter(state => state.abbrv === e.target.getAttribute('data-name'))[0])
    };

    /* optional customization of filling per state and calling custom callbacks per state */
    statesCustomConfig = () => {
        let customStates = {}
        this.props.stateCollection.map(state => {
            customStates[state.abbrv] =  {
                    fill: 'green'
                }
        })
        return customStates
    };

    render() {
        return (
        <div className='us-map-container'>
            <USAMap title='Click a state to get started!' className='us-map' customize={this.statesCustomConfig()} onClick={this.mapHandler} />
        </div>
        );
    }
}

const mapStateToProps = state => {
    return { 
        usStates: state.usStatesInfo.usStates,
        stateCollection: state.stateCollectionInfo.stateCollection,
        allStateCollections: state.stateCollectionInfo.allStateCollections,
    }
}

export default connect(mapStateToProps, {fetchAllUsStates, fetchEstablishments})(USMap);