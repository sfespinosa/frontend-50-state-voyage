import React from 'react'
import NavBar from './NavBar'
import USMap from './USMap'
import StatesDrawer from './StatesDrawer/StatesDrawer'
import Backdrop from './StatesDrawer/Backdrop'
import { connect } from 'react-redux';

class MainContent extends React.Component {

    state = {
        viewEstablishmentMap: false,
        drawerOpen: false,
        currentUsState: {}
    }

    toggleStatesDrawer = (state) => {
        if (this.state.drawerOpen === false) {
            this.setState({
                drawerOpen: !this.state.drawerOpen,
                currentUsState: state
            })
        } else {
            this.setState({
                drawerOpen: !this.state.drawerOpen,
                currentUsState: {}
            })
        }
    }

    render(){
        return (
            <div className='main-content'>
                <NavBar logout={this.props.logout} user={this.props.userInfo.user.username}/>
                {this.props.userInfo.user ? <StatesDrawer show={this.state.drawerOpen} usState={this.state.currentUsState} userId={this.props.userInfo.user.id} stateCollection={this.props.stateCollection}/> : null}
                {this.state.drawerOpen ? <Backdrop toggleDrawer={this.toggleStatesDrawer}/> : null}
                <USMap toggleDrawer={this.toggleStatesDrawer}/>                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userInfo: state.userInfo,
        stateCollection: state.stateCollectionInfo.stateCollection
    }
}

export default connect(mapStateToProps)(MainContent)