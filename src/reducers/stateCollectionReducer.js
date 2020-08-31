export default function stateCollectionReducer(state = { stateCollection: [], allStateCollections: [], loading: false}, action) {
    switch (action.type){
        case 'LOADING_STATE_COLLECTION':
            return {...state, loading: true}
        case 'USER_LOGGED_IN':
            return { ...state, stateCollection: action.user.us_states, loading: false }
        case 'FETCH_STATE_COLLECTIONS':
            return { ...state, loading: false, allStateCollections: action.allStateCollections }
        case 'ADD_TO_STATE_COLLECTION':
            return { stateCollection: [...state.stateCollection, action.stateCollection], allStateCollections: [...state.allStateCollections, action.allStateCollections], loading: false }
        case 'REMOVE_FROM_STATE_COLLECTION':
            return { 
                stateCollection: state.stateCollection.filter(usState => usState.name !== action.state.us_state.name), 
                allStateCollections: state.allStateCollections.filter(visited => visited.id !== action.state.id), 
                loading: false }
        default:
            return state
    }
}