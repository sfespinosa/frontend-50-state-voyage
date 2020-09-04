export function createUserRelationship(formData){
    return (dispatch) => {
        dispatch({type: 'LOADING_USER_RELATIONSHIP'})
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
                dispatch({type: 'ADD_USER_RELATIONSHIP', establishments: json})
            } else {
                alert(json.error)
            }
        })
    }
}