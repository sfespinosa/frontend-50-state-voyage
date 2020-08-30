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
                localStorage.token = json.token
                dispatch({type: 'ADD_TO_STATE_COLLECTION', stateCollection: json.us_state})
            } else {
                alert(json.error)
            }
        })
    }
}