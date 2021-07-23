import React from 'react'
import Navbar from './navbar'
import {connect} from 'react-redux'

const LeaderBoard = (props) => {
    const {users}  = props; 
    const allUsers = Object.values(users)
        .map(user => ({
        name: user.name,
        avatar: user.avatarURL,
        answerCount: Object.values(user.answers).length,
        questionCount: user.questions.length,
        total: Object.values(user.answers).length + user.questions.length
        }))
        .sort((a, b) => b.total - a.total)
    return(
        <div>
            <Navbar page="leader"/>
            <div className="leader-board">
                <ul>
                    {allUsers.map((user, idx) => {
                        return(
                            <li key ={idx} className="card">
                                <img src={user.avatar} alt={`${user.name} avatar`} className="lead-img"/>
                                <h2>{user.name}</h2>
                                <h3>Quesions added {user.questionCount}</h3>
                                <h3>Quesions answered {user.answerCount}</h3>
                                <h1>Total Score <span>{user.total}</span></h1>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = ({users}) => ({
    users
})

export default connect(mapStateToProps)(LeaderBoard)