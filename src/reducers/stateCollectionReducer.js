export default function stateCollectionReducer(state = { stateCollection: [], loading: false}, action) {
    switch (action.type){
        case 'LOADING_STATE_COLLECTION':
            return {...state, loading: true}
        case 'USER_LOGGED_IN':
            return { stateCollection: action.user.us_states, loading: false }
        case 'ADD_TO_STATE_COLLECTION':
            debugger
            return { stateCollection: [...state.stateCollection, action.stateCollection], loading: false }
        default:
            return state
    }
}