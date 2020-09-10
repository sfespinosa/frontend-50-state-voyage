import React from 'react'
import Switch from 'react-bootstrap-switch'
import { Col, Row } from 'reactstrap'

export default function DrawerHeader ({id, abbrv, capital_city, capital_lat, capital_lng, flag_img_url, name, nickname, handleSwitch, visited, toggleModal}) {

    return(
        <div className='drawer-header'>
            <Row>
            <Col sm={{ size: 5, offset: 1 }}>
            <br/><h1><strong>{name}</strong></h1>
            <h2><em>{nickname}</em></h2>
            <h3>State Capital: {capital_city}</h3>
            Visited State? <Switch value={visited} onColor='success' onText='YES' offText='NO' onChange={(el, visited) => handleSwitch(visited, id)}/>
            </Col>
            <Col><img className='flag-img' alt={`${abbrv} flag`} src={flag_img_url}/></Col>
            </Row>
        </div>
    )
}