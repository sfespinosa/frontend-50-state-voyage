import React from 'react';
import EstablishmentPopUp from '../containers/EstablishmentPopUp';
import DrawerBody from './DrawerBody'
import EstablishmentCard from './EstablishmentCard'
import { CardColumns } from 'reactstrap'

class ProfilePageBody extends React.Component {

    state = {
        viewEstablishment: '',
        modalOpen: true
    }


    renderEstablishmentCards = () => {
        return this.props.profileEstablishmentCollection.map(card => {
            return <EstablishmentCard {...card} key={card.id}/>
        })
    }

    render(){
        return(
            <div className='profile-page-body'>
                <CardColumns>
                {this.renderEstablishmentCards()}
                </CardColumns>
                {/* <DrawerBody viewDetails={this.viewDetails} toggleModal={this.toggleModal} establishmentCards={this.filteredEstablishmentCards()} remove={this.props.removeFromEstablishmentCollection}/> */}
                {/* <EstablishmentPopUp viewEstablishment={this.state.viewEstablishment} currentState={this.props.usState} modalOpen={this.state.modalOpen} toggleModal={this.toggleModal} editEstablishmentCollection={this.props.editEstablishmentCollection}/> */}
            </div>
        )
    }
}

export default ProfilePageBody