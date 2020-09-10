import React from 'react'
import { Button, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap'

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
            <div>
                <strong>Your {viewEstablishment.user_id === user.id ? null : <a href={`/users/${viewEstablishment.user_id}`}>Friend's </a>}Comments: </strong><br/>{viewEstablishment.user_comments}<br/>
                <strong>Visited Before? </strong>{viewEstablishment.visited ? 'Yes' : 'No'}<br/>
                <strong>Map Marker Added? </strong>{viewEstablishment.map_marker ? `Yes - Category: ${viewEstablishment.map_marker.category}`: 'No'}<br/>
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
                    <strong>Edit Comments</strong>
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
                                Visited Before?
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
                        <Button color='primary' onClick={()=>setEditCollection(false)}>Cancel</Button>
        </Form>
    )}

    const renderCollectionSubmit = () => {
        return (
            <Form onSubmit={handleCollectionSubmit}>
                        <FormGroup>
                        <label htmlFor="user-comments">
                            <strong>Add Comments</strong>
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
                        <Button color='primary' onClick={()=>setAddToCollection(false)}>Cancel</Button>
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
                {viewEstablishment.establishment.img_url ? <img className='establishment-image' src={viewEstablishment.establishment.img_url} alt='establishment'/> : 'null' }
                    <Row>
                    <Col><strong>Address:</strong><br/> {viewEstablishment.establishment.address}</Col>
                    </Row>
                    <Row>
                    <Col><strong>Phone Number:</strong><br/> {viewEstablishment.establishment.phone_number ? viewEstablishment.establishment.phone_number : 'N/A'}<br/></Col>
                    <Col><strong>Price:</strong><br/> {viewEstablishment.establishment.price_level ? viewEstablishment.establishment.price_level : 'N/A'}<br/></Col>
                    </Row>
                    <Row>
                    <Col><strong>Rating:</strong><br/> {viewEstablishment.establishment.rating} / 5<br/></Col>
    <Col><strong>Website:</strong><br/> {viewEstablishment.establishment.website_url ? <a href={viewEstablishment.establishment.website_url}>{viewEstablishment.establishment.name}</a> : 'N/A'}<br/></Col>
                    </Row>
                </div>
                <hr></hr>
                <div className='collection-display'>
                {renderViews()}
                </div>
        </div>
    )
}

export default EditEstablishment