export function fetchAllStateCollections(){
    return (dispatch) => {
        dispatch({type: 'LOADING_STATE_COLLECTION'})
        fetch(`http://localhost:3000/state_collections`)
        .then(res => res.json())
        .then(json => {
            if (!json.error) {
                dispatch({type: 'FETCH_STATE_COLLECTIONS', allStateCollections: json})
            } else {
                alert(json.error)
            }
        })
    }
}

export function addToStateCollection(formData){
    return (dispatch) => {
        dispatch({type: 'LOADING_STATE_COLLECTION'})
        fetch(`http://localhost:3000/state_collections`, {
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
                dispatch({type: 'ADD_TO_STATE_COLLECTION', stateCollection: json.us_state, allStateCollections: json})
            } else {
                alert(json.error)
            }
        })
    }
}

export function removeFromStateCollection(state){
    return (dispatch) => {
        dispatch({type: 'LOADING_STATE_COLLECTION'})
        fetch(`http://localhost:3000/state_collections/${state.id}`, {
            method: 'DELETE',
        })
        .then(() => {
            dispatch({type: 'REMOVE_FROM_STATE_COLLECTION', state: state})

        })
    }
}