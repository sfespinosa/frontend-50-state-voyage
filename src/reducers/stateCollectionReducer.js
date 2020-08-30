export default function stateCollectionReducer(state = { stateCollection: [], loading: false}, action) {
    switch (action.type){
        case 'LOADING_STATE_COLLECTION':
            return {...state, loading: true}
        case 'ADD_TO_STATE_COLLECTION':
            return { stateCollection: [...state.stateCollection, action.stateCollection], loading: false }
        default:
            return state
    }
}