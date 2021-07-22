import {applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const middleWare = applyMiddleware(thunk, logger)
export default middleWare