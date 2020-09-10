import React from 'react'
import NavBar from './NavBar'
import USMap from './USMap'
import StatesDrawer from './StatesDrawer/StatesDrawer'
import Backdrop from './StatesDrawer/Backdrop'
import { connect } from 'react-redux';
import { Fade } from 'reactstrap'

class MainContent extends React.Component {

    state = {
        viewEstablishmentMap: false,
        drawerOpen: false,
        currentUsState: {},
        fadeIn: false
    }

    toggleStatesDrawer = (state) => {
        if (this.state.drawerOpen === false) {
            this.setState({
                ...this.state,
                drawerOpen: !this.state.drawerOpen,
                currentUsState: state
            })
        } else {
            this.setState({
                ...this.state,
                drawerOpen: !this.state.drawerOpen,
                // currentUsState: {}
            })
        }
    }

    componentDidMount(){
        this.setState({
            ...this.state,
            fadeIn: true
        })
    }

    render(){
        return (
            <Fade in={this.state.fadeIn}>
            <div className='main-content'>
                <NavBar logout={this.props.logout} user={this.props.userInfo.user}/>
                {this.props.userInfo.user ? <StatesDrawer show={this.state.drawerOpen} usState={this.state.currentUsState} userId={this.props.userInfo.user.id} stateCollection={this.props.stateCollection}/> : null}
                {this.state.drawerOpen ? <Backdrop toggleDrawer={this.toggleStatesDrawer}/> : null}
                <USMap toggleDrawer={this.toggleStatesDrawer}/>                
            </div>
            </Fade>
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