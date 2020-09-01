export default function establishmentCollectionReducer(state = { establishmentCollection: [], loading: false}, action) {
    switch (action.type){
        case 'LOADING_ESTABLISHMENT_COLLECTION':
            return {...state, loading: true}
        case 'FETCHED_ESTABLISHMENT_COLLECTION':
            return { establishmentCollection: action.establishmentCollection, loading: false }
        case 'ADD_TO_ESTABLISHMENT_COLLECTION':
            return { establishmentCollection: [action.establishmentCollection, ...state.establishmentCollection], loading: false}
        case 'UPDATED_ESTABLISHMENT_COLLECTION':
            let newEstablishmentCollection = state.establishmentCollection.map(collection => {
                if (collection.id === action.establishmentCollection.id) {
                    return collection = action.establishmentCollection
                } else {
                    return collection
                }
                })
            return { establishmentCollection: newEstablishmentCollection, loading: false }
        case 'REMOVE_FROM_ESTABLISHMENT_COLLECTION':
            return {
                establishmentCollection: state.establishmentCollection.filter(ec => ec.id !== action.id),
                loading: false
            }
        default:
            return state
    }
}