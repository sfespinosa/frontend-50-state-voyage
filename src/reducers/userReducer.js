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
                case 'ADD_USER_RELATIONSHIP':
                        return { ...state, user: {...state.user, active_relationships: [...state.user.active_relationships, action.relationship], followed_users: [...state.user.followed_users, action.relationship.followed_user]}, loading: false}
                case 'DELETE_USER_RELATIONSHIP':
                        let newFollowedUsers = state.user.followed_users.filter(user => user.id.toString() !== action.userId)
                        let newActiveRelationships = state.user.active_relationships.filter(user => user.followed_user_id.toString() !== action.userId)
                        return { ...state, user: {...state.user, followed_users: newFollowedUsers, active_relationships: newActiveRelationships}, loading: false}
                case 'DELETE_USER':
                        return { user: {}, token: '', loading: false}
                default:
                        return state
        }
}