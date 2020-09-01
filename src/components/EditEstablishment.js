import React from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

function AddEditEstablishment ({ handleCollectionEdit, viewEstablishment, handleCollectionRemoval }) {
    
    // hooks
    const [editCollection, setEditCollection] = React.useState(false)

    const renderCollectionView = () => {
        return(
            <div className='collection-display'>
                Comments: {viewEstablishment.user_comments}<br/>
                Establishment visited before?: {viewEstablishment.visited ? 'Yes' : 'No'}<br/>
                Map Marker Added?: Placeholder!<br/>
                <Button color='info' onClick={() => setEditCollection(true)}>Edit Collection</Button>
                <Button color='primary' onClick={handleCollectionRemoval}>Remove from Collection</Button>
            </div>
        )
    }

    const renderCollectionEdit = () => {
        return (
        <Form onSubmit={handleCollectionEdit}>
            <FormGroup>
                <label htmlFor="user-comments">
                    Edit Comments
                </label>
                    <Input
                        id="user-comments"
                        rows="2"
                        type="textarea"
                        name='user_comments'
                        defaultValue={viewEstablishment.user_comments}
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
                                <Input name='map-marker' type="checkbox"></Input>
                                Create a Map Marker?
                                <span className="form-check-sign">
                                    <span className="check"></span>
                                </span>
                            </Label>
                        </FormGroup>
                        <Button color='info'>Save Changes</Button>
                        <Button color='primary' onClick={handleCollectionRemoval}>Remove from Collection</Button>
        </Form>
    )}

    return(
        <div className='add-edit-establishment'>
                <div className='establishment-display'>
                    Name: {viewEstablishment.establishment.name}<br/>
                    Address: {viewEstablishment.establishment.address}<br/>
                    Phone Number: {viewEstablishment.establishment.phone_number}<br/>
                    Price: {viewEstablishment.establishment.price_level ? viewEstablishment.establishment.price_level : 'N/A'}<br/>
                    Rating: {viewEstablishment.establishment.rating}<br/>
                    Website: {viewEstablishment.establishment.website_url ? <a href={viewEstablishment.establishment.website_url}>{viewEstablishment.establishment.website_url}</a> : 'N/A'}<br/>
                    {viewEstablishment.establishment.img_url ? <img src={viewEstablishment.establishment.img_url} alt='establishment'/> : 'null' }
                </div>
                {editCollection ? renderCollectionEdit() : renderCollectionView()}
        </div>
    )
}

export default AddEditEstablishment