import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import NavBar from './NavBar'
import MapMarker from '../components/MapMarker';
import { connect } from 'react-redux'
import { fetchMapMarkers } from '../actions/mapMarkerActions'

class EstablishmentMap extends Component {
  static defaultProps = {
    center: {
      lat: 38.555605,
      lng: -121.468926
    },
    zoom: 9
  };

  renderMapMarkers = () => {
    return this.props.mapMarkers.map(marker => {
      return <MapMarker key={marker.id} lat={marker.lat} lng={marker.lng}/>
    })
  }

  componentDidMount(){
    this.props.fetchMapMarkers()
  }

  render() {
    return (
      <>
      <NavBar user={this.props.user.name} logout={this.props.logout}/>
        {/* // Important! Always set the container height explicitly */}
      <div style={{ height: '93vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.renderMapMarkers()}
        </GoogleMapReact>
      </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    mapMarkers: state.mapMarkerInfo.mapMarkers
  }
}

export default connect(mapStateToProps, { fetchMapMarkers })(EstablishmentMap);