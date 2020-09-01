import React from 'react'
import DrawerHeader from '../../components/DrawerHeader'
import DrawerBody from '../../components/DrawerBody'
import EstablishmentPopUp from '../EstablishmentPopUp'
import './StatesDrawer.css'
import { connect } from 'react-redux'
import { addToStateCollection, fetchAllStateCollections, removeFromStateCollection } from '../../actions/stateCollectionActions'
import { removeFromEstablishmentCollection } from '../../actions/establishmentCollectionActions'

class StatesDrawer extends React.Component {

    state = {
        visited: false,
        modalOpen: false
    }

    componentDidMount(){
        this.props.fetchAllStateCollections()
    }

    componentDidUpdate(prevProps){
        if(prevProps.usState !== this.props.usState && this.props.usState !== {}){
            this.stateVisited()
        }
    }

    stateVisited = () => {
        this.setState({
            visited: !!this.props.allStateCollections.find(collection => collection.user_id === this.props.userId && collection.us_state.id === this.props.usState.id)
        })
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    handleSwitch = (state, usId) => {
        this.setState({
            visited: !this.state.visited
        })
        if (state) {
            let formData = {
                user_id: this.props.userId,
                us_state_id: usId
            }
            this.props.addToStateCollection(formData)
        } else {
            let removedState = this.props.allStateCollections.find(collection => collection.user_id === this.props.userId && collection.us_state.id === usId)
            this.props.removeFromStateCollection(removedState)
        }
    }

    filteredEstablishmentCards = () => {
        return this.props.establishmentCollection.filter(collection => collection.user_id === this.props.userId && collection.us_state_id === this.props.usState.id)
    }
    render(){
        return(
            <div className={this.props.show ? 'side-drawer open' : 'side-drawer'}>
                <DrawerHeader {...this.props.usState} handleSwitch={this.handleSwitch} show={this.props.show} allStateCollections={this.props.allStateCollections} visited={this.state.visited}/>
                <DrawerBody toggleModal={this.toggleModal} establishmentCards={this.filteredEstablishmentCards()} remove={this.props.removeFromEstablishmentCollection}/>
                <EstablishmentPopUp currentState={this.props.usState} modalOpen={this.state.modalOpen} toggleModal={this.toggleModal}/>
            </div>
        )}
}

const mapStateToProps = state => {
    return {
        allStateCollections: state.stateCollectionInfo.allStateCollections,
        establishmentCollection: state.establishmentCollectionInfo.establishmentCollection
    }
}

export default connect(mapStateToProps, {addToStateCollection, fetchAllStateCollections, removeFromStateCollection, removeFromEstablishmentCollection})(StatesDrawer)