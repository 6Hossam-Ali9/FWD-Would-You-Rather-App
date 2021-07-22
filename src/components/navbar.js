import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {removeAuthedUser} from '../actions/authedUser'

class Navbar extends React.Component{
    render(){
        const {users, authedUser} = this.props
        return(
            <div>
                <img src="../avatars/avatara.PNG" alt=""/>
                <h1 style={{fontWeight:'bold'}} className="hello"> Hello, {users[authedUser].name}</h1>
                <nav className="navbar">
                    <ul className="nav">
                        <li className={this.props.page==='home'?("active"):undefined}><Link to="/">Home</Link></li>
                        <li className={this.props.page==='new'?("active"):undefined}><Link to="/add">New Question</Link></li>
                        <li className={this.props.page==='leader'?("active"):undefined}><Link to="/leaderboard">Leader Board</Link></li>
                        <li className="logout"><Link to="/login" onClick={() => {
                        this.props.dispatch(removeAuthedUser())
                        }
                    }>Logout</Link></li>
                   </ul>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = ({users}) => (
    {
        users
    }
)

export default connect(mapStateToProps)(Navbar)