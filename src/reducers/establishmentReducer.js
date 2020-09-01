export default function establishmentReducer(state = { establishments: [], currentEstablishment: {}, loading: false}, action) {
    switch (action.type){
        case 'LOADING_ESTABLISHMENTS':
            return {...state, loading: true}
        case 'FETCHED_ESTABLISHMENTS':
            return { establishments: action.establishments, loading: false }
        case 'ADD_TO_ESTABLISHMENTS':
            return { establishments: [...state.establishments, action.establishments], currentEstablishment: action.establishments, loading: false}
        default:
            return state
    }
}