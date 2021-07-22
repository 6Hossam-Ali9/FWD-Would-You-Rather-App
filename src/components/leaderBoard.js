import React from 'react'
import Navbar from './navbar'
import {connect} from 'react-redux'

class LeaderBoard extends React.Component{
    render(){
        const {authedUser, users}  = this.props;
        
        const allUsers = Object.values(users)
          .map(user => ({
            name: user.name,
            answerCount: Object.values(user.answers).length,
            questionCount: user.questions.length,
            total: Object.values(user.answers).length + user.questions.length
          }))
          .sort((a, b) => b.total - a.total)

          console.log(allUsers);
        return(
            <div>
                <Navbar page="leader" authedUser={authedUser}/>
                <div className="leader-board">
                    <ul>
                        {allUsers.map((user, idx) => {
                            return(
                                <li key ={idx} className="card">
                                    <img src={user.avatarURL} alt={`${user.name} avatar`}/>
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
}

const mapStateToProps = ({authedUser, users}) => ({
    authedUser,
    users
})

export default connect(mapStateToProps)(LeaderBoard)