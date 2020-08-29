import { combineReducers } from 'redux';
import userReducer from './userReducer'
import usStateReducer from './usStateReducer'

const rootReducer = combineReducers({
    userInfo: userReducer,
    usStatesInfo: usStateReducer
})

export default rootReducer