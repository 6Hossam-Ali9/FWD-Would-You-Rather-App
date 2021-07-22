import React from 'react'
import Navbar from './navbar'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


class QuestionDetails extends React.Component{
    render(){
        const {questions, authedUser, users} = this.props
        const {qid} = this.props.match.params
        const question = questions[qid]
        return(
            <div>
                <Navbar page="none" authedUser={this.props.authedUser}/>
                <div className="quest">
                    <div className="item">
                        <img src={users[question.author].avatarURL} alt={`${users[question.author].name} avatar`}/>
                        <h2 className="asked">{users[question.author].name} asked</h2>
                        <h1>Would You Rather:</h1>
                        <h3
                        className={users[authedUser].answers[qid]==='optionOne'?"chosen":undefined}
                        >{question.optionOne.text} <span>{((question.optionOne.votes.length/(question.optionOne.votes.length+question.optionTwo.votes.length))*100).toPrecision(2)}%</span></h3>
                        <p>{question.optionOne.votes.length} voted for this option</p>
                        <h3
                        className={users[authedUser].answers[qid]==='optionTwo'?"chosen":undefined}
                        >{question.optionTwo.text} <span>{((question.optionTwo.votes.length/(question.optionOne.votes.length+question.optionTwo.votes.length))*100).toPrecision(2)}%</span></h3>
                        <p>{question.optionTwo.votes.length} voted for this option</p>
                        <Link to ="/">Back to Home</Link>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = ({authedUser, questions, users}) => ({
    authedUser,
    questions,
    users
})

export default connect(mapStateToProps)(QuestionDetails)