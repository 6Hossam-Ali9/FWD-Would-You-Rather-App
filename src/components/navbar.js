import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {removeAuthedUser} from '../actions/authedUser'

const Navbar = (props) => {
    const {users, authedUser} = props
    return(
        <div>
            <div className="nav-header">
                <img src={users[authedUser].avatarURL} alt={`${users[authedUser].name} avatar`} className="nav-img"/>
                <h1 style={{fontWeight:'bold'}} className="hello"> Hello, {users[authedUser].name}</h1>
            </div>
            <nav className="navbar">
                <ul className="nav">
                    <li className={props.page==='home'?("active"):undefined}><Link to="/">Home</Link></li>
                    <li className={props.page==='new'?("active"):undefined}><Link to="/add">New Question</Link></li>
                    <li className={props.page==='leader'?("active"):undefined}><Link to="/leaderboard">Leader Board</Link></li>
                    <li className="logout"><Link to="/login" onClick={() => {
                    props.dispatch(removeAuthedUser())
                    }
                }>Logout</Link></li>
                </ul>
            </nav>
        </div>
    )
}

const mapStateToProps = ({users, authedUser}) => (
    {
        users,
        authedUser
    }
)

export default connect(mapStateToProps)(Navbar)