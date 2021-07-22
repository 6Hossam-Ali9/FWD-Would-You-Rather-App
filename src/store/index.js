import {createStore} from 'redux'
import allReducers from '../reducers/index'
import middleWare from '../reducers/Middlewares'

const store = createStore(allReducers, middleWare);

export default store