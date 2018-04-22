//https://gist.github.com/wwarodom/f27e0903ed3a12cd2360dea88d53c295

// Edit by : Him-2C

import React, {Component} from 'react'
import {connect} from 'react-redux'

import {fetchUsers} from '../actions'
import AddUser from './AddUser';
class User extends Component {
    componentDidMount() {
        this.props.fetchUsers()
    }

    renderUsers() {
        if ( Object.keys(this.props.users).length !== 0 )
            return (
                this.props.users.map((user,index) =>(
                <li key={index}>{user.id} {user.firstname} {user.lastname} {user.age}</li>
                ))
            )
        }

    render() {
        return (
            <div className="content-user">
                    <h1>USERS</h1>
                    <ul> {this.renderUsers()}</ul>

                    <AddUser />
            </div>
        )}
}

function mapStateToProps( state ) {
    return {users: state.users }
}


export default connect(mapStateToProps, {fetchUsers})(User)