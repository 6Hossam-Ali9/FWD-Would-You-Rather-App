import React from 'react'
import {Link} from 'react-router-dom'

class Answerd extends React.Component{
    render(){
        const {questions, authedUser, users} = this.props
        const allQuestions = Object.keys(users[authedUser].answers).map((id) => questions[id])
        .sort((a, b) => b.timestamp - a.timestamp);
        

        // console.log('answerd', allQuestions);
        return(
            <div>
                <ul className="quest">
                    {allQuestions.map((question) => {
                        return(
                            <li key={question.id} className="item">
                                <img src={users[question.author].avatarURL} alt={`${users[question.author].name} avatar`}/>
                                <h2 className="asked">{users[question.author].name} asked</h2>
                                <h1>Would You Rather:</h1>
                                <h3>{question.optionOne.text}</h3>
                                <h4>Or</h4>
                                <h3>{question.optionTwo.text}</h3>
                                <Link to ={`/questions/${question.id}`}>See Results...</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Answerd