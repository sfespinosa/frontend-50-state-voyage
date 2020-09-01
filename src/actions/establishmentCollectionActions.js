export function addToEstablishmentCollection(formData){
    return (dispatch) => {
        dispatch({type: 'LOADING_ESTABLISHMENT_COLLECTION'})
        fetch(`http://localhost:3000/establishment_collections`, {
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
                dispatch({type: 'ADD_TO_ESTABLISHMENT_COLLECTION', establishmentCollection: json})
            } else {
                alert(json.error)
            }
        })
    }
}

export function fetchEstablishmentCollections(){
    return (dispatch) => {
        dispatch({type: 'LOADING_ESTABLISHMENT_COLLECTION'})
        fetch(`http://localhost:3000/establishment_collections`)
        .then(res => res.json())
        .then(json => {
            if (!json.error) {
                dispatch({type: 'FETCHED_ESTABLISHMENT_COLLECTION', establishmentCollection: json})
            } else {
                alert(json.error)
            }
        })
    }
}

export function removeFromEstablishmentCollection(id){
    return (dispatch) => {
        dispatch({type: 'LOADING_ESTABLISHMENT_COLLECTION'})
        fetch(`http://localhost:3000/establishment_collections/${id}`, {
            method: 'DELETE',
        })
        .then(() => {
            dispatch({type: 'REMOVE_FROM_ESTABLISHMENT_COLLECTION', id})

        })
    }
}