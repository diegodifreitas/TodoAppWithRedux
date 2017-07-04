import { combineReducers } from 'redux'

import todoReducer from '../todo/todoReducer'

const rooReducer = combineReducers({
    todo: todoReducer
})

export default rooReducer