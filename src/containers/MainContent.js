import React from 'react'
import NavBar from './NavBar'
import USMap from './USMap'
import {withRouter} from 'react-router-dom'

class MainContent extends React.Component {

    handleLogout= () => {
        localStorage.clear()
        this.props.history.push('/')
    }

    render(){
        return (
            <div className='main-content'>
                <NavBar logout={this.handleLogout}/>
                <USMap/>
            </div>
        )
    }
}

export default withRouter(MainContent)