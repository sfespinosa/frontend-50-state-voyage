export function fetchEstablishments(){
    return (dispatch) => {
        dispatch({type: 'LOADING_ESTABLISHMENTS'})
        fetch(`http://localhost:3000/establishments`)
        .then(res => res.json())
        .then(json => {
            if (!json.error) {
                dispatch({type: 'FETCHED_ESTABLISHMENTS', establishments: json})
            } else {
                alert(json.error)
            }
        })
    }
}

export function addToEstablishments(formData){
    return (dispatch) => {
        dispatch({type: 'LOADING_ESTABLISHMENTS'})
        fetch(`http://localhost:3000/establishments`, {
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
                dispatch({type: 'ADD_TO_ESTABLISHMENTS', establishments: json})
            } else {
                alert(json.error)
            }
        })
    }
}