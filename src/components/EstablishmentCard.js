import React from 'react'
import {
    Card,
    Button, 
    CardImg, 
    CardTitle, 
    CardText,
    CardSubtitle, 
    CardBody
    } from 'reactstrap';

export default function EstablishmentCard({establishment, user_comments, visited, remove, id}){
    return(
        <Card>
            <CardImg top width="100%" src={establishment.img_url} alt="establishment" />
            <CardBody>
                <CardTitle>{establishment.name}</CardTitle>
                <CardSubtitle>{establishment.address}</CardSubtitle>
                <CardText><strong>Your Comments:</strong> "{user_comments}"</CardText>
                <Button color='info'>Edit</Button>
                <Button color='info' onClick={()=>remove(id)}>Remove</Button>
            </CardBody>
        </Card>
    )
}