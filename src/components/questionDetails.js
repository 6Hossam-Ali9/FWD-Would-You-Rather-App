import React from 'react'
import {connect} from 'react-redux'
import Results from './seeResults'
import SubmitAnswer from './submitAnswer'
import NotFound from './notFound'
import Login from './login'

const QuestionDetails = (props) => {
    // console.log(Object.keys(props.questions));
    if(props.authedUser !== null){
        if(Object.keys(props.questions).includes(props.match.params.qid)){
            if(Object.keys(props.users[props.authedUser].answers).includes(props.match.params.qid)){
                return(
                    <Results qid ={props.match.params.qid}/>
                )
            } else{
                return <SubmitAnswer qid ={props.match.params.qid} history={props.history}/>
            }
        } else{
            return(
                <NotFound />
            )
        }
    } else {
        return(
            <Login location={props.location} history={props.history} qid ={props.match.params.qid}/>
        )
    }
}

const mapStateToProps = ({authedUser, questions, users}) => ({
    authedUser,
    questions,
    users
})

export default connect(mapStateToProps)(QuestionDetails)