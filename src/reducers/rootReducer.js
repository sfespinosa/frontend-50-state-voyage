import { combineReducers } from 'redux';
import userReducer from './userReducer'
import usStateReducer from './usStateReducer'
import stateCollectionReducer from './stateCollectionReducer';
import establishmentReducer from './establishmentReducer';
import establishmentCollectionReducer from './establishmentCollectionReducer';
import mapMarkerReducer from './mapMarkerReducer';

const rootReducer = combineReducers({
    userInfo: userReducer,
    usStatesInfo: usStateReducer,
    stateCollectionInfo: stateCollectionReducer,
    establishmentsInfo: establishmentReducer,
    establishmentCollectionInfo: establishmentCollectionReducer,
    mapMarkerInfo: mapMarkerReducer
})

export default rootReducer