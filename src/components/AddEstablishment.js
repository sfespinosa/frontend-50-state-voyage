import React from 'react'
import { Collapse, Button, Form, FormGroup, Input, Label } from 'reactstrap'

function AddEstablishment ({formData, collapseOpen, 
    handleCollectionSubmit, handleEstablishmentSubmit}) {
    
    // hooks
    const [collectionCollapse, setCollectionCollapse] = React.useState(false)
    const [displayCategories, setDisplayCategories] = React.useState(false)

    const handleEstablishmentConfirm = () => {
        let input = document.getElementById('places-input')
        input.disabled = true
        handleEstablishmentSubmit()
        setCollectionCollapse(true)
    }

    const handleMapMarkerChange = e => {
        setDisplayCategories(e.target.checked)
    }

    const renderCategoryDropDown = () => {
        return(
            <Input id="inputState" type="select" defaultValue='n/a'>
                <option value='n/a' disabled>Choose a category...</option>
                <option value='Favorite'>Favorite</option>
                <option value='Food/Drink'>Food/Drink</option>
                <option value='Shopping'>Shopping</option>
                <option value='Party'>Party</option>
                <option value='Want To Go'>Want To Go</option>
                <option value='Other'>Other</option>
            </Input>
        )
    }

    return(
        <div className='add-edit-establishment'>
            <Collapse isOpen={collapseOpen}>
                <div className='establishment-display'>
                    Name: {formData.name}<br/>
                    Address: {formData.address}<br/>
                    Phone Number: {formData.phone_number ? formData.phone_number : 'N/A'}<br/>
                    Price: {formData.price_level ? formData.price_level : 'N/A'}<br/>
                    Rating: {formData.rating}<br/>
                    Website: {formData.website_url ? <a href={formData.website_url}>{formData.website_url}</a> : 'N/A'}<br/>
                    {formData.img_url ? <img src={formData.img_url} alt='establishment' height="400"/> : 'null' }
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
                </Collapse>
            </Collapse>
        </div>
    )
}

export default AddEstablishment