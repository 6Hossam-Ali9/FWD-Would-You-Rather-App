import React from 'react'
import {connect} from 'react-redux'
import Results from './seeResults'
import SubmitAnswer from './submitAnswer'
import NotFound from './notFound'

class QuestionDetails extends React.Component{
    render(){
        // console.log(Object.keys(this.props.questions));
        if(Object.keys(this.props.questions).includes(this.props.match.params.qid)){
            if(Object.keys(this.props.users[this.props.authedUser].answers).includes(this.props.match.params.qid)){
                return(
                    <Results qid ={this.props.match.params.qid}/>
                )
            } else{
                return <SubmitAnswer qid ={this.props.match.params.qid} history={this.props.history}/>
            }
        } else{
            return(
                <NotFound />
            )
        }
    }
}

const mapStateToProps = ({authedUser, questions, users}) => ({
    authedUser,
    questions,
    users
})

export default connect(mapStateToProps)(QuestionDetails)