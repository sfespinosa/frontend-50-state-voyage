import React from 'react';
import EstablishmentPopUp from '../containers/EstablishmentPopUp';
import EstablishmentCard from './EstablishmentCard'
import { CardColumns } from 'reactstrap'
import { connect } from 'react-redux'
import { removeFromEstablishmentCollection, editEstablishmentCollection } from '../actions/establishmentCollectionActions'

class ProfilePageBody extends React.Component {

    state = {
        viewEstablishment: '',
        modalOpen: false
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen,
        })
    }

    viewDetails = (props) => {
        this.setState({
            ...this.state,
            viewEstablishment: props,
            modalOpen: !this.state.modalOpen
        })
    }

    renderEstablishmentCards = () => {
        return this.props.profileEstablishmentCollection.map(card => {
            return <EstablishmentCard {...card} key={card.id} remove={this.props.removeFromEstablishmentCollection} viewDetails={this.viewDetails}/>
        })
    }

    render(){
        return(
            <div className='profile-page-body'>
                <CardColumns>
                {this.renderEstablishmentCards()}
                </CardColumns>
                <EstablishmentPopUp viewEstablishment={this.state.viewEstablishment} modalOpen={this.state.modalOpen} toggleModal={this.toggleModal} editEstablishmentCollection={this.props.editEstablishmentCollection}/>
            </div>
        )
    }
}

export default connect(null, {removeFromEstablishmentCollection, editEstablishmentCollection})(ProfilePageBody)