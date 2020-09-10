import React from 'react'
import { Collapse, Button, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap'

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
                    {formData.img_url ? <img className='establishment-image' src={formData.img_url} alt='establishment'/> : 'null' }
                    <Row>
                    <Col><strong>Name: </strong><br/>{formData.name}<br/></Col>
                    <Col><strong>Address: </strong><br/>{formData.address}<br/></Col>
                    </Row>
                    <Row>
                    <Col><strong>Phone Number: </strong><br/>{formData.phone_number ? formData.phone_number : 'N/A'}<br/></Col>
                    <Col><strong>Price: </strong><br/>{formData.price_level ? formData.price_level : 'N/A'}<br/></Col>
                    </Row>
                    <Row>
                    <Col><strong>Rating: </strong><br/>{formData.rating}<br/></Col>
                    <Col><strong>Website: </strong><br/>{formData.website_url ? <a href={formData.website_url}>{formData.name}</a> : 'N/A'}<br/></Col>
                    </Row>
                <Button color='info' onClick={handleEstablishmentConfirm} disabled={collectionCollapse ? true : false}>Confirm</Button>
                
                <Collapse isOpen={collectionCollapse} className='collection-form'>
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
                                Visited Before?
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
                </div>
            </Collapse>
        </div>
    )
}

export default AddEstablishment