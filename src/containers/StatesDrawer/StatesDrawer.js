import React from 'react'
import './StatesDrawer.css'

export default class StatesDrawer extends React.Component {

    render(){
        // let drawerClasses = 'side-drawer'

        // if(this.props.show) {
        //     drawerClasses = 'side-drawer open'
        // }

    return(
        <div className={this.props.show ? 'side-drawer open' : 'side-drawer'}>
            <h1>Hello, I'm sliding!</h1>
        </div>
        )
    }
}