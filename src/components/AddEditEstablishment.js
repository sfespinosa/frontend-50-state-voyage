import React from 'react'
import { Collapse, Button, Form, FormGroup, Input, Label } from 'reactstrap'

function AddEditEstablishment ({formData, collapseOpen, 
    handleCollectionSubmit, handleEstablishmentSubmit}) {
    
    // hooks
    const [collectionCollapse, setCollectionCollapse] = React.useState(false)
    
    const handleEstablishmentConfirm = () => {
        let input = document.getElementById('places-input')
        input.disabled = true
        handleEstablishmentSubmit()
        setCollectionCollapse(true)
    }

    return(
        <div className='add-edit-establishment'>
            <Collapse isOpen={collapseOpen}>
                <div className='establishment-display'>
                    Name: {formData.name}<br/>
                    Address: {formData.address}<br/>
                    Phone Number: {formData.phone_number}<br/>
                    Price: {formData.price_level ? formData.price_level : 'N/A'}<br/>
                    Rating: {formData.rating}<br/>
                    Website: {formData.website_url ? <a href={formData.website_url}>{formData.website_url}</a> : 'N/A'}<br/>
                    {formData.img_url ? <img src={formData.img_url} alt='establishment'/> : 'null' }
                </div>
                <Button color='info' onClick={handleEstablishmentConfirm} disabled={collectionCollapse ? true : false}>Confirm</Button>
                <Collapse isOpen={collectionCollapse} className='collection-form'>
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
                                <Input name='map-marker' type="checkbox"></Input>
                                Create a Map Marker?
                                <span className="form-check-sign">
                                    <span className="check"></span>
                                </span>
                            </Label>
                        </FormGroup>
                        <Button color='info'>Add to Collection</Button>
                    </Form>
                </Collapse>
            </Collapse>
        </div>
    )
}

export default AddEditEstablishment