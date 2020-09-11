import React from 'react'
import { Button, Modal } from 'reactstrap'

class ConfirmationPopUp extends React.Component {
    render(){
        return(
            <Modal isOpen={this.props.isOpen}>
                <div className="modal-body">
                <p>{this.props.modalMessage}</p>
                </div>
                <div className="modal-footer">
                <Button
                    color="secondary"
                    type="button"
                    onClick={() => this.props.close()}
                >
                    Close
                </Button>
                <Button
                    color="primary"
                    type="button"
                    onClick={() => this.props.confirmedAction()}
                >
                    Yes
                </Button>
                </div>
            </Modal>
        )
    }
}

export default ConfirmationPopUp