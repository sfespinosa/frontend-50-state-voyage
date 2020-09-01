import React from 'react'
import { Modal, ModalBody, ModalFooter } from "reactstrap";
import AddEditEstablishment from '../components/AddEditEstablishment';
import SearchEstablishmentInput from '../components/SearchEstablishmentInput';
import { connect } from 'react-redux'
import { addToEstablishments } from '../actions/establishmentActions'

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
        collapseOpen: false
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
                    us_state_id: this.props.currentState.id
                },
                collapseOpen: false
        })}
    }

    handleOnChange = place => {
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
                website_url: place.website_url,
                reference_id: place.reference,
                us_state_id: this.props.currentState.id
                },
            collapseOpen: true
            })
    }

    handleEstablishmentSubmit = () => {
        if (!!this.props.establishments.find(establishment => establishment.reference_id === this.state.formData.reference_id)) {
            debugger
            this.setState({
                ...this.state,
                currentEstablishment: this.props.establishments.find(establishment => establishment.reference_id === this.state.formData.reference_id)
            })
            debugger
        } else {
            this.props.addToEstablishments(this.state.formData)
            this.setState({
                ...this.state,
                currentEstablishment: this.props.currentEstablishment
        })
    }
    }

    handleCollectionSubmit = e => {
        e.preventDefault()
        console.log(e.target[0].value)
        console.log(e.target[1].checked)
        console.log(e.target[2].checked)
    }

    render(){
        return(
            <Modal 
                isOpen={this.props.modalOpen}
                className='modal-lg establishment-popup'
                toggle={this.props.toggleModal}
                zIndex={201}
            >
                <SearchEstablishmentInput currentState={this.props.currentState} handleOnChange={this.handleOnChange}/>
                <ModalBody>
                    <AddEditEstablishment {...this.state} handleCollectionSubmit={this.handleCollectionSubmit} handleEstablishmentSubmit={this.handleEstablishmentSubmit}/>
                </ModalBody>
            </Modal>
    )}
}

const mapStateToProps = state => {
    return { 
        establishments: state.establishmentsInfo.establishments,
        currentEstablishment: state.establishmentsInfo.currentEstablishment
    }
}

export default connect(mapStateToProps, {addToEstablishments})(EstablishmentPopUp)