import React from 'react'
import { Button } from "reactstrap";

export default function DrawerBody({toggleModal}){
    return(
        <div className='drawer-body'>
            <Button className='btn-round' size='lg' color='info' onClick={toggleModal}>Add an Establishment to your Collection for this State</Button>
        </div>
    )
}