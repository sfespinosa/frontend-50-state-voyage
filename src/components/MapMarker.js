import React from 'react'
import { UncontrolledTooltip } from 'reactstrap'

const MapMarker = ({establishment}) => {
    return(
        <>
        <i class="material-icons md-dark md-36 info600" id={establishment.reference_id}>room</i>{' '}
            <UncontrolledTooltip placement='top' target={establishment.reference_id} delay={0}>
                {establishment.name}<br/>
                {establishment.address}
            </UncontrolledTooltip>
        </>
    )
}

export default MapMarker