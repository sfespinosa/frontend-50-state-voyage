import React from 'react'
import { Collapse, Button, Form, FormGroup, Input, Label } from 'reactstrap'


function AddEditEstablishment ({name, img_url, address, phone_number, price_level, rating, website_url, collapseOpen}) {
    
    const [collectionCollapse, setCollectionCollapse] = React.useState(false)
    
    const handleEstablishmentConfirm = () => {
        setCollectionCollapse(true)
    }

    return(
        <div className='add-edit-establishment'>
            <Collapse isOpen={collapseOpen}>
                <div className='establishment-display'>
                Name: {name}<br/>
                Address: {address}<br/>
                Phone Number: {phone_number}<br/>
                Price: {price_level}<br/>
                Rating: {rating}<br/>
                Website <a href={website_url} /><br/>
                {img_url ? <img src={img_url} alt='establishment-photo'/> : null }
                </div>
                <Button color='info' onClick={handleEstablishmentConfirm} disabled={collectionCollapse ? true : false}>Confirm</Button>
                <Collapse isOpen={collectionCollapse} className='collection-form'>
                    <Form>
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
                                <Input defaultValue="" name='visited' type="checkbox"></Input>
                                Visited Establishment Before?
                                <span className="form-check-sign">
                                    <span className="check"></span>
                                </span>
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input defaultValue="" name='map-marker' type="checkbox"></Input>
                                Create a Map Marker?
                                <span className="form-check-sign">
                                    <span className="check"></span>
                                </span>
                            </Label>
                        </FormGroup>
                        <Button color='info' onClick={(e) => console.log(e)}>Add to Collection</Button>
                    </Form>
                </Collapse>
            </Collapse>
        </div>
    )
}

export default AddEditEstablishment