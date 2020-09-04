import React from 'react'
import { Modal, ModalBody, ModalFooter, Button } from "reactstrap";
import AddEstablishment from '../components/AddEstablishment';
import EditEstablishment from '../components/EditEstablishment';
import SearchEstablishmentInput from '../components/SearchEstablishmentInput';
import { connect } from 'react-redux'
import { addToEstablishments } from '../actions/establishmentActions'
import { addToEstablishmentCollection } from '../actions/establishmentCollectionActions'
import { addToMapMarkers, deleteMapMarker, editMapMarker } from '../actions/mapMarkerActions'

class EstablishmentPopUp extends React.Component {
    
    state = {
        formData: {
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
        },
        currentEstablishment: {},
        collapseOpen: false,
    }

    componentDidUpdate(prevProps){
        if (prevProps.modalOpen !== this.props.modalOpen) {
            this.setState({
                ...this.state,
                formData: {
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
                    // us_state_id: this.props.currentState.id
                },
                collapseOpen: false
        })}

        if (prevProps.currentEstablishment !== this.props.currentEstablishment){
            this.setState({
                ...this.state,
                currentEstablishment: this.props.currentEstablishment
            })
        }

        if (prevProps.viewEstablishment !== this.props.viewEstablishment && this.props.viewEstablishment !== false) {
            this.setState({
                currentEstablishment: this.props.viewEstablishment.establishment
        })}
    }

    handleOnChange = place => {
        console.log(place)
        this.setState({
            ...this.state,
            formData: {
                name: place.name,
                address: place.formatted_address,
                phone_number: place.formatted_phone_number,
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng(),
                price_level: place.price_level,
                rating: place.rating,
                img_url: place.photos[0].getUrl(),
                website_url: place.website,
                reference_id: place.reference,
                // us_state_id: this.props.currentState.id
                },
            collapseOpen: true
            })
    }

    handleEstablishmentSubmit = () => {
        if (!!this.props.establishments.find(establishment => establishment.reference_id === this.state.formData.reference_id)) {
            this.setState({
                ...this.state,
                currentEstablishment: this.props.establishments.find(establishment => establishment.reference_id === this.state.formData.reference_id)
            })
        } else {
            this.props.addToEstablishments({
                ...this.state.formData,
                us_state_id: this.props.currentState.id
            })
            this.setState({
                ...this.state,
                currentEstablishment: this.props.currentEstablishment
        })
    }
    }

    handleCollectionSubmit = e => {
        e.preventDefault()
        let formData = {
            user_id: this.props.user.id,
            establishment_id: this.state.currentEstablishment.id,
            user_comments: e.target[0].value,
            visited: e.target[1].checked
        }
        this.props.addToEstablishmentCollection(formData)
        this.props.toggleModal()

        if (e.target[2].checked) {
            let mapMarkerData = {
                user_id: this.props.user.id,
                establishment_id: this.state.currentEstablishment.id,
                category: e.target[3].value
            }
            this.props.addToMapMarkers(mapMarkerData)
        }
    }

    handleCollectionEdit = e => {
        e.preventDefault()
        let formData = {
            user_id: this.props.user.id,
            establishment_id: this.state.currentEstablishment.id,
            user_comments: e.target[0].value,
            visited: e.target[1].checked
        }
        this.props.editEstablishmentCollection(formData, this.props.viewEstablishment.id)
        this.props.toggleModal()

        if (!!this.props.viewEstablishment.map_marker === true && e.target[2].checked === true) {
            if (this.props.viewEstablishment.map_marker.category !== e.target[3].value) {
                let editedMapMarker = {
                    user_id: this.props.user.id,
                    establishment_id: this.state.currentEstablishment.id,
                    category: e.target[3].value
                }
                this.props.editMapMarker(editedMapMarker, this.props.viewEstablishment.map_marker.id)
            }
        }

        if (!!this.props.viewEstablishment.map_marker !== e.target[2].checked) {
            if (e.target[2].checked) {
                let mapMarkerData = {
                    user_id: this.props.user.id,
                    establishment_id: this.state.currentEstablishment.id,
                    category: e.target[3].value
                }
                this.props.addToMapMarkers(mapMarkerData)
            } else {
                this.props.deleteMapMarker(this.props.viewEstablishment.map_marker.id)
            }
        }
    }

    handleCollectionRemoval = () => {
        this.props.viewEstablishment.remove(this.props.viewEstablishment.id)
        this.props.toggleModal()
    }

    render(){
        return(
            <Modal 
                isOpen={this.props.modalOpen}
                className='modal-lg establishment-popup'
                toggle={this.props.toggleModal}
                zIndex={201}
            >
                {!!this.props.viewEstablishment ? <div className='establishment-popup-header'><h2>{this.props.viewEstablishment.establishment.name}</h2></div> : <SearchEstablishmentInput currentState={this.props.currentState} handleOnChange={this.handleOnChange}/>}
                <ModalBody>
                    {!!this.props.viewEstablishment 
                    ? 
                    <EditEstablishment {...this.state} handleCollectionEdit={this.handleCollectionEdit} viewEstablishment={this.props.viewEstablishment} handleCollectionRemoval={this.handleCollectionRemoval}/>
                    : <AddEstablishment {...this.state} handleCollectionSubmit={this.handleCollectionSubmit} handleEstablishmentSubmit={this.handleEstablishmentSubmit}/>
                    }
                <hr></hr>
                </ModalBody>
                <ModalFooter>
                <Button
                    color="info"
                    type="button"
                    onClick={this.props.toggleModal}
                >Close
                </Button>
                </ModalFooter>
            </Modal>
    )}
}

const mapStateToProps = state => {
    return {
        user: state.userInfo.user, 
        establishments: state.establishmentsInfo.establishments,
        currentEstablishment: state.establishmentsInfo.currentEstablishment
    }
}

export default connect(mapStateToProps, {addToEstablishments, addToEstablishmentCollection, addToMapMarkers, deleteMapMarker, editMapMarker})(EstablishmentPopUp)