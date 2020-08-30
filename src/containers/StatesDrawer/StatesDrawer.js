import React from 'react'
import DrawerHeader from '../../components/DrawerHeader'
import DrawerBody from '../../components/DrawerBody'
import './StatesDrawer.css'
import { connect } from 'react-redux'
import { addToStateCollection } from '../../actions/stateCollectionActions'

class StatesDrawer extends React.Component {

    handleSwitch = (state, usId) => {
        if (state) {
            let formData = {
                user_id: this.props.userId,
                us_state_id: usId
            }
            this.props.addToStateCollection(formData)
        } else {

        }
        console.log('USStateId:', usId);
        console.log('new state:', state);
    }

    render(){
    return(
        <div className={this.props.show ? 'side-drawer open' : 'side-drawer'}>
            <DrawerHeader {...this.props.usState} handleSwitch={this.handleSwitch} show={this.props.show}/>
            <DrawerBody />
        </div>
        )
    }
}

export default connect(null, {addToStateCollection})(StatesDrawer)