export default function userReducer(state = { allUsers: [], user: [], token: '', loading: false}, action) {
        switch (action.type){
                case 'LOADING_USER':
                        return {...state, loading: true}
                case 'FETCH_ALL_USERS':
                        return {...state, allUsers: action.allUsers, loading: false}
                case 'USER_LOGGED_IN':
                        return { ...state, user: action.user, token: action.token, loading: false }
                case 'USER_UPDATED':
                        return { ...state, user: action.user, loading: false }
                case 'DELETE_USER':
                        return { user: {}, token: '', loading: false}
                default:
                        return state
        }
}