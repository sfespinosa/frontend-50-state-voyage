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

export default function EstablishmentCard(props){
    return(
        <Card>
            <CardImg top width="100%" src={props.establishment.img_url} alt="establishment" />
            <CardBody>
                <CardTitle>{props.establishment.name}</CardTitle>
                <CardSubtitle>{props.establishment.address}</CardSubtitle>
                <CardText><strong>Your Comments:</strong> "{props.user_comments}"</CardText>
                <Button color='info' onClick={()=>props.viewDetails(props)}>View Details</Button>
                <Button color='primary' onClick={()=>props.remove(props.id)}>Remove</Button>
            </CardBody>
        </Card>
    )
}