import {RECEIVE_QUESTIONS, ADD_QUESTION, ANSWER_QUESTION} from '../actions/questions'

export default function questions(questions={}, action){
    switch(action.type){
        case RECEIVE_QUESTIONS:
            return{
                ...questions,
                ...action.questions
            }
        case ADD_QUESTION:
            return {
                ...questions,
                [action.question.id]:action.question,
            }
        case ANSWER_QUESTION:
            const{qid, answer, authedUser} = action
            return{
                ...questions,
                [qid]:{
                    ...questions[qid],
                    [answer]:{
                        ...questions[qid][answer],
                        votes:[
                            ...questions[qid][answer].votes,
                            authedUser
                        ]
                    }
                }
            }
        default:
            return questions
    }

}