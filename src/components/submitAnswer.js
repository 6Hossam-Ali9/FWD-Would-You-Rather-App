import React from 'react'
import Navbar from './navbar'
import {connect} from 'react-redux'
import {handleAnswerQuestions} from '../actions/questions'

class QuestionDetails extends React.Component{
    state ={
        chosen:''
    }

    onChoose = (opt) => {
        this.setState(() => ({
            chosen: opt
        }))
        // console.log(this.state.chosen)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(handleAnswerQuestions({authedUser: this.props.authedUser,qid:this.props.match.params.qid, answer: this.state.chosen}))
    }
    render(){
        const {questions, authedUser, users} = this.props
        const {qid} = this.props.match.params
        const question = questions[qid]
        return(
            <div>
                <Navbar page="none" authedUser={authedUser}/>
                <div className="quest">
                    <div className="item">
                        <img src={users[question.author].avatarURL} alt={`${users[question.author].name} avatar`}/>
                        <h2 className="asked">{users[question.author].name} asked</h2>
                        <h1>Would You Rather:</h1>
                        <h3
                        onClick={() => this.onChoose('optionOne')}
                        className={`${this.state.chosen==='optionOne'?"active":undefined} option`}
                        >{question.optionOne.text} </h3>
                        <h3
                        onClick={() => this.onChoose('optionTwo')}
                        className={`${this.state.chosen==='optionTwo'?"active":undefined} option`}                        >{question.optionTwo.text}</h3>
                        <button 
                        type="submit"
                        disabled={this.state.chosen ===''}
                        onClick={(e) =>{
                            this.handleSubmit(e);
                            this.props.history.push(`/questions/${question.id}`)
                        } 
                        }
                        >Submit</button>
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