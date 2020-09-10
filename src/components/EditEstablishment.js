import React from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

function EditEstablishment ({ handleCollectionSubmit, handleCollectionEdit, viewEstablishment, handleCollectionRemoval, user }) {
    
    // hooks
    const [editCollection, setEditCollection] = React.useState(false)
    const [addToCollection, setAddToCollection] = React.useState(false)
    const [formData, setFormData] = React.useState({
        user_comments: viewEstablishment.user_comments,
        visited: viewEstablishment.visited,
        map_marker: !!viewEstablishment.map_marker
    })
    const [displayCategories, setDisplayCategories] = React.useState(!!viewEstablishment.map_marker)

    const handleOnChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleMapMarkerChange = e => {
        setDisplayCategories(e.target.checked)
    }

    const renderCollectionView = () => {
        return(
            <div className='collection-display'>
                Your {viewEstablishment.user_id === user.id ? null : <a href={`/users/${viewEstablishment.user_id}`}>Friend's </a>}Comments: {viewEstablishment.user_comments}<br/>
                Establishment visited before?: {viewEstablishment.visited ? 'Yes' : 'No'}<br/>
                Map Marker Added?: {viewEstablishment.map_marker ? `Yes`: 'No'}<br/>
                {viewEstablishment.map_marker ? `Map Marker Category: ${viewEstablishment.map_marker.category}`: null}<br/>
                {renderButtons()}
            </div>
        )
    }

    const renderButtons = () => {
        if (viewEstablishment.user_id === user.id) {
            return (
                <div>
                <Button color='info' onClick={() => setEditCollection(true)}>Edit Your Notes</Button>
                <Button color='primary' onClick={handleCollectionRemoval}>Remove from Collection</Button>
                </div>
            )
        } else {
            return (
                <Button color='info' onClick={() => setAddToCollection(true)}>Add to Your Collection</Button>
            )
        }
    }

    const renderCategoryDropDown = () => {
        return(
            <Input id="inputState" type="select" defaultValue={viewEstablishment.map_marker ? viewEstablishment.map_marker.category : 'n/a'}>
                <option value='n/a' disabled>Choose a category...</option>
                <option value='Favorite'>Favorite</option>
                <option value='Food/Drink'>Food/Drink</option>
                <option value='Party'>Party</option>
                <option value='Shopping'>Shopping</option>
                <option value='Want To Go'>Want To Go</option>
                <option value='Other'>Other</option>
            </Input>
        )
    }

    const renderCollectionEdit = () => {
        return (
        <Form onSubmit={(e) => handleCollectionEdit(e, formData)}>
            <FormGroup>
                <label htmlFor="user-comments">
                    Edit Comments
                </label>
                    <Input
                        id="user-comments"
                        rows="2"
                        type="textarea"
                        name='user_comments'
                        onChange={handleOnChange}
                        value={formData.user_comments}
                    ></Input>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input name='visited' type="checkbox" defaultChecked={formData.visited}></Input>
                                Visited Establishment Before?
                                <span className="form-check-sign">
                                    <span className="check"></span>
                                </span>
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input name='map_marker' type="checkbox" defaultChecked={formData.map_marker} onChange={handleMapMarkerChange}></Input>
                                Create a Map Marker?
                                <span className="form-check-sign">
                                    <span className="check"></span>
                                </span>
                            {displayCategories ? renderCategoryDropDown() : null}
                            </Label>
                        </FormGroup>
                        <Button color='info'>Save Changes</Button>
                        <Button color='primary' onClick={handleCollectionRemoval}>Remove from Collection</Button>
        </Form>
    )}

    const renderCollectionSubmit = () => {
        return (
            <Form onSubmit={handleCollectionSubmit}>
                        <FormGroup>
                        <label htmlFor="user-comments">
                            Add Comments
                        </label>
                        <Input
                            id="user-comments"
                            rows="2"
                            type="textarea"
                            name='user_comments'
                        ></Input>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input name='visited' type="checkbox"></Input>
                                Visited Establishment Before?
                                <span className="form-check-sign">
                                    <span className="check"></span>
                                </span>
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input name='map-marker' type="checkbox" onChange={handleMapMarkerChange}></Input>
                                Create a Map Marker?
                                <span className="form-check-sign">
                                    <span className="check"></span>
                                </span>
                            {displayCategories ? renderCategoryDropDown() : null}
                            </Label>
                        </FormGroup>
                        <Button color='info'>Add to Collection</Button>
                    </Form>
    )}

    const renderViews = () => {
        if (viewEstablishment.user_id === user.id) {
            return (
                editCollection ? renderCollectionEdit() : renderCollectionView()
            )
        } else {
            return (
                addToCollection ? renderCollectionSubmit() : renderCollectionView()
            )
        }
    }

    return(
        <div className='add-edit-establishment'>
                <div className='establishment-display'>
                    Address: {viewEstablishment.establishment.address}<br/>
                    Phone Number: {viewEstablishment.establishment.phone_number ? viewEstablishment.establishment.phone_number : 'N/A'}<br/>
                    Price: {viewEstablishment.establishment.price_level ? viewEstablishment.establishment.price_level : 'N/A'}<br/>
                    Rating: {viewEstablishment.establishment.rating}<br/>
                    Website: {viewEstablishment.establishment.website_url ? <a href={viewEstablishment.establishment.website_url}>{viewEstablishment.establishment.website_url}</a> : 'N/A'}<br/>
                    {viewEstablishment.establishment.img_url ? <img className='establishment-image' src={viewEstablishment.establishment.img_url} alt='establishment'/> : 'null' }
                </div>
                {renderViews()}
        </div>
    )
}

export default EditEstablishment