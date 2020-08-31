import React, { useEffect } from "react";
import { Input } from 'reactstrap'

const SearchEstablishmentInput = (props) => {

    useEffect(() => {
        const autocomplete = new window.google.maps.places.Autocomplete(
            (document.getElementById(
            "places-input"
            )),
        {
            types: ['establishment'],
            componentRestrictions: { country : "us"},
            origin: new window.google.maps.LatLngBounds({lat: props.currentState.capital_lat, lng: props.currentState.capital_lng}),
        }
        );
        autocomplete.id = 'autocomplete-menu'
        autocomplete.addListener("place_changed", onPlaceChanged);
    
        function onPlaceChanged() {
            let place = autocomplete.getPlace();
            console.log(place);
            console.log(place.geometry.location.lat())
            props.handleOnChange(place);
            }
        }, []);

    return (
        <div className='establishment-popup-header'>
            <h2>
            Add establishment to your collection: 
            </h2>
        <div className='places-input-container'>
            <Input placeholder='Enter establishment name...' id='places-input'/>
        </div>
    </div>
    );
};

export default SearchEstablishmentInput