import React from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { signOut } from '../../actions/authActions'

 const SignedInLinks = (props) => {
  console.log(props)
    return (
        <ul className="right">
            <li><NavLink to='/createproject'>New Project</NavLink></li>
            <li><a onClick={props.signOut}>Log Out</a></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>
             {/* {props.profile.initials} */}LBH
            </NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)