export function handleLoginSignUp(formData, path){
    return (dispatch) => {
        dispatch({type: 'LOADING_USER'})
        fetch(`http://localhost:3000/${path}`, {
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
                dispatch({type: 'USER_LOGGED_IN', user: json.user, token: json.token})
            } else {
                alert(json.error)
            }
        })
    }
}

export function handlePersist(){
    return (dispatch) => {
        dispatch({type: 'LOADING_USER'})
        fetch('http://localhost:3000/persist',{
        headers: {
            "Authorization": `Bearer ${localStorage.token}`
        }
        })
        .then(res => res.json())
        .then(json => {
            localStorage.token = json.token
            dispatch({type: 'USER_LOGGED_IN', user: json.user, token: json.token})
        })
    }
}