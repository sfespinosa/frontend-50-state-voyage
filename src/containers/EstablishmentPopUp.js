import React from 'react'
import { Modal, ModalBody, ModalFooter } from "reactstrap";
import { Input } from 'reactstrap'
import AddEditEstablishment from '../components/AddEditEstablishment';

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

    componentDidUpdate(prevProps){
        if (prevProps.modalOpen !== this.props.modalOpen) {
            this.setState({
                ...this.state,
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
                collapseOpen: false
        })}
    }
    
    handleOnChange = e => {
        this.setState({
            ...this.state,
            name: e.target.value,
            us_state_id: this.props.currentState.id,
            collapseOpen: true
        })
    }

    render(){
        return(
            <Modal 
                isOpen={this.props.modalOpen}
                className='modal-lg establishment-popup'
                toggle={this.props.toggleModal}
            >
                <div className='establishment-popup-header'>
                    <h2>
                    Add establishment to your collection: 
                    </h2>
                    <div className='places-input-container'>
                    <Input placeholder='Enter establishment name...' className='places-input' onChange={this.handleOnChange}/>
                    </div>
                </div>
                <ModalBody>
                    <AddEditEstablishment {...this.state} />
                </ModalBody>
            </Modal>
    )}
}

export default EstablishmentPopUp