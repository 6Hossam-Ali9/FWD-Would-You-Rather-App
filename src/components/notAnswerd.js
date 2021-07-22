import React from 'react'
import {Link} from 'react-router-dom'


class NotAnswerd extends React.Component{
    render(){
        const {questions, authedUser, users} = this.props
        const isAnswerd = (qid) => {
            for(let i = 0; i < Object.keys(users[authedUser].answers).length; i++){
                if(Object.keys(users[authedUser].answers)[i] === qid){
                    return true
                }
            }
            return false
        }
        let allQuestions = Object.keys(questions).filter((id) => !isAnswerd(id));
        for(let i = 0; i < allQuestions.length; i++){
            allQuestions[i] = questions[allQuestions[i]];
        }

        allQuestions = allQuestions.sort((a, b) => b.timestamp - a.timestamp);

        // console.log('NOt answerd', allQuestions);
        return(
            <div>
                <ul className="quest">
                    {allQuestions.map((question) => {
                        return(
                            <li key={question.id} className="item">
                                <img src={users[question.author].avatarURL} alt={`${users[question.author].name} avatar`}/>
                                <h2 className="asked">{users[question.author].name}</h2>
                                <h1>Would You Rather:</h1>
                                <h3>{question.optionOne.text}</h3>
                                <h4>Or</h4>
                                <h3>{question.optionTwo.text}</h3>
                                <Link to ={`/answers/${question.id}`}>Vote</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default NotAnswerd