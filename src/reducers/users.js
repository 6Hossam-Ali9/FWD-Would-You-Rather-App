import {RECEIVE_USERS} from '../actions/users'
import {AUTHED_ADD_QUESTION, AUTHED_ANSWER_QUESTION} from '../actions/questions'


export default function users(users={}, action){
    switch(action.type){
        case RECEIVE_USERS:
            return{
                ...users,
                ...action.users,
            }
        case AUTHED_ADD_QUESTION:
            const {question} = action
            return{
                ...users,
                [question.author]:{
                    ...users[question.author],
                    questions:[
                        ...users[question.author].questions,
                        question.id
                    ]
                }
            }
        case AUTHED_ANSWER_QUESTION:
            const { authedUser, qid, answer } = action
            return{
                ...users,
                [authedUser]:{
                    ...users[authedUser],
                    answers:{
                        ...users[authedUser].answers,
                        [qid] : answer
                    }
                }
            }
        default:
            return users
    }
}