import React from 'react'
import NavBar from './NavBar'
import USMap from './USMap'
import { connect } from 'react-redux'

class MainContent extends React.Component {

    state = {
        viewEstablishmentMap: false
    }

    render(){
        return (
            <div className='main-content'>
                <NavBar logout={this.props.logout}/>
                {/* {this.state.viewEstablishmentMap ? <ProfilePage/> : <USMap/>} */}
                <USMap/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {userInfo: state.userInfo}
}

export default connect(mapStateToProps)(MainContent)