import React from 'react';
import { Table } from 'reactstrap';

class RankingsTable extends React.Component {
    
    renderTableBody = () => {
        // if (this.props.user) {
            return this.props.user.total_states_rankings.map((user, index) => {
                return (
                <tr>
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
        <div>
            <Table size='sm' hover>
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