import React from 'react'
import NavBar from './NavBar'
import USMap from './USMap'
import StatesDrawer from './StatesDrawer/StatesDrawer'
import Backdrop from './StatesDrawer/Backdrop'
import { connect } from 'react-redux'

class MainContent extends React.Component {

    state = {
        viewEstablishmentMap: false,
        drawerOpen: false
    }

    toggleStatesDrawer = () => {
        this.setState({
            drawerOpen: !this.state.drawerOpen
        })
    }

    render(){
        return (
            <div className='main-content'>
                <NavBar logout={this.props.logout}/>
                {/* {this.state.viewEstablishmentMap ? <EstablishmentMap/> : <USMap/>} */}
                <StatesDrawer show={this.state.drawerOpen} />
                {this.state.drawerOpen ? <Backdrop toggleDrawer={this.toggleStatesDrawer}/> : null}
                <USMap toggleDrawer={this.toggleStatesDrawer}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {userInfo: state.userInfo}
}

export default connect(mapStateToProps)(MainContent)