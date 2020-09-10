import React from 'react'
import { UncontrolledTooltip } from 'reactstrap'

const MapMarker = ({establishment, category, handleMarkerClick, lat, lng}) => {

    const renderMapMarkerIcon = (category) => {
        switch (category) {
            case 'Attractions':
                return 'local_activity'
            case 'Bars':
                return 'sports_bar'
            case 'Beaches':
                return 'pool'
            case 'Cafes/Bakeries':
                return 'local_cafe'
            case 'Dancing/Music':
                return 'music_note'
            case 'Hiking':
                return 'directions_walk'
            case 'Movies/Theatres':
                return 'local_movies'
            case 'Museums':
                return 'museum'
            case 'Restaurants':
                return 'local_dining'
            case 'Shopping':
                return 'store_mall_directory'
            case 'Sights/Views':
                return 'local_see'
            default:
                return 'other'
        }
    }

    return(
        <>
        <i className="material-icons md-dark md-36 info600" id={establishment.reference_id} onClick={() => handleMarkerClick(lat, lng)}>{renderMapMarkerIcon(category)}</i>{' '}
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