export default function mapMarkerReducer(state = { mapMarkers: [], loading: false}, action) {
    switch (action.type){
        case 'LOADING_MAP_MARKERS':
            return {...state, loading: true}
        case 'FETCHED_MAP_MARKERS':
            return { ...state, loading: false, mapMarkers: action.mapMarkers }
        case 'ADD_TO_STATE_COLLECTION':
            return { mapMarkers: [...state.mapMarkers, action.mapMarkers], loading: false }
        case 'REMOVE_MAP_MARKER':
            return { mapMarkers: state.mapMarkers.filter(marker => marker.id !== action.id), loading: false}
        default:
            return state
    }
}