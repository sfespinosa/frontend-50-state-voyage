export default function mapMarkerReducer(state = { mapMarkers: [], loading: false}, action) {
    switch (action.type){
        case 'LOADING_MAP_MARKERS':
            return {...state, loading: true}
        case 'FETCHED_MAP_MARKERS':
            return { ...state, loading: false, mapMarkers: action.mapMarkers }
        case 'ADD_TO_MAP_MARKERS':
            return { mapMarkers: [...state.mapMarkers, action.mapMarkers], loading: false }
        case 'UPDATED_MAP_MARKERS':
            let newMapMarkers = state.mapMarkers.map(marker => {
                if (marker.id === action.mapMarkers.id) {
                    return marker = action.mapMarkers
                } else {
                    return marker
                }
                })
            return { mapMarkers: newMapMarkers, loading: false }
        case 'REMOVE_MAP_MARKER':
            return { mapMarkers: state.mapMarkers.filter(marker => marker.id !== action.id), loading: false}
        default:
            return state
    }
}