export default function usStateReducer(state = { usStates: [], loading: false}, action) {
    switch (action.type){
        case 'LOADING_STATES':
            return {...state, loading: true}
        case 'FETCHED_STATES':
            return { usStates: action.usStates, loading: false }
        default:
            return state
    }
}