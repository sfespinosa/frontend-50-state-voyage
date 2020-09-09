import React from 'react'
import Switch from 'react-bootstrap-switch'

export default function DrawerHeader ({id, abbrv, capital_city, capital_lat, capital_lng, flag_img_url, name, nickname, handleSwitch, visited, toggleModal}) {

    return(
        <div className='drawer-header'>
            <img className='flag-img' alt={`${abbrv} flag`} src={flag_img_url}/>
            <h1><strong>{name}</strong></h1>
            <h2>{nickname}</h2>
            <h3>Capital City: {capital_city}</h3>
            State Visited? <Switch value={visited} onColor='success' onText='YES' offText='NO' onChange={(el, visited) => handleSwitch(visited, id)}/>
        </div>
    )
}