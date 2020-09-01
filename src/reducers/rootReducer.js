import { combineReducers } from 'redux';
import userReducer from './userReducer'
import usStateReducer from './usStateReducer'
import stateCollectionReducer from './stateCollectionReducer';
import establishmentReducer from './establishmentReducer';

const rootReducer = combineReducers({
    userInfo: userReducer,
    usStatesInfo: usStateReducer,
    stateCollectionInfo: stateCollectionReducer,
    establishmentsInfo: establishmentReducer
})

export default rootReducer