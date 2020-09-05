import React from 'react'
import { connect } from 'react-redux'
import EstablishmentCard from './EstablishmentCard'

class FriendsFeed extends React.Component{

    renderFriendsFeedCards = () => {
        if (this.props.user.id) {
        return this.props.user.friends_feed.map(card => {
            let establishment = this.props.allEstablishments.find( establishment => establishment.id === card.establishment_id)
                if (establishment.us_state_id === this.props.currentState.id) {
                return <EstablishmentCard {...card} establishment={establishment} key={establishment.id}/>
            }})
        }
    }

    render(){
        return(
            <div className='friends-feed'>

                {this.renderFriendsFeedCards()}
            </div>
        )
    }
} 

const mapStateToProps = state => {
    return {
        allEstablishments: state.establishmentsInfo.establishments,
        user: state.userInfo.user
    }
}
export default connect(mapStateToProps)(FriendsFeed)