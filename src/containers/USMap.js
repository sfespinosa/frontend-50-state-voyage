import React, { Component } from 'react';
import '../assets/css/us-map.css';
import USAMap from "react-usa-map";

class USMap extends Component {
  /* mandatory */
    mapHandler = (event) => {
        alert(event.target.dataset.name);
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

export default USMap;