import React from 'react'
import { Button, CardColumns } from "reactstrap";
import EstablishmentCard from './EstablishmentCard'

export default function DrawerBody({toggleModal, establishmentCards, remove}){

    const renderEstablishmentCards = () => {
        return establishmentCards.map(card => {
            return <EstablishmentCard {...card} remove={remove}/>
        })
    }

    return(
        <div className='drawer-body'>
            <Button id='add-establishment-btn' className='btn-round' size='lg' color='info' onClick={toggleModal}>Add an Establishment to your Collection for this State</Button>
            <CardColumns>
                {renderEstablishmentCards()}
            </CardColumns>
        </div>
    )
}