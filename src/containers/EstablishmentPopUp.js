import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class EstablishmentPopUp extends React.Component {
    
    render(){
        return(
            <Modal 
                isOpen={this.props.modalOpen}
                className='modal-lg establishment-popup'
                toggle={this.props.toggleModal}
            >
                <ModalHeader className='establishment-popup-header'>
                    <div>Add an establishment to your collection</div>
                </ModalHeader>
                <ModalBody>
                <div>
                    <h1>Establishment Pop Up!</h1>
                </div>
                </ModalBody>
            </Modal>
    )}
}

export default EstablishmentPopUp