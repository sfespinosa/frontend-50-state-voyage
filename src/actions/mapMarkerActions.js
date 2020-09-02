export function fetchMapMarkers(){
    return (dispatch) => {
        dispatch({type: 'LOADING_MAP_MARKERS'})
        fetch(`http://localhost:3000/map_markers`)
        .then(res => res.json())
        .then(json => {
            if (!json.error) {
                dispatch({type: 'FETCHED_MAP_MARKERS', mapMarkers: json})
            } else {
                alert(json.error)
            }
        })
    }
}

export function addToMapMarkers(formData){
    return (dispatch) => {
        dispatch({type: 'LOADING_MAP_MARKERS'})
        fetch(`http://localhost:3000/map_markers`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(json => {
            if (!json.error) {
                dispatch({type: 'ADD_TO_MAP_MARKERS', mapMarkers: json})
            } else {
                alert(json.error)
            }
        })
    }
}

export function editMapMarker(formData, id){
    return (dispatch) => {
        dispatch({type: 'LOADING_MAP_MARKERS'})
        fetch(`http://localhost:3000/map_markers/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(json => {
            if (!json.error) {
                dispatch({type: 'UPDATED_MAP_MARKERS', mapMarkers: json})
            } else {
                alert(json.error)
            }
        })
    }
}

export function deleteMapMarker(id){
    return (dispatch) => {
        dispatch({type: 'LOADING_MAP_MARKER'})
        fetch(`http://localhost:3000/map_markers/${id}`, {
            method: 'DELETE'
        })
        .then(json => {
            if (!json.error) {
                dispatch({ type: 'REMOVE_MAP_MARKER', id })
            } else {
                alert(json.error)
            }
        })
    }
}