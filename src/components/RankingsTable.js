import React from 'react';
import { Table } from 'reactstrap';

class RankingsTable extends React.Component {
    
    renderTableBody = () => {
        // if (this.props.user) {
            return this.props.user.total_states_rankings.map((user, index) => {
                return (
                <tr key={user.user_id}>
                    <th scope='row'>{index + 1}</th>
                    <td><a href={`/users/${user.user_id}`}>{user.username}</a></td>
                    <td>{user.total_states}</td>
                </tr>
            )
        })
    // }
    }

    render(){
        return (
        <div className='rankings-table'>
            <div className="p-3 bg-primary my-2 rounded profile-page-banner">
                <h2 style={{color: 'white'}}>State Count Comparison with Friends</h2>
            </div>
            <Table size='sm' hover bordered>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Total # of States Visited</th>
                    </tr>
                </thead>
                <tbody>
                {this.renderTableBody()}
                </tbody>
            </Table>
        </div>
    )}
}

export default RankingsTable