export function fetchAllUsStates(){
    return (dispatch) => {
        dispatch({type: 'LOADING_STATES'})
        fetch(`http://localhost:3000/us_states`)
        .then(res => res.json())
        .then(json => {
            if (!json.error) {
                dispatch({type: 'FETCHED_STATES', usStates: json})
            } else {
                alert(json.error)
            }
        })
    }
}