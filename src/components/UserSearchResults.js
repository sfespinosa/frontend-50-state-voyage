import React from 'react'
import{
    Card,
    CardBody,
    Row,
    Col
  } from "reactstrap";
const UserSearchResults = (props) => {

    const renderUserOptions = () => {
        let sortedUsers = props.filteredUsers.sort((a,b) => a.username-b.username ? 1 : -1)
        return sortedUsers.map(user => {
            return (
            <Card key={user.id} className="text-center user-card" style={{ backgroundColor: '#333333', borderColor: '#333333', width: '25em' }}>
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
            <Row style={{ align: 'center'}}>
                <Col>
                {renderUserOptions()}
                </Col>
            </Row>
        </div>
    )
}

export default UserSearchResults