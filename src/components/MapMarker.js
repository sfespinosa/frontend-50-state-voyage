import React from 'react'
import { UncontrolledTooltip } from 'reactstrap'

const MapMarker = ({establishment, category}) => {
    return(
        <>
        <i class="material-icons md-dark md-36 info600" id={establishment.reference_id}>room</i>{' '}
            <UncontrolledTooltip placement='top' target={establishment.reference_id} delay={0}>
                {establishment.name}<br/>
                {establishment.address}<br/>
                Category: {category ? category : 'n/a'}
            </UncontrolledTooltip>
        </>
    )
}

export default MapMarker