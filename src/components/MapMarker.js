import React from 'react'
import { UncontrolledTooltip } from 'reactstrap'

const MapMarker = ({establishment, category, handleMarkerClick, lat, lng}) => {
    return(
        <>
        <i className="material-icons md-dark md-36 info600" id={establishment.reference_id} onClick={() => handleMarkerClick(lat, lng)}>room</i>{' '}
            <UncontrolledTooltip placement='top' target={establishment.reference_id} delay={0}>
                <img src={establishment.img_url} className='popover-image' alt='establishment thumbnail'/><br/>
                {establishment.name}<br/>
                {establishment.address}<br/>
                Category: {category ? category : 'n/a'}
            </UncontrolledTooltip>
        </>
    )
}

export default MapMarker