import React from 'react'
import{
    Card,
    CardBody,
    Row,
    Col,
    CardColumns
  } from "reactstrap";
const UserSearchResults = (props) => {

    const renderUserOptions = () => {
        return props.filteredUsers.map(user => {
            return (
            <Card key={user.id} className="text-center user-card" style={{ backgroundColor: '#333333', borderColor: '#FFF', width: '25em' }}>
                <CardBody>
                <blockquote className="blockquote blockquote-info mb-0">
                    <h5><a href={`/users/${user.id}`}>{user.username}</a></h5>
                <p>
                <strong>{user.name}</strong><br/>
                Located in {user.location}<br/>
                {user.us_states.length} States Visited<br/>
                </p>
                </blockquote>
                </CardBody>
            </Card>
        )})
    }

    return(
        <div className='user-search-results'>
            <CardColumns>
                {renderUserOptions()}
            </CardColumns>
        </div>
    )
}

export default UserSearchResults