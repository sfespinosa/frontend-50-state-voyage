import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import NavBar from './NavBar'

const AnyReactComponent = ({ text }) => <div className="now-ui-icons location_pin">{text}</div>;

class EstablishmentMap extends Component {
  static defaultProps = {
    center: {
      lat: 38.555605,
      lng: -121.468926
    },
    zoom: 9
  };

  render() {
    return (
      <>
      <NavBar user={this.props.user.name} logout={this.props.logout}/>
        {/* // Important! Always set the container height explicitly */}
      <div style={{ height: '93vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAgk4i2qPPjiljKUCUbGSjTKu8AODC6Rcw'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={38.555605}
            lng={-121.468926}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
      </>
    );
  }
}

export default EstablishmentMap;