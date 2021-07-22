import {showLoading, hideLoading} from 'react-redux-loading'
import {_saveQuestion, _saveQuestionAnswer,} from '../utils/_DATA'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

export const ADD_QUESTION = 'ADD_QUESTION'
export const AUTHED_ADD_QUESTION = 'AUTHED_ADD_QUESTION'

export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const AUTHED_ANSWER_QUESTION = 'AUTHED_ANSWER_QUESTION'


export function receiveQuestions(questions){
    return{
        type: RECEIVE_QUESTIONS,
        questions,
    }
}


function addQuestion(question){
    return{
        type: ADD_QUESTION,
        question,
    }
}
function authedAddQuestion(question){
    return{
        type: AUTHED_ADD_QUESTION,
        question
    }
}


function answerQuestion({ authedUser, qid, answer }){
    return{
        type: ANSWER_QUESTION,
        authedUser, 
        qid, 
        answer,
    }
}
function authedAnswerQuestion({ authedUser, qid, answer }){
    return{
        type: AUTHED_ANSWER_QUESTION,   
        authedUser, 
        qid, 
        answer
    }
}


export function handleAddQuestions({ optionOneText, optionTwoText, author }){
    return (dispatch) => {
        dispatch(showLoading())
        return _saveQuestion({ optionOneText, optionTwoText, author }).then((question) => {
            dispatch(addQuestion(question))
            dispatch(authedAddQuestion(question))
            dispatch(hideLoading())
        })
    }
}

export function handleAnswerQuestions({ authedUser, qid, answer }){
    return (dispatch) => {
        dispatch(showLoading())
        return _saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
            dispatch(answerQuestion({ authedUser, qid, answer }))
            dispatch(authedAnswerQuestion({ authedUser, qid, answer }))
            dispatch(hideLoading())
        })
    }
}