import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import NavBar from './NavBar'
import MapMarker from '../components/MapMarker';
import { connect } from 'react-redux'
import { fetchMapMarkers } from '../actions/mapMarkerActions'
import FilterMapMenu from '../components/FilterMapMenu';
import { fetchAllUsStates } from '../actions/usStateActions'

class EstablishmentMap extends Component {
  static defaultProps = {
    center: {
      lat: 38.555605,
      lng: -121.468926
    },
    zoom: 9
  };

  state = {
    center: {
      lat: 38.555605,
      lng: -121.468926
    },
  }

  handleMarkerClick = (lat, lng) => {
    this.setState({
      center: {
        lat, lng
      }
    })
  }

  handleStateFilterChange = e => {
    let state = this.props.usStates.find(state => state.id.toString() === e.target.value)
    this.setState({
      center: {
        lat: state.capital_lat,
        lng: state.capital_lng
      }
    })
  }

  renderMapMarkers = () => {
    return this.props.mapMarkers.map(marker => {
      return <MapMarker {...marker} key={marker.id} lat={marker.lat} lng={marker.lng} handleMarkerClick={this.handleMarkerClick}/>
    })
  }

  componentDidMount(){
    this.props.fetchMapMarkers()
    this.props.fetchAllUsStates()
  }

  render() {
    return (
      <>
      <NavBar user={this.props.user.username} logout={this.props.logout}/>
        {/* // Important! Always set the container height explicitly */}
      <div style={{ height: '93vh', width: '100%' }}>
        <FilterMapMenu usStates={this.props.usStates} handleStateFilterChange={this.handleStateFilterChange}/>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          center={this.state.center}
          className='google-map'
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
    mapMarkers: state.mapMarkerInfo.mapMarkers,
    usStates: state.usStatesInfo.usStates
  }
}

export default connect(mapStateToProps, { fetchMapMarkers, fetchAllUsStates })(EstablishmentMap);