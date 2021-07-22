import {showLoading, hideLoading} from 'react-redux-loading'
import {getIntialData} from '../utils/_DATA'
import { receiveQuestions } from './questions';
import {receiveUsers } from './users'
import {setAuthedUser} from './authedUser';

export function handleIntialData(){
    return(dispatch) => {
        dispatch(showLoading())
        return getIntialData().then(({users, questions}) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(setAuthedUser(null))
            dispatch(hideLoading())
        })
    }
}