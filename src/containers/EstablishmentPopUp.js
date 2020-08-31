import React from 'react'
import { Modal, ModalBody, ModalFooter } from "reactstrap";
import { Input } from 'reactstrap'
import AddEditEstablishment from '../components/AddEditEstablishment';
import SearchEstablishmentInput from '../components/SearchEstablishmentInput';

class EstablishmentPopUp extends React.Component {
    
    state = {
        name: '',
        address: '',
        phone_number: '',
        lat: 0,
        lng: 0,
        price_level: '',
        rating: '',
        img_url: '',
        website_url: '',
        reference_id: '',
        us_state_id: 0,
        collapseOpen: false
    }

    componentDidMount(){
    }

    componentDidUpdate(prevProps){
        if (prevProps.modalOpen !== this.props.modalOpen) {
            this.setState({
                ...this.state,
                name: '',
                address: '',
                phone_number: '',
                lat: 38.9072,
                lng: 77.0369,
                price_level: '',
                rating: '',
                img_url: '',
                website_url: '',
                reference_id: '',
                collapseOpen: false
        })}
    }

    handleOnChange = place => {
        console.log(place);
        console.log(place.geometry.location.lat())

        // this.setState({
        //     ...this.state,
        //     name: e.target.value,
        //     us_state_id: this.props.currentState.id,
        //     collapseOpen: true
        // })
    }

    handleCollectionSubmit = e => {
        e.preventDefault()
        console.log(e.target[0].value)
        console.log(e.target[1].checked)
        console.log(e.target[2].checked)
    }

    // renderGooglePlaces = () => {
    //     const autocomplete = new window.google.maps.places.Autocomplete(
    //         (document.getElementById(
    //         "places-input"
    //         )),
    //         {
    //             types: ['establishment'],
    //             componentRestrictions: { country : "us"},
    //             origin: new window.google.maps.LatLngBounds({lat: 48.864716, lng: 2.349014}),
    //         }
    //     );
    //     autocomplete.addListener("place_changed", onPlaceChanged);
    
    //     function onPlaceChanged() {
    //         let place = autocomplete.getPlace();
    //         this.handleOnChange(place);
    //     }
    // }

    render(){
        return(
            <Modal 
                isOpen={this.props.modalOpen}
                className='modal-lg establishment-popup'
                toggle={this.props.toggleModal}
            >
                {/* <div className='establishment-popup-header'>
                    <h2>
                    Add establishment to your collection: 
                    </h2>
                    <div className='places-input-container'>
                    <Input placeholder='Enter establishment name...' id='places-input'/>
                    </div>
                </div> */}
                <SearchEstablishmentInput currentState={this.props.currentState} handleOnChange={this.handleOnChange}/>
                <ModalBody>
                    <AddEditEstablishment {...this.state} handleSubmit={this.handleCollectionSubmit}/>
                </ModalBody>
            </Modal>
    )}
}

export default EstablishmentPopUp