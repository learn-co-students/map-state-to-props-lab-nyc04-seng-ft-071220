import React, { Component } from 'react';
import { connect } from 'react-redux'
// add any needed imports here
class Users extends Component {

  render() {

    let usersTotal = this.props.usersArray.length
    let listOfUsers = this.props.usersArray.map(user => {
      return <li>{user.username}</li>
    })
    return (
      <div>
        <ul>
          Users!
          { listOfUsers }
          { usersTotal }
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return { usersArray: state.users }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
