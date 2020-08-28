export default function userReducer(state = { user: {}, token: '', loading: false}, action) {
    switch (action.type){
        case 'LOADING_USER':
            return {...state, loading: true}
        case 'USER_LOGGED_IN':
            return { user: action.user, token: action.token, loading: false }
        default:
            return state
    }
}