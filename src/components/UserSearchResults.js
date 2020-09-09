import React from 'react'

const UserSearchResults = (props) => {

    const renderUserOptions = () => {
        let sortedUsers = props.filteredUsers.sort((a,b) => a.username-b.username ? 1 : -1)
        return sortedUsers.map(user => {
            return <li key={user.id}><a href={`/users/${user.id}`}>{user.username}</a></li>
        })
    }

    return(
        <div className='user-search-results'>
            <ul>
                {renderUserOptions()}
            </ul>
        </div>
    )
}

export default UserSearchResults