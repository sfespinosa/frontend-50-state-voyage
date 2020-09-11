export function createUserRelationship(formData){
    return (dispatch) => {
        dispatch({type: 'LOADING_USER'})
        fetch(`http://localhost:3000/user_relationships`, {
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
                dispatch({type: 'ADD_USER_RELATIONSHIP', relationship: json})
            } else {
                alert(json.error)
            }
        })
    }
}

export function deleteUserRelationship(id, userId){
    return (dispatch) => {
        dispatch({type: 'LOADING_USER'})
        fetch(`http://localhost:3000/user_relationships/${id}`, {
            method: 'DELETE',
        })
        .then(json => {
            if (!json.error) {
                dispatch({type: 'DELETE_USER_RELATIONSHIP', userId})
            } else {
                alert(json.error)
            }
        })
    }
}